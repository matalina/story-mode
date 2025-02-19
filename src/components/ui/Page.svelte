<script lang="ts">
  import type { Snippet } from "svelte";
  import BackButton from "./BackButton.svelte";

  let { children, back }: { children: Snippet, back: string } = $props();
</script>

<div class="">
  <BackButton {back}/>

  <div class="overflow-auto max-h-[580px] mt-2">
    {@render children()}
  </div>
</div>