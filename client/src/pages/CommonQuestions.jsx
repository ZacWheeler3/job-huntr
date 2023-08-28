import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_QUESTION } from "../utils/mutations";

import Auth from "../utils/auth";

const CommonQuestions = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
const [addedQuestions, setAddedQuestions] = useState([]);

  const [addQuestion, { error }] = useMutation(ADD_QUESTION);

  const handleFormSubmit = async (event) => {
    event.preventDefault();


    try {
      const { data } = await addQuestion({
        variables: {
          question,
          response,
        },
      });
      setAddedQuestions([...addedQuestions, { question, response }]);

      setQuestion("");
      setResponse("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Add a Question</h3>
      {Auth.loggedIn() ? (
        <>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="question"
                placeholder="New Question Here"
                value={question}
              onChange={(e) => setQuestion(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="response"
                placeholder="Response Here"
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                required
              />
            </div>

          

            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Add Question
              </button>
            </div>

            {error && (
              <div className="bg-danger text-white p-3">{error.message}</div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add a job. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}

      <ul>
      {addedQuestions.map((item, index) => (
        <li key={index}>
          Question: {item.question}, Response: {item.response}
        </li>
      ))}
    </ul>
    </div>
  );
};

export default CommonQuestions;
