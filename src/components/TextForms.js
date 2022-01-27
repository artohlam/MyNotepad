import React, { useState } from 'react'
export default function TextForms(props) {
    const handleUpClick = () => {
        // console.log('Uppercase was clicked '+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Uppercase!","success");
    }
    const handleLoClick = () => {
        // console.log('Uppercase was clicked '+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lowercase!", "success");
    }
    const handleClearClick = () => {
        // console.log('Uppercase was clicked '+ text);
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared !", "success");
    }
    const handleOnChange = (event) => {

        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Here');

    return (
        <>
        <div className="container" style={{color:props.mode==='light'?'grey':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">

                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#3a1d1d',color:props.mode==='light'?'grey':'white'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-danger mx-2" onClick={handleUpClick} >Convert to Uppercase </button>
            <button className="btn btn-danger mx-2" onClick={handleLoClick} >Convert to Lowercase </button>
            <button className="btn btn-danger" onClick={handleClearClick} >Clear Text </button>
            </div>
            <div className="container my-4"  style={{color:props.mode==='light'?'grey':'white'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words  and {text.length}characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2 className='my-3'>Preview</h2>
                <p>{text.length>0?text:"Enter Something in the textbox above  to preview it here "}</p>
                
            </div>
        </>
    )
}
