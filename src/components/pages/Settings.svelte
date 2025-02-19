<script lang="ts">
  import Page from "../ui/Page.svelte";
  import { settingPages } from "../../data/setting-pages";

  let value = $state('Settings');

  let blocks = $derived(settingPages.map(page => page.component));
  let index = $derived(settingPages.findIndex(page => page.name === value));

  let Block = $derived(blocks[index]);
</script>

<Page back="/">
  <h3 class="text-3xl font-bold mb-3">Settings</h3>

  <select bind:value={value} class="w-full border">
    {#each settingPages as page}
      <option value={page.name}>{page.name}</option>
    {/each}
  </select>

  <Block />
</Page>