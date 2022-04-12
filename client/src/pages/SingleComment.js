import React from 'react';
import { useParams } from 'react-router-dom';

import ResponseList from '../components/ResponseList';
import ResponseForm from '../components/ResponseForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_COMMENT } from '../utils/queries';

const SingleComment = (props) => {
  document.body.classList.add('home-back');
  const { id: commentId } = useParams();

  const { loading, data } = useQuery(QUERY_COMMENT, {
    variables: { id: commentId },
  });

  const comment = data?.comment || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {comment.username}
          </span>{' '}
          wrote {comment.createdAt}
        </p>
        <div className="card-body">
          <p>{comment.commentText}</p>
        </div>
      </div>

      {comment.responseCount > 0 && (
        <ResponseList responses={comment.responses} />
      )}

      {Auth.loggedIn() && <ResponseForm commentId={comment._id} />}
    </div>
  );
};

export default SingleComment;
