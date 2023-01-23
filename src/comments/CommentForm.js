import { useState } from "react"

const CommentForm= ({actionName,handleSubmit})=>{
    const [text, setText] = useState("");
    const isDisabled = text.length === 0 ;
  function onSubmiting(e){
    e.preventDefault()
    handleSubmit(text)
    setText('')

  }
    return (
        <form className="main-comment-form" onSubmit={onSubmiting}  >
            <textarea 
            value={text}  
            onChange={(e)=> setText(e.target.value)}
            
            ></textarea>
            
         <button type="submit" disabled={isDisabled}> {actionName} </button>
        </form>
    )
}

export default CommentForm