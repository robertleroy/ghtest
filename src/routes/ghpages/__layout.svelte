<script>
  import { base } from '$app/paths';

  const routes = [
    {name: 'GH-Pages', url: '/ghpages/'},
    {name: 'Svelte-Add', url: '/ghpages/svelte_add'},
    {name: 'Init GH-Pages', url: '/ghpages/init_ghpages'},
    {name: 'Adapter', url: '/ghpages/adapter'},
    {name: 'Build & Deploy', url: '/ghpages/deploy'}
  ];

  let current_tab = 'GH-Pages';
</script>

<nav class="tabs">
  {#each routes as route}
  <a href='{base}{route.url}'><div class="tab" on:click={() => current_tab = route.name} class:current={current_tab === route.name}>
    {route.name}
  </div></a>  
  {/each}
</nav>

<div class="page">
  <slot />
</div>

<style lang='postcss'>
  .tabs {
    display: flex;
    gap: 3px;
    margin-bottom: 1rem;
  }
  .tab {
    padding: 1rem;
    background: gainsboro;
    /* background: gainsboro; */
    border-radius: 0.5rem 0.5rem 0 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .tab.current {
    background: whitesmoke;
  }
</style>