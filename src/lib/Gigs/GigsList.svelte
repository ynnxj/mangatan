<script lang="ts">
  import Window from '$lib/WindowBorder/Window.svelte';
  import type { Gig } from '$lib/types/gigs';

  export let gigs: Gig[] = [];
</script>

<!-- Gigs List Container -->
<Window windowTitle="Gigs" width="600px">
  <h3 class="gigs-title win7-title">⋆ Upcoming gigs ⋆‧°</h3>
  <!-- List of Gigs -->
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
          <a class="win7-btn" target="_blank" href={gig.tickets_link}>Tickets</a>
        </li>
      {/each}
    {:else}
      <!-- No Gigs Message -->
      <li>No gigs available</li>
    {/if}
  </ul>
</Window>

<style lang="scss">
  // Gigs list styles
  .gigs-title {
    font-size: 3rem;
    margin: 30px 0;
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
  }

  // Responsive styles
  @media (max-width: 768px) {
    .gigs-title {
      font-size: 2.5rem;
      padding: 0;
    }
  }
</style>
