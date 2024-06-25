import React from "react";
import "./Tournament.css";
import { useNavigate } from "react-router-dom";
import SeoHelmet from "./Helmet";
const Tournament = () => {
  const navigate = useNavigate();
  const data = [
    {
      name: "₹10k Midweek Moolha",
      startsIn: "11:40",
      endsIn: "12:00",
      players: 232,
      prize: "₹1000",
      entryFee: "₹5",
      bonus: "Yes",
    },
    {
      name: "₹10k Midweek Moolha",
      startsIn: "11:40",
      endsIn: "12:00",
      players: 232,
      prize: "₹1000",
      entryFee: "₹5",
      bonus: "Yes",
    },
    {
      name: "₹10k Midweek Moolha",
      startsIn: "11:40",
      endsIn: "12:00",
      players: 232,
      prize: "₹1000",
      entryFee: "₹5",
      bonus: "Yes",
    },
    {
      name: "₹10k Midweek Moolha",
      startsIn: "11:40",
      endsIn: "12:00",
      players: 232,
      prize: "₹1000",
      entryFee: "₹5",
      bonus: "Yes",
    },
    {
      name: "₹10k Midweek Moolha",
      startsIn: "11:40",
      endsIn: "12:00",
      players: 232,
      prize: "₹1000",
      entryFee: "₹5",
      bonus: "Yes",
    },
    {
      name: "₹10k Midweek Moolha",
      startsIn: "11:40",
      endsIn: "12:00",
      players: 232,
      prize: "₹1000",
      entryFee: "₹5",
      bonus: "Yes",
    },
  ];

  return (
    <div>
       <SeoHelmet
        pagetitle="Diamond casino - Play The Game and Win Tournament"
        description="Join in a Diamond casino gaming competition to use your skills to real earn
cash! Win by playing games like Teen Patti, Car Roulette, Rummy, and Ludo by you or as a
team!
"
        keywords=" Win Tournament, Play The Game, Real earn Cash, Diamond casino, Play and Earn real
Cash, Online Gaming Platform, competitive gaming platform, game tournaments, online
tournaments today,"
      />
      <section
        className="pageheader-section"
        style={{ backgroundImage: "url(/images/1000_F_416254586_YnctPtejbIpnRuwdPK2wd559TpSm3duR-transformed-transformed.jpeg)" }}
      >
        <div className="container">
          <div className="section-wrapper text-center text-uppercase">
            <h2 className="pageheader-title">Our Game  Tournament</h2>
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
                  Tournament
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <div className="tunament padding-top padding-bottom">
        <div className="container">
          <div className="section-wrapper">
            <div className="achievement-area">
              <ul
                className="nav nav-tabs align-items-center"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation" title="ALL">
                  <button
                    className="nav-link active"
                    id="tabAll-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tabAll"
                    type="button"
                    role="tab"
                    aria-controls="tabAll"
                    aria-selected="true"
                  >
                    All
                  </button>
                </li>
                <li className="nav-item" role="presentation" title="Blackjack">
                  <button
                    className="nav-link"
                    id="tabOne-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tabOne"
                    type="button"
                    role="tab"
                    aria-controls="tabOne"
                    aria-selected="false"
                  >
                    Start
                  </button>
                </li>
                <li className="nav-item" role="presentation" title="Slots">
                  <button
                    className="nav-link"
                    id="tabTwo-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tabTwo"
                    type="button"
                    role="tab"
                    aria-controls="tabTwo"
                    aria-selected="false"
                  >
                    Upcoming
                  </button>
                </li>
                <li
                  className="nav-item"
                  role="presentation"
                  title="Texas hold'em"
                >
                  <button
                    className="nav-link"
                    id="tabThree-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tabThree"
                    type="button"
                    role="tab"
                    aria-controls="tabThree"
                    aria-selected="false"
                  >
                    Complete
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="tabAll"
                  role="tabpanel"
                  aria-labelledby="tabAll-tab"
                >
                  <table className="table text-white">
                    <thead>
                      <tr>
                        <th style={{ color: "white" }}>Tournament</th>
                        <th style={{ color: "white" }}>Starts In</th>
                        <th style={{ color: "white" }}>Ends In</th>
                        <th style={{ color: "white" }}>Players</th>
                        <th style={{ color: "white" }}>Prize(₹)</th>
                        <th style={{ color: "white" }}>Entry Fee</th>
                        <th style={{ color: "white" }}>Bonus</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row) => {
                        return (
                          <tr>
                            <td style={{ color: "white" }}>{row.name}</td>
                            <td style={{ color: "white" }}>{row.bonus}</td>
                            <td style={{ color: "white" }}>{row.endsIn}</td>
                            <td style={{ color: "white" }}>{row.entryFee}</td>
                            <td style={{ color: "white" }}>{row.players}</td>
                            <td style={{ color: "white" }}>{row.prize}</td>
                            <td style={{ color: "white" }}>{row.startsIn}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="d-flex flex-wrap justify-content-between align-items-center tunament__footer">
                    <div className="tunament__left">
                      <h5>All Rummy Tournaments</h5>
                    </div>
                    {/* <div className="tunament__right">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination mb-0 pb-0">
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Previous"
                            >
                              <span aria-hidden="true">«</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link active" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">»</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div> */}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tabOne"
                  role="tabpanel"
                  aria-labelledby="tabOne-tab"
                >
                  <table className="table text-white">
                    <thead>
                      <tr>
                        <th style={{ color: "white" }}>Tournament</th>
                        <th style={{ color: "white" }}>Starts In</th>
                        <th style={{ color: "white" }}>Ends In</th>
                        <th style={{ color: "white" }}>Players</th>
                        <th style={{ color: "white" }}>Prize(₹)</th>
                        <th style={{ color: "white" }}>Entry Fee</th>
                        <th style={{ color: "white" }}>Bonus</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row) => {
                        return (
                          <tr>
                            <td style={{ color: "white" }}>{row.name}</td>
                            <td style={{ color: "white" }}>{row.bonus}</td>
                            <td style={{ color: "white" }}>{row.endsIn}</td>
                            <td style={{ color: "white" }}>{row.entryFee}</td>
                            <td style={{ color: "white" }}>{row.players}</td>
                            <td style={{ color: "white" }}>{row.prize}</td>
                            <td style={{ color: "white" }}>{row.startsIn}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="d-flex flex-wrap justify-content-between align-items-center tunament__footer">
                    <div className="tunament__left">
                      <h5>All Rummy Tournaments</h5>
                    </div>
                    {/* <div className="tunament__right">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination mb-0 pb-0">
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Previous"
                            >
                              <span aria-hidden="true">«</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">»</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div> */}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tabTwo"
                  role="tabpanel"
                  aria-labelledby="tabTwo-tab"
                >
                  <table className="table text-white">
                    <thead>
                      <tr>
                        <th style={{ color: "white" }}>Tournament</th>
                        <th style={{ color: "white" }}>Starts In</th>
                        <th style={{ color: "white" }}>Ends In</th>
                        <th style={{ color: "white" }}>Players</th>
                        <th style={{ color: "white" }}>Prize(₹)</th>
                        <th style={{ color: "white" }}>Entry Fee</th>
                        <th style={{ color: "white" }}>Bonus</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row) => {
                        return (
                          <tr>
                            <td style={{ color: "white" }}>{row.name}</td>
                            <td style={{ color: "white" }}>{row.bonus}</td>
                            <td style={{ color: "white" }}>{row.endsIn}</td>
                            <td style={{ color: "white" }}>{row.entryFee}</td>
                            <td style={{ color: "white" }}>{row.players}</td>
                            <td style={{ color: "white" }}>{row.prize}</td>
                            <td style={{ color: "white" }}>{row.startsIn}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="d-flex flex-wrap justify-content-between align-items-center tunament__footer">
                    <div className="tunament__left">
                      <h5>All Rummy Tournaments</h5>
                    </div>
                    {/* <div className="tunament__right">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination mb-0 pb-0">
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Previous"
                            >
                              <span aria-hidden="true">«</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">»</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div> */}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tabThree"
                  role="tabpanel"
                  aria-labelledby="tabThree-tab"
                >
                  <table className="table text-white">
                    <thead>
                      <tr>
                        <th style={{ color: "white" }}>Tournament</th>
                        <th style={{ color: "white" }}>Starts In</th>
                        <th style={{ color: "white" }}>Ends In</th>
                        <th style={{ color: "white" }}>Players</th>
                        <th style={{ color: "white" }}>Prize(₹)</th>
                        <th style={{ color: "white" }}>Entry Fee</th>
                        <th style={{ color: "white" }}>Bonus</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row) => {
                        return (
                          <tr>
                            <td style={{ color: "white" }}>{row.name}</td>
                            <td style={{ color: "white" }}>{row.bonus}</td>
                            <td style={{ color: "white" }}>{row.endsIn}</td>
                            <td style={{ color: "white" }}>{row.entryFee}</td>
                            <td style={{ color: "white" }}>{row.players}</td>
                            <td style={{ color: "white" }}>{row.prize}</td>
                            <td style={{ color: "white" }}>{row.startsIn}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="d-flex flex-wrap justify-content-between align-items-center tunament__footer">
                    <div className="tunament__left">
                      <h5>All Rummy Tournaments</h5>
                    </div>
                    {/* <div className="tunament__right">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination mb-0 pb-0">
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Previous"
                            >
                              <span aria-hidden="true">«</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">»</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div> */}
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

export default Tournament;
