import Head from 'next/head';
import axios from 'axios';
import Item from '../../src/component/module/Item';

const Post = ({item, name}) => {

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

// * getServerSideProps
//   서버 사이드 렌더링을 지정하고 있음
//   브라우저 환경이 아니라 서버 사이드이므로
//   이 안에서 window 등의 변수를 사용하면 에러남!     
export async function getServerSideProps(context){
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