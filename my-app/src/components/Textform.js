import React, { useState } from "react";
export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!" , "Success")
  };
  const handleLoClick = () => {
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!" , "Success")
  };
  const handleCapitalClick = () => {
    // console.log("capitalize was clicked" + text);
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
    props.showAlert("Converted to Capitalized!" , "Success")
  };
  const handleOnChange = (event) => {
    // console.log("on change")
    setText(event.target.value);
  };
  const handleCopy = ()=>{
    let text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copy to clipboard!" , "Success")

  }
  const handleExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove Extra spaces!" , "Success")
  }
  const [text, setText] = useState("");
  // setText("enter new text");
  return (
    <>
      <div className="container" style={{color: props.mode==="dark"?'white':'#082858',}}>
        <div>
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8" style={{backgroundColor: props.mode==="dark"?'grey':'white', color: props.mode==="dark"?"white":"#082858"}}
          ></textarea>
        </div>
        <button className="btn btn-primary my-2 mx-2 abs" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2 " onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-2 " onClick={handleCapitalClick}>
          Convert to Capitalize
        </button>
        <button className="btn btn-primary mx-2 my-2 " onClick={handleCopy}>
         Copy Text
        </button>
        <button className="btn btn-primary mx-2 my-2 " onClick={handleExtraSpace}>
         Remove Extra Spaces
        </button>
      </div>
      <div className="container my-2" style={{color: props.mode==="dark"?'white':'#082858'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something  in textBox and preview it here."}</p>
      </div>
    </>
  );
}
