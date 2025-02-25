<script lang="ts" module>
  import { createStatus } from '../../data/models/status.svelte';
  export let status = createStatus();
</script>

<script lang="ts">
  import type { ContentData } from '../../data/types';
  import { DiceRoll } from "@dice-roller/rpg-dice-roller";
  import SceneIcon from "../../assets/scene.svg";
  import { content } from '../../App.svelte';
  import { statuses } from '../../data/constants';
  import { tooltip } from '../../lib/tooltip.svelte';

  let roll: DiceRoll | undefined = $state();
  let value = $state(status.value);


  function addStatus() {
    roll = new DiceRoll('1d6');
    status.update( roll.total );
    value = status.value;

    const output =
      `<em class="text-xs italic">${statuses[value - 1].guidance}</em><br/>` +
      `<strong>Scene Status:</strong> ${statuses[value - 1].status} ${value} (${statuses[value - 1].target})`;

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
  use:tooltip={ {text: 'New Scene', position: 'right'} }
>
  <img src={SceneIcon} alt="New Scene" class="h-[24px]"/>
</button>