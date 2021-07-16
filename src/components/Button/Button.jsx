import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ variant, size, label, ...props }) => {

  return (
    <button
      type="button"
      className={['button', `button--${size}`, `button--${variant}`].join(' ')}
      {...props}
    >
      {variant === 'logo' ? '+' : label}
    </button>
  );
}

Button.propTypes = {
  /**
   * Enter the variant of button to be used
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'upgrade', 'warning','logo']),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Disable or Enable the Button (Applicable only for Primary and Secondary Buttons)
   */
  disabled:PropTypes.bool

};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  onClick: undefined,
};
