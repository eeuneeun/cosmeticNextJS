import axios from "axios";
import { useRouter } from "next/router";
import {Button, Form, FormTextArea} from "semantic-ui-react";

export default function Login(){
    const router = useRouter();

    function login(){
        axios.post('api/login')
        .then(res => {
            if(res.status === 200){
                router.push('/admin')
            }
        })
    }
    return(
        <div>
            <Form>
                <Form.Field inline>
                    <input placeholder="ID"/>
                </Form.Field>
                <Form.Field inline>
                    <input placeholder="PASSWORD"/>
                </Form.Field>
                <Button onClick={login()}>로그인</Button>
            </Form>
        </div>
    )
}