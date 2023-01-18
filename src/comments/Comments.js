import { useEffect, useState } from "react"
import { getComments } from "../api"
import Comment from "./Comment"

const Comments= ()=>{
    let [cmtsFromBackend,setCmtsFromBackend]= useState([]);
    useEffect(()=>{
        getComments().then(data=> setCmtsFromBackend(data) )
    },[])
    const parentComments = cmtsFromBackend.filter(cmtFromBackend =>
        cmtFromBackend.parentId === null
     );
     const commentsReplies = (parentComentId)=>{
         return  cmtsFromBackend.filter(cmtFromBackend=> cmtFromBackend.parentId === parentComentId   )
     }


    return (
        <section className="comments-section">
           <h2> Leave your comment</h2>
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