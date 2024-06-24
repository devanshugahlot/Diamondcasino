import React from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";
import SeoHelmet from "./Helmet";
const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <SeoHelmet
        pagetitle="Contact Us - Diamond casino Gaming App"
        description="Diamond casino provides the best customer service. Email our 24-hour customer
support to get in contact with us. Email us at info.Diamond casino123@gmail.com.
"
        keywords="- Download Game, Download App, Play and Earn Money, Contact Diamond casino,
Diamond casino, Diamond casino, Diamond casino gaming App,
"
      />

      <section
        className="pageheader-section"
        style={{
          backgroundImage:
            "url(/images/1000_F_416254586_YnctPtejbIpnRuwdPK2wd559TpSm3duR-transformed-transformed.jpeg)",
        }}
      >
        <div className="container">
          <div className="section-wrapper text-center text-uppercase">
            <h2 className="pageheader-title">24 Hour Customer Support</h2>
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
                  Contact
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <div style={{ paddingTop: "50px" }}>
        <div className="container-inner">
          <h3
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              marginRight: "30px",
              marginBottom: "50px",
            }}
          >
            For any kind of queries, please write to us below{" "}
          </h3>
          <div>
            <div
              style={{ display: "flex" }}
              className="form-div-popup-container"
            >
              <div className="main-popup-form">
                <div className="main-popup-form-inputs">
                  <input type="text" placeholder="Enter your full name" />
                  <input type="text" placeholder="Enter subject " />
                </div>
                <div className="main-popup-form-inputs1">
                  <input type="text" placeholder="Enter your phone number" />
                  <input type="text" placeholder="Enter your Gmail Address" />
                </div>

                <div className="main-popup-form-textera">
                  <textarea
                    name=""
                    id=""
                    cols="42"
                    rows="7"
                    placeholder="Write your query  (Minimum 150 characters)"
                  ></textarea>
                </div>

                <div className="form-button-div">
                  <button>CONTACT US</button>
                </div>
              </div>

              <div className="image-inner-none">
                <img
                  style={{ width: "460px", marginLeft: "20%", height: "51vh" }}
                  src="/images/Inside a wrecked spaceship is a rave with children (1).webp"
                  alt="wd"
                />
              </div>
            </div>
          </div>
          <h4
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              marginRight: "30px",
              marginTop: "40px",
            }}
          >
            Dream Best Email Support
          </h4>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              marginRight: "30px",
            }}
          >
            Do you want to talk about something specific? Please contact us at
            +917003790796 if you have any questions. Our mailbox
            is accessible to answer any questions or provide feedback.
          </p>
        </div>
        <div style={{ paddingTop: "100px" }} className="container">
          <div className="section-header">
            <h2>We're Always Eager To Hear From You!</h2>
          </div>
          <div className="section-wrapper">
            <div className="row justify-content-center g-4">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="contact-item text-center">
                  <div className="contact-thumb mb-4">
                    <img
                      style={{ width: "40px" }}
                      src="/images/telephone.png"
                      alt="contact-thumb"
                    />
                  </div>
                  <div className="contact-content">
                    <h6 className="title">Contact Us</h6>
                    <a href="https://www.google.com/maps/place/Mumbai, Maharashtra">
                      <p>7003790796</p>
                    </a>
                  </div>
                </div>
              </div>
{/* 
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="contact-item text-center">
                  <div className="contact-thumb mb-4">
                    <img src="/images/03 (1).png" alt="contact-thumb" />
                  </div>
                  <div className="contact-content">
                    <h6 className="title">Send Email</h6>
                    <a href="mailto:info.dreambestt14@gamil.com">
                      <p>dreambestt14@gamil.com</p>
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="contact-section">
    <div className="contact-top padding-top padding-bottom bg-attachment" style={{backgroundImage: 'url(assets/images/video/bg.jpg)'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="contact-form-wrapper text-center">
              <div className="section-header">
                <h2>Fill The Form Below So We Can Get To Know You And Your Needs Better.</h2>
              </div>
              <form className="contact-form" action="contact.php" id="contact-form" method="POST">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" id="name" name="name" required="required" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Your Email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Phone" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" id="subject" name="subject" required />
                </div>
                <div className="form-group w-100">
                  <textarea name="message" rows={8} id="message" placeholder="Your Message" required defaultValue={""} />
                </div>
                <div className="form-group w-100 text-center">
                  <button className="default-button" type="submit"><span>Send our Message</span></button>
                </div>
              </form>
              <p className="form-message" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="contact-bottom">
      <div className="contac-bottom">
        <div className="row justify-content-center g-0">
          <div className="col-12">
            <div className="location-map">
              <div id="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.229026386336!2d75.76772217489444!3d26.896225660799896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db59e52d6cb5d%3A0x13f14d327ae6a92!2sShyam%20nagar%20metro%20station!5e0!3m2!1sen!2sin!4v1702556120245!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
    </div>
  );
};

export default Contact;
