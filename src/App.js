/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/private-route/privateRoute.comp';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard.page';
import Entry from './pages/entry/Entry.page';
import AddTicket from './pages/new-ticket/AddTicket.page';
import TicketLists from './pages/ticket-list/TicketLists.page';
import Ticket from './pages/ticket/Ticket.page';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Entry />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/add-ticket">
            <AddTicket />
          </PrivateRoute>
          <PrivateRoute path="/tickets">
            <TicketLists />
          </PrivateRoute>
          <PrivateRoute path="/ticket/:tId">
            <Ticket />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
