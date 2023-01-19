import { useEffect, useState } from "react"
import { createComment, getComments } from "../api"
import Comment from "./Comment"
import CommentForm from "./CommentForm";

const Comments= ()=>{
    let [cmtsFromBackend,setCmtsFromBackend]= useState([]);
    useEffect(()=>{
        getComments().then(data=> setCmtsFromBackend(data) )
    },[])
    const parentComments = cmtsFromBackend.filter(cmtFromBackend =>
        cmtFromBackend.parentId === null
     );
     const commentsReplies = (parentComentId)=>{
        // comments that have the same parent id are replies to that parent comment
         return  cmtsFromBackend.filter(cmtFromBackend=> cmtFromBackend.parentId === parentComentId   )
     };
     const addComment = (text,parentId)=>{
        console.log('add comment of handle submit');
        createComment(text,parentId).then(comment=> setCmtsFromBackend([comment,...cmtsFromBackend])  )
     }



    return (
        <section className="comments-section">
           <h2> Leave your comment</h2>
           <CommentForm actionName='write' handleSubmit={addComment} />
         { parentComments.map(parentComment=> 
         <Comment 
         comment={parentComment} 
         key={parentComment.id }
         commentsReplies={commentsReplies(parentComment.id)}
          /> ) }
        </section>
        
        
    )
}

export default Comments