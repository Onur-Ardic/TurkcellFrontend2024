import CommentCard from './CommentCard';

const Comments = ({ allComments }) => {
    return (
        <div className='container my-5'>
            <h1 className='fw-bold my-4'>OUR HAPPY CUSTOMERS</h1>
            {allComments && allComments.length > 0 ? (
                <div className='row justify-content-center gap-4'>
                    {allComments.map(comment => (
                        <CommentCard key={comment.id} comment={comment} />
                    ))}
                </div>
            ) : (
                <p>No comments found.</p>
            )}
        </div>
    );
};

export default Comments;
