<script lang="ts">
  import MoreIcon from '../../assets/more.svg';
  import { navigate } from 'svelte-routing';
  import { tooltip } from '../../lib/tooltip.svelte';

  function openMore() {
    navigate('/more');
  }
</script>

<div class="relative">
  <button
    onclick={openMore}
    class="w-[48px] flex items-center justify-center"
    use:tooltip={'More Options'}
  >
    <img src={MoreIcon} alt="More Options"  class="h-[24px]"/>
  </button>
</div>