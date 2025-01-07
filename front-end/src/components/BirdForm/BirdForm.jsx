import { useState } from 'react';

const BirdForm = (props) => {

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    date: '',
    notes: '',
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddBird(formData);
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="location-input">Location</label>
        <input
          required
          type="text"
          name="location"
          id="location-input"
          value={formData.location}
          onChange={handleChange}
        />
        <label htmlFor="date-input">Date Spotted</label>
        <input
          required
          type="date"
          name="date"
          id="date-input"
          value={formData.date}
          onChange={handleChange}
        />
        <label htmlFor="notes-input">Notes</label>
        <textarea
          type="text"
          name="notes"
          id="notes-input"
          value={formData.notes}
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
};

export default BirdForm;
