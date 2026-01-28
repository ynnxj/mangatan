<script lang="ts">
  import Window from '$lib/WindowBorder/Window.svelte';
  import type { Post } from '$lib/types/posts';
  import SpinningStar from '$lib/Icons/SmallIcons/SpinningStar.gif';
  import './side-panel.scss';
  import { socialMedia } from '$lib/data/socialMedia';

  export let side: 'left' | 'right';
  export let news: Post[] = [];

  // Sort news by date
  $: sortedNews = [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
</script>

{#if side === 'left'}
  <!-- Left Side Panel -->
  <Window windowTitle="Important Links" Class="panel-container {side}">
    <h4 class="panel-under-title">Social Media</h4>
    <div class="links">
      <!-- Social Media Links -->
      <ul class="links-list">
        {#each socialMedia as item}
          <li>
            <img src={SpinningStar} alt="list-star" />
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </Window>
{:else}
  <!-- Right Side Panel -->
  <Window windowTitle="News.exe" Class="panel-container {side}">
    <h4 class="panel-under-title">Updates</h4>
    <!-- News List -->
    <ul class="news-list-section">
      {#if sortedNews.length > 0}
        {#each sortedNews as post}
          <li class="post">
            <div>
              <h4 class="post-title">{post.title}</h4>
              <p class="post-text">{post.text}</p>
              <span class="author">/ {post.author}</span>
              <p class="post-date">
                {new Date(post.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </li>
        {/each}
      {:else}
        <!-- If no posts -->
        <li>No posts available</li>
      {/if}
    </ul>
  </Window>
{/if}
