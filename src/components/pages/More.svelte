<script lang="ts">
  import { navigate } from 'svelte-routing';
  import { content } from '../../App.svelte';
  import BackIcon from '../../assets/back.svg';
  import RollIcon from '../../assets/d20.svg';
  import PlusIcon from '../../assets/plus.svg';
  import { moreTables, rollOnTable } from '../../lib/tables';

  const tables = $state(Object.keys(moreTables));

  let result: string = $state('');
  let value: string = $state(moreTables[tables[0]].name);

  function getResult() {
    const answer = rollOnTable(moreTables[value])
    result = `<strong>${value}</strong>: ${answer.description}<br/><small>(${answer.roll.output})</small>`;
  }

  function saveToStory() {
    content.add({
      type: 'table',
      output: result,
    });
    navigate('/');
  }
</script>

<div class="">
  <div>
    <a href="/" class="flex gap-2 items-center"><img src={BackIcon} alt="back" class="h-5 w-5"/><span>Go Back</span></a>
  </div>

  <div class="overflow-auto max-h-[580px] mt-2">
    <h3 class="text-3xl font-bold mb-3">More Options</h3>

    <h4 class="text-2xl font-bold mb-3">Random Tables</h4>

    <div class="flex">
      <div class="flex pr-3">
        <select class="border" bind:value={value}>
          {#each tables as table}
            <option value={table}>{table}</option>
          {/each}
        </select>
        <button
          class="w-[48px] flex items-center justify-center"
          onclick={getResult}
        >
          <img src={RollIcon} alt="Roll" class="h-[24px]"/>
        </button>
      </div>
      <div class="flex grow gap-3 justify-between items-center">
        {#if result}
          <div class="">{@html result}</div>
          <button
            class="w-[48px]"
            onclick={saveToStory}
          >
            <img src={PlusIcon} alt="Roll" class="h-[24px]"/>
          </button>
        {/if}
    </div>
    </div>

  </div>
</div>