import React from "react";
import './Error.css'
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Error = () =>
{
  const navigate = useNavigate()
    return <div>
      <section className="pageheader-section" style={{ backgroundImage: "url(/images/bgpages.jpg)" }}>
  <div className="container">
    <div className="section-wrapper text-center text-uppercase">
      <h2 className="pageheader-title">error page</h2>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">error page</li>
        </ol>
      </nav>
    </div>
  </div>
        </section>
      <section className="fore-zero padding-top padding-bottom">
  <div className="container">
    <div className="section-wrapper">
      <div className="zero-item">
        <div className="zero-thumb">
          <img src="/images/404.png" alt={404} />
        </div>
        <div className="zero-content">
          <h2>Oops! This Page Not Found</h2>
          <p>We are Really Sorry But the Page you Requested is Missing 😥☹️☹️</p>
          <a className="default-button reverse-effect" onClick={() => { navigate('/'); window.scrollTo(0, 0); }}>
  <span>Go Back to Home <FaAngleRight /></span>
</a>


        </div>
      </div>
    </div>
  </div>
</section>


  </div>;
};

export default Error;
