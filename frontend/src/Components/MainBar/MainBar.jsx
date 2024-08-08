import "./MainBar.css";
import { useNavigate } from "react-router-dom";


export const MainBar = () => {
  const navigate = useNavigate();
  const handleViewScores = () => {
    navigate("/scores");
  };

  return (
    <div>
      <section id="home">
        <div className="container1">
          <div id="contentSide1">
            <p><span id="spanText">SportsHub</span> is your ultimate destination for live scores, in-depth analysis, and exclusive interviews. Stay updated with the latest news on football, basketball, cricket, and more. Join our community to discuss and share your passion for sports!</p>
            <p id="slide-in-text">Stick around to see Services of Sports Dunia.</p>
          </div>
          <div id="contentSide2">
              <button id="but-score" onClick={handleViewScores}>View Live Scores</button>
          </div>
        </div>
      </section>
    </div>
  );
};
