<script lang="ts" module>
  import { createCustomTables } from "../../../data/models/custom-tables.svelte";
  export let customTables = createCustomTables();
</script>

<script lang="ts">
  import { emptyTable } from "../../../data/tables";
  import type { CustomTableViews, RandomTable } from "../../../data/types";
  import SettingPage from "../../ui/SettingPage.svelte";
  import TableIcon from '../../../assets/table.svg';
  import ImportIcon from '../../../assets/import.svg';
  import SaveIcon from '../../../assets/save.svg';
  import PlusIcon from '../../../assets/plus.svg';
  import RowIcon from '../../../assets/row.svg';
  import ListIcon from '../../../assets/list.svg';
  import CloseIcon from '../../../assets/trash.svg';

  let open: CustomTableViews = $state('view')
  let table: RandomTable = $state(emptyTable)
  let rows: number = $state(1);

  let tables = $derived(customTables.value);

  function addRow() {
    rows += 1;
    table.table.push({ min: 0, max: 0, description: '' });
  }

  function saveTable() {
    if(table.name && table.description && table.diceFormula && table.table[0].min !== 0) {
      customTables.add(table);
      table = emptyTable;
      rows = 1;
      open = '';
    }
  }

  function openView(e: Event, data: RandomTable) {
    e.preventDefault();
    open = 'view'
    table = data;
  }

  function removeTable(name: string) {
    customTables.remove(name);
  }
</script>

<SettingPage>
  <h3 class="text-3xl font-bold mb-3">Custom Tables</h3>

  <div class="flex items-center gap-3">
    <button onclick={() => open = 'view'}><img src={ListIcon} alt="List Tables" class="h-5 w-5"/></button>
    <button onclick={() => open = 'create'} class="relative">
      <img src={TableIcon} alt="Create Table" class="h-5 w-5"/>
      <img src={PlusIcon} alt="Add Row" class="h-3 w-3 absolute top-1 right-1 bg-stone-50 rounded"/>
    </button>
    <!--button onclick={() => open = 'import'}><img src={ImportIcon} alt="Import Table" class="h-5 w-5"/></button-->
    <button onclick={saveTable}><img src={SaveIcon} alt="Save Table" class="h-5 w-5"/></button>
  </div>

  <div class="mt-3">
    {#if open === 'create'}
      <div class="flex gap-2 mb-3">
        <input type="text" placeholder="Table Name" bind:value={table.name} />
        <input type="text" placeholder="Dice Formula" bind:value={table.diceFormula} />
      </div>
      <input type="text" placeholder="Description" bind:value={table.description} class="w-full mb-3"/>
      {#each Array(rows) as _, i}
        <div class="flex gap-3 mb-3">
          <input type="number" placeholder="Min" bind:value={table.table[i].min} class="w-20"/>
          <input type="number" placeholder="Max" bind:value={table.table[i].max} class="w-20"/>
          <input type="text" placeholder="Description" bind:value={table.table[i].description} class="grow"/>
        </div>
      {/each}
      <button onclick={addRow} class="relative">
        <img src={RowIcon} alt="Add Row" class="h-5 w-5"/>
        <img src={PlusIcon} alt="Add Row" class="h-3 w-3 absolute top-1 right-1 bg-stone-50 rounded"/>
      </button>
    {:else if open === 'import'}
        Import Table
    {:else}
      <div class="flex flex-col gap-1">
        {#each Object.values(tables) as table}
          <div class="w-full flex items-center justify-between border-b">
            <a href="\#" onclick={(e) => openView(e, table)} class="p-3 ">
              {table.name}
            </a>
            <button onclick={() => removeTable(table.name)} class="w-[48px] flex items-center justify-center">
              <img src={CloseIcon} alt="Close" class="h-[24px]"/>
          </div>
        {/each}
      </div>
    {/if}
    {#if open}
    <div class="mt-3 pt-3">
        <h5 class="text-xl mb-3">{table.name}</h5>
        <p class="mb-3">
          {table.description}<br/>
          <strong>Roll:</strong> {table.diceFormula}
        </p>
        <table>
          <thead>
            <tr>
              <th>Min</th>
              <th>Max</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {#each table.table as row}
              <tr>
                <td>{row.min}</td>
                <td>{row.max}</td>
                <td>{row.description}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
  </div>
</SettingPage>