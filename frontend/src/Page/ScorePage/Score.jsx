import "./Score.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";

export const Score = () => {
  const [sports, setSports] = useState([]);
  const [selectedSport, setSelectedSport] = useState("");
  const [scores, setScores] = useState([]);

  const fetchSports = async () => {
    try {
      const response = await axios.get("http://localhost:3001/score/get");
      const sportNames = response.data.response.map(sport => sport.sportName);
      setSports(sportNames);
    } catch (error) {
      console.error("Error fetching sports:", error);
    }
  };

  const fetchScores = async (sportName) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/score/getScores",
        { sportName }
      );
      const teams = response.data.teams.map(team => ({
        teamName: team.teamName,
        score: team.score,
        time: team.time,
      }));
      setScores(teams);
      console.log(teams, "teams");
    } catch (error) {
      console.error("Error fetching scores:", error);
    }
  };

  const handleSportSelect = (sportName) => {
    setSelectedSport(sportName);
    fetchScores(sportName);
  };

  useEffect(() => {
    fetchSports();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="dropdown">
        <button className="dropbtn">Select Sport</button>
        <div className="dropdown-content">
          {sports.map((sport, index) => (
            <a key={index} href="#" onClick={() => handleSportSelect(sport)}>
              {sport}
            </a>
          ))}
        </div>
      </div>
      {selectedSport && (
        <div>
          <h3>Scores for {selectedSport}</h3>
          <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>Team Name</th>
                <th>Score</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((team, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{team.teamName}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{team.score}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{new Date(team.time).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    
  );
};
