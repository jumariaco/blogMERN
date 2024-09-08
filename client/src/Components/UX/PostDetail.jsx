import { useState, useEffect } from 'react';
import styles from './PostsList.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import CommentForm from './CommentForm'

function PostDetail() {
  const { postId } = useParams(); 
  const [article, setArticle] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [showCommentForm, setShowCommentForm] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${postId}`); 
        if (!response.ok) {
          throw new Error('Post non trouvé');
        }
        const data = await response.json();
        setArticle(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]); 

  const handleAddComment = async (commentData) => {
    try {
      const response = await fetch(`/api/posts/${postId}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'ajout du commentaire');
      }

      const updatedPost = await response.json();
      setArticle(updatedPost); 
      setShowCommentForm(false); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = () => {
    navigate(`/edit-post/${postId}`, { state: { article } }); // Envoie l'article à PostForm pour modification
  };

  const handleDelete = async () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      try {
        const response = await fetch(`/api/posts/${postId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Erreur lors de la suppression de l\'article');
        }
        alert('Article supprimé avec succès');
        navigate('/'); 
      } catch (error) {
        console.error(error);
      }
    }
  };



  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors de la récupération de l'article.</p>;

  return (
    <div className={styles.container}>
      <div className={styles.articleDetail}>
        <h2 className={styles.title}>{article.title}</h2>
        <p className={styles.content}>{article.content}</p>
        <button onClick={handleDelete}>Supprimer l'article</button>
        <button onClick={handleEdit}>Modifier l'article</button>
      </div>

      <div className={styles.commentsSection}>
        <h3 className={styles.commentsTitle}>Commentaires</h3>

        <button onClick={() => setShowCommentForm(!showCommentForm)}>
          {showCommentForm ? 'Annuler' : 'Ajouter un commentaire'}
        </button>
        {showCommentForm && (
          <CommentForm onSubmit={handleAddComment} />
        )}

        {article.comment && article.comment.length > 0 ? (
          article.comment.map((comment, index) => (
            <div key={index} className={styles.commentCard}>
              <h4 className={styles.commentAuthor}>{comment.author}</h4>
              <p className={styles.commentContent}>{comment.content}</p>
            </div>
          ))
        ) : (
          <p>Aucun commentaire</p>
        )}
      </div>
    </div>
  );
}

export default PostDetail;
