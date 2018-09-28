import React from 'react';
import PropTypes from 'prop-types';
import StoreOpen from 'components/StoreOpen/StoreOpen';
import styles from './Place.css';

const Place = ({ place, action }) => {
  return (
    <div className={styles.root} onClick={action}>
      <div className={styles.name}>{ place.name || 'Where for lunch?' } <StoreOpen isClosed={place.is_closed}/></div>
      <div className={styles.box}>
        <div>{ place.address }</div>
        <div>{ place.phone }</div>
        <div>{ place.categories && place.categories.join(', ') }</div>
        <div>{ place.price }</div>
        { place.rating &&
        <div className={styles.rating}>
          <div className={styles.ratingScore}>{ place.reviewCount } reviews</div>
          <div className={styles.stars}>
            <div className={styles.emptyStars}></div>
            <div className={styles.fullStars} style={{ width: `${place.rating / 5 * 100}%` }}></div>
          </div>
        </div>
        }
      </div>
    </div>
  );
};

Place.propTypes = {
  place: PropTypes.object,
  action: PropTypes.func,
};

export default Place;
