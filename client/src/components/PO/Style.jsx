/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import PropTypes from 'prop-types';

const Style = (props) => {
  const {
    thumb,
    styleId,
    name,
    price,
    sale,
    index,
    setStyleId,
    setStyleName,
    setPrice,
    setSale,
    setIndex,
    selected,
  } = props;

  const checkmarkDiv = selected
    ? (<div id="checkmark">✅</div>)
    : (<div id="checkmark" />);

  const handleSelection = () => {
    setIndex(index);
    setSale(sale);
    setPrice(price);
    setStyleName(name);
    setStyleId(styleId);
  };

  return (
    <div
      className="style-thumb"
      onClick={handleSelection}
      onKeyPress={handleSelection}
      role="button"
      tabIndex={0}
    >
      <img
        alt={name}
        title={name}
        src={thumb}
      />
      {checkmarkDiv}
    </div>
  );
};

Style.propTypes = {
  selected: PropTypes.bool,
  price: PropTypes.string,
  sale: PropTypes.string,
  thumb: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
  styleId: PropTypes.number,
  setStyleId: PropTypes.func,
  setStyleName: PropTypes.func,
  setPrice: PropTypes.func,
  setSale: PropTypes.func,
  setIndex: PropTypes.func,
};

Style.defaultProps = {
  selected: false,
  price: '',
  sale: '',
  thumb: '',
  name: '',
  index: 0,
  styleId: -1,
  setStyleId: null,
  setStyleName: null,
  setPrice: null,
  setSale: null,
  setIndex: null,
};

export default Style;
