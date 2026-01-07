<script lang="ts">
  import MinimizeIcon from '$lib/Icons/WindowIcons/MinimizeIcon.svg';
  import WindowIcon from '$lib/Icons/WindowIcons/WindowIcon.svg';
  import CloseIcon from '$lib/Icons/WindowIcons/CloseIcon.svg';

  export let title: string = 'Window Title';
</script>

<div class="window-top-border">
  <span>{title}</span>
  <div class="window-left">
    <img src={MinimizeIcon} class="window-icon" alt="Minimize icon" />
    <img src={WindowIcon} class="window-icon" alt="Maximize icon" />
    <img src={CloseIcon} class="window-icon" alt="Close icon" />
  </div>
</div>

<style lang="scss">
  .window-top-border {
    border: 1px solid var(--win98-white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--win98-white);
    font-weight: bold;
    background-color: var(--win98-blue);

    span {
      margin-left: 1rem;
    }

    .window-left {
      display: flex;
      padding: 3px;
      gap: 2px;
      border-radius: 2px;

      .window-icon {
        border: 2px solid var(--win98-white);
        border-right: 2px solid var(--win98-dark-gray);
        border-bottom: 2px solid var(--win98-dark-gray);
        background-color: var(--win98-light-gray);
      }
    }
  }
</style>
