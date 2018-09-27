import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formatCategoriesStr } from 'lib/utils';
import Button from 'components/Button/Button';
import placeActions from 'actions/placeActions';
import conditionActions from 'actions/conditionActions';
import Place from 'components/Place/Place';
import RadiusCondition from 'components/RadiusCondition/RadiusCondition';
import CategoriesCondition from 'components/CategoriesCondition/CategoriesCondition';

class HomePage extends Component {
  isDisableButton = (condition) => {
    const { latitude, longitude } = condition;
    return typeof latitude === 'undefined' && typeof longitude === 'undefined';
  }

  handleOnClick = () => {
    const { condition } = this.props;
    const { categories } = condition;

    const params = { ...condition, categories: formatCategoriesStr(categories) };
    this.props.fetchPlaces(params);
  }

  handleOnRadiusConditionChange = (value) => {
    this.props.setRadius(value);
  }

  handleOnCategoriesConditionChange = (value) => {
    this.props.setCategories(value);
  }

  render() {
    const { condition, place } = this.props;
    const isDisableButton = this.isDisableButton(condition);

    return (
      <div className="homePageWrapper">
        <Place place={place} />
        <div className="searchWrapper">
          <div>
            <RadiusCondition condition={condition} action={this.handleOnRadiusConditionChange}/>
            <CategoriesCondition condition={condition} action={this.handleOnCategoriesConditionChange}/>
          </div>
          <Button onClick={this.handleOnClick} theme="homepageClick" isDisableButton={isDisableButton}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  condition: state.condition,
  place: state.place,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPlaces: placeActions.fetchPlaces,
    setRadius: conditionActions.setRadius,
    setCategories: conditionActions.setCategories,
  }, dispatch);

HomePage.propTypes = {
  condition: PropTypes.object,
  place: PropTypes.object,
  fetchPlaces: PropTypes.func,
  setRadius: PropTypes.func,
  setCategories: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
