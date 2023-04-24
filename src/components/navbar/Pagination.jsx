import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FormLogin from './FormLogin';
import Register from './Register'


function Pagination() {
  const [key, setKey] = useState('Login');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab.Container bg="light" eventKey="Login" title="Ingresar">
        <FormLogin />
      </Tab.Container>
      <Tab.Container eventKey="Register" title="Registrarse">
        <Register />
      </Tab.Container>

    </Tabs>
  );
}

export default Pagination;