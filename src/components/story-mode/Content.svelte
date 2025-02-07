<script lang="ts">
  import { onMount } from 'svelte';
  import CloseIcon from '../../assets/trash.svg';
  import { content as data } from '../../App.svelte';

  import RollIcon from '../../assets/d20.svg';
  import CheckIcon from '../../assets/check.svg';
  import OracleIcon from '../../assets/oracle.svg';
  import StatusIcon from '../../assets/scene.svg';
  import KeywordsIcon from '../../assets/keywords.svg';
  import InputIcon from '../../assets/text.svg';
  import TableIcon from '../../assets/table.svg';
  import InfoIcon from '../../assets/info.svg';
  import type { Content } from '../../data/types';

  let content: Content = $derived(data.value);

  let element: HTMLElement = $state({} as HTMLElement);
  let length = $derived(Object.keys(content).length);
  let keys: number[] = $derived(Object.keys(content).map(Number));

  function icon(type: string) {
    switch(type) {
      case 'roll':
        return RollIcon;
      case 'task':
        return CheckIcon;
      case 'oracle':
        return OracleIcon;
      case 'start':
        return StatusIcon;
      case 'keyword':
        return KeywordsIcon;
      case 'input':
        return InputIcon;
      case 'table':
        return TableIcon;
      default:
        return InfoIcon;
    }
  }

  function classStyle(type: string) {
    return `${type}-mode`;
  }

  $effect(() => {
      scrollToBottom(element, length);
  });

  onMount(() => {
    scrollToBottom(element);
  });

  const scrollToBottom = async (node: HTMLElement, length?: number) => {
    node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
  };

  function deleteEntry(key: number) {
    data.remove(key);
  }
</script>
<div bind:this={element} class="w-full overflow-auto content">
  {#each keys as key}
    <div class={`entry ${classStyle(content[key].type)} layout items-center`}>
      <div class="p-2 w-[48px]">
        <img src={icon(content[key].type)} alt={content[key].type} class="h-5 w-5"/>
      </div>
      <div class="output">
        {#if content[key]?.input}
          {@html content[key].input}<br/>
        {/if}
        {@html content[key].output}
      </div>
      <div class="p-2 w-[48px]">
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button onclick={() => deleteEntry(key)} style="border: 0; background: transparent; padding: 0;">
          <img src={CloseIcon} alt="close" class="h-5 w-5"/>
        </button>
      </div>
    </div>
  {/each}
</div>

<style>
  .layout {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 48px auto 48px;
  }
</style>