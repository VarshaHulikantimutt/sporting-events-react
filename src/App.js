import React, { useState } from "react";
import "./styles.css";

const eventDictionary = {
  Football: [
    { name: "World Cup of Soccer", views: "3.3 Billion Viewers" },
    { name: "Women’s World Cup", views: "1.12 Billion Viewers" },
    { name: "Super Bowl", views: "102 Million Viewers" }
  ],
  Cricket: [{ name: "Cricket World Cup", views: "2.6 Billion Viewers" }],
  Basketball: [
    { name: "NBA Finals ", views: "18.5 Million Viewers" },
    { name: "NCAA Final Four ", views: "19.6 Million Viewers" }
  ],
  Tennis: [{ name: "Wimbledon", views: "3.3 Million Viewers" }]
};

var eventArray = Object.keys(eventDictionary);

export default function App() {
  const [sportEvent, setSportEvent] = useState("Football");
  function buttonOnClick(sport) {
    setSportEvent(sport);
  }

  return (
    <div className="App">
      <h1> Popular Sporting Events </h1>
      <hr style={{ margin: "2rem 20rem " }} />
      <p atyle={{ fontSize: "smaller" }}>
        {" "}
        Choose a Sport to find out the world's biggest sporting event.
      </p>
      {eventArray.map(function (sport) {
        return (
          <button
            key={sport}
            onClick={() => buttonOnClick(sport)}
            style={{
              width: "8rem",
              height: "3rem",
              borderRadius: "1rem",
              margin: "1rem",
              cursor: "pointer",
              border: "0.5rem",
              fontSize: "1rem"
            }}
          >
            {sport}
          </button>
        );
      })}
      <hr style={{ margin: "2rem 20rem " }} />
      <ul>
        {eventDictionary[sportEvent].map(function (famousEvent) {
          return (
            <div>
              <li
                style={{
                  listStyleType: "none",
                  backgroundColor: "white",
                  padding: "1rem",
                  margin: "1rem",
                  width: "25rem",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
                key={famousEvent.name}
              >
                <div>{famousEvent.name}</div>
                <div style={{ fontSize: "smaller" }}>{famousEvent.views}</div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
