import React from 'react';
import { Link } from 'react-router-dom';

const CommentList = ({ comments, title }) => {
  if (!comments.length) {
    return <h5>WELCOME TO THE MEOW CARE, WHERE YOUR FURRY ROYALTY GETS A PURRRFECT TEMPORARY SERVANT</h5>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {comments &&
        comments.map(comment => (
          <div key={comment._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${comment.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {comment.username}
              </Link>{' '}
              wrote {comment.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/comment/${comment._id}`}>
                <p>{comment.commentText}</p>
                <p className="mb-0">
                  Responses: {comment.responseCount} || Click to{' '}
                  {comment.responseCount ? 'see' : 'start'} response
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentList;
