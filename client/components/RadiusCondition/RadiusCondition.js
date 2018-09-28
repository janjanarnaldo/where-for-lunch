import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import styles from './RadiusCondition.css';

export default class RadiusCondition extends PureComponent {
  static propTypes = {
    condition: PropTypes.object,
    action: PropTypes.func,
  };

  handleOnBlurAction = (e) => {
    this.props.action(e.target.value);
  }

  render() {
    const { condition: { radius } } = this.props;
    return (
      <div className={styles.root}>
        <span>radius:</span>
        <Input defaultValue={radius} onBlurAction={this.handleOnBlurAction}></Input>
        <span>meters</span>
      </div>
    );
  }
}
