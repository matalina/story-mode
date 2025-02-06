<script lang="ts">
  import { onMount } from 'svelte';
  import TurndownService from 'turndown';
  import CloseIcon from '../../assets/close.svg';

  interface ContentProps {
    content: any;
    start: () => void;
    clear: () => void;
    refresh: () => void;
  }

  let { content, start, clear, refresh }: ContentProps = $props();

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

  function cleanContent(content: string) {
    const closeButton = `![close](data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%3e%3c!--!Font%20Awesome%20Free%206.7.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202025%20Fonticons,%20Inc.--%3e%3cpath%20d='M64%2032C28.7%2032%200%2060.7%200%2096L0%20416c0%2035.3%2028.7%2064%2064%2064l384%200c35.3%200%2064-28.7%2064-64l0-320c0-35.3-28.7-64-64-64L64%2032zM175%20175c9.4-9.4%2024.6-9.4%2033.9%200l47%2047%2047-47c9.4-9.4%2024.6-9.4%2033.9%200s9.4%2024.6%200%2033.9l-47%2047%2047%2047c9.4%209.4%209.4%2024.6%200%2033.9s-24.6%209.4-33.9%200l-47-47-47%2047c-9.4%209.4-24.6%209.4-33.9%200s-9.4-24.6%200-33.9l47-47-47-47c-9.4-9.4-9.4-24.6%200-33.9z'/%3e%3c/svg%3e)`;

    return content.replaceAll(closeButton, '');
  }

  function copySession() {
    if (navigator?.clipboard) {
      const textContent = element.getHTML();
      const copy = turndown.turndown(textContent);
      navigator.clipboard.writeText(cleanContent(copy).replaceAll('\n\n', '\n'));
    }
  }


  function deleteEntry(key: string) {
    delete content[key];
    content = { ...content };
    localStorage.content = JSON.stringify(content);
    refresh();
  }
</script>

<div bind:this={element} class="grow overflow-auto max-h-[360px] min-h-[360px]">
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
<div class="flex justify-end gap-2 mt-2">
  <button
    class="px-3 py-2 text-stone-900 bg-stone-300 border border-stone-900 hover:bg-stone-400 focus:bg-stone-400"
    class:disable={empty}
    onclick={start}>New Scene</button
  >
  <button
    disabled={!empty}
    class="px-3 py-2 text-stone-900 bg-stone-300 border border-stone-900 hover:bg-stone-400 focus:bg-stone-400"
    class:disable={!empty}
    onclick={clear}>Clear</button
  >
  <button
    disabled={!empty}
    class:disable={!empty}
    class="px-3 py-2 text-stone-900 bg-stone-300 border border-stone-900 hover:bg-stone-400 focus:bg-stone-400"
    onclick={copySession}>Copy</button
  >
</div>

<style>
  @reference '../../app.css';
  .disable {
    @apply disabled:bg-stone-100 disabled:border-stone-700 disabled:text-stone-700 disabled:cursor-not-allowed;
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
