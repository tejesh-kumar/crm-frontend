/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import './message-history.style.css';

export default function MessageHistory({ msg }) {
  if (!msg) return null;
  console.log(msg);
  return msg.map((row, i) => (
    <div key={i} className="message-history mt-3">
      <div className="send font-weight-bold text-secondary">
        <div className="sender">{row.messageBy}</div>
        <div className="date">{row.date}</div>
      </div>
      <div className="message">{row.message}</div>
    </div>
  ));
}

MessageHistory.propTypes = {
  msg: PropTypes.arrayOf(PropTypes.string).isRequired,
};
