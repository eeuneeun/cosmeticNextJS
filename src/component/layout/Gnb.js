import { route } from 'next/dist/next-server/server/router';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { Dropdown, Menu, Icon } from 'semantic-ui-react'

function Gnb(){
  
  const [gnbOn, setGnbOn] = useState(false);
  const [gnbWrapOn, setGnbWrapOn] = useState(false);
  const router = useRouter();
  let activeMenu;
    
  function showGNB(){
      setGnbOn(true);
      setGnbWrapOn(true);
  }

  function hideGNB(){
    setGnbOn(false);
    setGnbWrapOn(false);
  }


  if(router.pathname === "/"){
    activeMenu = "HOME";
  }else if(router.pathname === "/about"){
    activeMenu = "ABOUT";
  }else if(router.pathname === "/qna"){
    activeMenu = "QNA";
  }else if(router.pathname === "/admin"){
    activeMenu = "ADMIN";
  }


  function goLink(e, data){
    if(data.name === "HOME"){
      router.push("/");

    }else if(data.name === "ABOUT"){
      router.push("/about");

    }else if(data.name === "QNA"){
      router.push("/qna");
    }else if(data.name === "ADMIN"){
    router.push("/admin");
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
              <Dropdown.Item name="HOME" active={activeMenu === "HOME"} onClick={goLink}>HOME</Dropdown.Item>
              <Dropdown.Item name="ABOUT" active={activeMenu === "ABOUT"} onClick={goLink}>ABOUT</Dropdown.Item>
              <Dropdown.Item name="QNA" active={activeMenu === "QNA"} onClick={goLink}>QNA</Dropdown.Item>
              <Dropdown.Item name="ADMIN" active={activeMenu === "QNADMIN"} onClick={goLink}>ADMIN</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
        </div>
    </>
    );
}

export default Gnb;
