<script lang="ts">
  import Window from '$lib/WindowBorder/Window.svelte';
  import type { Post } from '$lib/types/posts';
  import SpinningStar from '$lib/Icons/SmallIcons/SpinningStar.gif';
  import desktop from '$lib/Icons/WebStamps/Desktop.webp';
  import './side-panel.scss';
  import { socialMedia } from '$lib/data/socialMedia';

  export let side: 'left' | 'right';
  export let news: Post[] = [];
</script>

{#if side === 'left'}
  <Window windowTitle="Important Links" Class="panel-container {side}">
    <h4 class="panel-under-title">Social Media</h4>
    <div class="links">
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
    <img class="left-img" src={desktop} alt="Web stamp saying best viewed on desktop" />
  </Window>
{:else}
  <!-- TODO: sort it by date -->
  <Window windowTitle="News.exe" Class="panel-container {side}">
    <h4 class="panel-under-title">Updates</h4>
    <ul class="news-list-section">
      {#if news.length > 0}
        {#each news as post}
          <li class="post">
            <div>
              <h4 class="post-title">{post.title}</h4>
              <p class="post-text">{post.text}</p>
              <p class="post-date">
                {new Date(post.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <span class="author">/ {post.author}</span>
            </div>
          </li>
        {/each}
      {:else}
        <li>No posts available</li>
      {/if}
    </ul>
  </Window>
{/if}
