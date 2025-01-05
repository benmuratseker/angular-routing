import { Category, Pie } from "./pie";

export const PIES: Pie[] = [
  {
    id: "1",
    category: Category.CHEESECAKE,
    image: '../../assets/images/cheesecake-1.png',
    thumb: '../../assets/images/cheesecake-1-thumb.png',
    title: 'Original Cheesecake',
    ingredients: [
      'cream cheese',
      'sugar',
      'eggs',
      'vanilla',
      'milk',
      'butter',
      'wheat flour',
      'graham flour',
      'molasses',
      'palm oil',
      'leavening',
      'salt',
    ],
    price: 18.95,
    description: 'This deliciously creamy perfectly sweet cheesecake is baked to perfection. A crisp graham cracker crust lines the bottom of the cheesecake. Can be frozen for up to six months, simply defrost to serve!'
  },
  {
    id: "2",
    category: Category.CHEESECAKE,
    image: '../../assets/images/cheesecake-2.png',
    thumb: '../../assets/images/cheesecake-2-thumb.png',
    title: 'Strawberry Cheesecake',
    ingredients: [
      'cream cheese',
      'sugar',
      'eggs',
      'strawberries',
      'vanilla',
      'milk',
      'butter',
      'wheat flour',
      'palm oil',
      'leavening',
      'salt',
    ],
    price: 18.95,
    description: 'Fresh strawberries top this deliciously creamy perfectly sweet cheesecake. A thin pastry crust lines the bottom of the cheesecake. Berries arrive separately for freshness.'

  },
  {
    id: "3",
    category: Category.CHEESECAKE,
    image: '../../assets/images/cheesecake-3.png',
    thumb: '../../assets/images/cheesecake-3-thumb.png',
    title: 'Chocolate Cheesecake',
    price: 18.95,
    ingredients: [
      'cream cheese',
      'sugar',
      'eggs',
      'chocolate',
      'hazelnuts',
      'vanilla',
      'milk',
      'butter',
      'wheat flour',
      'cocoa powder',
      'molasses',
      'palm oil',
      'leavening',
      'salt',
    ],
    description: 'This delightfully chocolate cheesecake is baked to perfection and served with a heaping portion of toasted hazelnuts. A crisp chocolatey cracker crust lines the bottom of the cheesecake. Can be frozen for up to six months, simply defrost to serve!'
  },
  {
    id: "4",
    category: Category.CHEESECAKE,
    image: '../../assets/images/cheesecake-4.png',
    thumb: '../../assets/images/cheesecake-4-thumb.png',
    title: 'Birthday Cheesecake',
    price: 18.95,
    ingredients: [
      'cream cheese',
      'sugar',
      'eggs',
      'sprinkles',
      'vanilla',
      'milk',
      'butter',
      'wheat flour',
      'corn starch',
      'palm oil',
      'leavening',
      'salt',
    ],
    description: 'This cheesecake is a celebration waiting to happen. This is a vanilla cheesecake with multi colored sprinkles baked inside. It is topped with delicate frosting roses and baked in a thin cake like crust. This can be frozen for up to six months.'

  },
  {
    id: "5",
    category: Category.CHEESECAKE,
    image: '../../assets/images/cheesecake-5.png',
    thumb: '../../assets/images/cheesecake-5-thumb.png',
    title: 'Caramel Cheesecake',
    price: 18.95,
    ingredients: [
      'cream cheese',
      'sugar',
      'eggs',
      'vanilla',
      'milk',
      'butter',
      'popcorn',
    ],
    description: 'This crust-less cheese cake is almost flan like in texture. This traditional vanilla flavored cheesecake custard is topped with house-made caramel sauce and sprinkled with kettle corn.'
  },
  {
    id: "6",
    category: Category.CHEESECAKE,
    image: '../../assets/images/cheesecake-6.png',
    thumb: '../../assets/images/cheesecake-6-thumb.png',
    title: 'Pistachio Cheesecake',
    price: 18.95,
    ingredients: [
      'cream cheese',
      'sugar',
      'whipped cream',
      'gelatin',
      'pistachios',
      'vanilla',
      'milk',
      'butter',
      'wheat flour',
      'graham flour',
      'molasses',
      'palm oil',
      'leavening',
      'salt',
    ],
    description: 'This picnic favorite is a chilled cheesecake. We start with a graham cracker crust then we fill it with delicious pistachio cream filling. It is topped with toasted pistachio nuts.'
  },
  {
    id: "7",
    category: Category.FRUIT_PIE,
    image: '../../assets/images/apple-pie.jpg',
    thumb: '../../assets/images/apple-pie-thumb.jpg',
    title: 'Apple Pie',
    price: 15.95,
    ingredients: [
      'apples',
      'sugar',
      'cinnamon',
      'vanilla',
      'butter',
      'wheat flour',
      'corn starch',
      'palm oil',
      'leavening',
      'salt',
    ],
    description: 'What could be better than homemade apple pie! This family favorite features tart fresh apples sprinkled with just the right amount of cinnamon and sugar, baked in a flaky lattice top pastry.'
  },
  {
    id: "8",
    category: Category.FRUIT_PIE,
    image: '../../assets/images/strawberry-pie.jpg',
    thumb: '../../assets/images/strawberry-pie-thumb.jpg',
    title: 'Strawberry Pie',
    price: 15.95,
    ingredients: [
      'strawberries',
      'sugar',
      'vanilla',
      'butter',
      'wheat flour',
      'corn starch',
      'palm oil',
      'leavening',
      'salt',
    ],
    description: 'What could be better than homemade apple pie! This family favorite features tart fresh apples sprinkled with just the right amount of cinnamon and sugar, baked in a flaky lattice top pastry.'
  },
  {
    id: "9",
    category: Category.FRUIT_PIE,
    image: '../../assets/images/blueberry-pie.jpg',
    thumb: '../../assets/images/blueberry-pie-thumb.jpg',
    title: 'Blueberry Pie',
    price: 15.95,
    ingredients: [
      'blueberries',
      'sugar',
      'vanilla',
      'butter',
      'wheat flour',
      'corn starch',
      'palm oil',
      'leavening',
      'salt',
    ],
    description: 'What could be better than homemade apple pie! This family favorite features tart fresh apples sprinkled with just the right amount of cinnamon and sugar, baked in a flaky lattice top pastry.'
  },
  {
    id: "10",
    category: Category.FRUIT_PIE,
    image: '../../assets/images/raspberry-pie.jpg',
    thumb: '../../assets/images/raspberry-pie-thumb.jpg',
    title: 'Raspberry Pie',
    price: 15.95,
    ingredients: [
      'raspberries',
      'sugar',
      'vanilla',
      'butter',
      'wheat flour',
      'corn starch',
      'palm oil',
      'leavening',
      'salt',
    ],
    description: 'What could be better than homemade apple pie! This family favorite features tart fresh apples sprinkled with just the right amount of cinnamon and sugar, baked in a flaky lattice top pastry.'
  },
  {
    id: "11",
    category: Category.FRUIT_PIE,
    image: '../../assets/images/peach-pie.jpg',
    thumb: '../../assets/images/peach-pie-thumb.jpg',
    title: 'Peach Pie',
    price: 15.95,
    ingredients: [
      'peaches',
      'sugar',
      'cinnamon',
      'vanilla',
      'butter',
      'wheat flour',
      'corn starch',
      'palm oil',
      'leavening',
      'salt',
    ],
    description: 'What could be better than homemade apple pie! This family favorite features tart fresh apples sprinkled with just the right amount of cinnamon and sugar, baked in a flaky lattice top pastry.'
  },
  {
    id: "12",
    category: Category.FRUIT_PIE,
    image: '../../assets/images/cherry-pie.jpg',
    thumb: '../../assets/images/cherry-pie-thumb.jpg',
    title: 'Cherry Pie',
    price: 15.95,
    ingredients: [
      'cherries',
      'sugar',
      'vanilla',
      'butter',
      'wheat flour',
      'corn starch',
      'palm oil',
      'leavening',
      'salt',
    ],
    description: 'What could be better than homemade apple pie! This family favorite features tart fresh apples sprinkled with just the right amount of cinnamon and sugar, baked in a flaky lattice top pastry.'
  },
  {
    id: "13",
    category: Category.SEASONAL_PIE,
    image: '../../assets/images/pumpkin-pie.jpg',
    thumb: '../../assets/images/pumpkin-pie-thumb.jpg',
    title: 'Pumpkin Pie',
    price: 15.95,
    ingredients: [
      'pumpkin',
      'sugar',
      'milk',
      'eggs',
      'cinnamon',
      'vanilla',
      'butter',
      'wheat flour',
      'corn starch',
      'palm oil',
      'leavening',
      'salt',
    ],
    description: 'What could be better than homemade apple pie! This family favorite features tart fresh apples sprinkled with just the right amount of cinnamon and sugar, baked in a flaky lattice top pastry.'
  },
  {
    id: "14",
    category: Category.SEASONAL_PIE,
    image: '../../assets/images/pecan-pie.jpg',
    thumb: '../../assets/images/pecan-pie-thumb.jpg',
    title: 'Pecan Pie',
    price: 15.95,
    ingredients: [
      'pecans',
      'corn syrup',
      'eggs',
      'sugar',
      'vanilla',
      'butter',
      'wheat flour',
      'corn starch',
      'palm oil',
      'leavening',
      'salt',
    ],
    description: 'What could be better than homemade apple pie! This family favorite features tart fresh apples sprinkled with just the right amount of cinnamon and sugar, baked in a flaky lattice top pastry.'
  },
  {
    id: "15",
    category: Category.SEASONAL_PIE,
    image: '../../assets/images/chocolate-cream-pie.jpg',
    thumb: '../../assets/images/chocolate-cream-pie-thumb.jpg',
    title: 'Chocolate Cream Pie',
    price: 15.95,
    ingredients: [
      'chocolate',
      'milk',
      'eggs',
      'sugar',
      'whipped cream',
      'vanilla',
      'butter',
      'wheat flour',
      'corn starch',
      'palm oil',
      'leavening',
      'salt',
    ],
    description: 'What could be better than homemade apple pie! This family favorite features tart fresh apples sprinkled with just the right amount of cinnamon and sugar, baked in a flaky lattice top pastry.'
  },
  {
    id: "16",
    category: Category.SEASONAL_PIE,
    image: '../../assets/images/custard-pie.jpg',
    thumb: '../../assets/images/custard-pie-thumb.jpg',
    title: 'Custard Pie',
    price: 15.95,
    ingredients: [
      'cream',
      'sugar',
      'eggs',
      'nutmeg',
      'vanilla',
      'butter',
      'wheat flour',
      'corn starch',
      'palm oil',
      'leavening',
      'salt',
    ],
    description: 'What could be better than homemade apple pie! This family favorite features tart fresh apples sprinkled with just the right amount of cinnamon and sugar, baked in a flaky lattice top pastry.'
  },
  {
    id: "17",
    category: Category.SEASONAL_PIE,
    image: '../../assets/images/fresh-strawberry-pie.jpg',
    thumb: '../../assets/images/fresh-strawberry-pie-thumb.jpg',
    title: 'Fresh Strawberry Pie',
    price: 15.95,
    ingredients: [
      'strawberries',
      'sugar',
      'whipped cream',
      'vanilla',
      'butter',
      'wheat flour',
      'corn starch',
      'palm oil',
      'leavening',
      'salt',
    ],
    description: 'What could be better than homemade apple pie! This family favorite features tart fresh apples sprinkled with just the right amount of cinnamon and sugar, baked in a flaky lattice top pastry.'
  },
  {
    id: "18",
    category: Category.SEASONAL_PIE,
    image: '../../assets/images/banana-cream-pie.jpg',
    thumb: '../../assets/images/banana-cream-pie-thumb.jpg',
    title: 'Banana Cream Pie',
    price: 15.95,
    ingredients: [
      'milk',
      'eggs',
      'whipped cream',
      'sugar',
      'cinnamon',
      'vanilla',
      'bananas',
      'almonds',
      'butter',
      'wheat flour',
      'corn starch',
      'palm oil',
      'leavening',
      'salt',
    ],
    description: 'What could be better than homemade apple pie! This family favorite features tart fresh apples sprinkled with just the right amount of cinnamon and sugar, baked in a flaky lattice top pastry.'
  },

];
