import axios from 'axios';
import Item from '../../src/component/module/Item';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';

const Post = () => {
  const router = useRouter()
  const { id } = router.query;
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`

  function getData(){
    axios.get(API_URL).then( res => {
        console.log(res.data);
        setItem(res.data)
        setIsLoading(false)
    })
  }

  useEffect(()=>{
      if( id && id > 0){
          getData();
      } 
  }, [id])

  return (
    <>
    { isLoading && (
        <div style={{padding:"300px 0"}}>
        <Loader inline="centered" active>
            Loading
        </Loader>
        </div>
    )}  
    
    { !isLoading && (
        <p><Item item={item} /></p>
    )}
    </>
  );
}

export default Post;


// export async function getServerSideProps(context){
//     const id = context.params.id;
//     const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
//     const res = await axios.get(apiUrl)
//     const data = res.data;

//     return{
//         props:{
//             item:data,

//         }
//     }

// }