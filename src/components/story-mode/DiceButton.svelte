<script lang="ts">
  import { DiceRoller } from '@dice-roller/rpg-dice-roller';
  import type { ButtonProps } from '../../lib/types';
  import RollIcon from '../../assets/d20.svg';

  let { click, hasQuestion }:ButtonProps = $props();

  let notation = $state('1d20');

  function roll() {
    const roller = new DiceRoller();
    roller.roll(notation);

    click({
      type: 'roll',
      output: roller.output,
    });
  }

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