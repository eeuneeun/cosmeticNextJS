import Head from 'next/head';
import axios from 'axios';
import Item from '../../src/component/module/Item';
import { useRouter } from 'next/router';
import { Loader } from 'semantic-ui-react';

const Post = ({item, name}) => {
    const router = useRouter();
    if(router.isFallback){
      return(
          <>
          <div style={{padding:"200px 0"}}>
              <Loader active inline="centered">
                로딩중~
              </Loader>
          </div>
          </>
      )
    }
    return (
        <>
        {item && (
            <>
            <Head>
                <title>{item.name}</title>
                <meta name="description" content={item.description} />
            </Head>
            <p><Item item={item} /></p>
            <p>{name} 입니다!</p>
            </>
        )}
        </>
    );
}

export default Post;

export async function getStaticPaths(){
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await axios.get(apiUrl)
    const data = res.data;

    return {
        // paths : [
        //     {params : {id : '740'}},
        //     {params : {id : '730'}},
        //     {params : {id : '729'}}
        // ],
        paths : data.slice(0,8).map((item)=>({
            params : {
                id : item.id.toString(),
            },
        })),
        // * 없는 페이지 대응 여부
        //   true 인 경우에는 없는 정적 페이지 접근 시도시 새 html 파일을 생성함
        //   false 인 경우에는 없는 정적 페이지 접근 시도시 404
        fallback : true
    }
}


// * getStaticProps
//   특정 아이템의 세부정보 내용을 빌드 당시의 데이터를 가지고 정적 생성하고 있음
//   브라우저 환경이 아니라 서버 사이드이므로
//   이 안에서 window 등의 변수를 사용하면 에러남!     
export async function getStaticProps(context){
    const id = context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await axios.get(apiUrl)
    const data = res.data;

    return{
        props:{
            item:data,
            name:process.env.name
        }
    }

}