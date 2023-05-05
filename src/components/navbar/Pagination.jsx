import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FormLogin from './FormLogin';
import Register from './Register';



function Pagination({setShow}) {
  const [key, setKey] = useState('Login');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab.Container bg="light" eventKey="Login" title="Ingresar">
        <FormLogin setShow={setShow}/>
      </Tab.Container>
      <Tab.Container eventKey="Register" title="Registrarse">
        <Register setKey={setKey}/>
      </Tab.Container>

    </Tabs>
  );
}

export default Pagination;