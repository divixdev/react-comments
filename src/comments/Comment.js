const Comment= ({comment,commentsReplies,currentUserId,activeComment,setActiveComment})=>{
    let timeToAct = 180000;
    let isLateToAct = new Date() - new Date(comment.createdAt) > timeToAct ;
    const canDelete = currentUserId === comment.userId && !isLateToAct ;
    const canEdit = currentUserId === comment.userId && !isLateToAct ;
    const canReply = Boolean(currentUserId)

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
                            {canReply && <span>Repy</span>}
                         { canDelete &&    <span>Delete</span> }
                    </div>
                     {
                        commentsReplies.map(reply=>(
                    <article  className="single-comment child" key={reply.id} >
                    <div className="comment-heading">
                       <img src="/user-icon.png" alt="user" />
                       <span> {reply.username}  </span>
                       <time> { new Date(reply.createdAt).toLocaleDateString() } </time>
                    </div>
                    <div className="comment-body">
                        {reply.body}
                    </div>
                    <div className="interactions">
                            <span>Edit</span>
                            <span>Repy</span>
                       { canDelete &&    <span>Delete</span> }

                    </div>
                    </article>
                        ))
                     }
                </div>
        </article>
    )
}

export default Comment