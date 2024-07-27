import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import QuizDetails from './components/QuizDetails';
import QuizForm from './components/QuizForm.js';
import QuestionForm from './components/QuestionForm.js';
import AllQuestions from './components/AllQuesions.js';
import Layout from './components/Layout.js';
import LoginCreateAccountPage from './components/LoginCreateAccountPage.js';

function App() {
  return (
    <div className="App">
      
    
      
      <Router>
      <Layout><Routes>
      <Route path="/" element={<LoginCreateAccountPage />} />
      <Route path="/question-form" element={<QuestionForm/>}/>
      <Route path="/allquestions" element={<AllQuestions/>}/>
      <Route exact path="/quiz/:quizId" element={<QuizDetails />} />
    </Routes>
    </Layout>
    </Router>
    
    </div>
  );
}

export default App;
