<script lang="ts">
  import ClearIcon from "../../assets/clear.svg";
  import { content as data } from "../../App.svelte";
  import Modal from "../ui/Modal.svelte";
  import { tooltip } from "../../lib/tooltip.svelte";

  let content = $derived(data.value);
  let keys = $derived(Object.keys(content));
  let hasContent: boolean = $derived(keys.length > 0);

  let open = $state(false);

  function clear() {
    data.reset();
    open = false;
  }

  function cancel() {
    open = false;
  }
  $inspect(open);
</script>

<button
  disabled={!hasContent ? true : undefined}
  class="w-[48px] flex items-center justify-center"
  class:disable={!hasContent ? true : undefined}
  onclick={() => open = true}
  use:tooltip={ {text: 'Clear', position: 'bottom'} }
>
  <img src={ClearIcon} alt="Clear" class="h-[24px]"/>
</button>

{#if open}
  <Modal open={open} title="Clear" close={cancel}>
    <p>Are you sure you want to clear the content?</p>
    {#snippet footer()}
      <button onclick={clear}>Yes</button>
      <button onclick={cancel}>No</button>
    {/snippet}
  </Modal>
{/if}
