import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const QuestionForm = () => {
  const [formData, setFormData] = useState({
    category: '',
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    difficultyLevel: '',
    rightAnswer: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/question/add', formData)
        .then(response => {
          console.log('Success:', response.data);
         navigate('/');
        })
        .catch(error => {
          console.error('Error:', error);
        });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Question:</label>
        <input
          type="text"
          name="question"
          value={formData.question}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Option 1:</label>
        <input
          type="text"
          name="option1"
          value={formData.option1}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Option 2:</label>
        <input
          type="text"
          name="option2"
          value={formData.option2}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Option 3:</label>
        <input
          type="text"
          name="option3"
          value={formData.option3}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Option 4:</label>
        <input
          type="text"
          name="option4"
          value={formData.option4}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Difficulty Level:</label>
        <input
          type="text"
          name="difficultyLevel"
          value={formData.difficultyLevel}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Right Answer:</label>
        <input
          type="text"
          name="rightAnswer"
          value={formData.rightAnswer}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuestionForm;
