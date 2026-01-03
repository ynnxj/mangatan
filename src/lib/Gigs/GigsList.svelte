<script lang="ts">
  import Window from '$lib/WindowBorder/Window.svelte';
  import type { Gig } from '$lib/types/index';

  export let gigs: Gig[] = [];
</script>

<Window windowTitle="Gigs">
  <h3 class="title">⋆ Upcoming gigs ⋆‧°𓏲ּ𝄢</h3>
  <ul>
    {#if gigs.length > 0}
      {#each gigs as gig}
        <!-- TODO: Move div inside li -->
        <div class="list-items">
          <li>
            <h4>{gig.title}</h4>
            <a href={gig.venue_link} target="_blank">{gig.location}</a>
            <p>
              {new Date(gig.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </li>
          <a class="tickets" target="_blank" href={gig.tickets_link}>Tickets</a>
        </div>
      {/each}
    {:else}
      <li>No gigs available</li>
    {/if}
  </ul>
</Window>

<style lang="scss">
  // TODO: fix this. ugly.
  .title {
    font-size: 3.5rem;
    font-weight: 400;
    margin: 30px 0;
    padding: 0 10px;
    color: black;
    text-shadow: 1px 1px 5px black;
    font-family: 'Orbitron', sans-serif;
  }

  ul {
    padding: 0;

    .list-items {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 10px;
      background-color: var(--win98-light-gray);
      margin-bottom: 20px;
      border: 2px solid rgb(255, 255, 255);
      border-right: 2px solid darkgray;
      border-bottom: 2px solid darkgray;

      li {
        list-style: none;
      }

      .tickets {
        padding: 10px 30px;
        font-size: 1.2rem;
        align-self: center;
        text-shadow: 1px 1px 2px black;
        border: 1px solid #f3f3f3;
        box-shadow: 0 0 0 1px #707070;
        border-radius: 15px;
        background: linear-gradient(to bottom, #f2f2f2 0%, #d4d6e6 50%, #8996bb 51%, #cfcfcf 100%);
        color: white;

        &:hover {
          border: 1px solid #ecf7fd;
          box-shadow: 0 0 0 1px #3c7fb1;
          background: linear-gradient(
            to bottom,
            #eaf6fd 0%,
            #d9f0fc 50%,
            #bee6fd 51%,
            #a7d9f5 100%
          );
        }
      }
    }
  }
</style>
