import React, { useState } from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import ViewEditProfile from "../Components/Clientdashboardfiles/ViewEditProfile";
import BookPooja from "../Components/Clientdashboardfiles/BookPoojaComponent";
import BookingHistory from "../Components/Clientdashboardfiles/BookingHistoryComponent";
// import SubScribePujaDetails from './SubscribePujaDetails';
// import PaymentSection from './PaymentSection';

function ClientDashboard() {
  const [key, setKey] = useState("viewProfile");

  return (
    <div  style={{
      backgroundColor: "#FFF4E6",
         
    }}>
    <Container className="mt-5"
    style={{
      backgroundColor: "#FFF4E6",
          minHeight: "100vh",
          padding: "20px",
    }}
    >
      <h3 className="text-center mb-4">Client Dashboard</h3>
      <Tabs
        id="client-dashboard-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        justify
      >
        <Tab eventKey="viewProfile" title="View/Edit Profile">
          <ViewEditProfile />
        </Tab>
        <Tab eventKey="bookPooja" title="Book a Pooja">
          <BookPooja />
        </Tab>
        <Tab eventKey="bookingHistory" title="Booking History">
          <BookingHistory />
        </Tab>
        <Tab eventKey="paymentSection" title="All Subsciptions">
      
          <p>All Subsciptions </p>
        </Tab>
      </Tabs>
    </Container>
    </div>
  );
}

export default ClientDashboard;
