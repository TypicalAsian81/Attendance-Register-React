import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Counter.module.css';

const Counter = props =>
  <table className="counter">
    <tbody className='allign-1'>
      <tr className='one'>
        <td>Attending:</td>
        <td>{props.numberAttending}</td>
      </tr>
      <tr className='two'>
        <td>Unconfirmed:</td>
        <td>{props.numberUnconfirmed}</td>
      </tr>
      <tr className='three'>
        <td>Total:</td>
        <td>{props.totalInvited}</td>
      </tr>
    </tbody>
  </table>;

Counter.PropTypes = {
  numberAttending: PropTypes.number,
  numberUnconfirmed: PropTypes.number,
  totalInvited: PropTypes.number
}

export default Counter