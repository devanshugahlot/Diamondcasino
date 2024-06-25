import React from "react";
import './Home.css'
import CasinoJackpots from "./CasinoJackpots";
import RealtedGames from "./RealtedGames";
import Question from "./Question";
import FreeSpin from "./FreeSpin";
import GameReview from "./GameReview";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Home = () =>
{
  const navigate =useNavigate()
    return <div>
       <section className="banner" >
  <div className="container">
    <div className="row g-0">
      <div className="col-xl-6 col-lg-7 col-12">
        <div className="banner__content">
          <h3>the best website for</h3>
          <h1 style={{fontSize:"75px"}}> Online Gaming Platform</h1>
          <h2>Play and Earn Real Cash</h2>
          <p>
Welcome To Our Premier Online Gaming Platform! Dive Into The Excitement With Our Vast
Selection Of 25 Thrilling Multiple Games. From Classic Favourites To Modern Twists, Our
Website Offers An Immersive Experience For Every Gaming Enthusiast. Join Us For A
Dynamic Journey Filled With Entertainment, Strategy, And The Chance To Win Big</p>          <a onClick={()=>navigate('/Contact')} href="" className="default-button"><span>join us today  <FaAngleRight /></span> </a>
        </div>
      </div>
    </div>
  </div>
        </section>
      <section className="counter">
  <div className="container">
    <div className="counter__area">
      <div className="row align-items-center">
        <div className="col-lg-5 counter__left">
          <div>
            <h2>TODAY YOU CAN WIN UPTO</h2>
          </div>
        </div>
        <div className="col-lg-7 col-12 text-center counter__right">
          <ul className="d-flex flex-wrap">
            <li className="counter-text border-count counter-after">
              <h3 className="m-0">₹</h3>
            </li>
            <li className="counter-text border-count counter-after">
              <h3 className="m-0" >65</h3>
                  </li>
                  <li className="counter-text border-count counter-after">
              <h3 className="m-0" >00</h3>
            </li>
            <li className="counter-text border-count counter-after">
              <h3 className="m-0" >00</h3>
                  </li>
                  <li className="counter-text border-count counter-after">
              <h3 className="m-0" >00</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <section className="collection-section padding-top padding-bottom">
  <div className="container">
    <div className="section-header">
      <h2>welcome to casino</h2>
    </div>
    <div className="section-wrapper game">
      <div className="row g-4 justify-content-center">
        <div className="col-lg-4 col-sm-6 col-12">
          <div className="game__item item-layer">
            <div className="game__inner text-center">
              <div className="game__thumb">
                      <img src="/images/taash-transformed.jpeg" alt="game-img" />
                     
              </div>
              <div className="game__content">
                <h4><a href="team-single.html">Advice And Guide</a> </h4>
                <p>Holisticly underwhe fully researched deliverables for revoluonary sourcess skills and technically sound</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-12">
          <div className="game__item item-layer">
            <div className="game__inner text-center">
              <div className="game__thumb">
                      <img src="/images/spin.jpg" alt="game-img" />
                      
              </div>
              <div className="game__content">
                <h4><a href="team-single.html">Great Solutions</a> </h4>
                <p>Holisticly underwhe fully researched deliverables for revoluonary sourcess skills and technically sound</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-12">
          <div className="game__item item-layer">
            <div className="game__inner text-center">
              <div className="game__thumb">
                      <img src="/images/slider_ludo2.jpg" alt="game-img" />
                    
              </div>
              <div className="game__content">
                <h4><a href="team-single.html">Support in Person</a> </h4>
                <p>Holisticly underwhe fully researched deliverables for revoluonary sourcess skills and technically sound</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
        <div>
            <RealtedGames/>
        </div>
      <div>
    <CasinoJackpots/>
</div>
      <div>
        <FreeSpin/>
      </div>
      <div>
        <GameReview/>
      </div>
        <div>
            <Question/>
      </div>
  </div>;
};

export default Home;
