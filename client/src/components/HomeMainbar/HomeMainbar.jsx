import React from "react";
import "./HomeMainbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import QuestionList from "./QuestionList";

function HomeMainbar() {
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();
  const questionList = [
    {
      id: 1,
      votes: 3,
      noOfAnswer: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongodb"],
      userPosted: "mano",
      askedOn: "jan 1",
    },
    {
      id: 2,
      votes: 0,
      noOfAnswer: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R ", "python"],
      userPosted: "mano",
      askedOn: "jan 1",
    },
    {
      id: 3,
      votes: 1,
      noOfAnswer: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongodb"],
      userPosted: "mano",
      askedOn: "jan 1",
    },
  ];

  const checkAuth = () => {
    if (user === null) {
      alert("log in or sign up");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-div">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionList === null ? (
          <h1>Loading.....</h1>
        ) : (
          <>
            <p>{questionList.length} Questions</p>
            <QuestionList questionList={questionList} />
          </>
        )}
      </div>
    </div>
  );
}

export default HomeMainbar;
