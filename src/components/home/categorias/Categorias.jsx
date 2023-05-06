import React from 'react';
import style from './categoria.module.css'

const Categoria = () => {
  return (
    <div className={style.border + ' d-flex justify-content-center col-2 min-vh-100 border-end'}>
        <ul className={style.ul + ' mt-5 p-0'}>
          <li className={style.li}>
            <a  className='nav-link' href="http://">Bolsos y mochilas</a>
          </li>
          <li className={style.li}>
            <a className='nav-link' href="http://">Fundas para notebook</a>
          </li>
          <li className={style.li}>
            <a  className='nav-link' href="http://">Portacosmeticos y cartucheras</a>
          </li>
          <li className={style.li}>
            <a className='nav-link' href="http://">Productos para bebé</a>
          </li>
        </ul>
    </div>
  )
};

export default Categoria;