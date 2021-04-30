const questions = [
  {
    name: 'question1',
    title: 'How do you drink your coffee?',
    options: [
      {
        radioName: 'q1-radio1',
        title: 'Capsule',
        info: 'Compatible with Nespresso systems and similar brewers',
        selected: false,
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
        title: 'Single Origin',
        info: 'Distinct, high quality coffee from a specific family-owned farm',
        selected: false,
      },
      {
        radioName: 'q2-radio2',
        title: 'Decaf',
        info: 'Just like regular coffee, except the caffeine has been removed',
        selected: false,
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
  {
    name: 'question3',
    title: 'How much would you like?',
    options: [
      {
        radioName: 'q3-radio1',
        title: '250g',
        info: 'Perfect for the solo drinker. Yields about 12 delicious cups.',
        selected: false,
      },
      {
        radioName: 'q3-radio2',
        title: '500g',
        info: 'Perfect option for a couple. Yields about 40 delectable cups.',
        selected: false,
      },
      {
        radioName: 'q3-radio3',
        title: '1000g',
        info:
          'Perfect for offices and events. Yields about 90 delightful cups.',
        selected: false,
      },
    ],
  },
  {
    name: 'question4',
    title: 'Want us to grind them?',
    options: [
      {
        radioName: 'q4-radio1',
        title: 'Wholebean',
        info: 'Best choice if you cherish the full sensory experience',
        selected: false,
      },
      {
        radioName: 'q4-radio2',
        title: 'Filter',
        info: 'For drip or pour-over coffee methods such as V60 or Aeropress',
        selected: false,
      },
      {
        radioName: 'q4-radio3',
        title: 'Cafetiére',
        info: 'Course ground beans specially suited for french press coffee',
        selected: false,
      },
    ],
  },
  {
    name: 'question5',
    title: 'How often should we deliver?',
    options: [
      {
        radioName: 'q5-radio1',
        title: 'Every week',
        info: '$14.00 per shipment. Includes free first-class shipping.',
        selected: false,
      },
      {
        radioName: 'q5-radio2',
        title: 'Every 2 weeks',
        info: '$17.25 per shipment. Includes free priority shipping.',
        selected: false,
      },
      {
        radioName: 'q5-radio3',
        title: 'Every month',
        info: '$22.50 per shipment. Includes free priority shipping.',
        selected: false,
      },
    ],
  },
];

export default questions;
