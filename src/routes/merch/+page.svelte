<script lang="ts">
  import Merch from '$lib/Merch/Merch.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<!-- Merch Page -->
<Merch {data} />
