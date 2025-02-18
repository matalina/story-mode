<script lang="ts">
  import type { Snippet } from 'svelte';

  import closeIcon from '../../assets/close.svg'
  interface ModalProps {
    open: boolean;
    title: string;
    showCloseButton?: boolean;
    children: Snippet;
    footer: Snippet;
    close: () => void;
  }

  let { 
    open = $bindable(false),
    title,
    showCloseButton = true,
    children,
    footer,
    close,
  }: ModalProps = $props();

  let modalOpen = $state(false);
  let modal = $state<HTMLDialogElement | null>(null);

  $effect(() => {
    if (open && !modalOpen) {
      modal?.showModal();
    }
  })
  function closeModal() {
    close();
    modal?.close();
  }
</script>

<div class="absolute flex items-center justify-center w-vw h-vw">
<dialog 
  class="inset-y-10"
  bind:this={modal} 
  open={modalOpen} 
  onclose={close} 
  oncancel={close}
>
  <header class="flex flex justify-between">
    <h2>{title}</h2>
    {#if showCloseButton}
    <form method="dialog">
      <button type="submit" class="transparent">
        <img src={closeIcon} alt="close" class="w-6 h-6"/>
      </button>
    </form>
    {/if}
  </header>
  <main>
    {@render children()}
  </main>
  <footer class="flex justify-end gap-2">
    {@render footer()}
  </footer>
</dialog>
</div>