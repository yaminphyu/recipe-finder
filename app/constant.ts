import bento from '../public/images/bento.png';
import stuff from '../public/images/stuff-around.png';
import browsing from '../public/images/browsing.png';
import recipe1 from '../public/images/recipe-1.png';
import recipe2 from '../public/images/recipe-2.png';
import recipe3 from '../public/images/recipe-3.png';
import recipe4 from '../public/images/recipe-4.png';

export const MENU_LIST = [
  { name: 'Home', url: 'home' },
  { name: 'About', url: 'about' },
  { name: 'Recipes', url: 'recipes' },
] as const;

export const WHAT_YOU_GET_LIST = [
  {
    title: 'Whole-food recipes',
    subTitle: 'Each dish uses everyday, unprocessed ingredients.',
    image: bento
  },
  {
    title: 'Minimum fuss',
    subTitle: 'All recipes are designed to make eating healthy quick and easy.',
    image: stuff
  },
  {
    title: 'Search in seconds',
    subTitle: 'Filter by name or ingredient and jump straight to the recipe you need.',
    image: browsing
  },
] as const;

export const MAPPING_PREP_TIME = [
  { value: 0, name: 'Max Prep Time' },
  { value: 5, name: '5 mins' },
  { value: 10, name: '10 mins' },
  { value: 15, name: '15 mins' },
  { value: 20, name: '20 mins' },
] as { value: number, name: string }[];

export const MAPPING_COOK_TIME = [
  { value: 0, name: 'Max Cook Time' },
  { value: 5, name: '5 mins' },
  { value: 10, name: '10 mins' },
  { value: 15, name: '15 mins' },
  { value: 20, name: '20 mins' },
] as { value: number, name: string }[];

