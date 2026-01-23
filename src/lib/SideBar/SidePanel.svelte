<script lang="ts">
  import Window from '$lib/WindowBorder/Window.svelte';
  import type { Post } from '$lib/types/posts';
  import SpinningStar from '$lib/Icons/SmallIcons/SpinningStar.gif';
  import desktop from '$lib/Icons/WebStamps/Desktop.webp';
  import './side-panel.scss';

  export let side: 'left' | 'right';
  export let news: Post[] = [];
</script>

{#if side === 'left'}
  <Window windowTitle="Important Links" width="200px" Class="panel-container {side}">
    <h4 class="panel-under-title">Social Media</h4>
    <div class="links">
      <ul class="links-list">
        <li>
          <img src={SpinningStar} alt="list-star" />
          <a href="https://www.instagram.com/mangatanband/" target="_blank" title="Instagram"
            >Instagram</a
          >
        </li>
        <li>
          <img src={SpinningStar} alt="list-star" />
          <a
            href="https://www.youtube.com/channel/UCs3M4AnSaBZ8AiqLlUD4q5w"
            target="_blank"
            title="YouTube">YouTube</a
          >
        </li>
        <li>
          <img src={SpinningStar} alt="list-star" />
          <a
            href="https://music.apple.com/se/artist/m%C3%A5ngatan/1462652734"
            target="_blank"
            title="Apple Music">Apple Music</a
          >
        </li>
        <li>
          <img src={SpinningStar} alt="list-star" />
          <a
            href="https://open.spotify.com/artist/04sRSWXovcYM8oSfApH4a6"
            target="_blank"
            title="Spotify">Spotify</a
          >
        </li>
      </ul>
    </div>
    <img class="left-img" src={desktop} alt="Web stamp saying best viewed on desktop" />
  </Window>
{:else}
  <!-- TODO: sort it by date -->
  <Window windowTitle="News.exe" width="300px" Class="panel-container {side}">
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
