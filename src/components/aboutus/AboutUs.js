import React from "react";
import "./AboutUs.css";

const teamMembers = [
  {
    nombre: "Andrea",
    apellido: "Menendez",
    edad: 27,
    descripcion: "Lorem Ipsumx2",
  },
  {
    nombre: "Gonzalo",
    apellido: "Tarraga",
     edad: 77,
    descripcion: "Lorem Ipsumx2",
  },
  {
    nombre: "Ignacio",
    apellido: "Velazquez",
    edad: 77,
    descripcion: "Lorem Ipsumx2",
  },
  {
    nombre: "Santiago",
    apellido: "Rodríguez Marat",
    edad: 34,
    descripcion: "Lorem Ipsumx2",
  },
  {
    nombre: "Nicolas",
    apellido: "Chaves",
    edad: 77,
    descripcion: "Lorem Ipsumx2",
  },
  {
    nombre: "Agustín",
    apellido: "Rojas",
    edad: 77,
    descripcion: "Lorem Ipsumx2",
  },
];

const AboutUs = () => {
  return (
    <div className="team-container">
      {teamMembers.map((member, index) => (
        <div className="team-member" key={index}>
          <div className="member-name">
            {member.nombre} {member.apellido}
          </div>
          <div className="member-age">Edad: {member.edad}</div>
          <div className="member-description">{member.descripcion}</div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;

