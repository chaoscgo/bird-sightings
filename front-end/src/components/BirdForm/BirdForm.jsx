import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as birdService from '../../services/birdService';
import styles from './BirdForm.module.css';
import { format } from "date-fns";
import moment from "moment";
import QuestionBird from '../../assets/images/questionbird.jpg';

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
    console.log(evt.target.value);
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
    <>
    <h1>{birdId ? 'Edit Bird' : 'What new bird did you see?'}</h1>
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <img className={styles.questionbird} src={QuestionBird} alt="A cartoon bird next to a question mark" />
        <section className={styles.secform}>
        <label htmlFor="name-input">Name</label>
        <input className={styles.textinputname}
          required
          type="text"
          name="name"
          id="name-input"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="location-input">Location</label>
        <input className={styles.textinputloc}
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
          value = {moment(new Date(formData.date), "YYYY-MM-DDTHH").format("YYYY-MM-DD")}
          onChange={handleChange}
        />
        <label htmlFor="notes-input">Notes</label>
        <textarea className={styles.textnotes}
          type="text"
          name="notes"
          id="notes-input"
          value={formData.notes}
          onChange={handleChange}
        />
        </section>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
 </>   
  );
};

export default BirdForm;
