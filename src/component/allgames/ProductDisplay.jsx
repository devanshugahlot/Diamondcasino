import React, { useContext } from "react";
// import star_icon from "../Assets/star_icon.png";
import { ShopContext } from "./ShopContext";
import Question from "../Question";
import RealtedGames from "../RealtedGames";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleRight, FaPlay } from "react-icons/fa";
import popular_game from "../../component/allgames/Assets/popular_game";
import popular_gamesecond from "../../component/allgames/Assets/popular_gamesecond";
import SeoHelmet from "../Helmet";
import all_product from "./Assets/all_product";
const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const { removeToCart } = useContext(ShopContext);

  const navigate = useNavigate();

  // Check if the 'product' object is defined
  if (!product) {
    return null; // or display a loading state or an error message
  }
  // Check if the 'image' property is defined
  if (!product.image) {
    return (
      <div>
        {/* Display an error message or placeholder image if 'image' is undefined */}
        <p>Error: Product image not available</p>
      </div>
    );
  }

  return (
    <div>
      {all_product.map((item, index) => {
        return (
          <SeoHelmet
            pagetitle={item.Title}
            description={item.Description}
            keywords={item.Keyword}
          />
        );
      })}
      <section
        className="pageheader-section"
        style={{
          backgroundImage:
            "url(/images/1000_F_416254586_YnctPtejbIpnRuwdPK2wd559TpSm3duR-transformed-transformed.jpeg)",
        }}
      >
        <div className="container">
          <div className="section-wrapper text-center text-uppercase">
            <h1 className="pageheader-title">{product.name}</h1>
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
                  {product.name}
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
                    src={product.image}
                    alt="about-image"
                    className="w-100"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="about-wrapper">
                  <div className="section-header">
                    <h2>{product.name}</h2>
                  </div>
                  <div className="about-content">
                    <p>{product.pargraph}</p>
                    <ul className="about-list">
                      <li className="about-item d-flex flex-wrap">
                        <div className="about-item-thumb">
                          <img src="/images/icon-3.png" alt="Icon" />
                        </div>
                        <div className="about-item-content">
                          <h5>{product.featureshead}</h5>
                          <p>{product.features}</p>
                        </div>
                      </li>
                      <li className="about-item d-flex flex-wrap">
                        <div className="about-item-thumb">
                          <img src="/images/icon-3.png" alt="Icon" />
                        </div>
                        <div className="about-item-content">
                          <h5>{product.featureshead1}</h5>
                          <p>{product.features1}</p>
                        </div>
                      </li>
                      <li className="about-item d-flex flex-wrap">
                        <div className="about-item-thumb">
                          <img src="/images/icon-3.png" alt="Icon" />
                        </div>
                        <div className="about-item-content">
                          <h5>{product.featureshead2}</h5>
                          <p>{product.features2}</p>
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
      <div
        className="game-section padding-top padding-bottom overflow-hidden"
        style={{ backgroundImage: "url(assets/images/match/bg.jpg)" }}
      >
        <div className="container">
          <div className="section-header">
            <h2>OUR POPULAR GAMES</h2>
          </div>
          <div className="row g-4 grid">
            {popular_game.map((item, index) => {
              return (
                <div className="col-lg-6 col-12 cat-1">
                  <div className="game__item item-layer">
                    <div className="game__inner text-center p-0">
                      <Link to={`/AllGame/${item.name}`}>
                        <div className="game__thumb mb-0">
                          <img
                            src={item.image}
                            alt="game-img"
                            className="rounded-3 w-100"
                          />
                        </div>
                      </Link>
                      <div className="game__overlay">
                        <div className="game__overlay-left">
                          <h4>{item.name}</h4>
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
              );
            })}

            {popular_gamesecond.map((item, index) => {
              return (
                <div className="col-lg-6 col-12 cat-1">
                  <div className="game__item item-layer">
                    <div className="game__inner text-center p-0">
                      <Link to={`/AllGame/${item.name}`}>
                        <div className="game__thumb mb-0">
                          <img
                            src={item.image}
                            alt="game-img"
                            className="rounded-3 w-100"
                          />
                        </div>
                      </Link>
                      <div className="game__overlay">
                        <div className="game__overlay-left">
                          <h4>{item.name}</h4>
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
              );
            })}
          </div>
          <div className="button-wrapper text-center mt-5">
            <a
              className="default-button reverse-effect"
              onClick={() => {
                navigate("/AllGames");
                window.scrollTo(0, 0);
              }}
            >
              <span>
                Browse All Games <FaAngleRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
