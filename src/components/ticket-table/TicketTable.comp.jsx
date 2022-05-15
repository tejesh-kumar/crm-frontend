import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function TicketTable({ tickets }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.subject}</td>
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No ticket show{' '}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

TicketTable.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
