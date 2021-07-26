import React, { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

const Markdown = () => {
  const [markDown, setMarkDown] = useState("Welcome to MarkDown");
  return (
    <>
      <div className="main">
        <div className="left center">
          <div className="left">
            <h1>TextEditor</h1>
            <hr style={{marginBottom:"7px",marginTop:"5px"}}/>
            <textarea
              rows="27"
              cols="10"
              className="text"
              spellCheck={false}
              value={markDown}
              onChange={(e) => {
                setMarkDown(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className="center right">
          <h1 style={{ color: "blue" }}>Markdown</h1>
          <hr className="hright"/>
          <div className="right">
            <ReactMarkdown>{markDown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default Markdown;
