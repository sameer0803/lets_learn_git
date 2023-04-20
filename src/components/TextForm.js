import React, { useState } from "react";

export default function TextForm(props) {

    const[text,setText]=useState("");

    const handleUpperClick=()=>{
        console.log("Upper case was clicked"+text);
        setText(text.toUpperCase());
        props.showAlert('Converted to Upper Case !!','success');
        

    }

    const handlelowerClick=()=>{
        // console.log("Upper case was clicked"+text);
        setText(text.toLowerCase());
        props.showAlert('Converted to Lower Case !!','success');
    }
    const handleOnChange=(event)=>{
        console.log("Function got change");
        setText(event.target.value);

    }
    

      const handleCopy=()=>{
        let copiedtext= document.getElementById("myBox");
        copiedtext.select();
        navigator.clipboard.writeText(copiedtext.value);
        props.showAlert('Copied Sucessfully!!','success');
   
     }
        
    

    const handleExtraSpaces=()=>{
     let spaceRemover=text.split(/[ ]+/);
     setText(spaceRemover.join(" "))
     props.showAlert('Extra space removed sucessfully','success');
  }


  return (
    <>
    <div className="container" style={{color: props.mode   === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode   === 'dark'?'black':'white' ,color: props.mode   === 'dark'?'white':'black'}} id="myBox" rows="3"></textarea>
      </div>
      <button className="btn btn-primary mx-2"  onClick={handleUpperClick}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-2"  onClick={handlelowerClick}>Convert to lower Case</button>
      <button className="btn btn-primary  mx-2" onClick={handleCopy}  >Copy Text</button>
       <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}  >Remove extra spaces  </button>

 </div>

 <div className="container my-3"style={{color: props.mode   === 'dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words {text.length} character </p>
      <p>{0.008*text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"please enter your text here"}</p>

      
      </div>

      </>

  )
}
