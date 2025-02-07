<script lang="ts">
  import type { Snippet } from "svelte";
  import BackButton from "./BackButton.svelte";

  let { children }: { children: Snippet} = $props();
</script>

<div class="">
  <BackButton />

  <div class="overflow-auto max-h-[580px] mt-2">
    {@render children()}
  </div>
</div>