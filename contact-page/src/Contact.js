import React from 'react';

function Contact() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="col-md-4 rounded p-3" style={{backgroundColor: '#ffffff'}}>
        <h1>Soy Andrea Verónica Menéndez.</h1>
        <p>Si te gustan mis creaciones, contáctate al teléfono:</p>
        <a href="https://wa.me/5493814725808" target="_blank" rel="noopener noreferrer">+54 9 3814 72-5808</a>
        <hr />

            <h3>Deja un comentario</h3>
<form>
  <div className="form-group">
    <label htmlFor="name">Nombre:</label>
    <input type="text" className="form-control" id="name" required />
  </div>
  <div className="form-group">
    <label htmlFor="phone">Teléfono:</label>
    <input type="tel" className="form-control" id="phone" required />
  </div>
  <div className="form-group">
    <label htmlFor="email">Correo electrónico:</label>
    <input type="email" className="form-control" id="email" required />
  </div>
  <div className="form-group">
    <label htmlFor="comment">Comentario:</label>
    <textarea className="form-control" id="comment" rows="5" required></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Enviar</button>
</form>

      </div>
    </div>
  );
  
}

export default Contact;
