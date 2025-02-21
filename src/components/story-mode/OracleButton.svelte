<script lang="ts">
  import { DiceRoll } from '@dice-roller/rpg-dice-roller';
  import { getRandomKeywords } from '../../lib/keywords';
  import { rollOnTable } from '../../lib/tables';
  import OracleIcon from '../../assets/oracle.svg';
  import {content } from '../../App.svelte';
  import type { ContentData } from '../../data/types';
  import {input as data} from './Input.svelte';
  import { oracle } from '../../data/tables';
  import { tooltip } from '../../lib/tooltip.svelte';

  let input = $derived(data.value);
  let hasQuestion = $derived(input !== '');

  function getAnswer() {
    reset();
    const result = rollOnTable(oracle);
    const answer = result.description;
    if (
      answer.includes('and') ||
      answer.includes('but')
    ) {
      isAndOrBut = true;
      keywords = [...getRandomKeywords()];
    }

    const output =
      `<strong>${answer}</strong>` +
      ` <small><em>(${result.roll})</em></small>` +
      `${isAndOrBut ? `<br/>${keywords.join(', ')}` : ''}` +
      ``;

    const string: ContentData = {
      output,
      type: 'oracle',
      input: `<strong>Q:</strong> ${input}`,
    };

    content.add([ string ]);

    data.reset();
  }

  let question = $state('');
  let answer = $state('');
  let roll: DiceRoll| undefined = $state();
  let ask = $state(0);
  let isAndOrBut = $state(false);
  let keywords:string[] = $state([]);

  function reset() {
    answer = '';
    question = '';
    roll = undefined;
    ask = 0;
    keywords = [];
    isAndOrBut = false;
  }
</script>

<button
  class="w-[48px] flex items-center justify-center"
  onclick={getAnswer}
  disabled={!hasQuestion ? true : undefined}
  use:tooltip={'Ask the Oracle'}
>
  <img src={OracleIcon} alt="Yes/No" class="h-[24px]"/>
</button>