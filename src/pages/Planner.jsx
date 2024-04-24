import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Planner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [setUploadedImage] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setUploadedImage(URL.createObjectURL(file));
  };

  const renderDayComponent = ({ date, view }) => {
    const isToday = date.toDateString() === new Date().toDateString();
    return (
      <div
        className={`day-component flex flex-col items-center ${isToday ? 'text-blue-500 font-semibold' : ''}`}
      >
        <span>{date.getDate()}</span>
        {isToday && <span>Today</span>}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-8">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileContent={renderDayComponent}
          calendarType="US"
          className="react-calendar mx-auto shadow-lg rounded-lg"
          prevLabel={<span className="text-gray-500 hover:text-gray-700">&#8249;</span>}
          nextLabel={<span className="text-gray-500 hover:text-gray-700">&#8250;</span>}
        />
      </div>
      {/* ... other components */}
    </div>
  );
};

export default Planner;