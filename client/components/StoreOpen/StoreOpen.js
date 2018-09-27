import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './StoreOpen.css';

const checkIsClosed = (isClosed) => {
  if (typeof isClosed === 'undefined') return;

  return `- This store is ${isClosed ? 'CLOSED' : 'OPEN'}!`;
};

const StoreOpen = ({ isClosed }) => (
  <span className={classNames({
    [styles.root]: true,
    [styles.isClosed]: isClosed,
  })}>
    {checkIsClosed(isClosed)}
  </span>
);

StoreOpen.propTypes = {
  isClosed: PropTypes.bool,
};


export default StoreOpen;
