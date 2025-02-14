<script lang="ts">
  import ClearIcon from "../../assets/clear.svg";
  import { content as data } from "../../App.svelte";
  import Modal from "../ui/Modal.svelte";

  let content = $derived(data.value);
  let keys = $derived(Object.keys(content));
  let hasContent: boolean = $derived(keys.length > 0);

  let open = $state(false);

  function clear() {
    data.reset();
    open = false;
  }
</script>

<button
  disabled={!hasContent ? true : undefined}
  class="w-[48px] flex items-center justify-center"
  class:disable={!hasContent ? true : undefined}
  onclick={() => open = true}
>
  <img src={ClearIcon} alt="Clear" class="h-[24px]"/>
</button>

{#if open}
  <Modal open={open} title="Clear">
    <p>Are you sure you want to clear the content?</p>
    {#snippet footer()}
      <button onclick={clear}>Yes</button>
      <button onclick={() => open = false}>No</button>
    {/snippet}
  </Modal>
{/if}
