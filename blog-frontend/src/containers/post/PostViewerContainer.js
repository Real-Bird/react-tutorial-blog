import PostActionButton from 'components/post/PostActionButton';
import PostViewer from 'components/post/PostViewer';
import { removePost } from 'lib/api/posts';
import { readPost, unloadPost } from 'modules/post';
import { setOriginalPost } from 'modules/write';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const PostViewerContainer = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post, error, loading, user } = useSelector(
    ({ post, loading, user }) => ({
      post: post.post,
      error: post.error,
      loading: loading['post/READ_POST'],
      user: user.user,
    }),
  );

  useEffect(() => {
    dispatch(readPost(postId));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId, navigate]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    navigate('/write');
  };

  const ownPost = (user && user._id) === (post && post.user._id);

  const onRemove = async () => {
    try {
      await removePost(postId);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      actionButtons={
        ownPost && <PostActionButton onEdit={onEdit} onRemove={onRemove} />
      }
    />
  );
};

export default PostViewerContainer;
