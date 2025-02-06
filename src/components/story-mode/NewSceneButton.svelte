<script lang="ts">
	import type { ContentData } from '../../lib/content.svelte.js';
  import { DiceRoll } from "@dice-roller/rpg-dice-roller";
  import SceneIcon from "../../assets/scene.svg";
  import { statuses } from "../../lib/types";
  import { content } from '../../App.svelte';

  let roll: DiceRoll | undefined = $state();
  let status: number | undefined = $state();

  function addStatus() {
    roll = new DiceRoll('1d6');
    status = roll.total;

    const output =
      `<em class="text-xs italic">${statuses[status - 1].guidance}</em><br/>` +
      `<strong>Scene Status:</strong> ${statuses[status - 1].status} ${status} (${statuses[status - 1].target})`;

    const data: ContentData = {
      output,
      type: 'start',
    };
    content.add(data);
  }

</script>

<button
  class="w-[48px] flex items-center justify-center"
  onclick={addStatus}
>
  <img src={SceneIcon} alt="New Scene" class="h-[24px]"/>
</button>