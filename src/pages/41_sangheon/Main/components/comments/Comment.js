import React, { useState } from 'react';

export default function Comment({
  comment: { username, content },
  commentId,
  isEditing,
  setSelectedCommentIndex,
  editComment,
  deleteComment,
}) {
  const [editValue, setEditValue] = useState(content);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeBtn = () => {
    setIsLiked(prev => !prev);
  };

  const handleDeleteBtn = e => {
    deleteComment(commentId);
  };

  const handleEditInput = e => {
    editComment(commentId, editValue);
    setSelectedCommentIndex(0);
  };

  return (
    <li id={commentId}>
      <span className="wrap-cmt">
        <span className="cmt-user">{username}</span>
        {isEditing ? (
          <input
            type="text"
            value={editValue}
            onChange={e => setEditValue(e.target.value)}
            onKeyDown={e => (e.key === 'Enter' ? handleEditInput(e) : null)}
          />
        ) : (
          <span className="cmt-cont">{content}</span>
        )}
      </span>
      <span className="wrap-btn">
        <button
          className="btn-edit"
          onClick={e =>
            isEditing ? handleEditInput(e) : setSelectedCommentIndex(commentId)
          }
        >
          <i className="fa fa-solid fa-pencil" />
        </button>
        <button className="btn-remove" onClick={handleDeleteBtn}>
          <i className="fa fa-thin fa-xmark" />
        </button>
        <button className="btn-like" onClick={handleLikeBtn}>
          <i
            className={
              isLiked ? 'fa fa-solid fa-heart' : 'fa fa-regular fa-heart'
            }
          />
        </button>
      </span>
    </li>
  );
}