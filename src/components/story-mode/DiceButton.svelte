<script lang="ts">
  import { DiceRoller } from '@dice-roller/rpg-dice-roller';
  import RollIcon from '../../assets/d20.svg';
  import { content, input as data } from '../../App.svelte';
  import type { ContentData } from '../../lib/content.svelte';

  let input = $derived(data.value);
  let hasQuestion = $derived(input !== '');
  let notation = $state('1d20');

  $inspect(input, hasQuestion)

  function roll() {
    const roller = new DiceRoller();
    roller.roll(notation);


    const userInput: ContentData = {
      type: 'input',
      output: input,
    };

    const output: ContentData = {
      type: 'roll',
      output: roller.output,
    };

    content.add(userInput);
    content.add(output);

    data.reset();
  }

  $inspect(data);
</script>

<div class="flex">
  <input bind:value={notation} class="w-[96px]"/>
  <button
    class="w-[48px] flex items-center justify-center"
    onclick={roll}
    disabled={!hasQuestion ? true : undefined}
  >
    <img src={RollIcon} alt="Roll" class="h-[24px]"/>
  </button>
</div>

<style>
  @reference '../../app.css';
</style>