import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { Dropdown, Menu, Icon } from 'semantic-ui-react'

function Gnb(){
  
  const [gnbOn, setGnbOn] = useState(false);
  const [gnbWrapOn, setGnbWrapOn] = useState(false);
  const router = useRouter();
    
  function showGNB(){
      setGnbOn(true);
      setGnbWrapOn(true);
  }

  function hideGNB(){
    setGnbOn(false);
    setGnbWrapOn(false);
  }

  function goLink(e, data){
    if(data.name === "menu1"){
      router.push("/");

    }else if(data.name === "menu2"){
      router.push("/about");

    }else if(data.name === "menu3"){
      router.push("/qna");

    }
    hideGNB();
  }

  return (
    <>
    <a className="gnb-menu" onClick={showGNB}>
        <Icon name="align center" />
    </a>
    <div className= {`gnb-wrap ${gnbWrapOn ? "on" : "off"}`} onClick={hideGNB}></div>
    <div className={`gnb-pannel ${gnbOn  ? "show" : ""}`}>
        <Menu vertical>
          <Dropdown item text='Categories'>
            <Dropdown.Menu>
              <Dropdown.Item name="menu1" onClick={goLink}>HOME</Dropdown.Item>
              <Dropdown.Item name="menu2" onClick={goLink}>ABOUT</Dropdown.Item>
              <Dropdown.Item name="menu3" onClick={goLink}>QNA</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
        </div>
    </>
    );
}

export default Gnb;
