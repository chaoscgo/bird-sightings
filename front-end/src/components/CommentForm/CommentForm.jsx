import { useState, useEffect } from 'react';
import * as birdService from '../../services/birdService';
import styles from './CommentForm.module.css';
import Icon from '../Icon/Icon';

const CommentForm = (props) => {
  const [formData, setFormData] = useState({ text: '' });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddComment(formData);
    setFormData({ text: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text-input">Your comment:</label>
      <textarea
        required
        type="text"
        name="text"
        id="text-input"
        value={formData.text}
        onChange={handleChange}
      />
      <button type="submit">
        <Icon category="Create" />
        SUBMIT COMMENT
      </button>
    </form>
  );
};

export default CommentForm;