export const RECIPES = [
  {
    id: 1,
    title: "Mediterranean Chickpea Salad",
    description:
      "A refreshing, protein-packed salad tossed in a lemon-olive oil dressing.",
    servings: 2,
    prep: "10 mins",
    cook: "0 min",
    image: recipe1,
  },
  {
    id: 2,
    title: "Avocado & Tomato Wholegrain Toast",
    description:
      "Creamy avocado spread over toasted wholegrain bread, topped with juicy tomatoes.",
    servings: 1,
    prep: "5 mins",
    cook: "5 mins",
    image: recipe2,
  },
  {
    id: 3,
    title: "One-Pan Lemon Garlic Salmon",
    description:
      "A 15-minute weeknight dinner of flaky salmon and tender asparagus.",
    servings: 2,
    prep: "5 mins",
    cook: "12 mins",
    image: recipe3,
  },
  {
    id: 4,
    title: "Quinoa Veggie Power Bowl",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus lobortis, scelerisque felis eu, congue neque. Morbi tristique lacus convallis nibh efficitur porttitor eget ac metus. Suspendisse imperdiet pharetra lectus vel feugiat. Etiam condimentum molestie faucibus. Maecenas a est eu orci rutrum suscipit. Ut a luctus risus. Etiam aliquam sem ac efficitur semper. Quisque placerat erat ligula, a feugiat sem rutrum id. Ut at tortor sed nunc lacinia efficitur id ut elit. Proin eu lacus quis ante rutrum tincidunt et quis libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus lobortis, scelerisque felis eu, congue neque. Morbi tristique lacus convallis nibh efficitur porttitor eget ac metus. Suspendisse imperdiet pharetra lectus vel feugiat. Etiam condimentum molestie faucibus. Maecenas a est eu orci rutrum suscipit. Ut a luctus risus. Etiam aliquam sem ac efficitur semper. Quisque placerat erat ligula, a feugiat sem rutrum id. Ut at tortor sed nunc lacinia efficitur id ut elit. Proin eu lacus quis ante rutrum tincidunt et quis libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    servings: 2,
    prep: "10 mins",
    cook: "15 mins",
    image: recipe4,
  },
  {
    id: 5,
    title: "Sweet Potato Black Bean Tacos",
    description:
      "Smoky roasted sweet potatoes and black beans tucked into warm tortillas.",
    servings: 3,
    prep: "10 mins",
    cook: "15 mins",
    image: recipe1,
  },
  {
    id: 6,
    title: "Greek Yogurt Berry Parfait",
    description:
      "Layers of creamy yogurt, fresh berries and crunchy oats for a high-protein snack.",
    servings: 1,
    prep: "5 mins",
    cook: "0 min",
    image: recipe2,
  },
  {
    id: 7,
    title: "Lentil & Spinach Soup",
    description:
      "A hearty 30-minute soup rich in plant protein and iron.",
    servings: 4,
    prep: "10 mins",
    cook: "20 mins",
    image: recipe3,
  },
  {
    id: 8,
    title: "Banana Oat Pancakes",
    description:
      "Flour-free pancakes sweetened naturally with ripe bananas.",
    servings: 2,
    prep: "5 mins",
    cook: "10 mins",
    image: recipe4,
  },
  {
    id: 9,
    title: "Banana Oat Pancakes",
    description:
      "Flour-free pancakes sweetened naturally with ripe bananas.",
    servings: 2,
    prep: "5 mins",
    cook: "12 mins",
    image: recipe4,
  },
  {
    id: 10,
    title: "Mediterranean Chickpea Salad",
    description:
      "A refreshing, protein-packed salad tossed in a lemon-olive oil dressing.",
    servings: 2,
    prep: "10 mins",
    cook: "0 min",
    image: recipe1,
  },
  {
    id: 11,
    title: "Mediterranean Chickpea Salad",
    description:
      "A refreshing, protein-packed salad tossed in a lemon-olive oil dressing.",
    servings: 2,
    prep: "10 mins",
    cook: "0 min",
    image: recipe1,
  },
  {
    id: 12,
    title: "Avocado & Tomato Wholegrain Toast",
    description:
      "Creamy avocado spread over toasted wholegrain bread, topped with juicy tomatoes.",
    servings: 1,
    prep: "5 mins",
    cook: "5 mins",
    image: recipe2,
  },
  {
    id: 13,
    title: "One-Pan Lemon Garlic Salmon",
    description:
      "A 15-minute weeknight dinner of flaky salmon and tender asparagus.",
    servings: 2,
    prep: "5 mins",
    cook: "12 mins",
    image: recipe3,
  },
  {
    id: 14,
    title: "Quinoa Veggie Power Bowl",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus lobortis, scelerisque felis eu, congue neque. Morbi tristique lacus convallis nibh efficitur porttitor eget ac metus. Suspendisse imperdiet pharetra lectus vel feugiat. Etiam condimentum molestie faucibus. Maecenas a est eu orci rutrum suscipit. Ut a luctus risus. Etiam aliquam sem ac efficitur semper. Quisque placerat erat ligula, a feugiat sem rutrum id. Ut at tortor sed nunc lacinia efficitur id ut elit. Proin eu lacus quis ante rutrum tincidunt et quis libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus lobortis, scelerisque felis eu, congue neque. Morbi tristique lacus convallis nibh efficitur porttitor eget ac metus. Suspendisse imperdiet pharetra lectus vel feugiat. Etiam condimentum molestie faucibus. Maecenas a est eu orci rutrum suscipit. Ut a luctus risus. Etiam aliquam sem ac efficitur semper. Quisque placerat erat ligula, a feugiat sem rutrum id. Ut at tortor sed nunc lacinia efficitur id ut elit. Proin eu lacus quis ante rutrum tincidunt et quis libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    servings: 2,
    prep: "10 mins",
    cook: "15 mins",
    image: recipe4,
  },
  {
    id: 15,
    title: "Sweet Potato Black Bean Tacos",
    description:
      "Smoky roasted sweet potatoes and black beans tucked into warm tortillas.",
    servings: 3,
    prep: "10 mins",
    cook: "15 mins",
    image: recipe1,
  },
  {
    id: 16,
    title: "Greek Yogurt Berry Parfait",
    description:
      "Layers of creamy yogurt, fresh berries and crunchy oats for a high-protein snack.",
    servings: 1,
    prep: "5 mins",
    cook: "0 min",
    image: recipe2,
  },
  {
    id: 17,
    title: "Lentil & Spinach Soup",
    description:
      "A hearty 30-minute soup rich in plant protein and iron.",
    servings: 4,
    prep: "10 mins",
    cook: "20 mins",
    image: recipe3,
  },
  {
    id: 18,
    title: "Banana Oat Pancakes",
    description:
      "Flour-free pancakes sweetened naturally with ripe bananas.",
    servings: 2,
    prep: "5 mins",
    cook: "10 mins",
    image: recipe4,
  },
  {
    id: 19,
    title: "Banana Oat Pancakes",
    description:
      "Flour-free pancakes sweetened naturally with ripe bananas.",
    servings: 2,
    prep: "5 mins",
    cook: "12 mins",
    image: recipe4,
  },
] as const;
