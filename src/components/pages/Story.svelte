<script lang="ts">
  import { DiceRoll } from '@dice-roller/rpg-dice-roller';
  import MarkdownIt from 'markdown-it';
  import Content from '../story-mode/Content.svelte';
  import DiceButton from '../story-mode/DiceButton.svelte';
  import InputButton from '../story-mode/InputButton.svelte';
  import KeywordsButton from '../story-mode/KeywordsButton.svelte';
  import OracleButton from '../story-mode/OracleButton.svelte';
  import TaskButton from '../story-mode/TaskButton.svelte';

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

  let content: StoryEntry = $state(JSON.parse(localStorage.content || `{}`));

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
</script>

<div class="relative layout">
    <Content {content} start={startSession}  clear={clearSession} refresh={refreshSession}/>

    <div class="sticky top-0 flex flex-col mt-2 bg-white">
      <textarea
        rows="3"
        id="question"
        bind:value={question}
        class="w-full px-3 py-2 mb-2 text-stone-900 border border-stone-900"
        placeholder="Question, task or text"
      ></textarea>

      <div class="flex justify-center gap-2 mb-2">
        <OracleButton click={addContent} {hasQuestion}/>
        <TaskButton click={addContent} status = {status ? status: 0} {hasQuestion}/>
        <InputButton click={addContent} {hasQuestion} />
      </div>
      <div class="flex justify-center gap-2">
        <DiceButton click={addContent} {hasQuestion} />
        <KeywordsButton click={addContent} {hasQuestion}/>
      </div>
    </div>
  </div>


<style>
  @reference '../../app.css';

  .layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 190px;
  }
</style>