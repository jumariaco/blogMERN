import { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const { postId } = useParams();
  const location = useLocation(); 

  useEffect(() => {
    if (location.state?.article) {
      const { article } = location.state;
      setTitle(article.title);
      setContent(article.content);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      title,
      content,
    };

    try {
      let url = '/api/posts';
      let method = 'POST';

      if (postId) {
        url = `/api/posts/${postId}`;
        method = 'PUT';
      }

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la sauvegarde du post');
      }

      navigate('/');
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Titre :</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Contenu :</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">{postId ? 'Modifier le post' : 'Créer un post'}</button>
    </form>
  );
}

export default PostForm;
