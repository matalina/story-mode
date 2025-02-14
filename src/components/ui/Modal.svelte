<script lang="ts">
  import type { Snippet } from 'svelte';
  import { fade } from 'svelte/transition';

  interface ModalProps {
    open: boolean;
    title: string;
    showCloseButton?: boolean;
    children: Snippet;
    footer: Snippet;
  }

  // Props with bindable open prop
  let { 
    open = $bindable(false),
    title,
    showCloseButton = true,
    children,
    footer,
  } = $props();

  function closeModal() {
    open = false;
  }

  // Close modal when clicking outside
  function handleOutsideClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  // Close modal with escape key
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }
</script>

{#if open}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    transition:fade={{ duration: 200 }}
    onclick={handleOutsideClick}
    onkeydown={handleKeydown}
  >
    <div
      class="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
        {#if showCloseButton}
          <button
            class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            onclick={closeModal}
            aria-label="Close modal"
          >
            ✕
          </button>
        {/if}
      </div>
      
      <div class="p-4">
        {@render children()}
      </div>
      
      <div class="p-4 border-t border-gray-200 dark:border-gray-700">
        {@render footer()}
      </div>
    </div>  
  </div>
{/if}