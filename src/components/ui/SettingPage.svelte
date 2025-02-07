<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet} = $props();
</script>

<div class="mt-2">
  {@render children()}
</div>