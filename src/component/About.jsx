import React from "react";
import "./About.css";
import RealtedGames from "./RealtedGames";
import Question from "./Question";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SeoHelmet from "./Helmet";
const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <SeoHelmet
        pagetitle="Diamond casino - 24x7 Online Gaming Platform"
        description="Diamond casino is a real money online gaming app that lets you play
games for quick cash. Play with real cash games of Call Break, Teen Patti,
Rummy, and Ludo etc. Play, win, and get your money back right away with a
bank transfer or UPI.
"
        keywords=" Diamond casino.com, about Diamond casino, about Diamond casino website, Diamond casino
gaming website, Diamond casino.com company, Diamond casino, Diamond casino, Raahi Bet, online
gaming website"
      />

      <section
        className="pageheader-section"
        style={{
          backgroundImage:
            "url(/images/1000_F_416254586_YnctPtejbIpnRuwdPK2wd559TpSm3duR-transformed-transformed.jpeg)",
        }}
      >
        <div className="container">
          <div className="section-wrapper text-center text-uppercase">
            <h2 className="pageheader-title">About</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                  >
                    Home
                  </a>
                </li>

                <li className="breadcrumb-item active" aria-current="page">
                  About Us
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container">
          <div className="section-wrapper padding-top">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="about-image position-relative">
                  <img
                    style={{ width: "600px", height: "70vh" }}
                    src="/images/trophy_cleanup.jpg"
                    alt="about-image"
                    className="w-100"
                  />
                  <div className="video-icon">
                    {/* <a data-rel="lightcase">
                      <FaPlay style={{ color: "red" }} />
                      <span className="pluse" />
                    </a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="about-wrapper">
                  <div className="section-header">
                    <h2>we are professional team esport</h2>
                  </div>
                  <div className="about-content">
                    <p>
                      At Modeltheme, we show only the best websites and
                      portfolios built completely with passion simplicity and
                      creativity!
                    </p>
                    <ul className="about-list">
                      <li className="about-item d-flex flex-wrap">
                        <div className="about-item-thumb">
                          <img src="/images/icon-1.png" alt="Icon" />
                        </div>
                        <div className="about-item-content">
                          <h5>103k Community Earning</h5>
                          <p>
                            Distinctively provide acces mutfuncto users whereas
                            communicate leveraged services
                          </p>
                        </div>
                      </li>
                      <li className="about-item d-flex flex-wrap">
                        <div className="about-item-thumb">
                          <img src="/images/icon-2.png" alt="Icon" />
                        </div>
                        <div className="about-item-content">
                          <h5>34m+ Registered Players</h5>
                          <p>
                            Distinctively provide acces mutfuncto users whereas
                            communicate leveraged services
                          </p>
                        </div>
                      </li>
                      <li className="about-item d-flex flex-wrap">
                        <div className="about-item-thumb">
                          <img src="/images/icon-3.png" alt="Icon" />
                        </div>
                        <div className="about-item-content">
                          <h5>240k Streams Complete</h5>
                          <p>
                            Distinctively provide acces mutfuncto users whereas
                            communicate leveraged services
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <RealtedGames />
      </div>
      <div>
        <Question />
      </div>
    </div>
  );
};

export default About;
