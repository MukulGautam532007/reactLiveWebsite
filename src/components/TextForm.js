import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was Clicked." + text)
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Coverted To UpperCase successfully.","success")

    }

    const handleDownClick = () => {
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Coverted To LowerCase successfully.","success")


    }

    const handleClearClick = ()=>{
        let newText= '';
        setText(newText)
        props.showAlert("Cleared Text successfully.","success")

    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces successfully.","success")

    }
    const handleCopyClick = ()=>{
        var copyText = document.getElementById("mybox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copy to clipboard successfully.","success")
    }

    
    const handleOnChange = (event)=>{

        // console.log("UpperCase was Change.")
        setText(event.target.value)

    }
    const [text, setText] = useState('');


    return (
        <>
        <div className="container my-6" style={{color: props.mode ==='dark'?'white':'#061744'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="mybox" className="form-label"></label>
                <textarea value={text} className="form-control" style={{backgroundColor: props.mode ==='grey'?'white':'grey',color: props.mode ==='dark'?'white':'#061744'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary">Convert to Upper Case</button>
            <button onClick={handleDownClick} className="btn btn-primary mx-2">Convert to Lower Case</button>
            <button onClick={handleClearClick} className="btn btn-primary mx-2">Clear Text</button>
            <button onClick={handleCopyClick} className="btn btn-primary mx-2">Copy Text</button>
            <button onClick={handleExtraSpaces} className="btn btn-primary mx-2">Remove Extra Spaces</button>
        </div>
        <div className="container my-5" style={{color: props.mode ==='dark'?'white':'#061744'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008*text.split(" ").length}Minutes to read.</p>
            
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter somthing in TextBox to preview it here.'}</p>
            
        </div>
        </>
    )
}
