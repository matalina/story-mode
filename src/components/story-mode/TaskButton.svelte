<script lang="ts">
  import { getRandomKeywords } from '../../lib/keywords';
  import { rollOnDCTable } from '../../lib/tables';
  import CheckIcon from '../../assets/check.svg';

  import {content } from '../../App.svelte';
  import type { ContentData } from '../../data/types';
  import {input as data} from './Input.svelte';
  import { status } from './NewSceneButton.svelte';

  let input = $derived(data.value);
  let hasQuestion = $derived(input !== '');

  function generate() {
    answer = '';
    let string = '';
    const result = rollOnDCTable(target);
    answer = result.description;
    const value = result.roll.total;
    let isAndOrBut = false;
    if (
      answer.includes('and') ||
      answer.includes('but')
    ) {
      isAndOrBut = true;
      keywords = [...getRandomKeywords()];
    }

    string += `<strong>${result.description}</strong>`;
    string += ` <small class="text-xs italic">[${level}(${target}) → ${value}]</small>`;
    if(isAndOrBut)
      string += `<br/>${keywords.join(', ')}`;

    const output: ContentData = {
      output: string,
      type: 'task',
      input: `<strong>Do:</strong> ${input}`,
    };

    content.add([ output ]);

    data.reset();
  }

  let value:number | undefined = $state(status.value);
  let dc = $derived(value);
  let level = $derived(value || dc);
  let target = $derived(level * 3);
  let answer = $state('');
  let keywords:string[] = $state([]);

  $effect(() => {
    value = status.value;
  })

</script>

<div class="flex">
  <input type="text" bind:value={value} class="w-[48px]"/>
  <button onclick={generate} disabled={!hasQuestion ? true : undefined}   class="w-[48px] flex items-center justify-center">
    <img src={CheckIcon} alt="Check" class="h-[24px]"/>
  </button>
</div>
