import React from 'react'
import './Domains.css';
import Design from "../Images/design.jpg";
import Software from "../Images/software.jpg";
import Hardware from "../Images/hardware.jpg";

const Domains = () => {

  const domain = {
    elem: [
      {
        title: "Design",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis consectetur ac amet, ullamcorper blandit tortor, tristique. At etornare orci felis, curabitur phasellus ac. Placerat tortorfermentum, in vestibulum. Cursus cursus est quam sit faucibus odio.",
      },
      {
        title: "Software",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis consectetur ac amet, ullamcorper blandit tortor, tristique. At etornare orci felis, curabitur phasellus ac. Placerat tortorfermentum, in vestibulum. Cursus cursus est quam sit faucibus odio.",
      },
      {
        title: "Hardware",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis consectetur ac amet, ullamcorper blandit tortor, tristique. At etornare orci felis, curabitur phasellus ac. Placerat tortorfermentum, in vestibulum. Cursus cursus est quam sit faucibus odio.",
      },
    ],
  };

  return (
    <>
      <div className="wings">
        <h1>
          <span>Wings</span> to the Future
        </h1>
        <div className="wing_images">
          <div className="wing-image">
            <img src={Design} alt="Deign image" className="image1" />
          </div>
          <div className="wing-image">
            <img src={Software} alt="Deign image" className="image1" />
          </div>
          <div className="wing-image">
            <img src={Hardware} alt="Deign image" className="image1" />
          </div>
        </div>
        <div className="soft_wing invisible">
          <div className="soft_title">
            <span className="soft">Software</span> Wing
          </div>
          <div className="soft_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis,
            consectetur ac amet, ullamcorper blandit tortor, tristique. At et
            ornare orci felis, curabitur phasellus ac. Placerat tortor
            fermentum, in vestibulum. Cursus cursus est quam sit faucibus odio.
          </div>
        </div>
      </div>
    </>
  );
}

export default Domains