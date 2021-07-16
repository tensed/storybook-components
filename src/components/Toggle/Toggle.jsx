import React, {useState} from "react";
import PropTypes from "prop-types";
import "./toggle.css";

export const Toggle = ({
  id,
  name,
  checked,
  optionLabels,
  small,
  disabled
}) => {

    React.useEffect(() => 
    {
        setToggleState(checked);
    },[checked]);
    let [toggleState,setToggleState]=useState(false);
    function onChange(e)
    {
        setToggleState(toggleState===false ? true : false )
    }

  return (
    <div className={"toggle-switch"}>
      <input
        type="checkbox"
        name={name}
        className="toggle-switch-checkbox"
        id={id}
        checked={toggleState}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      {id ? (
        <label
          className="toggle-switch-label"
          tabIndex={disabled ? -1 : 1}
          htmlFor={id}
        >
          <span
            className={
              disabled
                ? "toggle-switch-inner toggle-switch-disabled"
                : "toggle-switch-inner"
            }
            data-yes={optionLabels[0]}
            data-no={optionLabels[1]}
            tabIndex={-1}
          />
          <span
            className={
              disabled
                ? "toggle-switch-switch toggle-switch-disabled"
                : "toggle-switch-switch"
            }
            tabIndex={-1}
          />
        </label>
      ) : null}
    </div>
  );
};

Toggle.defaultProps = {
  optionLabels: []
};

Toggle.propTypes= 
{
    id:PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    name: PropTypes.string,
    optionLabels: PropTypes.array,
    disabled: PropTypes.bool

}

export default Toggle;
