import React from 'react';
import PropTypes from 'prop-types';

const Information = (props) => {
  const { category, name, price } = props;
  return (
    <div>
      <div id="category">{category}</div>
      <div id="product-name">{name}</div>
      <div id="price">{price}</div>
    </div>
  );
};

Information.propTypes = {
  category: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
};

Information.defaultProps = {
  category: '',
  name: '',
  price: '',
};

export default Information;
