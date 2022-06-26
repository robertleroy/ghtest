<script>
  import { base } from '$app/paths';
  import "../app.css";

  const routes = [
    {name: 'Home', url: '/'},
    {name: 'About', url: '/about'}
  ]
</script>

<header>
  <div class="flex-header">
    <h1>GhTest</h1>

    <nav class="top-nav">
      {#each routes as route}
      <div class="nav-item">
        <a href='{base}{route.url}'>{route.name}</a>
      </div>  
      {/each}
    </nav>

  </div>
</header>

<main>
  <div class="router">
    <slot />
  </div>
</main>

<style>
  header, main {
    padding: 1rem 0;
  }
  
  header {
    border-bottom: 1px solid #ccc;
  }

  .flex-header, .router {
    max-width: 960px;
    margin: 0 auto;
  }

  .flex-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 0 1ch;
  }

  .top-nav {
    display: flex;
    align-items: center;
    gap: 0 1ch;
  }
</style>
