import React from "react";
import { useNavigate } from "react-router-dom";
import Template from "./Template";
import { information } from "./../assets/mocks/games.js";
import "./../assets/css/gameInformation.css";


const GameInformation = () => {
  const gamesInfo = information;
  const months = Object.keys(gamesInfo.games);
  const locations = Object.keys(gamesInfo.locations);
  const navigate = useNavigate();
  const goToGameDetail = (month, gameId) =>  navigate(`/games/${month}/${gameId}`);
  
  return (
    <>
      <Template title="NYSL Game Information">
        <h2>Fall Schedule</h2>
        <p>* All games take place on Saturday</p>
        {months.map((month, index) => (
          <table key={month + index} className="table game__table">
            <thead>
              <tr>
                <th scope="col" className="gameInfo_col">{month.toUpperCase()}</th>
                <th scope="col" className="gameInfo_col">Teams</th>
                <th scope="col" className="gameInfo_col">Location</th>
                <th scope="col" className="gameInfo_col">Times</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(gamesInfo.games[month]).map((date, index) => (
                <React.Fragment key={index}>
                  {gamesInfo.games[month][date].games.map(
                    (gameDetail, index) => (
                      <tr onClick={()=>goToGameDetail(month,gameDetail.id)} key={date + index}>
                        <th>{index === 0 ? date : ""}</th>
                       
                        <td className="cell">{gameDetail.team}</td>
                        <td className="cell">{gameDetail.location}</td>
                        <td className="cell">{gameDetail.time}</td>

                      </tr>
                    )
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        ))}
        <div>
          <strong>Game locations:</strong>
          {locations.map((location, index) => (
            <div key={index}>
              <div className="game__details">
                <p>
                  <strong>{gamesInfo.locations[location].fullName}</strong>
                </p>
                <p>{gamesInfo.locations[location].address}</p>
              </div>
              <iframe
                className="game__map"
                src={gamesInfo.locations[location].mapUrl}
              />
            </div>
          ))}
        </div>
        <div className="general-info">
          <p>
            <strong>Facility Type: </strong>Outdoor
          </p>
          <p>
            <strong>Additional Information: </strong>If deemed necessary by
            NYSL, games may be shortened or cancelled due to extreme weather
            conditions. Phone: (630) 690-8132 Email:
            michael.randall@chisoccer.org
          </p>
          <p>
            <strong>Please direct all questions to: </strong>Michael Randall,
            League Coordinator
          </p>
          <div className="contact-info">
            <p>
              <strong>Phone: </strong>(630) 690-8132
            </p>
            <p>
              <strong>Email: </strong>{" "}
              <a href="mailto:michael.randall@chisoccer.org">
                michael.randall@chisoccer.org
              </a>
            </p>
          </div>
        </div>
      </Template>
    </>
  );
};

export default GameInformation;
