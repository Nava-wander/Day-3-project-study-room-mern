import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import BookRoom from "./pages/BookRoom";
import MyBookings from "./pages/MyBookings";

function App() {
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    const newBooking = {
      ...booking,
      id: Date.now(),
      status: "Confirmed",
    };

    setBookings((currentBookings) => [
      ...currentBookings,
      newBooking,
    ]);
  };

  return (
    <BrowserRouter>

      <div className="min-h-screen bg-[#FFF9F0] text-[#172033]">

        <Navbar />

        <div className="page-enter">

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/rooms"
              element={<Rooms />}
            />

            <Route
              path="/book-room"
              element={
                <BookRoom
                  addBooking={addBooking}
                />
              }
            />

            <Route
              path="/my-bookings"
              element={
                <MyBookings
                  bookings={bookings}
                />
              }
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;