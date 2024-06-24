import React from "react";
import "./Footer.css";
import { FaAngleRight, FaInstagram, FaLinkedin, FaStar,FaTelegram } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import mainlogo from '../component/mainlogo.jpeg'
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <footer
        className="footer-section"
        style={{ backgroundImage: "url(assets/images/footer/bg.jpg)" }}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row g-3 justify-content-center g-lg-0">
              {/* <div className="col-lg-4 col-sm-6 col-12">
                <div className="footer-top-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img src="/images/phoneicon.png" alt="Phone-icon" />
                    </div>
                    <div className="lab-content">
                      
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-4 col-sm-6 col-12">
                <div className="footer-top-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img src="/images/02.png" alt="email-icon" />
                    </div>
                    <div className="lab-content">
                      <a
                        href="dreambestt14@gamil.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>dreambestt14@gamil.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="footer-top-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img
                        style={{ width: "40px" }}
                        src="/images/receiver.png"
                        alt="location-icon"
                      />
                    </div>
                    <div className="lab-content">
                      <a href="tel:+917003790796">
                        <span>+917003790796</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="footer-top-item lab-item">
                  <div className="lab-inner">
                    <ul
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "auto",
                        gap: "20px",
                      }}
                      className="lab-content"
                    >
                      <li>
                        <a
                          href="https://t.me/+_fBH6dBF1tMzOTI1"
                          className="Telegram"
                        >
                          <FaTelegram style={{ fontSize: "1.5em" }} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle padding-top padding-bottom">
          <div className="container">
            <div className="row padding-lg-top">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="footer-middle-item-wrapper">
                  <div className="footer-middle-item mb-lg-0">
                    <div
                      onClick={() => navigate("/")}
                      className="fm-item-title mb-4"
                    >
                      <img
                        style={{ width: "100px" }}
                        src={mainlogo}
                        alt="logo"
                      />
                    </div>
                    <div className="fm-item-content">
                      <p className="mb-4">
                        "Immerse yourself in the world of gaming with this
                        website—a comprehensive hub offering a rich array of
                        content, from insightful reviews and expert guides to
                        the latest gaming news, fostering a vibrant community of
                        passionate gamers."
                      </p>
                      {/* <ul className="match-social-list d-flex flex-wrap align-items-center">
                    <li><a href="#"><img src="assets/images/match/social-1.png" alt="vimeo" /></a></li>
                    <li><a href="#"><img src="assets/images/match/social-2.png" alt="youtube" /></a></li>
                    <li><a href="#"><img src="assets/images/match/social-3.png" alt="twitch" /></a></li>
                  </ul> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="footer-middle-item-wrapper">
                  <div className="footer-middle-item mb-lg-0">
                    <h3>OUR ALL PAGES</h3>
                    <div
                      className="fm-item-title"
                      onClick={() => navigate("/About")}
                    >
                      <p style={{ cursor: "pointer", marginTop: "30px" }}>
                        ABOUT
                      </p>
                    </div>
                    <div className="fm-item-content">
                      <div className="fm-item-widget lab-item">
                        <div
                          onClick={() => navigate("/Tournament")}
                          className="lab-inner"
                        >
                          <p style={{ cursor: "pointer" }}>TOURNAMENT</p>
                        </div>
                      </div>
                      <div className="fm-item-widget lab-item">
                        <div
                          onClick={() => navigate("/OurAllGames")}
                          className="lab-inner"
                        >
                          <p style={{ cursor: "pointer" }}>ALL GAMES</p>
                        </div>
                      </div>
                      <div className="fm-item-widget lab-item">
                        <div
                          // onClick={() => navigate("/About")}
                          className="lab-inner"
                        >
                          <p>BLOG </p>
                        </div>
                      </div>
                      <div className="fm-item-widget lab-item">
                        <div
                          onClick={() => navigate("/Contact")}
                          className="lab-inner"
                        >
                          <p style={{ cursor: "pointer" }}>CONTACT US </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="footer-middle-item-wrapper">
                  <div className="footer-middle-item-3 mb-lg-0">
                    <div className="fm-item-title">
                      <h4>Our All Games</h4>
                    </div>
                    <div className="fm-item-content">
                      <p>
                        Delve into the exciting world of games, where luck meets
                        skill in an immersive gaming experience. From classic
                        favourites like ludo, poker, blackjack, dragon and
                        tiger, to rummy, roulette with dynamic themes, our games
                        offer thrilling opportunities to test your strategy and
                        enjoy the rush of winning
                      </p>
                      <form>
                        <button className="default-button">
                          <span onClick={() => navigate("/AllGames")}>
                            ALL Games <FaAngleRight />
                          </span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-bottom-content text-center d-flex justify-content-center">
                  <ul className="d-flex gap-4 " id="foot">
                    <li>
                      <Link to="terms_and_conditions">
                        Terms And Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="Contact">Contact us</Link>
                    </li>
                    <li>
                      <Link to="/Privacy">Privacy</Link>
                    </li>
                    <li>
                      <Link to="Refund_and_cancellation_policy">
                        Refund And Cancellation
                      </Link>
                    </li>
                  </ul>
                  <p className="last-p " style={{ marginTop: "16px" }}>
                    <br />© {new Date().getFullYear()}{" "}
                    <a onClick={() => navigate("/")}>Casino</a> - All Rights
                    Reserved.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
