import type { Team } from '@/_types';

export const teamsDataById: Record<Team['id'], Team> = {
  5030: {
    id: 5030,
    name: 'Flam',
    court: 'Gem. Sporthal Niel',
    address: 'J. Wouterslaan 58a, 2845 Niel',
    series: 'Heren 3B',
  },
  5158: {
    id: 5158,
    name: 'GB Stars',
    court: 'Gem. Sporthal Wuustwezel-Centrum',
    address: 'Slijkstraat 5, 2990 Wuustwezel',
    series: 'Heren 3B',
  },
  5207: {
    id: 5207,
    name: 'Ouw Belgen',
    court: 'Sporthal Berentrode',
    address: 'Grote Doelstraat 1, 2820 Bonheiden',
    series: 'Heren 3B',
  },
  5228: {
    id: 5228,
    name: 'Schalkse Dunkers',
    court: 'Huis v.d. vrije tijd De Schalk',
    address: 'Stadionlaan 2, 2830 Willebroek',
    series: 'Heren 3B',
  },
  5245: {
    id: 5245,
    name: 'De Stamgasten',
    court: 'Sporthal OLVP Middenschool',
    address: 'Temsesteenweg 14, 2880 Bornem',
    series: 'Heren 3B',
  },
  5260: {
    id: 5260,
    name: 'Gulle Trakteert',
    court: 'Sporthal De Rode Loop',
    address: 'Rodeloopstraat 2, 2170 Merksem',
    series: 'Heren 3B',
  },
  5287: {
    id: 5287,
    name: 'De Verlenging',
    court: 'Sporthal Arena',
    address: 'Pastorijstraat 50, 2800 Mechelen - Walem',
    series: 'Heren 3B',
  },
  5288: {
    id: 5288,
    name: 'BBC Scheppers',
    court: 'Scheppersinstituut',
    address: 'Melaan 16, 2800 Mechelen',
    series: 'Heren 3B',
  },
  5299: {
    id: 5299,
    name: 'Basket Weit',
    court: 'Sporthal Zemst',
    address: 'Schoolstraat 13, 1980 Zemst',
    series: 'Heren 3B',
  },
  5315: {
    id: 5315,
    name: 'Fokker Nets Gembo BBC',
    court: 'Sporthal Luisbekelaar',
    address: 'Luisbekelaar 1, 2140 Borgerhout',
    series: 'Heren 3B',
  },
  5323: {
    id: 5323,
    name: 'Fellows Ekeren',
    court: "'t Venneke",
    address: 'Den Geer 21, 2180 Ekeren',
    series: 'Heren 3B',
  },
  5324: {
    id: 5324,
    name: 'United Ballers Antwerp',
    court: 'Sporthal De Rode Loop - Zaal 2',
    address: 'Rodeloopstraat 2, 2170 Merksem',
    series: 'Heren 3B',
  },
};

export const teamsData = Object.values(teamsDataById);
