<script lang="ts">
  import type { ButtonProps } from '../../lib/types';
  import MoreIcon from '../../assets/more.svg';

  let { click, hasQuestion }:ButtonProps = $props();

  function getMore() {
    click?.({type: 'input', output: ''})
  }
</script>

<button
  onclick={getMore}
  disabled={true}
  class="w-[48px] flex items-center justify-center"
>
  <img src={MoreIcon} alt="More"  class="h-[24px]"/>
</button>

<style>
  @reference '../../app.css';
</style>