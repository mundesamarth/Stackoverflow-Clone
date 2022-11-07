import React from "react";
import { useParams ,Link} from "react-router-dom";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./QuestionDetails.css";
import Avatar from '../../components/Avatar/Avatar.jsx'
function QuestionDetails() {
  const { id } = useParams();

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
  return (
    <div className="question-details-page">
      {questionList === null ? (
        <h1>Loading........</h1>
      ) : (
        <>
          {questionList
            .filter((question) => question._id === Number(id))
            .map((question) => (
              <div key="question._id">
                <section className="question-detail-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <ArrowDropUpIcon className="upVote" />
                      <p>{question.upVotes - question.downVotes}</p>
                      <ArrowDropDownIcon className="downVote" />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p>{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-action-user">
                        <div>
                          <button type="button">Share</button>
                          <button type="button">Delete</button>
                        </div>
                        <div>
                          <p> asked {question.askedOn}</p> 
                          <Link to={`/User/${question.userId}`} className="user-link" style={{color:"#0086d8"}}>
                            <Avatar backgroundColor="orange" px="8px" py="5px" >
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default QuestionDetails;
