import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.comp';
import tickets from '../../assets/data/dummy-tickets.json';
import MessageHistory from '../../components/message-history/MessageHistory.comp';
import UpdateTicket from '../../components/update-ticket/UpdateTicket.comp';

export default function Ticket() {
  const [message, setMessage] = useState('');
  const [ticket, setTicket] = useState('');

  const { tId } = useParams();

  useEffect(() => {
    for (let i = 0; i < tickets.length; i += 1) {
      if (tickets[i].id === tId) {
        setTicket(tickets[i]);
        // eslint-disable-next-line no-continue
        continue;
      }
    }
  }, [message, tId]);

  const handleOnChange = e => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = () => {
    alert('Form submited!');
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="subject">Subject: {ticket.subject}</div>
          <div className="date">Ticket Opened: {ticket.addedAt}</div>
          <div className="status">Status: {ticket.status}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>{ticket.history && <MessageHistory msg={ticket.history} />}</Col>
      </Row>
      <hr />

      <Row className="mt-4">
        <Col>
          <UpdateTicket
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
}
