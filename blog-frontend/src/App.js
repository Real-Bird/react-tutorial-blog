import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<PostListPage />} />
      <Route path={'/login'} element={<LoginPage />} />
      <Route path={'/register'} element={<RegisterPage />} />
      <Route path={'/write'} element={<WritePage />} />
      <Route path={'/@:username'}>
        <Route index element={<PostListPage />} />
        <Route path={':postId'} element={<PostPage />} />
      </Route>
    </Routes>
  );
};
export default App;
