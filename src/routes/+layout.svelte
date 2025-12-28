<script lang="ts">
  let { children } = $props();
</script>

<nav>
  <a href="/">home</a>
  <a href="/contact">contact</a>
  <a href="/merch">merch</a>
</nav>

{@render children()}
