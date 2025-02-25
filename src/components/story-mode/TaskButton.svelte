<script lang="ts">
  import { getRandomKeywords } from '../../lib/keywords';
  import { rollOnDCTable } from '../../lib/tables';
  import CheckIcon from '../../assets/check.svg';
  import EaseIcon from '../../assets/ease.svg';
  import HinderIcon from '../../assets/hinder.svg';
  import ResetIcon from '../../assets/reset.svg';

  import {content } from '../../App.svelte';
  import type { ContentData } from '../../data/types';
  import {input as data} from './Input.svelte';
  import { status } from './NewSceneButton.svelte';
  import { tooltip } from '../../lib/tooltip.svelte';

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

  let value:number = $state(status.value);
  let dc = $derived(value);
  let level = $derived(value || dc);
  let target = $derived(level * 3);
  let answer = $state('');
  let keywords:string[] = $state([]);

  $effect(() => {
    value = status.value;
  })

  function ease() {
    value -= 1;
  }

  function hinder() {
    value += 1;
  }

  function reset() {
    value = status.value;
  }

</script>

<div class="flex">
  <input type="text" bind:value={value} class="w-[48px]"/>
  <button 
    onclick={generate} 
    disabled={!hasQuestion ? true : undefined} 
    use:tooltip={'Generate Task'} 
    class="w-[48px] flex items-center justify-center"
  >
    <img src={CheckIcon} alt="Check" class="h-[24px]"/>
  </button>
  <button 
    onclick={ease} 
    use:tooltip={'Ease Task'} 
    class="w-[48px] flex items-center justify-center"
  >
    <img src={EaseIcon} alt="Ease" class="h-[24px]"/>
  </button>
  <button 
    onclick={hinder} 
    use:tooltip={'Hinder Task'} 
    class="w-[48px] flex items-center justify-center"
  >
    <img src={HinderIcon} alt="Ease" class="h-[24px]"/>
  </button>
  <button 
    onclick={reset} 
    use:tooltip={'Reset'} 
    class="w-[48px] flex items-center justify-center"
  >
    <img src={ResetIcon} alt="Reset" class="h-[24px]"/>
  </button>
</div>
