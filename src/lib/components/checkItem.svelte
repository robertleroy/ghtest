<script>
  export let checked;
</script>

<div class="checkItem">
  <label >
    <input type="checkbox" bind:checked={checked}>
    <slot />
  </label>
</div>

<style>
  .checkItem { font-size: 1.125em; padding: 1rem 0; border-bottom: 1px solid #ccc; max-width: 350px; }
  label { cursor: pointer; }
  [type="checkbox"] { margin-right: 1ch; }
</style>