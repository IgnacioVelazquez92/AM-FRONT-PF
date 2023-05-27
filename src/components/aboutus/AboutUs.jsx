import React from "react";
import "./AboutUs.css";
import CardAboutUs from "./CardAboutUs";

const teamMembers = [
  {
    nombre: "Ignacio Velazquez",
    descripcion:"Full-Stack MERN",
    foto: "/assets/about-us/Ignacio-velazquez.png",
    github: "https://github.com/IgnacioVelazquez92",
    linkedin: "https://www.linkedin.com/in/velazquez-omar-ignacio-44499414a/",
    twitter: "https://twitter.com/Ignacio_V10",
    intsagram:"https://www.instagram.com/ignaciovelazquez92/"
  },
  {
    nombre: "Andrea Menendez",
    descripcion:"Full-Stack MERN",
    foto: "/assets/Marca_de_agua_2.png",
    github: "https://github.com/IgnacioVelazquez92",
    linkedin: "https://www.linkedin.com/in/velazquez-omar-ignacio-44499414a/",
    twitter: "https://twitter.com/Ignacio_V10",
    intsagram:"https://www.instagram.com/ignaciovelazquez92/"
  },
  {
    nombre: "Nicolas Chaves",
    descripcion:"Full-Stack MERN",
    foto: "/assets/Marca_de_agua_2.png",
    github: "https://github.com/IgnacioVelazquez92",
    linkedin: "https://www.linkedin.com/in/velazquez-omar-ignacio-44499414a/",
    twitter: "https://twitter.com/Ignacio_V10",
    intsagram:"https://www.instagram.com/ignaciovelazquez92/"
  },
  {
    nombre: "Santiago Marat",
    descripcion:"Full-Stack MERN",
    foto: "/assets/Marca_de_agua_2.png",
    github: "https://github.com/IgnacioVelazquez92",
    linkedin: "https://www.linkedin.com/in/velazquez-omar-ignacio-44499414a/",
    twitter: "https://twitter.com/Ignacio_V10",
    intsagram:"https://www.instagram.com/ignaciovelazquez92/"
  },
  {
    nombre: "Gonzalo Tarraga",
    descripcion:"Full-Stack MERN",
    foto: "/assets/Marca_de_agua_2.png",
    github: "https://github.com/IgnacioVelazquez92",
    linkedin: "https://www.linkedin.com/in/velazquez-omar-ignacio-44499414a/",
    twitter: "https://twitter.com/Ignacio_V10",
    intsagram:"https://www.instagram.com/ignaciovelazquez92/"
  },
  {
    nombre: "Ignacio Velazquez",
    descripcion:"Full-Stack MERN",
    foto: "/assets/Marca_de_agua_2.png",
    github: "https://github.com/IgnacioVelazquez92",
    linkedin: "https://www.linkedin.com/in/velazquez-omar-ignacio-44499414a/",
    twitter: "https://twitter.com/Ignacio_V10",
    intsagram:"https://www.instagram.com/ignaciovelazquez92/"
  },
];

const AboutUs = () => {
  return (
    <div className="conteiner px-5 py-5 d-flex gap-3 flex-wrap justify-content-center">
      {teamMembers.map((member, index) => (
        <CardAboutUs
          className="g-3"
          key={index}
          nombre={member.nombre}
          descripcion={member.descripcion}
          foto={member.foto}
          github={member.github}
          linkedin={member.linkedin}
          intsagram={member.intsagram}
          twitter={member.twitter}
        />
      ))}
    </div>
  )
};

export default AboutUs;

