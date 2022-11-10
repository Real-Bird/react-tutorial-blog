import Button from 'components/common/Button';
import styled from 'styled-components';

const WriteActionButtonBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyleButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButton = ({ onCancel, onPublish, isEdit }) => {
  return (
    <WriteActionButtonBlock>
      <StyleButton cyan onClick={onPublish}>
        포스트 {isEdit ? '수정' : '등록'}
      </StyleButton>
      <StyleButton onClick={onCancel}>취소</StyleButton>
    </WriteActionButtonBlock>
  );
};

export default WriteActionButton;
