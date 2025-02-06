<script lang="ts">
  import { getRandomKeywords } from '../../lib/keywords';
  import KeywordsIcon from '../../assets/keywords.svg';
  import {content } from '../../App.svelte';
  import type { ContentData } from '../../lib/content.svelte';
  import {input as data} from './Input.svelte';

  let input = $derived(data.value);
  let hasQuestion = $derived(input !== '');

  function generate() {
    keywords = getRandomKeywords(3);

    const userInput: ContentData = {
      type: 'input',
      output: input,
    };

    const output: ContentData = {
      type: 'keyword',
      output: keywords.join(', ')
    };

    content.add([ userInput, output ]);

    data.reset();
  }

  let keywords: string[] = $state([]);

</script>


<button
  onclick={generate} disabled={!hasQuestion ? true : undefined}
  class="w-[48px] flex items-center justify-center"
>
  <img src={KeywordsIcon} alt="Keywords" class="h-[24px]"/>
</button>

<style>
    @reference '../../app.css';
  </style>