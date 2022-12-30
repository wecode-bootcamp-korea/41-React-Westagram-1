import React, { useState } from 'react';

export default function Comment({
  comment: { id, username, content },
  isEditing = false,
  setSelectedCommentIndex,
  editComment,
  deleteComment,
}) {
  const [editValue, setEditValue] = useState(content);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeBtn = () => {
    setIsLiked(prev => !prev);
  };

  const handleDeleteBtn = () => {
    deleteComment(id);
  };

  const handleEditBtn = () => {
    editComment(id, editValue);
    setSelectedCommentIndex(0);
  };

  return (
    <li id={id}>
      <span className="wrap-cmt">
        <span className="cmt-user">{username}</span>
        {isEditing ? (
          <input
            type="text"
            value={editValue}
            onChange={e => setEditValue(e.target.value)}
            onKeyDown={e => (e.key === 'Enter' ? handleEditBtn() : null)}
          />
        ) : (
          <span className="cmt-cont">{content}</span>
        )}
      </span>
      <span className="wrap-btn">
        <button
          className="btn-edit"
          onClick={() =>
            isEditing ? handleEditBtn() : setSelectedCommentIndex(id)
          }
        >
          <i className="fa fa-solid fa-pencil" />
        </button>
        <button className="btn-remove" onClick={handleDeleteBtn}>
          <i className="fa fa-thin fa-xmark" />
        </button>
        <button className="btn-like" onClick={handleLikeBtn}>
          <i className={`fa fa-${isLiked ? 'solid' : 'regular'} fa-heart`} />
        </button>
      </span>
    </li>
  );
}
