<script lang="ts">
  import Window from '$lib/WindowBorder/Window.svelte';
  import type { Gig } from '$lib/types/gigs';

  export let gigs: Gig[] = [];
</script>

<Window windowTitle="Gigs" width="600px">
  <h3 class="gigs-title">⋆ Upcoming gigs ⋆‧°𓏲ּ𝄢</h3>
  <ul class="gigs-list">
    {#if gigs.length > 0}
      {#each gigs as gig}
        <li class="gigs">
          <div>
            <h4 class="gigs-under-title">{gig.title}</h4>
            <a href={gig.venue_link} target="_blank">{gig.location}</a>
            <p>
              {new Date(gig.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
          <a class="tickets" target="_blank" href={gig.tickets_link}>Tickets</a>
        </li>
      {/each}
    {:else}
      <li>No gigs available</li>
    {/if}
  </ul>
</Window>

<style lang="scss">
  .gigs-title {
    font-family: var(--win98-font-title);
    font-size: 3.5rem;
    font-weight: 400;
    margin: 30px 0;
    padding: 0 10px;
    color: var(--win98-black);
    text-shadow: 1px 1px 5px var(--win98-black);
  }

  .gigs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    background-color: var(--win98-light-gray);
    margin-bottom: 20px;
    border: 2px solid var(--win98-white);
    border-right: 2px solid var(--win98-dark-gray);
    border-bottom: 2px solid var(--win98-dark-gray);

    .tickets {
      padding: 10px 30px;
      font-size: 1.2rem;
      align-self: center;
      text-shadow: 1px 1px 2px var(--win98-black);
      border: 1px solid var(--win98-white);
      box-shadow: 0 0 0 1px var(--win98-dark-gray);
      border-radius: 15px;
      background: var(--win7-button-face);
      color: white;

      &:hover {
        border: 1px solid var(--win98-white);
        box-shadow: 0 0 0 1px var(--win98-light-blue);
        background: var(--win7-button-hover);
      }
    }
  }

  @media (max-width: 768px) {
    .gigs-title {
      font-size: 2.5rem;
      padding: 0;
    }
  }
</style>
