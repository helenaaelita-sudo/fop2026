import { useState } from 'react';
import { Lesson } from '../types';
import { ChevronLeft, Download, X } from 'lucide-react';

interface Props {
  lesson: Lesson;
  onBack: () => void;
  onGoToTest: (quizId: number) => void;
}

export default function LessonView({ lesson, onBack, onGoToTest }: Props) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [homework, setHomework] = useState('');

  const submitHomework = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await fetch('/api/submit-homework', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, message: homework, lessonTitle: lesson.title })
        });
        if (response.ok) {
            alert("Домашнее задание успешно отправлено!");
            setIsFormVisible(false);
        }
    } catch (e) {
        alert("Ошибка при отправке");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8 bg-slate-900 border border-slate-800 rounded-2xl text-slate-100">
      <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 font-medium">
        <ChevronLeft size={20} /> Назад к списку
      </button>

      <h1 className="text-3xl font-bold mb-6 text-amber-500">{lesson.title}</h1>
      
      {lesson.videoUrl && (
        <div className="aspect-video mb-8 border border-slate-700 rounded-xl overflow-hidden bg-slate-950">
          <iframe 
            width="100%" 
            height="100%" 
            src={lesson.videoUrl} 
            title="Lesson Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </div>
      )}

      {lesson.materials && lesson.materials.length > 0 && (
        <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4 text-slate-300">Материалы к уроку:</h3>
            <div className="flex gap-4">
                {lesson.materials.map(m => (
                    <a key={m.id} href={m.url} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg text-slate-200 font-medium transition">
                        <Download size={18}/> {m.title}
                    </a>
                ))}
            </div>
        </div>
      )}

      <div className="flex flex-col gap-4">
        {lesson.quizId && (
          <button 
             onClick={() => onGoToTest(lesson.quizId!)}
             className="w-full bg-slate-700 text-white font-bold py-3 rounded-lg hover:bg-slate-600 transition"
          >
              Перейти к тесту
          </button>
        )}
        <button 
           onClick={() => setIsFormVisible(true)}
           className="w-full text-center bg-emerald-700 text-white font-bold py-3 rounded-lg hover:bg-emerald-600 transition"
        >
            Отправить домашку на проверку
        </button>
      </div>

      {isFormVisible && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl w-full max-w-lg">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Сдача домашнего задания</h2>
                    <button onClick={() => setIsFormVisible(false)}><X/></button>
                </div>
                <form onSubmit={submitHomework} className="space-y-4">
                    <p className="text-slate-400 text-sm">
                        Задание: Опишите подробно выполненную работу, прикрепите файлы если необходимо.
                    </p>
                    <input type="email" placeholder="Ваш Email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full p-3 bg-slate-800 rounded-lg text-white" />
                    <textarea placeholder="Ваше задание" value={homework} onChange={e => setHomework(e.target.value)} required className="w-full p-3 bg-slate-800 rounded-lg text-white" rows={5} />
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-slate-400">Прикрепить файлы:</label>
                        <input type="file" multiple className="text-sm text-slate-300" />
                    </div>
                    <button type="submit" className="w-full bg-amber-600 text-white font-bold py-3 rounded-lg">Отправить</button>
                </form>
            </div>
        </div>
      )}
    </div>
  );
}
