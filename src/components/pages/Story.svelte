<script lang="ts">
	import Sidebar from './../story-mode/Sidebar.svelte';
  import Content from '../story-mode/Content.svelte';
  import Input from '../story-mode/Input.svelte';
  import Header from '../ui/Header.svelte';
</script>

<Header />
<Content />
<div class="flex flex-col gap-2">
  <Sidebar />
  <Input />
</div>
