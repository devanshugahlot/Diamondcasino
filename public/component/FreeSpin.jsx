import React from "react";
import "./FreeSpin.css";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
const FreeSpin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="game game-style3 overflow-hidden"
        style={{ backgroundImage: "url(assets/images/game/bg.jpg)" }}
      >
        <div className="container">
          <div className="section-wrapper">
            <div className="row justify-content-center g-4 align-items-center">
              <div className="col-lg-6 col-12">
                <div className="game__thumb">
                  <img
                    style={{ width: "700px" }}
                    src="/images/240_F_622262374_m7YPwdMca2b853X3sSjeL7qy5TZfkDpB-removebg-preview.png"
                    alt="game-thumb"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="game__content">
                  <div className="section-header text-start">
                    <h2>UNLOCK FREE SPIN</h2>
                    <p>
                      "Engage in the excitement of daily free spins as our
                      platform offers you the chance to win big every day! With
                      up to three spins available, you can try your luck and
                      discover amazing rewards. Don't miss out on the thrill –
                      spin the wheel now and enjoy the anticipation of what each
                      daily spin might bring. It's a daily dose of fun and
                      surprises, adding an extra layer of excitement to your
                      gaming experience. Check in regularly to make the most of
                      these daily opportunities and see what fortunes await
                      you!"
                    </p>
                    <a
                      className="default-button reverse-effect"
                      onClick={() => {
                        navigate("/OurAllGames");
                        window.scrollTo(0, 0);
                      }}
                    >
                      <span style={{cursor:"pointer"}}>
                        Browse All Games <FaAngleRight />
                      </span>
                    </a>
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

export default FreeSpin;
