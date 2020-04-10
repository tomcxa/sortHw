import Widget from './Widget';

export default class InfoCinemaTable extends Widget {
    constructor(data = [], className, container) {
        super('table', className, container);
        this.data = data;
        this.sorted = false;

        this.init();
    }

    init() {
        this.drawTable();
        const thead = this.element.rows[0];

        thead.addEventListener('click', (event) => {
            if (event.target.tagName === 'TH') {
                if (this.sorted) {
                    this.sorted = false;
                    this.descendingSort(event.target.textContent);
                } else {
                    this.ascendingSort(event.target.textContent);
                    this.sorted = true;
                    event.target.classList.add('sorted-default');
                }
            }
        });
    }

    drawTable() {
        const tableHead = `<tr class='table-head'>
                <th>id</th>
                <th>title</th>
                <th>year</th>
                <th>imdb</th>
            </tr>`;
        let tableRow = '';
        this.data.forEach((obj) => {
            tableRow += `<tr>
                <th>${obj.id}</th>
                <th>${obj.title}</th>
                <th>${obj.year}</th>
                <th>${obj.imdb}</th>
            </tr>`;
        });
        this.element.innerHTML = tableHead + tableRow;
    }

    descendingSort(propName) {
        this.data.sort((a, b) => {
            if (propName === 'title') {
                return b[propName].localeCompare(a[propName]);
            }
            if (a[propName] > b[propName]) {
                return -1;
            }
            if (a[propName] < b[propName]) {
                return 1;
            }
            // a должно быть равным b
            return 0;
        });

        this.init();
    }

    ascendingSort(propName) {
        this.data.sort((a, b) => {
            if (propName === 'title') {
                return a[propName].localeCompare(b[propName]);
            }
            if (a[propName] > b[propName]) {
                return 1;
            }
            if (a[propName] < b[propName]) {
                return -1;
            }
            // a должно быть равным b
            return 0;
        });

        this.init();
    }
}
