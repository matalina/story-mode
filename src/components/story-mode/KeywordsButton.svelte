<script lang="ts">
  import { getRandomKeywords } from '../../lib/keywords';
  import type { ButtonProps } from '../../lib/types';
  import KeywordsIcon from '../../assets/keywords.svg';

  interface KeywordsButtonProps extends ButtonProps {
    count?: number;
  }

  let { click, count = 3, hasQuestion }:KeywordsButtonProps = $props();

  let keywords: string[] = $state([]);

  function generate() {
    keywords = getRandomKeywords(count);
    click?.({type: 'keyword', output: keywords.join(', ')})
  }
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