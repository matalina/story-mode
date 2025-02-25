<script lang="ts">
	import Divider from './../ui/Divider.svelte';
	import CopyButton from './CopyButton.svelte';
  import DiceButton from '../story-mode/DiceButton.svelte';
  import InputButton from '../story-mode/InputButton.svelte';
  import KeywordsButton from '../story-mode/KeywordsButton.svelte';
  import OracleButton from '../story-mode/OracleButton.svelte';
  import TaskButton from '../story-mode/TaskButton.svelte';
  import NewSceneButton from './NewSceneButton.svelte';
  import ClearButton from './ClearButton.svelte';
  import MoreButton from './MoreButton.svelte';
</script>

<div class="flex gap-2 mt-2">
  <OracleButton />
  <TaskButton/>
  </div>
<div class="flex gap-2">
  <DiceButton  />
  <Divider />
  <InputButton  />
  <KeywordsButton />
  <MoreButton />
</div>
