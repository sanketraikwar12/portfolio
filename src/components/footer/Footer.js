import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Built and curated by Sanket Raikwar
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Full Stack Development | React.js | Python
        </p>
      </div>
    </Fade>
  );
}
