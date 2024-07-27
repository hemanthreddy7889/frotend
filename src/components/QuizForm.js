import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../css/QuizForm.css'

const QuizForm = () => {

  const [category, setCategory] = useState('');
  const [numQ, setNumQ] = useState(1);
  const [title, setTitle] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/quiz/create?category=${category}&numQ=${numQ}&title=${title}`);
      console.log(response.data);
      var id = response.data;

      navigate(`/quiz/${id}`);

    } catch (error) {
      console.error('There was an error creating the quiz!', error);
    }
  };
  const goToQuestionForm = () => {
    navigate('/question-form');
  };
  const goToAllQuestions = () => {
    navigate('/allquestions');
  };

  return (<div>
    <h1>Create Quiz</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div>
        <label>Number of Questions:</label>
        <input
          type="number"
          value={numQ}
          onChange={(e) => setNumQ(e.target.value)}
        />
      </div>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button type="submit">Create Quiz</button>
    </form>
    <div>
      <button onClick={goToQuestionForm}>Create a New Question</button>
      <button onClick={goToAllQuestions}>See All Quesions</button>
    </div>
  </div>
  );
};

export default QuizForm;
