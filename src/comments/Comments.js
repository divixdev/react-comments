import { useEffect, useState } from "react"
import { createComment, getComments ,deleteComment as deleteComentApi } from "../api"
import Comment from "./Comment"
import CommentForm from "./CommentForm";

const Comments= ({currentUserId})=>{
    let [cmtsFromBackend,setCmtsFromBackend]= useState([]);
    let [activeComment,setActiveComment] = useState(null);
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
      const deleteComment = (cmtId)=>{
        deleteComentApi().then(()=> {
            let updatedComments = cmtsFromBackend.filter(cmtFromBackend=> cmtFromBackend.id !== cmtId );
            if(window.confirm("Are you sure?")){
                setCmtsFromBackend(updatedComments)
            }
        })
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
         activeComment={activeComment}
         setActiveComment={setActiveComment}
         currentUserId={currentUserId}
         deleteComment={deleteComment}
         addComment={addComment}
          /> ) }
        </section>
        
        
    )
}

export default Comments