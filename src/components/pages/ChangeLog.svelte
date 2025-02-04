<script lang="ts">
  import Markdown from '../ui/Markdown.svelte';
</script>

<div class="p-3 mb-3 prose border rounded-xl">
  <h3>Change Log</h3>

  <Markdown
    small={true}
    markdown={`
#### 1.250204.01
* Initial Release
* Only Story Mode & Change Log
  `}
  />
</div>

<style>
  @reference '../../app.css';
</style>
