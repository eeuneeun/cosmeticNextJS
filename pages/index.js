import axios from 'axios';
import ItemList from '../src/component/module/ItemList.js'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { Header, Divider, Loader } from 'semantic-ui-react';

export default function Home({list}) {

  // const [ list, setList ] = useState([]);
  // const [ isLoading, setIsLoading ] = useState(true);
  // const API_URL = process.env.NEXT_PUBLIC_API_URL;
  
  // function getData() {
  //   axios.get(API_URL).then((res) => {
  //     console.log(res.data);
  //     setList(res.data);
  //     setIsLoading(false);
  //   });
  // }

  // useEffect(()=>{
  //   getData();
  //   console.log(process.env.NEXT_PUBLIC_API_URL)
  // }, [])

  return (
    <div className={styles.container}>
      {/* { isLoading && (
          <div style={{padding:"300px 0"}}>
            <Loader inline="centered" active>
              Loading
            </Loader>
          </div>
      )}
      { !isLoading && ( */}
        <>
        <Header as="h3" className="title-header">
          베스트 상품
        </Header>
        <Divider />
        
        <ItemList list={list.slice(0,9)} />
        <Header as="h3" className="title-header">
          새로 도착한 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0)} />
        </>  
      {/* )} */}
    </div>
  )
}


// * getStaticProps
//   정적 생성을 하는 함수
//   브라우저 환경이 아니라 서버 사이드이므로
//   이 안에서 window 등의 변수를 사용하면 에러남!     
export async function getStaticProps(context){
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await axios.get(apiUrl)
    const data = res.data;

    return{
        props:{
            list:data,
            name:process.env.name
        }
    }

}