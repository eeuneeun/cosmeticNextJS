import axios from 'axios';
import ItemList from '../src/component/module/ItemList.js'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { Header, Divider, Loader } from 'semantic-ui-react';

export default function Home() {

  const [ list, setList ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  
  function getData() {
    axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
      setIsLoading(false);
    });

  }

  useEffect(()=>{
    getData();
    console.log(process.env.NEXT_PUBLIC_API_URL)
  }, [])

  return (
    <div className={styles.container}>
      { isLoading && (
          <div style={{padding:"300px 0"}}>
            <Loader inline="centered" active>
              Loading
            </Loader>
          </div>
      )}
      { !isLoading && (
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
      )}
    </div>
  )
}
