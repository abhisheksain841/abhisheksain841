
import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import SAAdminLayout from "../../../layouts/Salonadmin";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "../../../api/axiosConfig";

const localizer = momentLocalizer(moment);

const EmployeeCalendar = () => {
  const [events, setEvents] = useState([]);
  const [view, setView] = useState("week");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    employeeName: "",
    notes: "",
    bookingDate: ""
  });

  const customerNames = ["Ram", "Shyam", "Mohan", "Deepak", "Amit", "Rahul"];
  const employeeNames = ["Ram", "Shyam", "Mohan", "Deepak", "Amit", "Rahul"];

  // Handle date/time click
  const handleSelectSlot = ({ start, bounds }) => {
    setSelectedSlot({ start, x: bounds?.x || 100, y: bounds?.y || 100 });
    setFormData({ customerName: "", employeeName: "", notes: "", bookingDate: moment(start).format("YYYY-MM-DD HH:mm") });
    setSelectedEvent(null);
    setShowPopup(true);
  };

  // Handle event click
  const handleSelectEvent = (event, e) => {
    setSelectedSlot({ x: e.clientX, y: e.clientY });
    setFormData({
      customerName: event.customerName,
      employeeName: event.employeeName,
      notes: event.notes,
      bookingDate: moment(event.start).format("YYYY-MM-DD HH:mm")
    });
    setSelectedEvent(event);
    setShowPopup(true);
  };

  // Handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = () => {
    if (!formData.customerName || !formData.employeeName) {
      alert("Please fill all required fields");
      return;
    }

    const newEvent = {
      title: `${formData.customerName} - ${formData.employeeName}`,
      start: moment(formData.bookingDate).toDate(),
      end: moment(formData.bookingDate).add(1, "hours").toDate(),
      allDay: false,
      customerName: formData.customerName,
      employeeName: formData.employeeName,
      notes: formData.notes
    };

    if (selectedEvent) {
      setEvents(events.map(event => event === selectedEvent ? newEvent : event));
    } else {
      setEvents([...events, newEvent]);
    }

    setShowPopup(false);
    setSelectedEvent(null);
    setFormData({ customerName: "", employeeName: "", notes: "", bookingDate: "" });
  };

  // Handle delete event
  const handleDelete = () => {
    setEvents(events.filter(event => event !== selectedEvent));
    setShowPopup(false);
    setSelectedEvent(null);
    setFormData({ customerName: "", employeeName: "", notes: "", bookingDate: "" });
  };

  return (
    <SAAdminLayout>
      <div style={{ position: "relative" }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, background: "white", borderRadius: "10px" }}
          view={view}
          views={["month", "week", "day"]}
          toolbar={true}
          onView={setView}
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
        />

        {/* Popup Modal */}
        {showPopup && selectedSlot && (
          <div
            className="absolute bg-white p-4 rounded-lg shadow-lg z-50"
            style={{ top: selectedSlot.y, left: selectedSlot.x, minWidth: "250px" }}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => { setShowPopup(false); setFormData({ customerName: "", employeeName: "", notes: "", bookingDate: "" }); }}
            >
              ✕
            </button>
            <h2 className="text-lg font-bold mb-2">{selectedEvent ? "Edit Booking" : "Add Booking"}</h2>
            <p className="text-gray-600 mb-2">{moment(formData.bookingDate).format("MMMM D, YYYY h:mm A")}</p>

            <select
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className="w-full border p-2 mb-2"
            >
              <option value="">Select Customer</option>
              {customerNames.map((name, index) => (
                <option key={index} value={name}>{name}</option>
              ))}
            </select>

            <select
              name="employeeName"
              value={formData.employeeName}
              onChange={handleChange}
              className="w-full border p-2 mb-2"
            >
              <option value="">Select Employee</option>
              {employeeNames.map((name, index) => (
                <option key={index} value={name}>{name}</option>
              ))}
            </select>

            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Notes (Optional)"
              className="w-full border p-2 mb-2"
            ></textarea>

            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-4 py-2 rounded w-full mb-2"
            >
              {selectedEvent ? "Update" : "Submit"}
            </button>
            {selectedEvent && (
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded w-full"
              >
                Delete
              </button>
            )}
          </div>
        )}
      </div>
    </SAAdminLayout>
  );
};

export default EmployeeCalendar;



