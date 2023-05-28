import './AboutUs.css'

import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const CardAboutUs = ({ nombre, descripcion, foto, github, linkedin, twitter, intsagram }) => {

  return (
      <div className="card-au">
        <div className="imgBx">
            <img src={foto} alt={nombre} />
        </div>
        <div className="details">
            <h2>{nombre}<br/>
              <span>{descripcion}</span>
            </h2>
            <ul className="card-body d-flex justify-content-around sci flex-wrap gap-1">
              <li>
                <a target="_blank" rel="noopener noreferrer" href={github}>
                  <FaGithub />
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href={twitter}>
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href={linkedin}>
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href={intsagram}>
                  <FaInstagram />
                </a>
              </li>
            </ul>
        </div>
    </div>
  );
};

export default CardAboutUs;
