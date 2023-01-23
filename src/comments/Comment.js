import CommentForm from "./CommentForm";

const Comment= ({comment,commentsReplies,currentUserId,deleteComment,addComment,activeComment,setActiveComment,parentId=null,updateComment})=>{
    let timeToAct = 180000;
    let isLateToAct = new Date() - new Date(comment.createdAt) > timeToAct ;
    const canDelete = currentUserId === comment.userId && !isLateToAct ;
    const canEdit = currentUserId === comment.userId && !isLateToAct ;

    const canReply = Boolean(currentUserId);
    const isReplying = activeComment && activeComment.type === 'replying' && activeComment.id === comment.id
    const isEdeting = activeComment && activeComment.type === 'editing' && activeComment.id === comment.id
    const replyId = parentId? parentId : comment.id
   

    return (
        <article className="single-comment parent"  >
           <div className="comment-heading">
                <img src="/user-icon.png" alt="user" />
                <span> {comment.username}  </span>
                <time> { new Date(comment.createdAt).toLocaleDateString() } </time>

           </div>
                <div className="comment-body">
                   { !isEdeting &&  <p>{comment.body}</p>} 
                   { isEdeting &&  <CommentForm 
                    actionName='Update' 
                    hasCancelBtn
                    initialText={comment.body}
                    handleSubmit={(text)=> updateComment(text,comment.id) }
                    handleCancel={()=> setActiveComment(null)}

                     /> }
                    <div className="interactions">
                            { canEdit && <span onClick={()=> setActiveComment({
                                id:comment.id,
                                type:"editing"
                            }) } >edit</span> }
                            {canReply && <span onClick={()=> setActiveComment({id:comment.id,type:"replying"}) }>Repy</span>}
                         { canDelete &&    <span onClick={(cmtId)=>deleteComment(comment.id)}>Delete</span> }
                    </div>
                    <div className="reply-form">
                        { isReplying &&  
                        <CommentForm 
                        actionName='Reply' 
                        handleSubmit={(text)=> addComment(text,replyId) }
                         /> }

                    </div>
                     {
                      commentsReplies.map(reply=>(
                     <Comment 
                       comment={reply} 
                        key={reply.id }
                        commentsReplies={[]}
                        updateComment={updateComment}
                        currentUserId={currentUserId}
                      
                      />
                        ))
                     }
                </div>
        </article>
    )
}

export default Comment