<script lang="ts">
  import { getRandomKeywords } from '../../lib/keywords';
  import type { ButtonProps } from '../../lib/types';

  interface KeywordsButtonProps extends ButtonProps {
    count?: number;
  }

  let { click, count = 3 }:KeywordsButtonProps = $props();

  let keywords: string[] = $state([]);

  function generate() {
    keywords = getRandomKeywords(count);
    click?.({type: 'keyword', output: keywords.join(', ')})
  }
</script>


<button onclick={generate} class="py-2 px-3 border bg-orange-300 border-orange-900 text-orange-900 hover:bg-orange-400 focus:bg-orange-400">Ask Keywords</button>

<style>
    @reference '../../app.css';
  </style>