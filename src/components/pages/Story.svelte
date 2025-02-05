<script lang="ts">
  import { DiceRoll } from '@dice-roller/rpg-dice-roller';
  import MarkdownIt from 'markdown-it';
  import Content from '../story-mode/Content.svelte';
  import DiceButton from '../story-mode/DiceButton.svelte';
  import InputButton from '../story-mode/InputButton.svelte';
  import KeywordsButton from '../story-mode/KeywordsButton.svelte';
  import OracleButton from '../story-mode/OracleButton.svelte';
  import TaskButton from '../story-mode/TaskButton.svelte';
  import ToggleContent from './../ui/ToggleContent.svelte';

  const md = new MarkdownIt({
    html: false,
    xhtmlOut: true,
    breaks: true,
    linkify: true,
  });

  let question = $state('');

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

  const storage = $state(localStorage.content || `{}`);
  const content: StoryEntry = $state(JSON.parse(storage));
  let element = $state();

  function addContent(event: CustomEvent) {
    updateStore(event.detail.output, event.detail.type);
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
      `<strong>Adventure Status:</strong> ${statuses[status - 1].status} ${status} (${statuses[status - 1].target})`;

    updateStore(output, 'start');
  }
</script>

<div class="relative">
  <ToggleContent hide={false}>
    <span slot="title">Story Mode</span>

    <Content {content} start={startSession} />

    <div class="sticky top-0 flex flex-col mt-2 bg-white">
      <textarea
        rows="3"
        id="question"
        bind:value={question}
        class="w-full px-3 py-2 mb-2 text-orange-900 border border-orange-900"
        placeholder="Question, task or text"
      ></textarea>

      <div class="flex justify-center gap-2 mb-2">
        <OracleButton on:click={addContent} />
        <TaskButton on:click={addContent} />
        <InputButton on:click={addContent} />
      </div>
      <div class="flex justify-center gap-2">
        <DiceButton on:click={addContent} />
        <KeywordsButton on:click={addContent} />
      </div>
    </div>

    <div bind:this={element} ></div>
  </ToggleContent>
</div>

<style>
  @reference '../../app.css';
</style>