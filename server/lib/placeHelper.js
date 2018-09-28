export function toSearchPlacesParams(params) {
  const result = {
    term: 'food',
    latitude: params.latitude,
    longitude: params.longitude,
    radius: params.radius,
    limit: 50,
    open_now: true,
    categories: params.categories || undefined,
  };
  return result;
}

export function fromSearchPlacesParams(params) {
  const result = {
    rating: params.rating,
    price: params.price,
    phone: params.phone,
    id: params.id,
    name: params.name,
    img: params.image_url,
    distance: params.distance,
    address: params.location.display_address.join(', '),
    categories: params.categories ? params.categories.map(c => c.title) : null,
    reviewCount: params.review_count,
  };
  return result;
}

export function fromPlaceDetails(params = {}) {
  const result = {
    id: params.id,
    alias: params.alias,
    name: params.name,
    image_url: params.image_url,
    is_claimed: params.is_claimed,
    is_closed: params.is_closed,
    url: params.url,
    phone: params.phone,
    display_phone: params.display_phone,
    review_count: params.review_count,
    categories: params.categories ? params.categories.map(c => c.title) : null,
    rating: params.rating,
    address: params.location && params.location.display_address.join(', '),
    coordinates: params.coordinates,
    photos: params.photos,
    hours: params.hours,
  };
  return result;
}
