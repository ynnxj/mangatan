<script lang="ts">
  import MinimizeIcon from '$lib/Icons/MinimizeIcon.svg';
  import WindowIcon from '$lib/Icons/WindowIcon.svg';
  import CloseIcon from '$lib/Icons/CloseIcon.svg';

  export let title: string = 'Window Title';
</script>

<div class="window-top-border">
  <span>{title}</span>
  <div class="window-left">
    <img src={MinimizeIcon} alt="Minimize" />
    <img src={WindowIcon} alt="Maximize" />
    <img src={CloseIcon} alt="Close" />
  </div>
</div>

<style lang="scss">
  .window-top-border {
    border: 2px solid var(--win98-white);
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
      gap: 0.5rem;
      padding: 0.25rem;
      background-color: white;
      border-radius: 2px;
    }
  }
</style>
