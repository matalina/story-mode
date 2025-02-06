<script lang="ts">
  import { content } from "../../App.svelte";
  import CopyIcon from "../../assets/copy.svg";

  let keys = $derived(Object.keys(content.value));
  let hasContent: boolean = $derived(keys.length > 0)

  function copySession() {
    if (navigator?.clipboard) {
      const copy = keys.map(key => `<p>${content.value[key].output}</p>`).join('\n\n');
      const blob = new Blob([copy], { type: 'text/html' });
      const data = [new ClipboardItem({ 'text/html': blob })];
      navigator.clipboard.write(data);
    }
  }
</script>

<button
  disabled={!hasContent ? true : undefined}
  class:disable={!hasContent ? true : undefined}
  class="w-[48px] flex items-center justify-center"
  onclick={copySession}
>
  <img src={CopyIcon} alt="Copy" class="h-[24px]"/>
</button>