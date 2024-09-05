
import { useState } from 'react';
import styles from './PostsList.module.css';
import { Link } from 'react-router-dom';

function PostsList() {
  const articles = [
    {
      title: "Mon premier article",
      content: "Ceci est le contenu de mon premier article."
    },
    {
      title: "Titre de mon deuxième article",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Mon troisième article",
      content: "Contenu de mon 3e article. "
    }
  ];

  const truncate = (content, maxLength) => {
    return content.length > maxLength
    ? content.substring(0, maxLength) + "..."
    : content
  }

  return (
    <div className={styles.container}>
      {articles.map((article, index) => (
         <Link to={`/posts/${post._id}`}>
        <div key={index} className={styles.card}>
          <h2 className={styles.title}>{article.title}</h2>
          <p className={styles.content}>{truncate(article.content, 50)}</p>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default PostsList;
