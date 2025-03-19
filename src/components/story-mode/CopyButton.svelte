<script lang="ts">
  import { content } from "../../App.svelte";
  import CopyIcon from "../../assets/copy.svg";
  import { tooltip } from "../../lib/tooltip.svelte";
 
  let keys = $derived(Object.keys(content.value));
  let hasContent: boolean = $derived(keys.length > 0)

  async function copySession() {
    if (navigator?.clipboard) {
      const copy = keys.map(key => {
        let input = '';
        if(content.value[key]?.input) {
          input = `${content.value[key].input}`;
        }
        return `<p>${input}<br/>${content.value[key].output}</p>`
      }).join('\n\n');
      
      const blob = new Blob([copy], { type: 'text/html' });
      const plain = new Blob([copy], { type: 'text/plain' });
      
      const data = new ClipboardItem({ 
        'text/html': blob, 
        'text/plain': plain 
      });
      
      await navigator.clipboard.write([data]);
    }
  }
</script>

<button
  disabled={!hasContent ? true : undefined}
  class:disable={!hasContent ? true : undefined}
  class="w-[48px] flex items-center justify-center"
  onclick={copySession}
  use:tooltip={ {text: 'Copy Session', position: 'left'} }
>
  <img src={CopyIcon} alt="Copy" class="h-[24px]"/>
</button>