import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Emailjs = () => {
  const [email, setEmail] = useState('');

  let templateParams={
    from_name: "AM Creaciones",
    user_name: "",
    email: "",
    message: `tu nueva clave es ${generarCodigo()}`
  }

  function generarCodigo() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';
  
    for (let i = 0; i < 8; i++) {
      codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
  
    return codigo;
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_648ni5b', 'template_g8ikg0r', templateParamsFinal, 'FEoD25wDHjpMmuP9r')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setEmail('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const templateParamsFinal= {...templateParams, email, user_name:email}
  console.log(templateParamsFinal)
  return (
    <form id="myForm" onSubmit={sendEmail}>
    <label>
      Email:
      <input type="email" value={email} onChange={handleEmailChange} />
    </label>
    <button type="submit">Enviar</button>
  </form>
);
  
};


export default Emailjs

