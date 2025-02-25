<script lang="ts">
  import MapIcon from '../../assets/map.svg';
  import { navigate } from 'svelte-routing';
  import { tooltip } from '../../lib/tooltip.svelte';
  function openMap() {
    navigate('/map');
  }
</script>

<div class="relative">
  <button
    onclick={openMap}
    class="w-[48px] flex items-center justify-center"
    use:tooltip={ {text: 'Map', position: 'bottom'} }
  >
    <img src={MapIcon} alt="Map"  class="h-[24px]"/>
  </button>
</div>
