import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./addBirthday.css";

function AddBirthdayEvent() {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [birthdays, setBirthdays] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddOrUpdateBirthday = () => {
    if (name && date) {
      if (editingIndex !== null) {
        const updatedBirthdays = birthdays.map((birthday, index) =>
          index === editingIndex ? { name, date } : birthday
        );
        setBirthdays(updatedBirthdays);
        setEditingIndex(null);
      } else {
        setBirthdays([...birthdays, { name, date }]);
      }
      setName("");
      setDate(new Date());
    }
  };

  const handleEditBirthday = (index) => {
    setName(birthdays[index].name);
    setDate(birthdays[index].date);
    setEditingIndex(index);
  };

  const handleDeleteBirthday = (index) => {
    setBirthdays(birthdays.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Birthday Calendar</h1>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter person's name"
        />
        <Calendar onChange={setDate} value={date} />
        <button onClick={handleAddOrUpdateBirthday}>
          {editingIndex !== null ? "Update Birthday" : "Add Birthday"}
        </button>
      </div>
      <h2>Added Birthdays:</h2>
      <ul>
        {birthdays.map((birthday, index) => (
          <li key={index}>
            {birthday.name} - {birthday.date.toDateString()}
            <button onClick={() => handleEditBirthday(index)}>Edit</button>
            <button onClick={() => handleDeleteBirthday(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddBirthdayEvent;
