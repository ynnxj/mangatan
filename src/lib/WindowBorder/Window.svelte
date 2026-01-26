<script lang="ts">
  import TopBorder from './TopBorder.svelte';

  // Props
  export let windowTitle: string = 'Window Title', // Optional window title
    width: string | null = null, // Optional window width
    Class: string = ''; // Optional extra class
</script>

<!-- Window Container -->
<div class="window {Class}" style={width ? `width: ${width};` : undefined}>
  <!-- Window Top Border -->
  <TopBorder title={windowTitle} />
  <!-- Window Content -->
  <div class="window-content">
    <slot />
  </div>
</div>

<style lang="scss">
  // Window container default styles
  .window {
    position: relative;
    max-width: none;
    height: auto;
    border-top: 2px solid var(--win98-white);
    border-left: 2px solid var(--win98-white);
    border-right: 2px solid var(--win98-darker-gray);
    border-bottom: 2px solid var(--win98-darker-gray);
    background: var(--win98-gray);
    margin-bottom: 20px;

    .window-content {
      overflow: auto;
      padding: 10px;
    }
  }

  // Responsive styles
  @media (max-width: 768px) {
    .window {
      max-width: 500px;
    }
  }

  @media (max-width: 568px) {
    .window {
      max-width: 400px;
    }
  }
</style>
