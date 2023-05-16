import React, { useState } from 'react';

const FormProduct = (objetoInicial = {}) => { //obj vacio que relleno a medida que cambio la info
 const [form,setForm] = useState(objetoInicial);
 const changed = ({target}) => { 
    const{name,value} = target;
    setForm({
        ...form,
        [name]:value
    });
 }
 
return {
    form,
    changed
}  
};

export default FormProduct;