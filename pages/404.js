import { Icon } from "semantic-ui-react";

export default function Error404(){
    return(
        <>
        <div style={{textAlign:"center", fontSize:40, padding:"200px 0"}}>
            <Icon name="warning circle" color="red" />
            페이지를 찾을 수 없습니다.
        </div>
        </>
    )
}