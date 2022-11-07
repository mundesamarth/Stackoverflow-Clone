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
      _id: 1,
      upVotes: 3,
      downVotes: 2,
      noOfAnswer: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongodb"],
      userPosted: "mano",
      userId: 1,
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answerdOn: "jan 2",
          userId: 2,
        },
      ],
    },
    {
      _id: 2,
      upVotes: 0,
      downVotes: 0,
      noOfAnswer: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R ", "python"],
      userPosted: "mano",
      userId: 1,
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answerdOn: "jan 2",
          userId: 2,
        },
      ],
    },
    {
      _id: 3,
      upVotes: 2,
      downVotes: 2,
      votes: 1,
      noOfAnswer: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongodb"],
      userPosted: "mano",
      userId: 1,
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answerdOn: "jan 2",
          userId: 2,
        },
      ],
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
