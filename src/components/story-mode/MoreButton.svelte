<script lang="ts">
  import MoreIcon from '../../assets/more.svg';
  import { navigate } from 'svelte-routing';

  function openMore() {
    navigate('/more');
  }
</script>

<div class="relative">
  <button
    onclick={openMore}
    class="w-[48px] flex items-center justify-center"
  >
    <img src={MoreIcon} alt="More Options"  class="h-[24px]"/>
  </button>
</div>