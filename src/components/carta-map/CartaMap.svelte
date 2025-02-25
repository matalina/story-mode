<script module lang="ts">
  import { createMap } from "../../data/models/map.svelte";
  import StartIcon from '../../assets/home.svg';
  import FinishIcon from '../../assets/finish.svg';
  import ClueIcon from '../../assets/boon.svg';
  import SetbackIcon from '../../assets/danger.svg';
  import EmptyIcon from '../../assets/d20.svg';
  import { onMount } from "svelte";

  const icons = {
    start: StartIcon,
    finish: FinishIcon,
    clue: ClueIcon,
    setback: SetbackIcon,
    empty: EmptyIcon,
  }

  export const map = createMap();
</script>

<script lang="ts">

  let hasMap = $state(false);

  function move(key: string) {
    // generate Tile
    // move to tile
    map.move(key);
  }

   onMount(() => {
    map.generateMap();
    if(Object.keys(map.value.map).length > 0) {
      hasMap = true;
    }
  });
</script>

{#if hasMap}
<div class="flex justify-center">
  <table class="map">
    <thead>
      <tr>
        <th></th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
      </tr>
    </thead>
    <tbody>
      {#each Array(5) as _,i}
        <tr>
          <th>{i + 1}</th>
          {#each Array(5) as _,j}
          {@const key = `${i}.${j}`}
          {@const mapItem = map.value.map[key]}
          {@const iconName: keyof typeof icons = mapItem.icon.toLowerCase() as keyof typeof icons || 'empty'}
          {@const canMove = map.canMoveTo(map.value.current, key)}

            <td class:active={map.value.current === key}>
                {#if canMove}
                  <button onclick={() => move(key)} class="w-full h-full">
                    {#if mapItem.visible}
                      <img src={icons[iconName]} alt={`${key}`} />
                    {:else}  
                      <img src={icons.empty} alt={`${key}`} />
                    {/if}
                  </button>
                {:else}
                  {#if mapItem.visible}
                    <img src={icons[iconName]} alt={`${key}`} />
                  {:else}  
                    <img src={icons.empty} alt={`${key}`} />
                  {/if}
              {/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </div>
{/if}