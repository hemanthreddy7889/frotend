import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import QuizQuestions from './QuizQuestions';

const AllQuestions = () => {
    //const { quizId } = useParams(); 
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                
                const response = await axios.get(`/question/allQuestions`);
                setQuestions(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    });

    return (
        <div>
            <h2>Quiz All Questions</h2>
            <QuizQuestions questions={questions} />
        </div>
    );
};

export default AllQuestions;
