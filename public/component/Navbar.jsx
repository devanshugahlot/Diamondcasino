import React, { useState } from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SwipeableTemporaryDrawer from "./resnav";
import SwipeableTemporaryDrawer2 from "./resnav2";
import {
  FaFacebookMessenger,
  FaTwitter,
  FaVimeo,
  FaSkype,
  FaRss,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaTelegram
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
// import { IoIosInformationCircle } from 'react-icons/io';
import game_name from "../component/allgames/Assets/game_name";
import game_name_second from "../component/allgames/Assets/game_name_second";
import Item from "./allgames/Item";
import mainlogo from "../component/mainlogo.jpeg"

const Navbar = () => {
  const navigate = useNavigate();
  const [isAllGamesHovered, setAllGamesHovered] = useState(false);

  return (
    <div>
      <header className="header-section">
        <div className="container">
          <div className="header-holder d-flex flex-wrap justify-content-between align-items-center">
            <div className="brand-logo d-none d-lg-inline-block">
              <div className="logo">
                <a style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                  <img
                    src={mainlogo}
                    style={{ width: "100px" }}
                    alt="logo"
                  />
                </a>
              </div>
            </div>
            <div className="header-menu-part">
              <div className="header-top">
                <div className="header-top-area">
                  <ul className="left">
                    {/* <li>
                      <MdEmail />

                      <a
                        href="mailto:dreambestt14@gamil.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span style={{ color: "black" }}>
                        dreambestt14@gamil.com
                        </span>
                      </a>
                    </li> */}
                    <li>
                      {/* <FaMapMarkerAlt /> */}
                      <a style={{ color: "black" }} href="https://wa.me/+917003790796">
                        <img
                          style={{ width: "20px" }}
                          src="/images/call.png"
                          alt=""
                        />
                        +917003790796

                      </a>
                    </li>
                  </ul>
                  <ul className="social-icons d-flex align-items-center">
                    <li>
                      <a
                        target="_blank"
                        href=" https://t.me/+_fBH6dBF1tMzOTI1"
                        className="telegram"
                      >
                        <FaTelegram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-bottom">
                <div className="header-wrapper justify-content-lg-end">
                  <div className="mobile-logo d-lg-none">
                    <a onClick={() => navigate("/")}>
                      <img src={mainlogo} alt="logo" />
                    </a>
                  </div>
                  <div className="menu-area">
                    <ul className="menu">
                      <li>
                        <a
                          style={{ cursor: "pointer", color: "black" }}
                          onClick={() => navigate("/")}
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          style={{ cursor: "pointer", color: "black" }}
                          onClick={() => navigate("/About")}
                        >
                          About
                        </a>
                      </li>
                      {/* <li>
                        <a
                          style={{ cursor: "pointer", color: "black" }}
                          onClick={() => navigate("/Tournament")}
                        >
                          Tournament
                        </a>
                      </li> */}
                      <li
                        className="ALL-Games"
                        onMouseEnter={() => setAllGamesHovered(true)}
                        onMouseLeave={() => setAllGamesHovered(false)}
                      >
                        <a
                          style={{ cursor: "pointer", color: "black" }}
                          onClick={() => navigate("/OurAllGames")}
                        >
                          All Games
                        </a>
                        {isAllGamesHovered && (
                          <div className="all-games-dropdown">
                            {/* Add your dropdown content here */}
                            <ul>
                              {game_name.map((list, index) => {
                                return (
                                  <Link
                                    to={`/AllGame/${list.name
                                      .split(" ")
                                      .join("_")}`}
                                  >
                                    <li>{list.name}</li>
                                  </Link>
                                );
                              })}

                              {/* Add more games as needed */}
                            </ul>
                            <ul>
                              {game_name_second.map((list, index) => {
                                return (
                                  <Link
                                    to={`/AllGame/${list.name
                                      .split(" ")
                                      .join("_")}`}
                                  >
                                    <li>{list.name}</li>
                                  </Link>
                                );
                              })}
                            </ul>
                          </div>
                        )}
                      </li>
                      <li>
                        <a
                          style={{ cursor: "pointer", color: "black" }}
                          onClick={() => navigate("/Contact")}
                        >
                          Contact
                        </a>
                      </li>
                    </ul>

                    <li className="ResNav">
                      <SwipeableTemporaryDrawer />
                    </li>
                    <li className="ResNav2">
                      <SwipeableTemporaryDrawer2 />
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
