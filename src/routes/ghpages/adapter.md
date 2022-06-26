## Adapter-Static

#### Swap in adapter-static for adapter-auto

``` bash
npm remove @sveltejs/adapter-auto
npm i -D @sveltejs/adapter-static@next
```

``` js
/* svelte.config.js */

import adapter from "@sveltejs/adapter-static";

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  kit: {
    adapter: adapter(),
    prerender: {
      default: true
    },
    paths: {
			base: dev ? '' : '/ghtest',
		},
  },

```

### Create .nojekyll file in static folder

