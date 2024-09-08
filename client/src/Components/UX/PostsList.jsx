import { useState, useEffect } from 'react';
import styles from './PostsList.module.css';
import { Link } from 'react-router-dom';

function PostsList() {
  const [articles, setArticles] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts'); 
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des articles');
        }
        const data = await response.json();
        setArticles(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); 

  const truncate = (content, maxLength) => {
    return content.length > maxLength ? content.substring(0, maxLength) + '...' : content;
  };

  if (loading) return <p>Chargement des articles...</p>;
  if (error) return <p>Erreur lors de la récupération des articles.</p>;

  return (
    <div className={styles.container}>
      {articles.map((article) => (
        <Link to={`/posts/${article._id}`} key={article._id}>
          <div className={styles.card}>
            <h2 className={styles.title}>{article.title}</h2>
            <p className={styles.content}>{truncate(article.content, 50)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PostsList;
