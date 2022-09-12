import React, { useState } from 'react'
import './Domains.css';
import Design from "../Images/design.jpg";
import Software from "../Images/software.jpg";
import Hardware from "../Images/hardware.jpg";
import DomainText from './DomainText';
import { domain } from './DomainData';

const Domains = () => {

  const [Hover, setHover] = useState("Software");

  const mouseEnter = (e) => {
    setHover(Hover => Hover===e.target.alt ? Hover: e.target.alt);
  }

  return (
    <>
      <div className="wings">
        <h1>
          <span>Wings</span> to the Future
        </h1>
        <div className="wing_images">
          <div className="wing-image">
            <img
              src={Design}
              alt="Design"
              className={Hover === "Design" ? "wing-selected" : "image1"}
              onMouseEnter={mouseEnter}
            />
          </div>
          <div className="wing-image">
            <img
              src={Software}
              alt="Software"
              className={Hover === "Software" ? "wing-selected" : "image1"}
              onMouseEnter={mouseEnter}
            />
          </div>
          <div className="wing-image">
            <img
              src={Hardware}
              alt="Hardware"
              className={Hover === "Hardware" ? "wing-selected" : "image1"}
              onMouseEnter={mouseEnter}
            />
          </div>
        </div>
        {domain
          .filter((elem) => elem.title === Hover)
          .map((e) => (
            <DomainText key={e.title} obj={e} />
          ))}
      </div>
    </>
  );
}

export default Domains