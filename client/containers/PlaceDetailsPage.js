import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import placeActions from 'actions/placeActions';
import Place from 'components/Place/Place';

class PlaceDetailsPage extends Component {
  render() {
    const { place } = this.props;

    return (
      <div className="placeDetailsPageWrapper">
        <Place place={place} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  place: state.place,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPlace: placeActions.fetchPlace,
  }, dispatch);

PlaceDetailsPage.propTypes = {
  place: PropTypes.object,
  fetchPlace: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaceDetailsPage);
