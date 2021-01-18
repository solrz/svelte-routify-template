<script>
  const world = 'world'; // edit world and save to see hmr update
  import { Router } from '@roxi/routify/runtime';
  import { routes } from '../.routify/routes';
  import Nested from './Nested.svelte';
  export let name = '';
</script>

<style type="text/stylus">
  /* prettier-ignore */
  .note
    color #ff3e00
  h1
    color blue
</style>

<!-- prettier-ignore -->
<template type="text/pug">
    h1.note This is the svelte-preproces example - built with svite
    hr
    h1 Hello!
    br
    input(bind:value="{name}")
    br
    Nested("{name}")
</template>
<Router {routes} />
