<script lang="ts">
	import Sidebar from './../story-mode/Sidebar.svelte';
  import { DiceRoll } from '@dice-roller/rpg-dice-roller';
  import MarkdownIt from 'markdown-it';
  import Content from '../story-mode/Content.svelte';
  import DiceButton from '../story-mode/DiceButton.svelte';
  import InputButton from '../story-mode/InputButton.svelte';
  import KeywordsButton from '../story-mode/KeywordsButton.svelte';
  import OracleButton from '../story-mode/OracleButton.svelte';
  import TaskButton from '../story-mode/TaskButton.svelte';
  import TurndownService from 'turndown';

  const md = new MarkdownIt({
    html: false,
    xhtmlOut: true,
    breaks: true,
    linkify: true,
  });

  let question = $state('');
  let hasQuestion = $derived(question.length > 0);

  const types = [
    'input',
    'oracle',
    'task',
    'roll',
    'start',
    'keyword',
  ] as const;
  type Type = (typeof types)[number];
  interface StoryEntry {
    [datetime: number]: {
      output: string; // should be HTML
      type: Type;
    };
  }

  const turndown = new TurndownService({
    headingStyle: 'atx',
    bulletListMarker: '*',
    codeBlockStyle: 'fenced',
    emDelimiter: '_',
    strongDelimiter: '**',
  });

  let content: StoryEntry = $state(JSON.parse(localStorage.content || `{}`));
  let empty = $derived(length > 0);

  function addContent({output, type}: {output: string, type: string}) {
    updateStore(output, type);
    question = '';
  }

  function updateStore(text: string, type: string) {
    if (type !== 'start') {
      content[Date.now() - 1000] = {
        output: md.render(question),
        type: 'input' as Type,
      };
    }
    if (type !== 'input') {
      content[Date.now()] = {
        output: text,
        type: type as Type,
      };
    }
    localStorage.content = JSON.stringify(content);
  }

  const statuses = [
    {
      status: 'Solid',
      target: 3,
      guidance: 'Scene situation is dull, nothing interesting is happening',
    },
    {
      status: 'Stable',
      target: 6,
      guidance: 'Events are underway and are proceeding as expected',
    },
    {
      status: 'Average',
      target: 9,
      guidance: 'Situation has the potential for the unexpected',
    },
    {
      status: 'Unstable',
      target: 12,
      guidance: 'Events require players to be on high alert',
    },
    {
      status: 'Insane',
      target: 15,
      guidance: 'Players in constant danger, anything could happen',
    },
    {
      status: 'Chaos',
      target: 18,
      guidance: 'Situation is beyond all control',
    },
  ];
  let status: number | null = $state(null);
  let roll: DiceRoll | undefined = $state();

  function startSession() {
    roll = new DiceRoll('1d6');
    status = roll.total;

    const output =
      `<em class="text-xs italic">${statuses[status - 1].guidance}</em><br/>` +
      `<strong>Scene Status:</strong> ${statuses[status - 1].status} ${status} (${statuses[status - 1].target})`;

    updateStore(output, 'start');
  }

  function clearSession() {
    content = {};
    localStorage.content = JSON.stringify(content);
  }

  function refreshSession() {
    content = JSON.parse(localStorage.content);
  }

  function cleanContent(content: string) {
    const closeButton = `![close](data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%3e%3c!--!Font%20Awesome%20Free%206.7.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202025%20Fonticons,%20Inc.--%3e%3cpath%20d='M64%2032C28.7%2032%200%2060.7%200%2096L0%20416c0%2035.3%2028.7%2064%2064%2064l384%200c35.3%200%2064-28.7%2064-64l0-320c0-35.3-28.7-64-64-64L64%2032zM175%20175c9.4-9.4%2024.6-9.4%2033.9%200l47%2047%2047-47c9.4-9.4%2024.6-9.4%2033.9%200s9.4%2024.6%200%2033.9l-47%2047%2047%2047c9.4%209.4%209.4%2024.6%200%2033.9s-24.6%209.4-33.9%200l-47-47-47%2047c-9.4%209.4-24.6%209.4-33.9%200s-9.4-24.6%200-33.9l47-47-47-47c-9.4-9.4-9.4-24.6%200-33.9z'/%3e%3c/svg%3e)`;

    return content.replaceAll(closeButton, '');
  }

  function copySession() {
    if (navigator?.clipboard) {
      // const textContent = element.getHTML();
      // const copy = turndown.turndown(textContent);
      // navigator.clipboard.writeText(cleanContent(copy).replaceAll('\n\n', '\n'));
    }
  }
</script>

<Content />
<div class="flex flex-col gap-2">
  <Sidebar />
  <textarea
    id="question"
    bind:value={question}
    class="w-full px-3 py-2 text-stone-900 border border-stone-900 h-[60px]"
    placeholder="Question, task or text"
  ></textarea>
</div>


<style>
  @reference '../../app.css';
</style>