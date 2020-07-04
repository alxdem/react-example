export const data = {
  nav: [
    {
      id: 'nav1',
      text: 'О клинике',
      link: false,
      items: [
        {
          id: 1,
          text: 'История клиники',
          link: 'about'
        },
        {
          id: 4,
          text: 'Лицензии',
          link: 'licenses'
        },
        {
          id: 13,
          text: 'Отзывы',
          link: 'reviews'
        },
        {
          id: 5,
          text: 'Вакансии',
          link: 'vacancy'
        },
        {
          id: 12,
          text: 'Информация для пациентов',
          link: 'patients'
        },
        {
          id: 14,
          text: 'Иногородним пациентам',
          link: 'nonresident'
        },
        {
          id: 2,
          text: 'Юридическая информация',
          link: 'legal'
        },
        {
          id: 3,
          text: 'Правила поведения пациентов',
          link: 'rules'
        },
        {
          id: 6,
          text: 'Специальные предложения',
          link: 'specials'
        }
      ]
    },
    {
      id: 'nav2',
      text: 'Диагностика и лечение',
      link: false,
      dinamicData: 'servicesData'
    },
    {
      id: 'nav3',
      text: 'Наши врачи',
      link: 'doctors'
    },
    {
      id: 'nav4',
      text: 'Стоимость',
      link: 'cost'
    },
    {
      id: 'nav5',
      text: 'Контакты',
      link: 'contacts'
    }
  ],
  forms: {
    appointment: {
      label: 'Записаться на прием',
      title: 'Приём у врача'
    }
  }
};
