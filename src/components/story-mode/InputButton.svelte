<script lang="ts">
  import type { ButtonProps } from '../../lib/types';

let { click, hasQuestion }:ButtonProps = $props();

function returnInput() {
  click?.({type: 'input', output: ''})
}
</script>

<button onclick={returnInput} disabled={!hasQuestion ? true : undefined}>Add Text</button>

<style>
  @reference '../../app.css';
</style>