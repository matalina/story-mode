<script lang="ts">
  import { onMount } from 'svelte';
  import TurndownService from 'turndown';

  interface ContentProps {
    content: any;
    start: () => void;
  }
  let { content, start }: ContentProps = $props();

  const turndown = new TurndownService({
        headingStyle: 'atx',
        bulletListMarker: '*',
        codeBlockStyle: 'fenced',
        emDelimiter: '_',
        strongDelimiter: '**',
      });
  let element: HTMLElement = $state({} as HTMLElement);
  let length = $derived(Object.keys(content).length);
  let empty = $derived(length > 0);


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

  function clearSession() {
    localStorage.removeItem('content');
    content = {};
  }

  function copySession() {
    if (navigator.clipboard) {
      const textContent = element.getHTML();
      const copy = turndown.turndown(textContent);
      navigator.clipboard.writeText(copy);
    }
  }


  function deleteEntry(key: string) {
    delete content[key];
    content = { ...content };
  }
</script>

<div bind:this={element} style="overflow:auto;min-height:400px;" class="grow">
  {#each Object.keys(content) as key}
    <div class={`entry ${classStyle(content[key].type)} flex`}>
      <div class="grow">{@html content[key].output}</div>
      <div class="p-2">
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button onclick={() => deleteEntry(key)} style="background: transparent; padding: 0 6px 3px; ">&times;</button>
      </div>
    </div>
  {/each}
</div>
<div class="flex justify-end gap-2 mt-2">
  <button
    class="px-3 py-2 text-orange-900 bg-orange-300 border border-orange-900 hover:bg-orange-400 focus:bg-orange-400"
    class:disable={empty}
    onclick={start}>New Scene</button
  >
  <button
    disabled={!empty}
    class="px-3 py-2 text-orange-900 bg-orange-300 border border-orange-900 hover:bg-orange-400 focus:bg-orange-400"
    class:disable={!empty}
    onclick={clearSession}>Clear</button
  >
  <button
    disabled={!empty}
    class:disable={!empty}
    class="px-3 py-2 text-orange-900 bg-orange-300 border border-orange-900 hover:bg-orange-400 focus:bg-orange-400"
    onclick={copySession}>Copy</button
  >
</div>

<style>
  @reference '../../app.css';
  .disable {
    @apply disabled:bg-orange-100 disabled:border-orange-700 disabled:text-orange-700 disabled:cursor-not-allowed;
  }
  .entry {
    @apply pb-3 mb-2 border-b;
  }
  .input-mode {
  }
  .oracle-mode {
  }
  .task-mode {
  }
  .roll-mode {
  }
  .start-mode {
  }
</style>
