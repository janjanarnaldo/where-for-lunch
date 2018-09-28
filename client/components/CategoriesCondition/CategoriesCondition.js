import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'components/Checkbox/Checkbox';
import styles from './CategoriesCondition.css';

export default class CategoriesCondition extends PureComponent {
  static propTypes = {
    condition: PropTypes.object,
    action: PropTypes.func,
  };

  handleOnChangeAction = (e) => {
    const { target } = e;
    const { checked, id } = target;

    const { condition: { categories } } = this.props;
    const updatedCategories = categories.reduce((accum, current) => {
      current.isChecked = current.id === id ? checked : current.isChecked;
      return accum.concat(current);
    }, []);

    this.props.action(updatedCategories);
  }

  render() {
    const { condition: { categories } } = this.props;
    return (
      <div className={styles.root}>
        <span>categories:</span>
        {(categories.map((category, idx) => {
          return (<Checkbox key={idx} id={category.id} title={category.title} isChecked={category.isChecked} onChangeAction={this.handleOnChangeAction} />);
        }))}
      </div>
    );
  }
}
