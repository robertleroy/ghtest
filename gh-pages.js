import { publish } from 'gh-pages';

publish(
 'build',
 {
  branch: 'gh-pages',
  repo: 'https://github.com/robertleroy/ghtest',
  // user: {
  //  name: 'Rob Leroy',
  //  email: 'robleroy@msn.com'
  // },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);