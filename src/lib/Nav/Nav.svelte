<script lang="ts">
  import { page } from '$app/stores';
  import HomeModal from './StartModal.svelte';

  let currentTime = $state(new Date()),
    showModal = $state(false);

  const path = $derived($page.url.pathname),
    formattedTime = $derived(
      currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    );

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Merch', path: '/merch' }
  ];

  const toggleModal = () => {
    showModal = !showModal;
  };

  setInterval(() => (currentTime = new Date()), 1000);
</script>

<!-- Taskbar Container -->
<nav class="taskbar">
  <!-- Menu -->
  <div class="left">
    <!-- Start Button -->
    <button onclick={toggleModal} class="start-btn {showModal ? 'active' : ''}">
      <span class="star">★</span>
      <span class="text">Start</span>
    </button>
    {#if showModal}
      <HomeModal show={showModal} onclose={() => (showModal = false)} />
    {/if}

    <!-- Separator -->
    <div class="separator"></div>

    <!-- Menu Items -->
    {#each menuItems as item}
      <a href={item.path} class="menu-item {path === item.path ? 'active' : ''}">
        {item.name}
      </a>
    {/each}
  </div>

  <!-- Clock -->
  <div class="right">
    <div class="time">
      {formattedTime}
    </div>
  </div>
</nav>

<style lang="scss">
  // Taskbar Styles
  .taskbar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: var(--win98-gray);
    border-top: 2px solid var(--win98-white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    font-family: var(--win98-font);
    font-size: var(--win98-font-size);
    z-index: 1000;

    // Left Menu
    .left {
      display: flex;
      align-items: center;
      gap: 4px;

      // Start Button
      .start-btn {
        height: 28px;
        padding: 0 12px;
        background: var(--win98-button-face);
        border: 2px solid;
        border-top-color: var(--win98-button-highlight);
        border-left-color: var(--win98-button-highlight);
        border-right-color: var(--win98-button-shadow);
        border-bottom-color: var(--win98-button-shadow);
        display: flex;
        text-decoration: none;
        align-items: center;
        gap: 4px;
        cursor: pointer;

        &:active {
          border-top-color: var(--win98-button-shadow);
          border-left-color: var(--win98-button-shadow);
          border-right-color: var(--win98-button-highlight);
          border-bottom-color: var(--win98-button-highlight);
        }

        .star {
          color: var(--win98-accent-pink);
          margin-bottom: 1px;
        }

        .text {
          font-weight: bold;
        }
      }
    }

    .separator {
      width: 1px;
      height: 24px;
      background: var(--win98-button-shadow);
      margin: 0 8px;
    }

    // Menu Items
    .menu-item {
      height: 28px;
      padding: 0 12px;
      background: var(--win98-button-face);
      border: 2px solid;
      border-top-color: var(--win98-button-highlight);
      border-left-color: var(--win98-button-highlight);
      border-right-color: var(--win98-button-shadow);
      border-bottom-color: var(--win98-button-shadow);
      text-decoration: none;
      color: var(--win98-black);
      display: flex;
      align-items: center;

      &.active {
        background: var(--win98-accent-active);
        border-top-color: var(--win98-button-shadow);
        border-left-color: var(--win98-button-shadow);
        border-right-color: var(--win98-button-highlight);
        border-bottom-color: var(--win98-button-highlight);
      }

      &:hover:not(.active) {
        background: var(--win98-accent-hover);
      }
    }

    // Right Clock
    .time {
      height: 24px;
      padding: 0 12px;
      background: var(--win98-button-face);
      border: 1px solid;
      border-top-color: var(--win98-button-shadow);
      border-left-color: var(--win98-button-shadow);
      border-right-color: var(--win98-button-highlight);
      border-bottom-color: var(--win98-button-highlight);
      display: flex;
      align-items: center;
    }
  }
</style>
