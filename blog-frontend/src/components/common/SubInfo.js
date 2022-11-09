import palette from 'lib/styles/palette';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const SubInfoBlock = styled.div`
  ${(props) =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color:${palette.gray[6]};

  span + span::before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
  a {
    text-decoration: none;
    font-size: 1.125rem;
    color: #000;
  }
`;

const SubInfo = ({ username, publishedDate, hasMarginTop }) => {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <strong>
          <Link to={`/@${username}`}>{username}</Link>
        </strong>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </SubInfoBlock>
  );
};

export default SubInfo;
