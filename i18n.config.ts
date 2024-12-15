export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            'ui.header.pages.index': 'Home',
            'ui.header.pages.order': 'Order',
            'ui.header.pages.projects': 'Our Projects',
            'ui.header.pages.personal_page': 'Account',
            'ui.header.language.button': 'Change Language',

            'ui.header.auth.button': 'Account',

            'ui.pages.main.description': "We're here to help you: our company serves household design, planning, building",
            'ui.pages.main.watch_works': "See our projects...",
            'ui.pages.main.shop': "Order from us",
            'ui.pages.main.banner_title': "Projects Showcase",

            'ui.pages.cards.design.name':"Design",
            'ui.pages.cards.design.description':"Our team of professional designers gives our client high quality solutions in design of their households",

            'ui.locale.en': "English",
            'ui.locale.ru': "Русский",
        },
        ru: {
            'ui.header.pages.index': 'Главная',
            'ui.header.pages.order': 'Заказ',
            'ui.header.pages.projects': 'Наши работы',
            'ui.header.pages.personal_page': 'Личный Кабинет',
            'ui.header.language.button': 'Поменять Язык',

            'ui.header.auth.button': 'Личный Кабинет',

            'ui.pages.main.description': "Мы - та компания, которая сделает ваш дом. Мы сделаем дизайн, планировку, здание",
            'ui.pages.main.watch_works': "Посмотреть наши проекты",
            'ui.pages.main.shop': "Взять заказ",

            'ui.pages.main.banner_title': "Витрина Работ",

            'ui.locale.en': "English",
            'ui.locale.ru': "Русский",
        }
    }
}))