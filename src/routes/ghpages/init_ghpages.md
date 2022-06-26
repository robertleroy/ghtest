#### Install GH-Pages

``` bash 
npm install gh-pages --save-dev
```

#### Add gh-pages.js to root

``` js
import { publish } from 'gh-pages';

publish(
  /* ./gh-pages.js */
 'build',
 {
  branch: 'gh-pages',
  repo: 'https://github.com/robertleroy/ghtest',
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);

#### Inintialize git
``` bash
# push to main branch
git init
git add .
git commit -m 'initial'
git branch -M main
git remote add origin https://github.com/robertleroy/ghtest.git
git push -u origin main

# build & deploy to gh-pages branch
npm run build
npm run deploy
```

