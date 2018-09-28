import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import placeActions from 'actions/placeActions';
import Place from 'components/Place/Place';

class PlaceDetailsPage extends Component {
  componentDidMount = () => {
    const { place } = this.props;
    const { id } = place;
    if (!id) this.props.history.replace('/');

    this.props.fetchPlaceDetails(id);
  }

  render() {
    const { place } = this.props;

    return (
      <div className="placeDetailsPageWrapper">
        <Place place={place} />
        <div>
          <img className="mainImage" src={place.image_url} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  place: state.place,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPlaceDetails: placeActions.fetchPlaceDetails,
  }, dispatch);

PlaceDetailsPage.propTypes = {
  place: PropTypes.object,
  fetchPlaceDetails: PropTypes.func,
  history: PropTypes.object,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaceDetailsPage);
