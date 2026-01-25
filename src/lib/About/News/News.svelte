<script lang="ts">
  import type { Post } from '$lib/types/posts';
  import Window from '$lib/WindowBorder/Window.svelte';

  export let news: Post[] = [];
</script>

<Window windowTitle="News.exe" width="600px">
  <h4 class="updates-title">Updates</h4>
  <ul class="news-list">
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

<style lang="scss">
  .news-list {
    li {
      background-color: var(--win98-white);
      padding: 10px;
      border: 1px solid var(--win98-black);
      box-shadow: 1px 1px 3px var(--win98-dark-gray);
      margin-bottom: 10px;

      .post-title {
        font-size: 1.2rem;
        margin: 0;
        font-family: var(--win98-font-title);
      }

      .post-date {
        font-style: italic;
      }

      .author {
        font-weight: bold;
      }
    }
  }
</style>
