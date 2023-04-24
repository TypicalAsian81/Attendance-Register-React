import React from "react";
import PropTypes from 'prop-types';
import GuestName from './GuestName';
import Styles from './Guest.module.css';
const Guest = props =>
   
  <li className="guest-list">
    <GuestName
      isEditing={props.isEditing}
      handleNameEdits={e => props.setName(e.target.value)}>
      {props.name}
    </GuestName>
    <label>
      <input className="check"
        type="checkbox"
        checked={props.isConfirmed}
        onChange={props.handleConfirmation}
      /> Confirmed
    </label>
    <div className="guest-button">
    <button className="guest-button-1" onClick={props.handleToggleEditing}>{props.isEditing ? 'save' : 'edit'}</button>
    <button className="guest-button-2" onClick={props.handleRemove}>remove</button>
    </div>
  </li>


Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
}
export default Guest;