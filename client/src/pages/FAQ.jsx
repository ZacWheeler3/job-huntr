import React, { useState } from "react";

const FAQ = () => {
  return (
    <div className="page-container">
      <h2 className="caq-header">Commonly Asked Questions</h2>
      <div className="about-caq">
        Sick of answering the same questions over and over? Store them here for
        future reference!
      </div>
      <div className="question-container">
        <span className="question">
          Why do you want this job?
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </span>
        <span className="answer">Because you are hiring</span>
      </div>
      <div className="question-container">
        <span className="question">Why do you believe you're a good fit?
        <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </span>
        
        <span className="answer">
          Because I am amazing and you should hire me
        </span>
      </div>
      <div className="question-container">
        <span className="question">
          What is an example of a time you showed leadership?
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </span>
        <span className="answer">
          Explain a time you showed leadership here
        </span>
      </div>
      <button className="add-question">Add Question</button>
    </div>
  );
};

export default FAQ;
