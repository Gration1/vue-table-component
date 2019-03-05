import Vue from 'vue';
import { TableColumn, TableComponent } from '../src';

new Vue({
    el: '#app',
    data: {
        data: [
            {
                firstName: 'Megan',
                lastName: 'Benjamin',
                instrument: 'Keyboard',
                birthday: '31/01/2019',
                songs: 5,
            },
            {
                firstName: 'Odette',
                lastName: 'Bell',
                instrument: 'Guitar',
                birthday: '27/10/2019',
                songs: 56,
            },
            {
                firstName: 'Karina',
                lastName: 'Montgomery',
                instrument: 'Bass',
                birthday: '22/05/2019',
                songs: 39,
            },
            {
                firstName: 'Dana',
                lastName: 'Mcmillan',
                instrument: 'Guitar',
                birthday: '10/05/2019',
                songs: 73,
            },
            {
                firstName: 'Renee',
                lastName: 'Mcconnell',
                instrument: 'Bass',
                birthday: '09/04/2019',
                songs: 88,
            },
            {
                firstName: 'Tate',
                lastName: 'Evans',
                instrument: 'Bass',
                birthday: '23/04/2019',
                songs: 69,
            },
            {
                firstName: 'Reed',
                lastName: 'Hensley',
                instrument: 'Drums',
                birthday: '19/07/2019',
                songs: 56,
            },
            {
                firstName: 'Danielle',
                lastName: 'Barrett',
                instrument: 'Drums',
                birthday: '30/10/2018',
                songs: 80,
            },
            {
                firstName: 'Bernard',
                lastName: 'Cruz',
                instrument: 'Drums',
                birthday: '29/05/2018',
                songs: 99,
            },
            {
                firstName: 'Stephen',
                lastName: 'Powell',
                instrument: 'Bass',
                birthday: '01/08/2019',
                songs: 14,
            },
            {
                firstName: 'Kimberley',
                lastName: 'Mann',
                instrument: 'Drums',
                birthday: '04/09/2018',
                songs: 67,
            },
            {
                firstName: 'Lunea',
                lastName: 'Koch',
                instrument: 'Drums',
                birthday: '24/12/2018',
                songs: 97,
            },
            {
                firstName: 'Amethyst',
                lastName: 'Delacruz',
                instrument: 'Bass',
                birthday: '25/03/2019',
                songs: 76,
            },
            {
                firstName: 'Georgia',
                lastName: 'Osborn',
                instrument: 'Drums',
                birthday: '04/03/2018',
                songs: 35,
            },
            {
                firstName: 'Nicole',
                lastName: 'Barlow',
                instrument: 'Drums',
                birthday: '06/09/2019',
                songs: 8,
            },
            {
                firstName: 'Erich',
                lastName: 'Padilla',
                instrument: 'Bass',
                birthday: '07/01/2019',
                songs: 69,
            },
            {
                firstName: 'Brett',
                lastName: 'Bullock',
                instrument: 'Keyboard',
                birthday: '24/10/2018',
                songs: 52,
            },
            {
                firstName: 'Dora',
                lastName: 'Shepherd',
                instrument: 'Keyboard',
                birthday: '25/08/2019',
                songs: 37,
            },
            {
                firstName: 'Savannah',
                lastName: 'Leonard',
                instrument: 'Drums',
                birthday: '06/09/2019',
                songs: 58,
            },
            {
                firstName: 'Geoffrey',
                lastName: 'Jordan',
                instrument: 'Keyboard',
                birthday: '07/06/2019',
                songs: 48,
            },
            {
                firstName: 'Brittany',
                lastName: 'Pate',
                instrument: 'Bass',
                birthday: '02/10/2018',
                songs: 48,
            },
            {
                firstName: 'Wayne',
                lastName: 'Hendricks',
                instrument: 'Drums',
                birthday: '05/08/2019',
                songs: 75,
            },
            {
                firstName: 'Chava',
                lastName: 'Moses',
                instrument: 'Drums',
                birthday: '28/02/2019',
                songs: 49,
            },
            {
                firstName: 'Kylie',
                lastName: 'Henson',
                instrument: 'Bass',
                birthday: '27/12/2018',
                songs: 69,
            },
            {
                firstName: 'Chadwick',
                lastName: 'Horn',
                instrument: 'Keyboard',
                birthday: '01/09/2019',
                songs: 68,
            },
            {
                firstName: 'Martha',
                lastName: 'David',
                instrument: 'Bass',
                birthday: '21/04/2019',
                songs: 76,
            },
            {
                firstName: 'Baxter',
                lastName: 'Klein',
                instrument: 'Guitar',
                birthday: '05/09/2019',
                songs: 59,
            },
            {
                firstName: 'Cheyenne',
                lastName: 'Wheeler',
                instrument: 'Bass',
                birthday: '03/01/2020',
                songs: 51,
            },
            {
                firstName: 'Aimee',
                lastName: 'Scott',
                instrument: 'Drums',
                birthday: '16/06/2018',
                songs: 98,
            },
            {
                firstName: 'Jada',
                lastName: 'Carson',
                instrument: 'Drums',
                birthday: '13/06/2019',
                songs: 49,
            },
            {
                firstName: 'Nadine',
                lastName: 'David',
                instrument: 'Guitar',
                birthday: '30/11/2018',
                songs: 28,
            },
            {
                firstName: 'Abdul',
                lastName: 'Ruiz',
                instrument: 'Guitar',
                birthday: '05/03/2019',
                songs: 92,
            },
            {
                firstName: 'Angela',
                lastName: 'Little',
                instrument: 'Drums',
                birthday: '25/02/2019',
                songs: 64,
            },
            {
                firstName: 'Alma',
                lastName: 'Lyons',
                instrument: 'Bass',
                birthday: '23/10/2019',
                songs: 73,
            },
            {
                firstName: 'Christian',
                lastName: 'Blackwell',
                instrument: 'Bass',
                birthday: '27/05/2019',
                songs: 17,
            },
            {
                firstName: 'Katell',
                lastName: 'Carson',
                instrument: 'Drums',
                birthday: '20/02/2019',
                songs: 12,
            },
            {
                firstName: 'Charissa',
                lastName: 'Vazquez',
                instrument: 'Drums',
                birthday: '19/01/2020',
                songs: 15,
            },
            {
                firstName: 'Roth',
                lastName: 'Woodard',
                instrument: 'Bass',
                birthday: '04/12/2018',
                songs: 6,
            },
            {
                firstName: 'Simon',
                lastName: 'Edwards',
                instrument: 'Drums',
                birthday: '06/04/2019',
                songs: 97,
            },
            {
                firstName: 'Audrey',
                lastName: 'Sweeney',
                instrument: 'Keyboard',
                birthday: '06/03/2019',
                songs: 76,
            },
            {
                firstName: 'Talon',
                lastName: 'Ware',
                instrument: 'Drums',
                birthday: '19/10/2018',
                songs: 38,
            },
            {
                firstName: 'Elmo',
                lastName: 'Emerson',
                instrument: 'Keyboard',
                birthday: '05/04/2019',
                songs: 35,
            },
            {
                firstName: 'Anastasia',
                lastName: 'Mccormick',
                instrument: 'Bass',
                birthday: '10/08/2018',
                songs: 56,
            },
            {
                firstName: 'Roanna',
                lastName: 'Fernandez',
                instrument: 'Drums',
                birthday: '05/03/2018',
                songs: 8,
            },
            {
                firstName: 'Lane',
                lastName: 'Sharp',
                instrument: 'Guitar',
                birthday: '27/02/2020',
                songs: 61,
            },
            {
                firstName: 'Logan',
                lastName: 'Swanson',
                instrument: 'Keyboard',
                birthday: '10/11/2019',
                songs: 3,
            },
            {
                firstName: 'Patrick',
                lastName: 'Kidd',
                instrument: 'Guitar',
                birthday: '27/11/2018',
                songs: 28,
            },
            {
                firstName: 'Paula',
                lastName: 'Burke',
                instrument: 'Drums',
                birthday: '30/11/2019',
                songs: 22,
            },
            {
                firstName: 'Dieter',
                lastName: 'Fulton',
                instrument: 'Guitar',
                birthday: '05/11/2018',
                songs: 55,
            },
            {
                firstName: 'Maya',
                lastName: 'Rice',
                instrument: 'Keyboard',
                birthday: '12/01/2019',
                songs: 38,
            },
            {
                firstName: 'Nathaniel',
                lastName: 'Head',
                instrument: 'Guitar',
                birthday: '13/08/2018',
                songs: 56,
            },
            {
                firstName: 'Reece',
                lastName: 'Schwartz',
                instrument: 'Keyboard',
                birthday: '16/10/2018',
                songs: 85,
            },
            {
                firstName: 'Iris',
                lastName: 'Chang',
                instrument: 'Bass',
                birthday: '12/08/2018',
                songs: 72,
            },
            {
                firstName: 'Kendall',
                lastName: 'Kennedy',
                instrument: 'Drums',
                birthday: '15/11/2018',
                songs: 62,
            },
            {
                firstName: 'Bree',
                lastName: 'Rivera',
                instrument: 'Guitar',
                birthday: '07/02/2020',
                songs: 25,
            },
            {
                firstName: 'Georgia',
                lastName: 'Hardy',
                instrument: 'Keyboard',
                birthday: '25/05/2019',
                songs: 49,
            },
            {
                firstName: 'Nicholas',
                lastName: 'Atkins',
                instrument: 'Guitar',
                birthday: '22/10/2018',
                songs: 12,
            },
            {
                firstName: 'Kato',
                lastName: 'Warner',
                instrument: 'Keyboard',
                birthday: '07/11/2018',
                songs: 57,
            },
            {
                firstName: 'Abraham',
                lastName: 'Cooley',
                instrument: 'Guitar',
                birthday: '07/02/2020',
                songs: 98,
            },
            {
                firstName: 'Hedley',
                lastName: 'Hendricks',
                instrument: 'Bass',
                birthday: '23/04/2018',
                songs: 33,
            },
            {
                firstName: 'Alec',
                lastName: 'Avery',
                instrument: 'Bass',
                birthday: '25/08/2019',
                songs: 68,
            },
            {
                firstName: 'Kelsey',
                lastName: 'Malone',
                instrument: 'Drums',
                birthday: '27/08/2019',
                songs: 2,
            },
            {
                firstName: 'Armando',
                lastName: 'Patel',
                instrument: 'Guitar',
                birthday: '29/10/2019',
                songs: 29,
            },
            {
                firstName: 'Eden',
                lastName: 'Sims',
                instrument: 'Drums',
                birthday: '02/03/2019',
                songs: 38,
            },
            {
                firstName: 'Kameko',
                lastName: 'Howell',
                instrument: 'Keyboard',
                birthday: '23/03/2019',
                songs: 42,
            },
            {
                firstName: 'Cain',
                lastName: 'Kramer',
                instrument: 'Guitar',
                birthday: '15/04/2018',
                songs: 14,
            },
            {
                firstName: 'Amanda',
                lastName: 'Wall',
                instrument: 'Drums',
                birthday: '19/03/2019',
                songs: 44,
            },
            {
                firstName: 'Stone',
                lastName: 'Foster',
                instrument: 'Drums',
                birthday: '19/11/2019',
                songs: 66,
            },
            {
                firstName: 'Whitney',
                lastName: 'Roberts',
                instrument: 'Drums',
                birthday: '02/09/2018',
                songs: 66,
            },
            {
                firstName: 'Bertha',
                lastName: 'Guerrero',
                instrument: 'Keyboard',
                birthday: '07/06/2018',
                songs: 39,
            },
            {
                firstName: 'Tatum',
                lastName: 'Stark',
                instrument: 'Bass',
                birthday: '02/02/2019',
                songs: 93,
            },
            {
                firstName: 'Omar',
                lastName: 'Levy',
                instrument: 'Keyboard',
                birthday: '30/08/2019',
                songs: 8,
            },
            {
                firstName: 'Giselle',
                lastName: 'Middleton',
                instrument: 'Drums',
                birthday: '17/08/2019',
                songs: 80,
            },
            {
                firstName: 'Colorado',
                lastName: 'Tillman',
                instrument: 'Drums',
                birthday: '18/03/2019',
                songs: 40,
            },
            {
                firstName: 'Upton',
                lastName: 'Aguilar',
                instrument: 'Drums',
                birthday: '24/06/2019',
                songs: 47,
            },
            {
                firstName: 'Jin',
                lastName: 'Pierce',
                instrument: 'Bass',
                birthday: '22/08/2019',
                songs: 69,
            },
            {
                firstName: 'Alexis',
                lastName: 'Olson',
                instrument: 'Keyboard',
                birthday: '28/03/2018',
                songs: 84,
            },
            {
                firstName: 'Lila',
                lastName: 'Morin',
                instrument: 'Bass',
                birthday: '27/09/2019',
                songs: 97,
            },
            {
                firstName: 'Evan',
                lastName: 'Price',
                instrument: 'Guitar',
                birthday: '07/06/2019',
                songs: 57,
            },
            {
                firstName: 'Brooke',
                lastName: 'Schwartz',
                instrument: 'Drums',
                birthday: '27/06/2019',
                songs: 18,
            },
            {
                firstName: 'Garrison',
                lastName: 'Davenport',
                instrument: 'Drums',
                birthday: '09/04/2018',
                songs: 33,
            },
            {
                firstName: 'Danielle',
                lastName: 'Velasquez',
                instrument: 'Drums',
                birthday: '04/05/2019',
                songs: 69,
            },
            {
                firstName: 'Lael',
                lastName: 'Rios',
                instrument: 'Bass',
                birthday: '22/08/2019',
                songs: 79,
            },
            {
                firstName: 'Gemma',
                lastName: 'Ramos',
                instrument: 'Keyboard',
                birthday: '03/04/2019',
                songs: 28,
            },
            {
                firstName: 'Kiayada',
                lastName: 'Reilly',
                instrument: 'Bass',
                birthday: '31/10/2018',
                songs: 65,
            },
            {
                firstName: 'Ross',
                lastName: 'Bender',
                instrument: 'Drums',
                birthday: '21/09/2019',
                songs: 26,
            },
            {
                firstName: 'Kathleen',
                lastName: 'Acevedo',
                instrument: 'Bass',
                birthday: '12/02/2019',
                songs: 97,
            },
            {
                firstName: 'Sydnee',
                lastName: 'Whitfield',
                instrument: 'Bass',
                birthday: '19/07/2018',
                songs: 71,
            },
            {
                firstName: 'Ariel',
                lastName: 'Fuller',
                instrument: 'Bass',
                birthday: '07/09/2019',
                songs: 79,
            },
            {
                firstName: 'Phoebe',
                lastName: 'Welch',
                instrument: 'Drums',
                birthday: '23/12/2019',
                songs: 27,
            },
            {
                firstName: 'Hilda',
                lastName: 'House',
                instrument: 'Keyboard',
                birthday: '06/06/2019',
                songs: 35,
            },
            {
                firstName: 'Oscar',
                lastName: 'Davenport',
                instrument: 'Keyboard',
                birthday: '16/04/2018',
                songs: 4,
            },
            {
                firstName: 'Knox',
                lastName: 'Guy',
                instrument: 'Guitar',
                birthday: '30/05/2019',
                songs: 14,
            },
            {
                firstName: 'Rahim',
                lastName: 'Olsen',
                instrument: 'Bass',
                birthday: '06/12/2019',
                songs: 11,
            },
            {
                firstName: 'Morgan',
                lastName: 'Avila',
                instrument: 'Bass',
                birthday: '05/06/2019',
                songs: 72,
            },
            {
                firstName: 'Hasad',
                lastName: 'Gonzalez',
                instrument: 'Bass',
                birthday: '20/01/2019',
                songs: 18,
            },
            {
                firstName: 'Driscoll',
                lastName: 'Goodman',
                instrument: 'Guitar',
                birthday: '16/08/2018',
                songs: 96,
            },
            {
                firstName: 'Ifeoma',
                lastName: 'Ayers',
                instrument: 'Drums',
                birthday: '27/02/2019',
                songs: 11,
            },
            {
                firstName: 'Ferris',
                lastName: 'Robinson',
                instrument: 'Drums',
                birthday: '30/12/2018',
                songs: 91,
            },
            {
                firstName: 'Duncan',
                lastName: 'Barnes',
                instrument: 'Drums',
                birthday: '23/11/2018',
                songs: 68,
            },
        ],
    },
    components: {
        TableColumn,
        TableComponent,
    },
    methods: {
        getData: async function ({ page, filter, sort }) {
            let dataToUse = this.data;
            if (filter) {
                dataToUse = dataToUse.filter(item => item.firstName.toLowerCase().includes(filter.toLowerCase()) || item.lastName.toLowerCase().includes(filter.toLowerCase()));
            }
            if (sort) {
                dataToUse = dataToUse.sort((a, b) => (a[sort.fieldName] < b[sort.fieldName] ? (sort.order === 'asc' ? -1 : 1) : a[sort.fieldName] > b[sort.fieldName] ? (sort.order === 'asc' ? 1 : -1) : 0));
            }

            const itemsPerPage = 5;
            const totalPages = Math.round(dataToUse.length / itemsPerPage);
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const pagedData = dataToUse.slice(startIndex, endIndex);

            return { data: pagedData, pagination: { totalPages: totalPages, currentPage: page } };
        },
    },
});