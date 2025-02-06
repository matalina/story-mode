<script lang="ts">
  import type { ButtonProps } from "../../lib/types";
  import CopyIcon from "../../assets/copy.svg";

  let { click, hasContent }:ButtonProps = $props();
</script>

<button
  disabled={!hasContent ? true : undefined}
  class:disable={!hasContent ? true : undefined}
  class="w-[48px] flex items-center justify-center"
  onclick={click}
>
  <img src={CopyIcon} alt="Copy" class="h-[24px]"/>
</button>