<script lang="ts">
  import { overlayClick } from '$lib/actions/overlayClick';
  import './sort-by.scss';

  // Props with defaults
  const {
    sortBy = 'name',
    onSort,
    onCategory
  } = $props<{
    sortBy?: string;
    onSort?: (type: 'name' | 'price') => void;
    onCategory?: (category: string) => void;
  }>();

  // State of category drop down
  let showCategories = $state(false);

  // Toggle category button
  const toggleCategoryBtn = () => (showCategories = !showCategories);
</script>

<!-- Sort and Categories Container -->
<div class="sort-container">
  <span>Sort by:</span>
  <!-- A-Z Sorting -->
  <button
    class="name {sortBy === 'name' ? 'active' : ''}"
    onclick={() => onSort?.(sortBy === 'name' ? '' : 'name')}
  >
    A→Z{sortBy === 'name' ? ' ✕' : ''}
  </button>
  <!-- Rising Price Sorting-->
  <button
    class="price {sortBy === 'price' ? 'active' : ''}"
    onclick={() => onSort?.(sortBy === 'price' ? '' : 'price')}
  >
    ↑ Price {sortBy === 'price' ? ' ✕' : ''}
  </button>
  <div>
    <!-- Category Dropdown-->
    <button
      class="category"
      onclick={toggleCategoryBtn}
      use:overlayClick={() => (showCategories = false)}>Category</button
    >
    {#if showCategories}
      <!-- Categories List-->
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
