import Head from 'next/head';
import axios from 'axios';
import Item from '../../src/component/module/Item';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';

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
        </>
    )}

    </>
  );
}

export default Post;

export async function getServerSideProps(context){
    const id = context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await axios.get(apiUrl)
    const data = res.data;

    return{
        props:{
            item:data
        }
    }

}