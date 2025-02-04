<script lang="ts">
  import { DiceRoll } from '@dice-roller/rpg-dice-roller';
  import { createEventDispatcher } from 'svelte';
  import { getRandomKeywords } from '../../lib/keywords';

  const dispatch = createEventDispatcher();

  const oracle = [
    [1, 2, 'No, and'],
    [3, 7, 'No'],
    [8, 9, 'No, but'],
    [10, 10, 'Maybe'],
    [11, 12, 'Yes, but'],
    [13, 18, 'Yes'],
    [19, 20, 'Yes, and'],
  ];

  let question = '';
  let oldQuestion = question;
  let answer = '';
  let roll;
  let ask;
  let isAndOrBut = false;
  let keywords = [];

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
      const range = oracle[i];
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

    dispatch('click', {
      output,
      type: 'oracle',
    });
  }

  function reset() {
    answer = '';
    question = '';
    oldQuestion = '';
    roll = 0;
    ask = 0;
    keywords = [];
    isAndOrBut = false;
  }
</script>

<button
  on:click={getAnswer}
  class="px-3 py-2 text-orange-900 bg-orange-300 border border-orange-900 hover:bg-orange-400 focus:bg-orange-400"
  >Ask Oracle</button
>
