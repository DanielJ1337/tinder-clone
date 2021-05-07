import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "../firebase";
import "../css/tinderCards.css";

export const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    database
      .collection("celebs")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  /* 
 * how to add items to an array in React without overwriting the existing data 
  ! setPeople([...people, 'sonny', 'qazi'])
 */
  return (
    <div className="tinderCard">
      <div className="tinderCard__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};
