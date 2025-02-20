<script lang="ts">
  import type { Snippet } from "svelte";
  import BackButton from "./BackButton.svelte";

  let { children, back }: { children: Snippet, back: string } = $props();
</script>

<div class="">
  <BackButton {back}/>

  <div class="mt-2 overflow-auto max-h-[calc(100vh-48px)]">
    {@render children()}
  </div>
</div>