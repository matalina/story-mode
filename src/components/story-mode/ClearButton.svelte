<script lang="ts">
  import type { ButtonProps } from "../../lib/types";
  import ClearIcon from "../../assets/clear.svg";

  let { click, hasContent }:ButtonProps = $props();
</script>

<button
  disabled={!hasContent ? true : undefined}
  class="w-[48px] flex items-center justify-center"
  class:disable={!hasContent ? true : undefined}
  onclick={ click }
>
  <img src={ClearIcon} alt="Clear" class="h-[24px]"/>
</button>