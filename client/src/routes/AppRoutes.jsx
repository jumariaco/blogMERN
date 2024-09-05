import { Route, Routes } from 'react-router-dom';
import PostsList from '../Components/UX/PostsList';
import PostDetail from '../Components/UX/PostDetail';    

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<PostsList />} />
    <Route path="/posts/:postId" element={<PostDetail />} />
  </Routes>
);

export default AppRoutes;