import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoMdDownload } from "react-icons/io";
import "./AppDownload.css"; // Import your CSS file

function AppDownload() {
  //   const navigate = useNavigate();

  const handleClick = () => {
    // navigate('/OurAllGames');
    // window.scrollTo(0, 0);
  };

  return (
    <div style={{ textAlign: "center" }} className="fixed-bottom">
      <a style={{ textDecoration: "none" }} href="https://admin.dreambest.in/letscard/dreambest_1.0.apk" className="lab-btn ">
        <span
          className="ALL-GAMES-SPAN"
          style={{
            fontWeight: "600",
            fontSize: "30px",
            fontFamily: "ariel",
            height: "70px",
            marginTop: "30px",
          }}
        >
          <IoMdDownload /> DOWNLOAD APP
        </span>
      </a>
    </div>
  );
}

export default AppDownload;
