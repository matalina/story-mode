<script lang="ts">
  import { DiceRoll } from '@dice-roller/rpg-dice-roller';
  import { getRandomKeywords } from '../../lib/keywords';
  import type { ButtonProps } from '../../lib/types';

  let { click }:ButtonProps = $props();

  const oracle = [
    [1, 1, 'No, and'],
    [2, 2, 'No, but'],
    [3, 14, 'Yes, but'],
    [15, 19, 'Yes'],
    [20, 20, 'Yes, and'],
  ];

  let question = $state('');
  let oldQuestion = $state('');
  let answer = $state('');
  let roll: DiceRoll| undefined = $state();
  let ask = $state(0);
  let isAndOrBut = $state(false);
  let keywords:string[] = $state([]);

  function getAnswer() {
    reset();
    oldQuestion = question;
    question = '';
    const notation = `1d20`;
    roll = new DiceRoll(notation);
    ask = roll.total;
    if (ask < 0) {
      return 'No, and';
    }
    if (ask > 20) return 'Yes, and';
    for (let i in oracle) {
      const range = oracle[i] as number[];
      if (ask >= range[0] && ask <= range[1]) answer = range[2].toString();
    }
    if (
      answer.includes('and') ||
      answer.includes('but') ||
      answer.toLowerCase().includes('maybe')
    ) {
      isAndOrBut = true;
      keywords = [...getRandomKeywords()];
    }

    const output =
      `<strong>${answer}</strong>` +
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
    oldQuestion = '';
    roll = undefined;
    ask = 0;
    keywords = [];
    isAndOrBut = false;
  }
</script>

<button
  onclick={getAnswer}
  class="px-3 py-2 text-orange-900 bg-orange-300 border border-orange-900 hover:bg-orange-400 focus:bg-orange-400"
  >Ask Oracle</button
>

<style>
  @reference '../../app.css';
</style>