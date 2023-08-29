import React, { useState } from "react";

const AddQuestion = () => {
  return (
    <div className="page-container">
      <h3 className="page-header">Add A Question</h3>
      <div className="input-fields">
        <span className="form-header">Question:</span>
        <input className="input-response" type="text" />
        <span className="form-header">Answer:</span>
        <input className="input-response" type="text" />
        <button className="save-question">Save</button>
      </div>
    </div>
  );
};

export default AddQuestion;
