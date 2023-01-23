import { useState } from "react"

const CommentForm= ({actionName,handleSubmit,initialText='',handleCancel,hasCancelBtn=false})=>{
    const [text, setText] = useState(initialText);
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
         {hasCancelBtn && <button type="button" onClick={handleCancel}> Cancel</button> }
        </form>
    )
}

export default CommentForm