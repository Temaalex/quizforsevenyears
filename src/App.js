import { Routes, Route } from 'react-router-dom';

import QuizComp from './components/QuizComp';
import QuizComp1 from './components/QuizComp1';
import QuizComp2 from './components/QuizComp2';

import QuizTest from './components/QuizTest';
import QuizText from './components/QuizText';

import Error from './components/ContentError';
import ContentBox from './components/ContentBox';
import TheEnd from './components/TheEnd';


function App() {
  return (
    <Routes>
      {/* Ошибка в ответе */}
      <Route path="/0" element={<Error/>} />
      {/* Открытие сундука */}
      <Route path="/1000" element={<ContentBox/>} />
      


      {/* все кроме */}
      <Route path="*" element={<h1>404 Not Found</h1>} />


      {/* Первый вопрос */}
      <Route path="/1" element={<QuizComp/>} />
      <Route path="/2" element={<QuizComp1/>} />
      <Route path="/3" element={<QuizComp2/>} />
      {/* Второй вопрос */}
      <Route path="/5" element={<QuizComp/>} />
      <Route path="/6" element={<QuizComp1/>} />
      <Route path="/7" element={<QuizComp2/>} />
      {/* Третий вопрос */}
      <Route path="/9" element={<QuizTest/>} />
      {/* Четвертый вопрос */}
      <Route path="/13" element={<QuizTest/>} />
      {/* Пятый вопрос */}
      <Route path="/17" element={<QuizText/>} />
      {/* Шестой вопрос */}
      <Route path="/21" element={<QuizText/>} />
      {/* Седьмой вопрос */}
      <Route path="/25" element={<QuizText/>} />
      {/* Восьмой вопрос */}
      <Route path="/29" element={<QuizText/>} />
      {/* Девятый вопрос */}
      <Route path="/33" element={<QuizTest/>} />


      {/* Конец */}
      <Route path="/1001" element={<TheEnd/>} />
    </Routes>
  );
}

export default App;
