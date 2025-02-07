<script lang="ts">
  import { DiceRoller } from '@dice-roller/rpg-dice-roller';
  import RollIcon from '../../assets/d20.svg';
  import { content } from '../../App.svelte';
  import type { ContentData } from '../../lib/content.svelte';
  import {input as data} from './Input.svelte';

  let input = $derived(data.value);
  let hasQuestion = $derived(input !== '');
  let notation = $state('1d20');

  async function roll() {
    const roller = new DiceRoller();
    roller.roll(notation);

    const output: ContentData = {
      type: 'roll',
      output: roller.output,
      input: `<strong>Roll:</strong> ${input}`,
    };

    content.add([ output ]);

    data.reset();
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