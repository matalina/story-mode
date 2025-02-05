<script lang="ts">
  import { getRandomKeywords } from '../../lib/keywords';
  import type { ButtonProps } from '../../lib/types';

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


<button onclick={generate} disabled={!hasQuestion ? true : undefined}>Ask Keywords</button>

<style>
    @reference '../../app.css';
  </style>