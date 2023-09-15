import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState(""); 
    return (
        <>
        <div className={`container ${props.btnClass} p-3`}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
              <textarea className={`form-control my-3 shadow-none bg-${props.mode} ${props.btnClass}`} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>          
            <button className="btn btn-outline-primary shadow-none" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-outline-primary shadow-none ms-2" onClick={handleLoClick}>Convert to Lowecase</button>
        </div>
        <div className={`container mt-3 ${props.btnClass} p-3`}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Enter Something in the above textbox to preview it"}</p>
        </div>
        </>
)
}
