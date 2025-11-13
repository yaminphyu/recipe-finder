import bento from '../public/images/bento.png';
import stuff from '../public/images/stuff-around.png';
import browsing from '../public/images/browsing.png';

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
