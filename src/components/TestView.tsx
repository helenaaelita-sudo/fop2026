import { useState } from 'react';
import { Quiz } from '../types';
import { ChevronLeft } from 'lucide-react';

interface Props {
  quiz: Quiz;
  onBack: () => void;
}

export default function TestView({ quiz, onBack }: Props) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (questionId: number, optionIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    quiz.questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="max-w-2xl mx-auto p-6 md:p-8 bg-slate-900 border border-slate-800 rounded-2xl text-slate-100">
      <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 font-medium">
        <ChevronLeft size={20} /> Вернуться к уроку
      </button>

      <h1 className="text-2xl font-bold mb-8 text-amber-500">{quiz.title}</h1>
      
      <div className="space-y-6">
        {quiz.questions.map(q => (
          <div key={q.id} className="bg-slate-800/50 p-4 rounded-xl">
            <p className="font-medium mb-3 text-slate-200">{q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleOptionSelect(q.id, i)}
                  className={`w-full text-left p-3 rounded-lg transition ${selectedAnswers[q.id] === i ? 'bg-amber-600 text-slate-950' : 'bg-slate-700 hover:bg-slate-600'}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {!showResults ? (
        <button 
           onClick={() => setShowResults(true)}
           className="w-full mt-8 bg-amber-600 text-slate-950 font-bold py-3 rounded-lg hover:bg-amber-500 transition"
        >
            Завершить тест
        </button>
      ) : (
        <div className="mt-6 text-center text-xl font-bold text-slate-100">
            Ваш результат: {calculateScore()} из {quiz.questions.length}
        </div>
      )}
    </div>
  );
}
