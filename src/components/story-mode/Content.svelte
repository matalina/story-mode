<script lang="ts">
  import { afterUpdate, createEventDispatcher, onMount } from 'svelte';
  import TurndownService from 'turndown';

  export let content;

  const dispatch = createEventDispatcher();
  const turndown = new TurndownService();
  let element;
  $: empty = Object.keys($content).length > 0;

  function classStyle(type: string) {
    return `${type}-mode`;
  }

  afterUpdate(() => {
    scrollToBottom(element);
  });
  onMount(() => {
    scrollToBottom(element);
  });

  const scrollToBottom = async node => {
    node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
  };

  function clearSession() {
    localStorage.removeItem('content');
    $content = {};
  }

  function copySession() {
    if (navigator.clipboard) {
      const textContent = element.getHTML();
      const copy = turndown.turndown(textContent, {
        headingStyle: 'atx',
        bulletListMarker: '*',
        codeBlockedStyle: 'fenced',
        emDelilmiter: '_',
        strongDelimiter: '**',
      });
      navigator.clipboard.writeText(copy);
    }
  }

  function startSession() {
    dispatch('start');
  }
  function deleteEntry(key) {
    console.log(key);
    delete $content[key];
    $content = { ...$content };
  }
</script>

<div bind:this={element} style="overflow:auto; height:400px;">
  {#each Object.keys($content) as key}
    <div class={`entry ${classStyle($content[key].type)} flex`}>
      <div class="flex-grow">{@html $content[key].output}</div>
      <div class="p-2">
        <button on:click={() => deleteEntry(key)}
          ><i class="fa-light fa-square-xmark"></i></button
        >
      </div>
    </div>
  {/each}
</div>
<div class="flex justify-end gap-2 mt-2">
  <button
    class="px-3 py-2 text-orange-900 bg-orange-300 border border-orange-900 hover:bg-orange-400 focus:bg-orange-400"
    class:disable={empty}
    on:click={startSession}>New Scene</button
  >
  <button
    disabled={!empty}
    class="px-3 py-2 text-orange-900 bg-orange-300 border border-orange-900 hover:bg-orange-400 focus:bg-orange-400"
    class:disable={!empty}
    on:click={clearSession}>Clear</button
  >
  <button
    disabled={!empty}
    class:disable={!empty}
    class="px-3 py-2 text-orange-900 bg-orange-300 border border-orange-900 hover:bg-orange-400 focus:bg-orange-400"
    on:click={copySession}>Copy</button
  >
</div>

<style lang="postcss">
  .disable {
    @apply disabled:bg-orange-100 disabled:border-orange-700 disabled:text-orange-700 disabled:cursor-not-allowed;
  }
  .entry {
    @apply mb-2 border-b;
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
