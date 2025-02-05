<script lang="ts">
  import type { Snippet } from "svelte";

  interface ToggleContentProps {
    title?: Snippet;
    children?: Snippet;
    hide?: boolean;
  }

  let { hide = false, title, children }: ToggleContentProps = $props();
</script>

<div class="flex flex-col p-3 border md:full">
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="flex justify-between cursor-pointer"
    onclick={() => (hide = !hide)}
    onkeydown={() => (hide = !hide)}
  >
    <h2 class="mb-3 text-3xl font-bold text-center">
      {@render title?.()}
    </h2>
    <div class="text-3xl">
      {#if hide}
        <i class="fa-solid fa-arrow-down-to-line"></i>
      {:else}
        <i class="fa-solid fa-arrow-up-to-line"></i>
      {/if}
    </div>
  </div>
  <div class="" class:hide>
    {@render children?.()}
  </div>
</div>

<style lang="postcss">
  .hide {
    @apply hidden;
  }
</style>
