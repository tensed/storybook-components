import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './slider.css'

export const Slider = ({min,max,defaultValue,size,...rest}) => 
{
    const [value,onValueChange] = useState(0);
    return (
        <input
          type="range"
          min={min}
          max={max}
        //   defaultValue={defaultValue}
          value={value}
          className={['slider', `slider-${size}`].join(' ')}
          onChange={({ target: { value } }) => onValueChange(value)}
          {...rest}
        />
      );
}

Slider.propTypes = {
    /**
     * Minimum Value of Slider
     */
    min: PropTypes.number,
    /**
     * Maximum Value of Slider
     */
    max: PropTypes.number,
    /**
     * How large should the slider be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Value of slider
     */
    value: PropTypes.number,

  };

  Slider.defaultProps = {
    min:0,
    max:100,
    size: 'medium',
  };
  