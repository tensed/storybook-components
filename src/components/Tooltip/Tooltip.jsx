import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './tooltip.css';


export const Tooltip = ({ children, text, ...rest }) => {
    const [show, setShow] = useState(false);
    const [helperText,setHelperText] = useState('Simple ToolTip');
  
    useEffect(() => 
    {
        setHelperText(text);
    },[helperText,text])
    return (
      <div className="tooltip-container">
        <div className={show ? 'tooltip-box visible' : 'tooltip-box'}>
          {helperText}
          <span className="tooltip-arrow" />
        </div>
        <div
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          {...rest}
        >
          {children}
        </div>
      </div>
    );
  };

  Tooltip.propTypes = {
    /**
     * Enter Text for tooltip
     */
    text: PropTypes.string,

  };

  Tooltip.defaultProps = {
    text:'Holder Text'
  };
  