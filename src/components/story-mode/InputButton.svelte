<script lang="ts">
  import type { ButtonProps } from '../../lib/types';

let { click }:ButtonProps = $props();

function returnInput() {
  click?.({type: 'input', output: ''})
}
</script>

<button onclick={returnInput} class="py-2 px-3 border bg-orange-300 border-orange-900 text-orange-900 hover:bg-orange-400 focus:bg-orange-400">Add Text</button>

<style>
  @reference '../../app.css';
</style>