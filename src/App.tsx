/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { courseData, quizzes, Lesson, Week, Quiz } from './types';
import { ChevronDown, ChevronUp, BookOpenText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import LessonView from './components/LessonView';
import TestView from './components/TestView';

export default function App() {
  const [expandedLesson, setExpandedLesson] = useState<number | null>(null);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);

  const toggleLesson = (id: number) => {
    setExpandedLesson(expandedLesson === id ? null : id);
  };

  const handleOpenLesson = (lesson: Lesson) => {
    setActiveLesson(lesson);
  };

  const handleGoToTest = (quizId: number) => {
    const quiz = quizzes.find(q => q.id === quizId);
    if(quiz) setActiveQuiz(quiz);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12">
      <header className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-amber-500 mb-4 tracking-tight">
          Курс: Оформление ФОП в Украине
        </h1>
        <p className="text-xl text-slate-400">10 уроков | 2 недели | Интенсивный практикум</p>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        {activeQuiz ? (
          <TestView quiz={activeQuiz} onBack={() => setActiveQuiz(null)} />
        ) : activeLesson ? (
          <LessonView 
            lesson={activeLesson} 
            onBack={() => setActiveLesson(null)} 
            onGoToTest={handleGoToTest}
          />
        ) : (
          courseData.map((week: Week, weekIndex: number) => (
            <section key={weekIndex} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-amber-500 mb-6 flex items-center gap-3">
                <BookOpenText className="w-8 h-8" />
                {week.title}
              </h2>
              <div className="space-y-4">
                {week.lessons.map((lesson: Lesson) => (
                  <div key={lesson.id} className="border border-slate-700/50 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleLesson(lesson.id)}
                      className="w-full text-left p-4 md:p-5 flex justify-between items-center bg-slate-800/50 hover:bg-slate-800 transition"
                    >
                      <span className="font-semibold text-lg text-slate-200">{lesson.title}</span>
                      {expandedLesson === lesson.id ? <ChevronUp className="text-amber-500" /> : <ChevronDown className="text-slate-500" />}
                    </button>
                    <AnimatePresence>
                      {expandedLesson === lesson.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="bg-slate-950 px-4 md:px-5"
                        >
                          <ul className="py-4 space-y-2 list-disc list-inside text-slate-300">
                            {lesson.details.map((detail, index) => (
                              <li key={index} className="ml-2">{detail}</li>
                            ))}
                          </ul>
                          <div className="pb-4">
                            <button onClick={() => handleOpenLesson(lesson)} className="bg-amber-600 text-slate-950 px-6 py-2 rounded-lg font-semibold hover:bg-amber-500 transition">
                                Открыть урок
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </section>
          ))
        )}
      </main>
    </div>
  );
}

