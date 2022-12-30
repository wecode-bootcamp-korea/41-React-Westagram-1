import React, { useState } from 'react';
import Comment from './Comment';

function CommentLists({ commentLists, editComment, deleteComment }) {
  const [selectedCommentIndex, setSelectedCommentIndex] = useState(0);

  return (
    <ul id="listCmt" className="list-cmt">
      {commentLists.map(comment => {
        const commentId = comment.id;
        return (
          <Comment
            key={commentId}
            comment={comment}
            isEditing={selectedCommentIndex === commentId}
            setSelectedCommentIndex={setSelectedCommentIndex}
            editComment={editComment}
            deleteComment={deleteComment}
          />
        );
      })}
    </ul>
  );
}

export default CommentLists;
