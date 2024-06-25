import React, { useState } from "react";
import "./Question.css";
const Question = () => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const faqData = [
    {
      question: " What are money-earning games?",
      answer:
        "Games that let you play online and win money are known as real money-earning games. On desktop computers, tablets, and mobile devices, these real money online games are easily available. They can be found in a number of media, including webpages and mobile applications. These games provide players with the opportunity to win real money rewards and are made to be both captivating and enjoyable.",
    },
    {
      question: " Are all money-earning games free to play?  ",
      answer:
        "No, not every game offered by Diamond casino is free. Still, there are a number of free-to-play games and freeroll tournaments where you can win real money. A fee is required to enter some of the revenue-generating games. Always keep an eye out for Diamond casino competitions and app offers.",
    },
    {
      question: " Can I play real money games on my mobile device?",
      answer:
        "Yes. To play games for real money, download the Diamond casino app to your smartphone. Select your preferred game to play to win cash prizes!",
    },
    {
      question:
        " How can I differentiate between real cash games and free games?      ",
      answer:
        "There are categories on the Diamond casino app once you log in that indicate which games are free to play and which ones cost money. To get real money, you can play games with real cash. Note: On Diamond casino, there's also a chance to win cash in certain free games.",
    },
    // Add more FAQs as needed
  ];

  // Add more FAQs as needed
  const handleAccordionClick = (index) => {
    setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div>
      <section className="faq padding-top padding-bottom">
        <div className="container">
          <div className="row justify-content-center flex-row-reverse">
            <div className="col-lg-6 col-12">
              <div className="faq-right-part">
                <div className="faq-thumb">
                  <img
                    src="/images/casino15-removebg-preview.png"
                    alt="faq-thumb"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="faq-left-part">
                <div className="section-header text-start">
                  <h2>FREQUENTLY ASK QUESTION</h2>
                  <p>
                    At Modeltheme we show only the best websites and portfolios
                    built completely with passion simplicity and creativity !
                  </p>
                </div>
                <div className="section-wrapper">
                  <ul className="accordion">
                    {faqData.map((faq, index) => (
                      <li key={index} className="accordion-item">
                        <div
                          className={`accordion-list ${clickedIndex === index ? "active" : ""
                            }`}
                          onClick={() => handleAccordionClick(index)}
                        >
                          <div className="left">
                            <div className="icon" />
                          </div>
                          <div className="right">
                            <h6>{faq.question}</h6>
                          </div>
                        </div>
                        <div
                          style={{ marginTop: "10px" }}
                          className={` ${clickedIndex === index ? "" : "accordion-answer"
                            }`}
                        >
                          <p className="text-white">{faq.answer}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Question;
