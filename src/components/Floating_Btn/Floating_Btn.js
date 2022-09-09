import React, { useEffect, useState } from "react";
import "./Floating_Btn.css";

const Floating_Btn = () => {
  const [Burger, setBurger] = useState(false);
  const [Progress, setProgress] = useState(0);
  const [Screen, setScreen] = useState(0);
  const [Degrees, setDegrees] = useState(0);
  const onScroll = () => setProgress(window.pageYOffset);

  useEffect(() => {
    setScreen(document.body.offsetHeight - window.innerHeight);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  var progress_percentage = (Progress / Screen)*100;

  useEffect(() => {
    progress_percentage = (Progress / Screen)*100;
    if (progress_percentage > 100) progress_percentage = 100;
    setDegrees(progress_percentage*3.6)
  }, [Progress]);

  var progressStyle = {
    backgroundImage: `radial-gradient(white 50%, transparent 50%),
      conic-gradient(transparent 0deg ${Degrees}deg, gainsboro ${Degrees}deg 360deg)`,
  };

  const checkBurger = () => {
    setBurger(!Burger);
  };

  return (
    <>
      <div className="burger bg-spec-orange">
        <canvas className="burger-progress" style={progressStyle}></canvas>
        <div
          className={
            `${Burger ? "burger-container-selected " : ""}` +
            "burger-container bg-spec-light"
          }
          onClick={checkBurger}
        >
          <div
            className={`${Burger ? "burger-line-rotate " : ""}` + "burger-line"}
          ></div>
          <div
            className={`${Burger ? "burger-line-rotate " : ""}` + "burger-line"}
          ></div>
        </div>
      </div>

      <div className={`${Burger ? "menu__open " : ""}` + "menu"}>
        <div className="menu__outer">
          <div className="menu__inner">
            <div className="menu__body">
              <ol className="menu__list">
                <li className="menu__list__item">
                  <p className="menu__number">01</p>
                  <p className="menu__link">introduction</p>
                </li>

                <li className="menu__list__item">
                  <p className="menu__number">02</p>
                  <p className="menu__link">domains</p>
                </li>

                <li className="menu__list__item">
                  <p className="menu__number">03</p>
                  <p className="menu__link">achievements</p>
                </li>
              </ol>
            </div>
            <div className="menu__header">Contact Us</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Floating_Btn;
