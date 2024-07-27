import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import QuizQuestions from './QuizQuestions';
import Popup from './Popup';

const QuizDetails = () => {
    const { quizId } = useParams();
    
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [result, setResult] = useState(-1);

    const [questions, setQuestions] = useState([]);
    const [responses, setResponses] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                console.log(quizId);
                const response = await axios.get(`/quiz/get/${quizId}`);
                setQuestions(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, [quizId]);
    const handleOptionSelect = (questionId, selectedOption) => {
        // Update responses state with selected option for the given question ID
        const updatedResponses = [...responses];
        const existingResponseIndex = updatedResponses.findIndex(response => response.questionId === questionId);

        if (existingResponseIndex !== -1) {
            // If response exists, update it
            updatedResponses[existingResponseIndex] = { questionId, selectedOption };
        } else {
            // If response doesn't exist, add it
            updatedResponses.push({ questionId, selectedOption });
        }

        setResponses(updatedResponses);
    };
    const handleSubmitQuiz = async () => {
        try {
            // Make a POST request to submit responses
            console.log(responses);
            console.log(quizId);
            const intQuizId = parseInt(quizId, 10);
            var postresponse = await axios.post(`/quiz/submit/${intQuizId}`,  responses );
            console.log('Responses submitted successfully:', responses);
            console.log(postresponse.data);
            setResult(postresponse.data);
            setIsPopupOpen(true);
            
            // Optionally, you can navigate or perform another action after submission
        } catch (error) {
            console.error('Error submitting responses:', error);
        }
    };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };



    return (
        <div>
            <h2>Quiz Questions</h2>
            <QuizQuestions questions={questions} onOptionSelect={handleOptionSelect} />
            <button onClick={handleSubmitQuiz}>Submit Quiz</button>
            {isPopupOpen && <Popup message="Your Result" userResult={result} onClose={handleClosePopup} />}
            
        </div>
    );
};

export default QuizDetails;
