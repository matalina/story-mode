<script lang="ts">
  import { DiceRoller } from '@dice-roller/rpg-dice-roller';
  import type { ButtonProps } from '../../lib/types';

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
  <input bind:value={notation} />
  <button
    onclick={roll}
    disabled={!hasQuestion ? true : undefined}
  >
    Roll
  </button>
</div>

<style>
  @reference '../../app.css';
</style>