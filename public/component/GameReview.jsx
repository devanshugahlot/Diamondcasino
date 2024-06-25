import React from "react";
import './GameReview.css'
import { FaPlay, FaStar } from 'react-icons/fa';
import SeoHelmet from "./Helmet";
const GameReview = () => {
  return (
    <div>
      <SeoHelmet
        description="Welcome to our online gaming platform. Play some interesting poker
games on Diamond casino. Play and Earn Real Cash, Play games on India’s best Real Money
earning gaming app, Play to Win Real Cash Daily.
"
        keywords=" online multiple games, online gaming platform, Diamond casino, win real cash games,
play and win cash, play games for cash, play and earn money, real cash games, real money
gaming app, poker games, call break multiplayer game, card games, rummy games, spin &
car roulette, head & tail, Ludo, color game, color prediction, animal game,"
      />
      <div className="testimonial padding-top padding-bottom" style={{ backgroundImage: 'url(assets/images/testimonial/bg.png)' }}>
        <div className="container">
          <div className="section-header">
            <h2>our gamers reviews</h2>
            <p>At Modeltheme, we show only the best websites and portfolios built completely with passion simplicity and creativity !</p>
          </div>
          <div className="section-wrapper">
            <div className="row g-4">
              <div className="col-lg-6 col-12">
                <div className="testimonial__thumb position-relative">
                  <img style={{ width: "600px" }} src="/images/trophy_cleanup.jpg" alt="testimonial" />
                  {/* <div className="video-icon"> */}
                  {/* <a href="https://www.youtube.com/embed/g5eQgEuiFC8" data-rel="lightcase">
                <FaPlay style={{color:"red" }} />
                  <span className="pluse" />
                </a> */}
                  {/* </div> */}
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="testimonial-slider overflow-hidden">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-inner">
                          <div className="testimonial-head">
                            <div className="testi-top">
                              <div className="testimonial-thumb">
                                <img src="/images/images (17).jpeg" alt="testimonial" />
                              </div>
                              <div className="name-des">
                                <h5>Rahul Agarwal</h5>
                                <p>Gamer</p>
                              </div>
                            </div>
                            <div className="testimonial-footer">
                              <ul>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                {/* <li><FaStar /></li> */}

                              </ul>
                              <h5>4.5</h5>
                            </div>
                          </div>
                          <div className="testimonial-body">
                            <p>"Exciting and immersive, games offer a thrilling escape into virtual worlds, blending engaging narratives with interactive experiences for an unparalleled entertainment journey."</p>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-item">
                        <div className="testimonial-inner">
                          <div className="testimonial-head">
                            <div className="testi-top">
                              <div className="testimonial-thumb">
                                <img src="/images/images (16).jpeg" alt="testimonial" />
                              </div>
                              <div className="name-des">
                                <h5>Aakash sharma</h5>
                                <p>Gamer</p>
                              </div>
                            </div>
                            <div className="testimonial-footer">
                              <ul>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                {/* <li><FaStar /></li> */}
                              </ul>
                              <h5>4.5</h5>
                            </div>
                          </div>
                          <div className="testimonial-body">
                            <p>Rapidious buildcaboration anden deas sharing viaing and beedng edgeing nterfaces fnergstcia plagiarize teams anbuding paradgm whereas goingi forward process and monetze</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default GameReview;
