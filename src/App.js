/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import DefaultLayout from './layout/DefaultLayout';
// import Dashboard from './pages/dashboard/Dashboard.page';
// import Entry from './pages/entry/Entry.page';
// import AddTicket from './pages/new-ticket/AddTicket.page';
// import TicketLists from './pages/ticket-list/TicketLists.page';
import Ticket from './pages/ticket/Ticket.page';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        {/* <Entry /> */}
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketLists /> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
