export interface Material {
  id: number;
  title: string;
  url: string;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: number;
  title: string;
  questions: Question[];
}

export interface Lesson {
  id: number;
  title: string;
  details: string[];
  videoUrl?: string;
  materials?: Material[];
  quizId?: number;
}

export interface Week {
  title: string;
  lessons: Lesson[];
}

export const courseData: Week[] = [
  {
    title: "НЕДЕЛЯ 1: СТАРТ И ВЫБОР СИСТЕМЫ",
    lessons: [
      { 
        id: 1, 
        title: "Урок 1. ФОП: правовые основы и регистрация", 
        details: ["Понятие ФОП, отличия от наёмного работника", "Ключевые государственные реестры", "Пошаговая регистрация через портал «Дія»", "Выбор КВЭДов, типичные ошибки"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        materials: [{ id: 1, title: "Материалы к Уроку 1", url: "#" }],
        quizId: 1
      },
      { 
        id: 2, 
        title: "Урок 2. Общая система налогообложения", 
        details: ["Кто обязан быть на общей системе", "Чистый доход: формула расчёта", "Ставки НДФЛ и военного сбора", "Документальное подтверждение расходов", "Книга учёта доходов и расходов"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        materials: [{ id: 2, title: "Материалы к Уроку 2", url: "#" }],
        quizId: 2
      },
      { 
        id: 3, 
        title: "Урок 3. Единый налог: группы, лимиты, ставки", 
        details: ["Обзор всех групп единого налога", "Лимиты годового дохода", "Разрешённые и запрещённые виды деятельности", "Ставки и военный сбор для 3-й группы", "Кейсы: подбор группы для разных видов деятельности"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        materials: [{ id: 3, title: "Материалы к Уроку 3", url: "#" }],
        quizId: 3
      },
      { 
        id: 4, 
        title: "Урок 4. Переход между системами и НДС", 
        details: ["Сроки и порядок перехода между системами", "Заявление на упрощённую систему", "Обязательная и добровольная регистрация плательщиком НДС", "Заполнение заявления на регистрацию НДС"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        materials: [{ id: 4, title: "Материалы к Уроку 4", url: "#" }],
        quizId: 4
      },
      { 
        id: 5, 
        title: "Урок 5. Изменение данных и проверка контрагентов", 
        details: ["Внесение изменений о ФОП через «Дію»", "Сроки уведомления налоговой", "Бесплатные реестры для проверки контрагентов", "Кейс: как не попасть на фиктивного контрагента"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        materials: [{ id: 5, title: "Материалы к Уроку 5", url: "#" }],
        quizId: 5
      },
    ],
  },
  {
    title: "НЕДЕЛЯ 2: ОТЧЁТНОСТЬ, УЧЁТ И ЗАКРЫТИЕ",
    lessons: [
      { 
        id: 6, 
        title: "Урок 6. Единый социальный взнос (ЕСВ)", 
        details: ["Назначение ЕСВ, база начисления", "Минимальный и максимальный страховой взнос", "Обязанность уплаты «за себя» на всех системах", "Льготы по уплате", "Формирование и оплата квитанции"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        materials: [{ id: 6, title: "Материалы к Уроку 6", url: "#" }],
        quizId: 6
      },
      { 
        id: 7, 
        title: "Урок 7. Подача отчётности", 
        details: ["Виды отчётности для разных систем", "Сроки подачи деклараций", "Заполнение декларации плательщика единого налога", "Подписание КЭП и отправка", "Календарь отчётности на год"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        materials: [{ id: 7, title: "Материалы к Уроку 7", url: "#" }],
        quizId: 7
      },
      { 
        id: 8, 
        title: "Урок 8. Учёт и хранение документов", 
        details: ["Первичные документы: требования и сроки хранения", "Книга учёта доходов", "Ведение учёта в Google Таблицах или Excel", "ПРРО для приёма наличных"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        materials: [{ id: 8, title: "Материалы к Уроку 8", url: "#" }],
        quizId: 8
      },
      { 
        id: 9, 
        title: "Урок 9. ФОП и наёмные работники", 
        details: ["Ограничения по количеству работников", "Оформление трудового договора", "Уведомление о приёме через «Дію»", "Налоги с зарплаты наёмного работника", "Объединённый отчёт по ЕСВ и НДФЛ"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        materials: [{ id: 9, title: "Материалы к Уроку 9", url: "#" }],
        quizId: 9
      },
      { 
        id: 10, 
        title: "Урок 10. Закрытие ФОП и налоговые проверки", 
        details: ["Виды налоговых проверок", "Процедура ликвидации ФОП через «Дію»", "Сверка с налоговой перед закрытием", "Штрафы за нарушения", "Итоговые рекомендации"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        materials: [{ id: 10, title: "Материалы к Уроку 10", url: "#" }],
        quizId: 10
      },
    ],
  },
];

export const quizzes: Quiz[] = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Тест к Уроку ${i + 1}`,
    questions: [
      { id: 1, question: `Вопрос по теме урока ${i + 1}`, options: ["Вариант А", "Вариант Б", "Вариант В"], correctAnswer: 0 }
    ]
}));
