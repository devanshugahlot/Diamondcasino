import React from "react";
import "./RealtedGames.css";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
const RealtedGames = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="collection-section padding-top padding-bottom">
        <div className="container">
          <div className="section-header">
            <h2> MULTI Player GAMING EXPERIENCE</h2>
          </div>
          <div className="section-wrapper game">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img
                        src="/images/images__user___1_-removebg-preview.png"
                        alt="game-img"
                      />
                    </div>
                    <div className="game__content">
                      <h4 style={{ color: "#ff0052" }}>
                        User-Friendly Interface:
                      </h4>
                      <p>
                        Design an intuitive and easy-to-navigate user interface
                        to enhance user experience, promoting accessibility and
                        seamless interaction. Ensure responsiveness for optimal
                        usability across various devices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img
                        src="/images/images__12_-removebg-preview.png"
                        alt="game-img"
                      />
                    </div>
                    <div className="game__content">
                      <h4 style={{ color: "#ff0052" }}>Game Variety:</h4>
                      <p>
                        Provide a diverse selection of casino games, including
                        ludo, rummy, teen patti, and dragon tiger, offering
                        popular variations to suit varied player preferences and
                        interests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img
                        src="/images/images-removebg-preview (1).png"
                        alt="game-img"
                      />
                    </div>
                    <div className="game__content">
                      <h4 style={{ color: "#ff0052" }}>
                        Secure and Fair Gameplay:
                      </h4>
                      <p>
                        Incorporate stringent security measures to safeguard
                        user data and financial transactions, fostering a
                        trustworthy gaming environment. Employ certified RNGs to
                        ensure fairness in gameplay.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="game-section padding-top padding-bottom overflow-hidden"
        style={{ backgroundImage: "url(assets/images/match/bg.jpg)" }}
      >
        <div className="container">
          <div className="section-header">
            <h2>OUR POPULAR GAMES</h2>
          </div>
          {/* <ul className="game__filter">
        <li data-filter="*" className="is-checked"><span className="category">All</span></li>
        <li data-filter=".cat-1"><span className="category">Slots</span></li>
        <li data-filter=".cat-2"><span className="category">Roulette</span></li>
        <li data-filter=".cat-3"><span className="category">Black Jack</span></li>
        <li data-filter=".cat-4"><span className="category">Poker Games</span></li>
      </ul> */}
          <div className="row g-4 grid">
            <div className="col-lg-6 col-12 cat-1">
              <div className="game__item item-layer">
                <div className="game__inner text-center p-0">
                  <div className="game__thumb mb-0">
                    <img
                      src="/images/download (2) (1).jpeg"
                      alt="game-img"
                      className="rounded-3 w-100"
                    />
                  </div>
                  <div className="game__overlay">
                    <div className="game__overlay-left">
                      <h4> 3 patti games</h4>
                    </div>
                    <div className="game__overlay-right">
                      <a href="" className="default-button">
                        <span>
                          play now <FaAngleRight />
                        </span>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 cat-2">
              <div className="game__item item-layer">
                <div className="game__inner text-center p-0">
                  <div className="game__thumb mb-0">
                    <img
                      src="/images/02 (1).jpg"
                      alt="game-img"
                      className="rounded-3 w-100"
                    />
                  </div>
                  <div className="game__overlay">
                    <div className="game__overlay-left">
                      <h4> Roulette games</h4>
                    </div>
                    <div className="game__overlay-right">
                      <a href="" className="default-button">
                        <span>
                          play now <FaAngleRight />
                        </span>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 cat-3">
              <div className="game__item item-layer">
                <div className="game__inner text-center p-0">
                  <div className="game__thumb mb-0">
                    <img
                      style={{ height: "46vh" }}
                      src="/images/download (3) (1).jpeg"
                      alt="game-img"
                      className="rounded-3 w-100"
                    />
                  </div>
                  <div className="game__overlay">
                    <div className="game__overlay-left">
                      <h4> Dragon & Tiger</h4>
                    </div>
                    <div className="game__overlay-right">
                      <a href="" className="default-button">
                        <span>
                          play now <FaAngleRight />
                        </span>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 cat-4">
              <div className="game__item item-layer">
                <div className="game__inner text-center p-0">
                  <div className="game__thumb mb-0">
                    <img
                      style={{ height: "46vh" }}
                      src="/images/pngtree-d-realistic-roulette-wheel-and-slot-machine-on-blue-background-experience-image_3737093.jpg"
                      alt="game-img"
                      className="rounded-3 w-100"
                    />
                  </div>
                  <div className="game__overlay">
                    <div className="game__overlay-left">
                      <h4>Color Prediction</h4>
                    </div>
                    <div className="game__overlay-right">
                      <a href="" className="default-button">
                        <span>
                          play now <FaAngleRight />
                        </span>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="button-wrapper text-center mt-5">
            <a
              className="default-button reverse-effect"
              onClick={() => {
                navigate("/OurAllGames");
                window.scrollTo(0, 0);
              }}
            >
              <span style={{ cursor: "pointer" }}>
                Browse All Games <FaAngleRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtedGames;
