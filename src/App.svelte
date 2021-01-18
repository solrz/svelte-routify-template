<script>
  const world = 'world'; // edit world and save to see hmr update
  import { Router } from '@roxi/routify/runtime';
  import { routes } from '../.routify/routes';
</script>

<style>
  h1 {
    color: orangered; /* change color an save to see hmr update */
  }
</style>

<Router {routes} />
