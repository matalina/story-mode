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
</script>

<div class="flex gap-2 mt-2">
  <NewSceneButton click={startSession} />
  <Divider />
  <OracleButton click={addContent} {hasQuestion}/>
  <TaskButton click={addContent} status = {status ? status: 0} {hasQuestion}/>
  <Divider />
  <ClearButton click={clearSession} {hasContent}/>
  <CopyButton {hasContent} click={copySession}/>
  </div>
<div class="flex gap-2">
  <DiceButton click={addContent} {hasQuestion} />
  <Divider />
  <InputButton click={addContent} {hasQuestion} />
  <KeywordsButton click={addContent} {hasQuestion}/>
</div>

<style>
  @reference '../../app.css';
</style>