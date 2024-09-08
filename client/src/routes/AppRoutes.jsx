import { Route, Routes } from 'react-router-dom';
import PostsList from '../Components/UX/PostsList';
import PostDetail from '../Components/UX/PostDetail';
import PostForm from '../Components/UX/PostForm'; 

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<PostsList />} />
    <Route path="/posts/:postId" element={<PostDetail />} />
    <Route path="/create-post" element={<PostForm />} /> 
    <Route path="/edit-post/:postId" element={<PostForm />} /> 
  </Routes>
);

export default AppRoutes;
