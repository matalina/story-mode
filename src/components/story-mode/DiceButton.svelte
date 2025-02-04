<script lang="ts">
  import { DiceRoller } from '@dice-roller/rpg-dice-roller';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let notation = '1d20';

  function roll() {
    const roller = new DiceRoller();
    roller.roll(notation);
    
    dispatch('click',{
      type: 'roll',
      output: roller.output,
    });
  }

</script>

<div class="flex">
  <input bind:value={notation} class="py-2 px-3 border w-40 border-orange-900 text-orange-900" />
  <button on:click={roll} class="py-2 px-3 border bg-orange-300 border-orange-900 text-orange-900 hover:bg-orange-400 focus:bg-orange-400">
    Roll
  </button>
</div>