<script lang="ts" module>
  import { createInput } from "../../data/input.svelte";

  export let input = createInput();
</script>

<script lang="ts">
  let question = $state('');
  let cleared = $derived(input.cleared);

  $effect(() => {
    if(cleared) {
      question = '';
      input.emptied();
    }
  })

  function changeInput() {
    input.update(question);
  }
</script>

<textarea
  id="question"
  bind:value={question}
  oninput={changeInput}
  class="w-full px-3 py-2 text-stone-900 border border-stone-900 h-[60px]"
  placeholder="Question, task or text"
></textarea>