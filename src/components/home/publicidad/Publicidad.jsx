import React from 'react';

const Publicidad = () => {
  
  function getRandomInt() {
    return Math.floor(Math.random() * 6 ) + 1;
  }

  const [num1, num2, num3] = (() => {
    let numeros = [];
    while (numeros.length < 3) {
      let numero = getRandomInt();
      if (!numeros.includes(numero)) {
        numeros.push(numero);
      }
    }
    return numeros;
  })();
  
  return (
    <div className={'d-none d-md-flex flex-column align-items-end' }>
      <img className="mt-3" src={`../../../../src/assets/publicidad/publicidad${num1}.png`} alt={num1} />
      <img className="mt-3" src={`../../../../src/assets/publicidad/publicidad${num2}.png`} alt={num2} />
      <img className="mt-3" src={`../../../../src/assets/publicidad/publicidad${num3}.png`} alt={num3} />
    </div>
  )
}

export default Publicidad