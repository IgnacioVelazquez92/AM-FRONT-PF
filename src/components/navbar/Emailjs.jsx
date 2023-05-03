import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ApiClient } from "../api/services";
import Swal from 'sweetalert2';

const Emailjs = () => {
  const [email, setEmail] = useState('');
  
  let templateParams={
    
    user_name: "",
    email: "",
    
  }
  

  function generarCodigo() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';
  
    for (let i = 0; i < 8; i++) {
      codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return codigo;
  }
  const apiClient = new ApiClient();
  

  const sendEmail = (e) => {
    e.preventDefault();

    const userData={
      email,
      password:generarCodigo()
    }

    const templateParamsFinal= {
      from_name: "AM Creaciones", 
      email, 
      user_name:email, 
      password: userData.password, 
      message: `tu nueva clave es ${userData.password}`
    }

    console.log(templateParamsFinal);
    console.log(userData);


    const response = apiClient.recoverPass(userData)

    // emailjs.send('service_648ni', 'template_g8ikg0', templateParamsFinal, 'FEoD25wDHjpMmuP9r')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
      // setEmail('');
      
  };

  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  
  return (
    <div className='container my-5'>
      <form onSubmit={sendEmail} className="row g-3">
        <div>
          <label htmlFor="validationMail" className="form-label">Introduce tu correo electrónico</label>
          <input 
          id="validationMail"
          className="form-control"
          type="email" 
          value={email} 
          onChange={handleEmailChange} 
          pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$" 
          required />
        </div>
        <button className='btn btn-secondary' type="submit">Recuperar clave</button>
      </form>
    </div>


);  
};

export default Emailjs

