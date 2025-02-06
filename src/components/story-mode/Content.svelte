<script lang="ts">
  import { onMount } from 'svelte';
  import CloseIcon from '../../assets/close.svg';

  interface ContentProps {
    content: any;
    refresh: () => void;
  }

  let { content, refresh }: ContentProps = $props();

  let element: HTMLElement = $state({} as HTMLElement);
  let length = $derived(Object.keys(content).length);

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

  function deleteEntry(key: string) {
    delete content[key];
    content = { ...content };
    localStorage.content = JSON.stringify(content);
    refresh();
  }
</script>
<div bind:this={element} class="w-full overflow-auto content">
  {#each Object.keys(content) as key}
    <div class={`entry ${classStyle(content[key].type)} flex items-center`}>
      <div class="grow">{@html content[key].output}</div>
      <div class="p-2">
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button onclick={() => deleteEntry(key)} style="border: 0; background: transparent; padding: 0;">
          <img src={CloseIcon} alt="close" class="h-5"/>
        </button>
      </div>
    </div>
  {/each}
</div>

<style>
  @reference '../../app.css';

  .content {
    height: calc(100vh - 260px);
  }

  .disable {
    @apply disabled:bg-stone-100 disabled:border-stone-700 disabled:text-stone-700 disabled:cursor-not-allowed;
  }
  .entry {
    @apply pb-3 mb-2 border-b;
  }
</style>
