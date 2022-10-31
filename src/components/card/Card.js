import React from "react";
import logo_html from "../../assets/img/logo_html.png";
import logo_css from "../../assets/img/logo_css.png";
import logo_brush from "../../assets/img/logo_brush.png";
import { useNavigate } from "react-router-dom";

const Card = ({ src, url, title }) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="box" type="button" onClick={() => navigate("/html")}>
        <img src={logo_html} alt="" />
        <h3>HTML5 Markup</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
          augue, viverra sit amet ultricies
        </p>
      </div>
      <div className="box">
        <img src={logo_css} alt="" onClick={() => navigate("/css")} />
        <h3>CSS3 Styling</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
          augue, viverra sit amet ultricies
        </p>
      </div>
      <div className="box">
        <img src={logo_brush} alt="" onClick={() => navigate("/javaScript")} />
        <h3>JavaScript</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
          augue, viverra sit amet ultricies
        </p>
      </div>
    </div>
  );
};

export default Card;
