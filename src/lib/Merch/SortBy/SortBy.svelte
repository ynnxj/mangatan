<script lang="ts">
  import { overlayClick } from '$lib/actions/overlayClick';
  import './sort-by.scss';

  const {
    sortBy = 'name',
    onSort,
    onCategory,
    onReset
  } = $props<{
    sortBy?: string;
    onSort?: (type: 'name' | 'price') => void;
    onCategory?: (category: string) => void;
    onReset?: () => void;
  }>();

  let showCategories = $state(false);
  const toggleCategoryBtn = () => (showCategories = !showCategories);
</script>

<div class="sort-container">
  <span>Sort by:</span>
  <button
    class="name {sortBy === 'name' ? 'active' : ''}"
    onclick={() => onSort?.(sortBy === 'name' ? '' : 'name')}
  >
    A→Z{sortBy === 'name' ? ' ✕' : ''}
  </button>
  <button
    class="price {sortBy === 'price' ? 'active' : ''}"
    onclick={() => onSort?.(sortBy === 'price' ? '' : 'price')}
  >
    ↑ Price {sortBy === 'price' ? ' ✕' : ''}
  </button>
  <div>
    <button
      class="category"
      onclick={toggleCategoryBtn}
      use:overlayClick={() => (showCategories = false)}>Category</button
    >
    {#if showCategories}
      <div class="category-list">
        <ul class="categories">
          <li><button onclick={() => onCategory?.('apparel')}>Apparel</button></li>
          <li><button onclick={() => onCategory?.('accessories')}>Accessories</button></li>
          <li><button onclick={() => onCategory?.('albums')}>Albums</button></li>
          <li><button onclick={() => onCategory?.('all')}>Show All</button></li>
        </ul>
      </div>
    {/if}
  </div>
</div>
