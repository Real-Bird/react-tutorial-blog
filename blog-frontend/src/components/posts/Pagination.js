import styled from 'styled-components';
import qs from 'qs';
import Button from 'components/common/Button';
import palette from 'lib/styles/palette';
import { Link } from 'react-router-dom';

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const PageNumber = styled.div`
  a {
    color: ${(props) =>
      props.page === props.idx + 1 ? palette.gray[8] : palette.gray[5]};
    text-decoration: none;
    cursor: ${(props) =>
      props.page === props.idx + 1 ? 'default' : 'pointer'};
  }
`;

const buildLink = ({ username, tag, page }) => {
  const query = qs.stringify({ tag, page });
  return username ? `/@${username}?${query}` : `/?${query}`;
};

const Pagination = ({ page, lastPage, username, tag }) => {
  return (
    <PaginationBlock>
      <Button
        disabled={page === 1}
        to={
          page === 1 ? undefined : buildLink({ username, tag, page: page - 1 })
        }
      >
        이전
      </Button>
      {[...Array.from(Array(lastPage).keys())].map((i) => (
        <PageNumber key={i} page={page} idx={i}>
          <Link to={`/?page=${i + 1}`}>{i + 1}</Link>
        </PageNumber>
      ))}
      <Button
        disabled={page === lastPage}
        to={
          page === lastPage
            ? undefined
            : buildLink({ username, tag, page: page + 1 })
        }
      >
        다음
      </Button>
    </PaginationBlock>
  );
};

export default Pagination;
