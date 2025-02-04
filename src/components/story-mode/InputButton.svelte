<script lang="ts">
  import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();

function returnInput() {
  dispatch('click', {type: 'input', output: ''})
}
</script>

<button on:click={returnInput} class="py-2 px-3 border bg-orange-300 border-orange-900 text-orange-900 hover:bg-orange-400 focus:bg-orange-400">Add Text</button>