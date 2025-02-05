<script lang="ts">
  import { DiceRoll } from '@dice-roller/rpg-dice-roller';
  import { getRandomKeywords } from '../../lib/keywords';
  import type { ButtonProps } from '../../lib/types';
  import { oracle, rollOnTable } from '../../lib/tables';

  let { click, hasQuestion }:ButtonProps = $props();

  let question = $state('');
  let answer = $state('');
  let roll: DiceRoll| undefined = $state();
  let ask = $state(0);
  let isAndOrBut = $state(false);
  let keywords:string[] = $state([]);

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

    click?.({
      output,
      type: 'oracle',
    });
  }

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
  onclick={getAnswer}
  disabled={!hasQuestion ? true : undefined}
  >Yes/No</button
>

<style>
  @reference '../../app.css';
</style>