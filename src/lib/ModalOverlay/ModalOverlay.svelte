<!-- Visual Modal Overlay -->
<!-- Used with overlayClick to close modals by clicking outside of modal -->
<div class="modal-overlay"></div>

<style lang="scss">
  // Modal overlay styles
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    z-index: 20;
  }
</style>
