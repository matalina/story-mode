<script lang="ts">
  import ClearIcon from "../../assets/clear.svg";
  import { content as data } from "../../App.svelte";

  let content = $derived(data.value);
  let keys = $derived(Object.keys(content));
  let hasContent: boolean = $derived(keys.length > 0);

  function clear() {
    data.reset();
  }
</script>

<button
  disabled={!hasContent ? true : undefined}
  class="w-[48px] flex items-center justify-center"
  class:disable={!hasContent ? true : undefined}
  onclick={clear}
>
  <img src={ClearIcon} alt="Clear" class="h-[24px]"/>
</button>