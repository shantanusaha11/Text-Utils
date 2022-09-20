import React, {useState} from 'react'

export default function TextForm(props) {

      const handleUpClick = () => {
            // console.log("Uppercase was clicked"+text);
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to UpperCase","success")
      }

      const handleLwClick = () => {
            let newText = text.toLowerCase();
            setText(newText);
      }

      const handleOnChange=(event)=>{
            // console.log("On Change");
            setText(event.target.value);
      }

      const handleClearText = () => {
            let newText = '';
            setText(newText);
      }

      const handleCopy = () => {
            var text = document.getElementById("myBox");
            text.select();
            text.setSelectionRange(0,9999);
            navigator.clipboard.writeText(text.value);
      }

      const handleExtraSpaces = () => {
            let newText = text.split(/[  ]+/);
            setText(newText.join(" "));
      }

      const [text,setText] = useState("");

      return (
            <>
                  <div className='container' style={{color: props.mode === 'dark'?'white':'#042745'}}>
                        <h1> {props.heading} </h1>
                        <div className="mb-3">
                              <textarea className="form-control border border-5" style= {{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042745'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                        </div>
                        <button disabled={text.length===0} className="btn btn-primary my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleLwClick}>Convert to LowerCase</button>
                        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleClearText}>Clear Text</button>
                        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleCopy}>Copy Text</button>
                        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                  </div>
                  <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042745'}}>
                        <h1>Your text summury</h1>
                        <p>{text.split(" ").filter((element)=>{
                              return (element.length!==0);
                        }).length} words and {text.length} characters</p>
                        <p>{0.008 * text.split(" ").length} Minutes read</p>
                        <h2>Preview</h2>
                        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
                  </div>
            </>
      );    
}
