import React, { useState } from "react";
import "./AllGames.css";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const gamesData = [
  {
    category: "collection-three",
    name: "Jandi Munda Game",
    image: "/images/jandimunda.webp",
  },
  {
    category: "collection-three",
    name: "Car Roulette games",
    image: "/images/download (1) (1).jpeg",
  },
  {
    category: "collection-three",
    name: "Zoo Roulette games",
    image: "/images/zoo (1).jpeg",
  },

  {
    category: "collection-three",
    name: "Poker games",
    image: "/images/poker (1).jpeg",
  },
  {
    category: "collection-three",
    name: " Head & Tail",
    image: "/images/headtail (1).jpeg",
  },

  {
    category: "collection-three",
    name: "Rummy games",
    image: "/images/rummylogo (1).jpeg",
  },
  {
    category: "collection-three",
    name: " Andar Bahar Games",
    image: "/images/andarbhar (1).jpeg",
  },
  {
    category: "collection-three",
    name: " Baccarat",
    image: "/images/bascarat (1).jpeg",
  },

  {
    category: "collection-three",
    name: "Red Black games",
    image: "/images/redblack (1).jpeg",
  },

  {
    category: "collection-one",
    name: "Color Prediction ",
    image: "/images/colorpredtionai.jpg",
  },
  {
    category: "collection-two",
    name: " Private Table",
    image: "/images/privatetable (1).jpeg",
  },

  {
    category: "collection-three",
    name: "Jackpot 3 Patti",
    image: "/images/jackpoat3patti.jpeg",
  },

  {
    category: "collection-one",
    name: "Roulette",
    image: "/images/roullateai.jpg",
  },
  {
    category: "collection-two",
    name: "Deal rummy",
    image: "/images/dealrummyai.jpg",
  },

  {
    category: "collection-one",
    name: "3 patti games",
    image: "/images/unnamed.webp",
  },

  {
    category: "collection-three",
    name: "Dragon & Tiger",
    image: "/images/download.jpeg",
  },

  {
    category: "collection-three",
    name: "Private rummy",
    image: "/images/privaterummyai.jpg",
  },

  {
    category: "collection-one",
    name: " Custom Bot",
    image: "/images/images (1) (1).jpeg",
  },
  {
    category: "collection-two",
    name: "Point Rummy",
    image: "/images/download (point).jpeg",
  },
  {
    category: "collection-two",
    name: "Pool Rummy",
    image: "/images/images (2) (1).jpeg",
  },
];

const AllGames = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredGames =
    activeFilter === "*"
      ? gamesData
      : gamesData.filter((game) => game.category === activeFilter);
  const navigate = useNavigate();
  return (
    <div>
      <section
        className="pageheader-section"
        style={{
          backgroundImage:
            "url(/images/1000_F_416254586_YnctPtejbIpnRuwdPK2wd559TpSm3duR-transformed-transformed.jpeg)",
        }}
      >
        <div className="container">
          <div className="section-wrapper text-center text-uppercase">
            <h2 className="pageheader-title">Our ALL Games </h2>
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
                  matches {/* Corrected typo */}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="collection-section padding-top padding-bottom">
        <div className="container">
          <div className="section-wrapper">
            <ul className="collection-filter-button-group common-filter-button-group d-flex flex-wrap justify-content-center mb-5 text-uppercase">
              <li
                className={activeFilter === "*" ? "is-checked" : ""}
                onClick={() => handleFilterClick("*")}
                data-filter="*"
              >
                All games
              </li>
              <li
                className={
                  activeFilter === "collection-one" ? "is-checked" : ""
                }
                onClick={() => handleFilterClick("collection-one")}
                data-filter="collection-one"
              >
                Multi games
              </li>
              <li
                className={
                  activeFilter === "collection-two" ? "is-checked" : ""
                }
                onClick={() => handleFilterClick("collection-two")}
                data-filter="collection-two"
              >
                Skill
              </li>
              <li
                className={
                  activeFilter === "collection-three" ? "is-checked" : ""
                }
                onClick={() => handleFilterClick("collection-three")}
                data-filter="collection-three"
              >
                Slots
              </li>
            </ul>

            <div className="row g-4 justify-content-center collection-grid">
              {filteredGames.map((game, index) => (
                <div
                  key={index}
                  className={`col-lg-3 col-md-4 col-sm-6 gameListItem ${game.category}`}
                >
                  <div className="game__item item-layer">
                    <div className="game__inner text-center p-0">
                      <div className="game__thumb mb-0">
                        <img
                          src={game.image}
                          alt={`Thumbnail for ${game.name}`}
                          className="rounded-3 w-100"
                        />
                      </div>
                      <div className="game__overlay">
                        <h4>{game.name}</h4>
                        <a href="" className="default-button">
                          <span>
                            play now <FaAngleRight />
                          </span>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllGames;
