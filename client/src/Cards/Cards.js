import React from "react";
import ReactDOM from "react-dom";
import Card from "./card";

import "./Cards.css";

function Cards() {
  return (
    <div className="Cards">
         <h4>Those are yours matches!</h4>
        <Card
        image="https://www.ecestaticos.com/image/clipping/1200/675/10462edd391dad40a2c9b78a7f1eb087/estas-son-las-cosas-que-hacen-que-los-informaticos-se-rian-de-nosotros.jpg"
        title="Manuel Fernandez"
        location="Spain"
        description="Senior Technician in Multiplatform Applications Development.
        Right now I have experience with MVC frameworks such as: CakePhp, Codeigniter and Laravel.
        I have also developed hybrid mobile applications with Ionic Framework, native with JAVA and frontend frameworks like Angular 4+. "
      />
        <Card
        image="https://cdn.bizneo.com/blog/wp-content/uploads/2020/09/Desarrollo-profesional.jpg"
        title="Ana González"
        location="Spain"
        description=" Senior Technician and Master Degree in Softeware Engineer.
        Right now I have experience with MVC frameworks such as: php, Flutter and Laravel.
        I have also developed hybrid mobile applications with Ionic Framework, native with Javascript and frontend frameworks like Angular 5. "
      />
        <Card
        image="https://sistemas.tecnoderecho.com/wp-content/uploads/Fallos-informaticos.jpg"
        title="Sophie Kennedy"
        location="Spain"
        description="Senior Data Scientist with experience in ecommerce marketing and dynamic pricing, leading projects related to dynamic pricing and revenue management.
        I have worked in banking projects, risk modeling, social media analysis, projects related to SEM (Google AdWords) and CRM (Google Analytics, Salesforce)."
      />
    </div>
  );
}

export default Cards;
//const rootElement = document.getElementById("root");
//ReactDOM.render(<Cards />, rootElement);
