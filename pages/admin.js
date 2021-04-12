import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {Button, Form, FormTextArea} from "semantic-ui-react";

export default function Admin(){
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(false);

    function chk(){
        axios.get('/api/isLogin')
        .then((res)=>{
            if( res.status === 200 && res.data.name ){
                //login 
                setIsLogin(true)
            } else {
                //logout
                router.push('/login');
            }
        })
    }

    function logout(){
        axios.get('/api/logout')
        .then((res)=>{
            if(res.status === 200){
                router.push('/')
            }
        })
    }

    useEffect(()=>{
        chk()
    },[]);

    return(
        <>
        <div>
            Admin
            {isLogin && <Button onClick={logout}>로그아웃</Button>}
        </div>
        </>
    )
}