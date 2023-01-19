import { useState } from "react"

const CommentForm= ({actionName,handleSubmit})=>{
    const [text,setText] = useState('')
  function onSubmiting(e){
    e.preventDefault()
    handleSubmit(text)

  }
    return (
        <form className="main-comment-form" onSubmit={onSubmiting}  >
            <textarea 
            value={text}  
            onChange={(e)=> setText(e.target.value)}
            
            ></textarea>
            
         <button type="submit"> {actionName} </button>
        </form>
    )
}

export default CommentForm