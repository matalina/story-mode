<script lang="ts">
  import TextIcon from '../../assets/text.svg';
  import {content } from '../../App.svelte';
  import type { ContentData } from '../../lib/content.svelte';
  import {input as data} from './Input.svelte';

  let input = $derived(data.value);
  let hasQuestion = $derived(input !== '');

  function returnInput() {
    const userInput: ContentData = {
      type: 'input',
      output: input,
    };

    content.add(userInput);

    data.reset();
  }
</script>

<button
  onclick={returnInput}
  disabled={!hasQuestion ? true : undefined}
  class="w-[48px] flex items-center justify-center"
>
  <img src={TextIcon} alt="Add Text"  class="h-[24px]"/>
</button>