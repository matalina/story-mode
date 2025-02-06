<script lang="ts">
  import type { ButtonProps } from "../../lib/types";
  import SceneIcon from "../../assets/scene.svg";

  let { click }: ButtonProps = $props();
</script>

<button
  class="w-[48px] flex items-center justify-center"
  onclick={click}
>
  <img src={SceneIcon} alt="New Scene" class="h-[24px]"/>
</button>