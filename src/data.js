const questions = [
  {
    name: 'question1',
    title: 'How do you drink your coffee?',
    options: [
      {
        radioName: 'q1-radio1',
        title: 'Capsule',
        info: 'Compatible with Nespresso systems and similar brewers',
        selected: true,
      },
      {
        radioName: 'q1-radio2',
        title: 'Filter',
        info: 'For pour over or drip methods like Aeropress, Chemex, and V60',
        selected: false,
      },
      {
        radioName: 'q1-radio3',
        title: 'Espresso',
        info:
          'Dense and finely ground beans for an intense, flavorful experience',
        selected: false,
      },
    ],
  },
  {
    name: 'question2',
    title: 'What type of coffee?',
    options: [
      {
        radioName: 'q2-radio1',
        title: 'Single origin',
        info: 'Distinct, high quality coffee from a specific family-owned farm',
        selected: false,
      },
      {
        radioName: 'q2-radio2',
        title: 'Decaf',
        info: 'Just like regular coffee, except the caffeine has been removed',
        selected: true,
      },
      {
        radioName: 'q2-radio3',
        title: 'Blended',
        info:
          'Combination of two or three dark roasted beans of organic coffees',
        selected: false,
      },
    ],
  },
];

export default questions;
