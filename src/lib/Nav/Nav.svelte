<script lang="ts">
  import { page } from '$app/stores';
  import { menuItems } from '../../data/menuItems';
  import './nav.scss';

  let currentTime = $state(new Date());

  const path = $derived($page.url.pathname),
    formattedTime = $derived(
      currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    );

  setInterval(() => (currentTime = new Date()), 1000);
</script>

<!-- Taskbar Container -->
<nav class="taskbar">
  <!-- Menu -->
  <div class="left">
    <!-- Start Button -->
    <a href="/" class="start-btn">
      <span class="star">★</span>
      <span class="text">Start</span>
    </a>

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
