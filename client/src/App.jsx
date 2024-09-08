import PostsList from './Components/UX/PostsList';
import './App.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';


function App() {

  return (
    <>
    <Router>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/create-post">Créer un article</Link>
      </nav>
      <AppRoutes />
    </Router>
     <h1>Blog de Dev Web</h1>
     <PostsList />
    </>
  )
}

export default App
