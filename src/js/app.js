/* eslint-disable quotes */
/* eslint-disable quote-props */
import InfoCinemaTable from './InfoCinemaTable';

// eslint-disable-next-line no-console
const appContainer = document.querySelector('.app');

const table = new InfoCinemaTable([
    {
        "id": 26,
        "title": "Побег из Шоушенка",
        "imdb": 9.30,
        "year": 1994,
    },
    {
        "id": 25,
        "title": "Крёстный отец",
        "imdb": 9.20,
        "year": 1972,
    },
    {
        "id": 27,
        "title": "Крёстный отец 2",
        "imdb": 9.00,
        "year": 1974,
    },
    {
        "id": 1047,
        "title": "Тёмный рыцарь",
        "imdb": 9.00,
        "year": 2008,
    },
    {
        "id": 223,
        "title": "Криминальное чтиво",
        "imdb": 8.90,
        "year": 1994,
    },
], 'cinema', appContainer);

table.insertToDOM();
