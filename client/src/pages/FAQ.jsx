import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_QUESTION } from "../utils/queries";
import { LuPencil as PencilIcon } from "react-icons/lu";
import { BsTrash3 as TrashIcon } from "react-icons/bs"

const FAQ = () => {

  const { loading, data } = useQuery(QUERY_QUESTION);
  


  if (loading) return <p>Loading...</p>;

  const questions = data.questions;

  return (
  
    <div className="page-container">
      <h3 className="page-header">Commonly Asked Questions</h3>
      <div className="about-caq">
        Sick of answering the same questions over and over? Store them here for
        future reference!
      </div>
      <ul>
                {questions.map((item, index) => (
                  <li key={index}>
                    <div className="question-container">
                      <span className="question">
                        {item.question}
                        <button className="edit"><PencilIcon/></button>
                        <button className="delete"><TrashIcon/></button>
                      </span>
                      <span className="answer">
                      {item.response}
                      </span>
                    </div>
                     
                  </li>
                ))}
              </ul>
              </div>
  );
};

export default FAQ;
