<script lang="ts">
  import { DiceRoll } from '@dice-roller/rpg-dice-roller';
  import { getRandomKeywords } from '../../lib/keywords'; 
  import { createEventDispatcher } from 'svelte';

  let dc = '2';
  $: level = parseInt(dc);
  $: target = level * 3;
  let oldLevel = '0';
  let oldTarget = '0';
  let question = '';
  let oldQuestion = '';
  let roll = undefined;
  let answer = '';

  const dispatch = createEventDispatcher();

  function answerQuestion(value: number) {
    let string = '';
    if (value - parseInt(target.toString()) >= 0) {
      string += '<strong>Success</strong>';
    } else {
      string += `<strong>Fail</strong>`;
    }
    string += ` <small class="text-xs italic">[${level}(${target}) → ${value}]</small>`;
    if (value === 1) {
      string += `<br/><strong>GM Intrusion: No XP</strong>`;
      string += `<br/>${getRandomKeywords(3).join(', ')}`;
    }
    if (value === 17) {
      string += '<br/><strong>Damage +1</strong>';
    }
    if (value === 18) {
      string += '<br/><strong>Damage +2</strong>';
    }
    if (value === 19) {
      string += '<br/><strong>Minor effect or Damage +3</strong>';
    }
    if (value === 20) {
      string += '<br/><strong>Major effect or Damage +4</strong>';
    }

    const gmi = new DiceRoll('1d10');
    const isGMI = value % 10 === gmi.total % 10;
    string += `${isGMI && value !== 1 ? '<br/><strong>GM Intrusion: +1XP</strong><br/>': ''}
      ${isGMI && value !== 1 ? `${getRandomKeywords().join(', ')}`: ''}`;


    dispatch('click', { 
      output:`${string}`,
      type: 'task',
    });
  }

  function generate() {
    answer = '';
    oldQuestion = question;
    oldTarget = target.toString();
    oldLevel = level.toString();
    roll = new DiceRoll('1d20');
    answerQuestion(roll.total);
  }
</script>

<div class="flex">
  <input type="text" bind:value={dc} class="py-2 px-3 border w-10 border-orange-900 text-orange-900"/>
  <button on:click={generate} class="py-2 px-3 border bg-orange-300 border-orange-900 text-orange-900 hover:bg-orange-400 focus:bg-orange-400">Do Task</button>
</div>
