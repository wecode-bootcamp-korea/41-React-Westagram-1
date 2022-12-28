import React, { useState } from 'react';
import CommentLists from './CommentLists';
import CommentBtnWrap from './CommentBtnWrap';

export default function WrapComments({ comments }) {
  const [input, setInput] = useState('');
  const [commentLists, setCommentLists] = useState(comments);

  const addComment = () => {
    if (input !== '') {
      const lastCmtIndex = commentLists.length - 1;
      const addedCmtId = commentLists[lastCmtIndex].id + 1;
      const newComment = {
        id: addedCmtId,
        username: 'bibigo',
        content: input,
      };
      setCommentLists([...commentLists, newComment]);
      setInput('');
    }
  };

  const editComment = (commentId, editValue) => {
    let newCommentLists = commentLists.map(item => {
      if (item.id === commentId) {
        item.content = editValue;
      }
      return item;
    });

    setCommentLists(newCommentLists);
  };

  const deleteComment = commentId => {
    let newCommentLists = commentLists.filter(item => item.id !== commentId);
    setCommentLists(newCommentLists);
  };

  return (
    <div className="wrap-comment">
      <CommentBtnWrap />

      <div className="box-user">
        <span className="thumb-img">
          <img src="/images/41_sangheon/img-thumbnail.jpeg" alt="" />
        </span>
        <span className="box-cont">
          <strong className="tit-user">canon_mj</strong>님 외 10명이 좋아합니다.
        </span>
      </div>

      <CommentLists
        commentLists={commentLists}
        editComment={editComment}
        deleteComment={deleteComment}
      />

      <span className="info-time">42분 전</span>

      <div className="box-inp-cmt">
        <input
          type="text"
          placeholder="댓글 달기..."
          className="inp-cmt"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => (e.key === 'Enter' ? addComment() : null)}
        />
        <button className="btn-submit" disabled="" onClick={addComment}>
          게시
        </button>
      </div>
    </div>
  );
}
