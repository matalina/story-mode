<script lang="ts">
  import { DiceRoller } from '@dice-roller/rpg-dice-roller';
  import type { ButtonProps } from '../../lib/types';

  let { click }:ButtonProps = $props();

  let notation = $state('1d20');

  function roll() {
    const roller = new DiceRoller();
    roller.roll(notation);
    
    click?.({
      type: 'roll',
      output: roller.output,
    });
  }

</script>

<div class="flex">
  <input bind:value={notation} class="py-2 px-3 border w-40 border-orange-900 text-orange-900" />
  <button onclick={roll} class="py-2 px-3 border bg-orange-300 border-orange-900 text-orange-900 hover:bg-orange-400 focus:bg-orange-400">
    Roll
  </button>
</div>

<style>
  @reference '../../app.css';
</style>