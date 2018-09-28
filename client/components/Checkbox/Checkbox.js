import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.css';

const Checkbox = ({ id, title, isChecked, onChangeAction }) => (
  <div className={styles.root}>
    <input type="checkbox" id={id} checked={isChecked} onChange={onChangeAction}></input>
    <span>{title}</span>
  </div>
);

Checkbox.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  isChecked: PropTypes.bool,
  onChangeAction: PropTypes.func,
};


export default Checkbox;
