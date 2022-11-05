import React from "react";


function Questions(question) {
  return (
    <div className="display-ans-container">
      <div className="display-votes-ans"> 
        <p>{question.votes}</p>
      <p>Votes</p>
      </div>
      <div className="display-votes-ans"> 
        <p>{question.noOfAnswer}</p>
      <p>Answer</p>
      </div>
    </div>
  );
}

export default Questions;
