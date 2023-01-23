import CommentForm from "./CommentForm";

const Comment= ({comment,commentsReplies,currentUserId,activeComment,setActiveComment,deleteComment,addComment,parentId=null})=>{
    let timeToAct = 180000;
    let isLateToAct = new Date() - new Date(comment.createdAt) > timeToAct ;
    const canDelete = currentUserId === comment.userId && !isLateToAct ;
    const canEdit = currentUserId === comment.userId && !isLateToAct ;
    const canReply = Boolean(currentUserId);
    const isReplying = activeComment && activeComment.type === 'replying' && activeComment.id === comment.id
    const replyId = parentId? parentId : comment.id
   

    return (
        <article className="single-comment parent"  >
           <div className="comment-heading">
                <img src="/user-icon.png" alt="user" />
                <span> {comment.username}  </span>
                <time> { new Date(comment.createdAt).toLocaleDateString() } </time>

           </div>
                <div className="comment-body">
                    <p>{comment.body}</p>
                    <div className="interactions">
                            { canEdit && <span>edit</span> }
                            {canReply && <span onClick={()=> setActiveComment({id:comment.id,type:"replying"}) }>Repy</span>}
                         { canDelete &&    <span onClick={(cmtId)=>deleteComment(comment.id)}>Delete</span> }
                    </div>
                    <div className="reply-form">
                        { isReplying &&  
                        <CommentForm 
                        actionName='replying' 
                        handleSubmit={(text)=> addComment(text,replyId) }
                         /> }

                    </div>
                     {
                      commentsReplies.map(reply=>(
                     <Comment 
                       comment={reply} 
                        key={reply.id }
                        commentsReplies={[]}
                        
                        currentUserId={currentUserId}
                      
                      />
                        ))
                     }
                </div>
        </article>
    )
}

export default Comment