<script lang="ts">
  import { getRandomKeywords } from '../../lib/keywords';
  import type { ButtonProps } from '../../lib/types';
  import { rollOnDCTable } from '../../lib/tables';
  import CheckIcon from '../../assets/check.svg';

  interface TaskButtonProps extends ButtonProps {
    status: number;
  }

  let { click, status, hasQuestion }: TaskButtonProps = $props();

  let value:string | undefined = $state();
  let dc = $derived(status);
  let level = $derived(parseInt(value as string) || dc);
  let target = $derived(level * 3);
  let answer = $state('');
  let keywords:string[] = $state([]);

  $effect(() => {
    value = dc.toString();
  });

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

    click?.({
      output:`${string}`,
      type: 'task',
    });
  }
</script>

<div class="flex">
  <input type="text" bind:value={value} class="w-[48px]"/>
  <button onclick={generate} disabled={!hasQuestion ? true : undefined}   class="w-[48px] flex items-center justify-center">
    <img src={CheckIcon} alt="Check" class="h-[24px]"/>
  </button>
</div>

<style>
  @reference '../../app.css';
</style>