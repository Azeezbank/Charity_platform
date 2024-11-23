import React, { useState, useEffect } from "react";
import hand from "../assets/download.jfif";
import led from "../assets/OIP.jfif";
import red from "../assets/OIP1.jfif";
import baby from "../assets/baby-removebg-preview.png";
import mission from "../assets/home-charity-tab-1.jpg";
import program from "../assets/home-charity-tab-2.jpg";
import partner from "../assets/home-charity-tab-3.jpg";
import donate from "../assets/home-charity-tab-4.jpg";
//import { button } from "framer-motion/client";
//import { text } from "framer-motion/client";

const Home: React.FC = () => {
  const images = [
    {
      image: hand,
      text: "Be part of the world by making dona",
      bold: "JOIN WITH US AND SAVE THE WORD",
    },
    {
      image: led,
      text: "For the poor child",
      bold: "GIVE A HELPING HAND AND HELP UNFORTUNATE",
    },
    {
      image: red,
      text: "Be part of the world by make a donation",
      bold: "HELP US TO SAVE THE HOMELESS PEOPLES",
    },
  ];

  const texts = ["lives", "hope", "futures"];

  const [currentIndex, setcurrentIndex] = useState(0);
  const [currentText, setcurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentIndex((prevIndex: any) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const intertext = setInterval(() => {
      setcurrentText((prevText: any) => (prevText + 1) % texts.length);
    }, 2000);
    return () => clearInterval(intertext);
  }, [texts.length]);

  return (
    <>
      <nav className="navbar navbar-expand-sm fixed-top bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offCanvaNav"
            aria-controls="offCanvaNav"
          >
            <span className="navbar-toggler-icon btn btn-danger"></span>
          </button>
          <div className="d-flex header pe">
            <div className="bi bi-heart-pulse-fill text-danger heart"></div>
            <h1 className="offcanvas-title text-center text-danger human">
              CHARITIES{" "}
              <p className="text-dark rights">
                HUMAN <span className="text-danger rights">RIGHTS</span>
              </p>
            </h1>
          </div>
        </div>

        <div className="offcanvas offcanvas-start" id="offCanvaNav">
          <div className="offcanvas-header">
            <div className="d-flex header">
              <div className="bi bi-heart-pulse-fill text-danger heart"></div>
              <h1 className="offcanvas-title text-center text-danger human">
                CHARITIES{" "}
                <p className="text-dark rights">
                  HUMAN <span className="text-danger rights">RIGHTS</span>
                </p>
              </h1>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow pe-5">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div className="slide" key={index}>
              <img src={src.image} alt={`Slide ${index}`} />
              {currentIndex === index && (
                <>
                  <h3 className="overlay-text overlay">{src.text}</h3>
                  <h1 className="overlay-text overla">{src.bold}</h1>
                  <button className="overlay-text bg-danger text-white bott">
                    DONATE NOW
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid bg-light text-container">
        <div className="row p-4">
          <div className="col-sm-6">
            <h2 className="pt-3">
              Empowering{" "}
              <span className="future text-danger">{texts[currentText]}</span>{" "}
              <br />
              through giving
            </h2>
            <p className="text-muted">
              Join us in collective journey of compassion and impact as we work
              hand in hand, transforming lives and nurturing hope around the
              world.
            </p>
            <button className="btn btn-danger rounded-pill">
              Make a donation
            </button>
          </div>
          <div className="col-sm-6">
            <img className="float-center pt-3" src={baby} alt="image" />
          </div>
        </div>
      </div>

      <div className="container-fluid p-5">
        <h2 className="pe-2 support-mission">
          Commitment to <span className="text-danger">impactful</span> change
          and <span className="text-danger"> community welfare</span>
        </h2>
        <p className="pt-2 text-muted support-mission-C">
          Discover our commitment to social welfare, ethical governnance, and
          impactful change
        </p>

        <div id="accordion">
          <div className="container bg-light round mt-5">
            <div className="cardd text-white">
              <div className="hover2 mission ps-3 pe-3">
                <a
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#collapseOne"
                >
                  <div className="row">
                    <div className="col-2 pt-2">
                      <h1 className="bi bi-bullseye"></h1>
                    </div>
                    <div className="col-10 ps-5">
                      <h2 className="float-start">Our mission</h2> <br />
                      <p className="text-muted float-start">
                        About us and history
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="hover2">
                <a
                  className="collapsed btn"
                  data-bs-toggle="collapse"
                  href="#collapseTwo"
                >
                  <div className="row ps-3">
                    <div className="col-2">
                      <h1 className="bi bi-backpack-fill"></h1>
                    </div>
                    <div className="col-10 float-start ps-5">
                      <h2 className="float-start">Our programs</h2> <br />
                      <p className="text-muted float-start">Make a change</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="hover2">
                <a
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#collapseThree"
                >
                  <div className="row ps-3">
                    <div className="col-2">
                      <h1 className="bi bi-people-fill"></h1>
                    </div>
                    <div className="col-10 float-start ps-5">
                      <h2 className="float-start">Our partners</h2> <br />
                      <p className="text-muted float-start">
                        long-term partners
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="hover2 donate">
                <a
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#collapseFour"
                >
                  <div className="row ps-3">
                    <div className="col-2">
                      <h1 className="bi bi-currency-dollar"></h1>
                    </div>
                    <div className="col-10 float-start ps-5">
                      <h2 className="float-start">Donate now</h2> <br />
                      <p className="text-muted float-start">Save a life</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="container bg-light round p-4">
            <div className="cardd2">
              <div
                id="collapseOne"
                className="collapse show"
                data-bs-parent="#accordion"
              >
                <div className="row">
                  <div className="col-sm-6 missionTextP">
                <h3>Empowering lives through compassionate support</h3>
                <p className="text-muted">
                  Our mission is to empower individuals and family through
                  comprehensive services, fostering resience, dignity, and
                  positive community impact for a brighter future.
                </p>
                <button className="btn btn-danger rounded-pill mt-3">
                  Learn more
                </button>
                </div>
                <div className="col-sm-6">
                <img className="accord" src={mission} alt="mission" />
                </div>
                </div>
              </div>
            </div>

            <div className="cardd2">
              <div
                id="collapseTwo"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="row">
                  <div className="col-sm-6 missionTextP">
                <h3>Offering diverse programs focused on education</h3>
                <p className="text-muted">
                  Offering diverse programs focused on education, healthcare,
                  environment, and community development for sustainable
                  positive impact.
                </p>
                <button className="btn btn-danger rounded-pill mt-3">
                  Learn more
                </button>
                </div>
                <div className="col-sm-6">
                <img className="accord" src={program} alt="programs" />
                </div>
                </div>
              </div>
            </div>

            <div className="cardd2">
              <div
                id="collapseThree"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="row">
                  <div className="col-sm-6 missionTextP">
                <h3>collaborating with like-minded organizations</h3>
                <p className="text-muted">
                  Collaborating with like-minded organizations, bussiness, and
                  individuals to maximize resources and extend our reach for
                  greater impact.
                </p>
                <button className="btn btn-danger rounded-pill mt-3">
                  Learn more
                </button>
                </div>
                <div className="col-sm-6">
                <img className="accord" src={partner} alt="partnership" />
                </div>
                </div>
              </div>
            </div>

            <div className="cardd2">
              <div
                id="collapseFour"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="row">
                  <div className="col-sm-6 missionTextP">
                <h3>Every contribution direcly support our causes</h3>
                <p className="text-muted">
                  Our mission is to empower individuals and family through
                  comprehensive services, fostering resience, dignity, and
                  positive community impact for a brighter future.
                </p>
                <button className="btn btn-danger rounded-pill mt-3">
                  Learn more
                </button>
                </div>
                <div className="col-sm-6">
                <img className="accord" src={donate} alt="image" />
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light p-5">
        <h2 className="pe-2 support-mission">Support <span className="text-danger">our mission,</span> change lives today</h2>
      <p className="text-muted support-mission-C">Your donation empower us to continue our vital work, creating lasting impact and positive change</p>
      </div>
    </>
  );
};

export default Home;