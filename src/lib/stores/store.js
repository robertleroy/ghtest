import { writable } from 'svelte/store';

export const mainNav = writable([
  {name: 'Home', url: '/'},
  {name: 'About', url: '/about'},
  {name: 'Colors', url: '/colors'},
  {name: 'GH-Pages', url: '/ghpages/'}
]);

export const steps = writable({
  createProject: false,
  svelteAdd: false,
  ghpages: false,
  adapter: false,
  deploy: false,
});