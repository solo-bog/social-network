import React from 'react';
import styles from './Pagination.module.css';

const Pagination = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1);
  }
  const pagination = [];
  for (let i = props.currentPage - 1; (i < props.currentPage + 4) && (i < pagesCount); i++) {
    if (i === 0) continue;
    pagination.push(
      <button
        type="submit"
        key={i}
        onClick={() => {
          props.onPageChanged(i);
        }}
        className={`${styles.pageNumber}  ${props.currentPage === i ? styles.selectedPage : ''}`}
      >
        {i}
      </button>,
    );
  }
  pagination.push(<span key={0}>...</span>);
  return pagination;
};

export default Pagination;
