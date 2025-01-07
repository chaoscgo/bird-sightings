import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as birdService from '../../services/birdService';
import styles from './BirdForm.module.css'

const BirdForm = (props) => {

  const { birdId } = useParams();

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    date: '',
    notes: '',
  });

  useEffect(() => {
    const fetchBird = async () => {
      const birdData = await birdService.show(birdId);
      setFormData(birdData);
    };
    if (birdId) fetchBird();
  }, [birdId]);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (birdId) {
        props.handleUpdateBird(birdId, formData);
      } else {
        props.handleAddBird(formData);
      }
  };

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>{birdId ? 'Edit Bird' : 'New Bird'}</h1>
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
        //   pattern="\d{2}-\d{2}-\d{4}"
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
