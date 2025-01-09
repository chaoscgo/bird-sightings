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
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (birdId) {
      props.handleUpdateBird(birdId, formData);
    } else {
      props.handleAddBird(formData);
    };
  };

  return (
    <>
      <h1>{birdId ? 'Edit Bird' : 'What new bird did you see?'}</h1>
      <main className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div>
           <img className={styles.questionbird} src={QuestionBird} alt="A cartoon bird next to a question mark" />
           <p>Image designed by <a className="attribution" href="https://images.search.yahoo.com/images/view;_ylt=AwrijJekBIBnoksF0UmJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzllOGE5MGFkMmVjYThmODdlYmYwZTg1NzZkODVmOTM4BGdwb3MDNQRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dbird%2Bwith%2Bquestion%2Bmark%26type%3Dsbc_dial%252FE210US1589G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D5&w=426&h=280&imgurl=image.shutterstock.com%2Fimage-illustration%2Ffunny-bird-big-question-mark-260nw-745823872.jpg&rurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-illustration%2Ffunny-bird-big-question-mark-3d-745823872&size=13KB&p=bird+with+question+mark&oid=9e8a90ad2eca8f87ebf0e8576d85f938&fr2=piv-web&fr=mcafee&tt=Funny+Bird+Big+Question+Mark+3d+Stock+Illustration+745823872&b=0&ni=21&no=5&ts=&tab=organic&sigr=rUb8Xv8gv7Lo&sigb=dmD7ocZT8ARO&sigi=UgtfbjhbuoMm&sigt=26dB3EBMzRm7&.crumb=mqsj5dLVT7q&fr=mcafee&fr2=piv-web&type=sbc_dial%2FE210US1589G0">Shutterstock</a></p>
          </div>
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
               value = {moment.utc(new Date(formData.date), "YYYY-MM-DDTHH").format("YYYY-MM-DD")}
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