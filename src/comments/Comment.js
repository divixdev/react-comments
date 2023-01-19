const Comment= ({comment,commentsReplies,})=>{
    return (
        <article className="single-comment parent"  >
           <div className="comment-heading">
                <img src="/user-icon.png" alt="user" />
                <span> {comment.username}  </span>
                <time> { new Date(comment.createdAt).toLocaleDateString() } </time>

           </div>
                <div className="comment-body">
                    <p>{comment.body}</p>
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
                    </article>
                        ))
                     }
                </div>
        </article>
    )
}

export default Comment