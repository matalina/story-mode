<script lang="ts">
  import { createMap } from "../../data/map.svelte";

  const map = createMap();
</script>

<div class="flex justify-center">
  <table class="map">
    <thead>
      <tr>
        <th></th>
        <th>A</th>
        <th>B</th>
        <th>C</th>
        <th>D</th>
        <th>E</th>
      </tr>
    </thead>
    <tbody>
      {#each Array(5) as _,i}
        <tr>
          <th>{i + 1}</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      {/each}
    </tbody>
</div>