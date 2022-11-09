import HeaderContainer from 'containers/common/HeaderContainer';
import PaginationContainer from 'containers/posts/PaginationContainer';
import PostsListContainer from 'containers/posts/PostsListContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostsListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;
