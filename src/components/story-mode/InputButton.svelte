<script lang="ts">
  import type { ButtonProps } from '../../lib/types';
  import TextIcon from '../../assets/text.svg';

let { click, hasQuestion }:ButtonProps = $props();

function returnInput() {
  click?.({type: 'input', output: ''})
}
</script>

<button onclick={returnInput} disabled={!hasQuestion ? true : undefined} class="w-[48px] flex items-center justify-center">
  <img src={TextIcon} alt="Add Text"  class="h-[24px]"/>
</button>

<style>
  @reference '../../app.css';
</style>