import React, { useState } from "react";

const Textform = (props) => {
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const change = () => {
    setText(text.toUpperCase());
  };
  const changel = () => {
    setText(text.toLowerCase());
  };
  const removes = () => {
    setText(text.split(/[ ]+/).join(" "));
  };
  const clear = () => {
    setText('');
  };

  return (
    <>
    <div className="container" style={{color: props.mode=== 'dark'?'grey':'black'}}>
      <h1 className="my-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={8}
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode=== 'dark'?'grey':'white'}}
        />
      </div>
      <button className="btn btn-primary" onClick={change}>
        UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={changel}>
        LowerCase
      </button>
      <button className="btn btn-primary mx-2" onClick={removes}>
        Remove Space
      </button>
      <button className="btn btn-primary mx-2" onClick={clear}>
        Clear
      </button>

      <div className="container">
        <h2 className="my-4">Your Text Summary</h2>
        <p>{text.length} Characters</p>
        <p>{text.split(" ").length} Word</p>
        <p>{0.008 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter your words in box'}</p>
      </div>
      </div>
    </>
  );
};

export default Textform;
