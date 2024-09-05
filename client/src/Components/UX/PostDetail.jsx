
import { useState } from 'react';
import styles from './PostsList.module.css';
import comments from './Comments.jsx'
import { Link } from 'react-router-dom';

function PostDetail() {
  const articles = [
    {
      title: "Mon premier article",
      content: "Ceci est le contenu de mon premier article."
    }
  ];

  return (
    <div className={styles.container}>
        <h2 className={styles.title}>{article.title}</h2>
        <p className={styles.content}>{article.content}</p>
      {comments.map((comment, index) => (
        <div key={index}>
          <h2 className={styles.author}>{comment.author}</h2>
          <p className={styles.comment}>{comment.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostDetail;
