import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getStudentBookings, getTutorBookings } from "../../api/bookings";
import "./Calendar.css";

export default function CalendarView({ role, userId, tutorId }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if ((role === "student" && userId) || (role === "tutor" && tutorId)) loadBookings();
  }, [role, userId, tutorId, currentDate]);

  const loadBookings = async () => {
    setLoading(true);
    try {
      const data =
        role === "student"
          ? await getStudentBookings(userId)
          : await getTutorBookings(tutorId);
      setBookings(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];
    for (let i = 0; i < firstDay.getDay(); i++) days.push(null);
    for (let d = 1; d <= lastDay.getDate(); d++) days.push(new Date(year, month, d));
    return days;
  };

  const goToPreviousMonth = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const goToNextMonth = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  const goToToday = () => setCurrentDate(new Date());

  const days = getDaysInMonth(currentDate);
  const today = new Date();

  const isToday = (date) => date?.toDateString() === today.toDateString();

  const getBookingsForDate = (date) => {
    if (!date) return [];
    const dateStr = date.toISOString().split("T")[0];
    return bookings.filter(
      (b) => new Date(b.lesson_date).toISOString().split("T")[0] === dateStr
    );
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={goToPreviousMonth}><ChevronLeft /></button>
        <div>
          <h3>{currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}</h3>
          <button onClick={goToToday}>Today</button>
        </div>
        <button onClick={goToNextMonth}><ChevronRight /></button>
      </div>

      <div className="calendar-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => <div key={d}>{d}</div>)}
        {days.map((date, i) => {
          const dateBookings = getBookingsForDate(date);
          return (
            <div key={i} className={`calendar-day ${isToday(date) ? "today" : ""}`}>
              {date && <div>{date.getDate()}</div>}
              {dateBookings.map(b => <div key={b.id} className={`booking-dot ${b.status}`} />)}
            </div>
          );
        })}
      </div>

      {loading && <div>Loading...</div>}
    </div>
  );
}
