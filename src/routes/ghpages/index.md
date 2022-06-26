<script>
  import CheckItem from '$lib/components/checkItem.svelte';
  import { steps } from '$lib/stores/store';
  console.log("createProject", $steps);
</script>

## GH-Pages

###  Deploying to GH-Pages
<CheckItem bind:checked={$steps.createProject}> Init Repository </CheckItem>
<CheckItem bind:checked={$steps.svelteAdd}> Init Sveletekit Project </CheckItem>
<CheckItem bind:checked={$steps.ghpages}> Init gh-pages </CheckItem>
<CheckItem bind:checked={$steps.adapter}> Init Adapter </CheckItem>
<CheckItem bind:checked={$steps.deploy}> Deploy </CheckItem>


