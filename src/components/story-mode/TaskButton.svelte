<script lang="ts">
  import { DiceRoll } from '@dice-roller/rpg-dice-roller';
  import { getRandomKeywords } from '../../lib/keywords'; 
  import type { ButtonProps } from '../../lib/types';

  let { click }: ButtonProps = $props();

  let dc = $state('2');
  let level = $derived(parseInt(dc));
  let target = $derived(level * 3);
  let oldLevel = $state('0');
  let oldTarget = $state('0');
  let question = $state('');
  let oldQuestion = $state('');
  let roll: DiceRoll | undefined = $state(undefined);
  let answer = $state('');
  let keywords:string[] = $state([]);

  function answerQuestion(value: number) {
    let string = '';
    if (value - parseInt(target.toString()) >= 0) {
      string += '<strong>Success</strong>';
    } else {
      string += `<strong>Fail</strong>`;
    }
    string += ` <small class="text-xs italic">[${level}(${target}) → ${value}]</small>`;
    keywords = [...getRandomKeywords()];
    string += `<br/><em>(optional)</em> ${keywords.join(', ')}`;

    click?.({ 
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
  <button onclick={generate} class="py-2 px-3 border bg-orange-300 border-orange-900 text-orange-900 hover:bg-orange-400 focus:bg-orange-400">Do Task</button>
</div>

<style>
  @reference '../../app.css';
</style>