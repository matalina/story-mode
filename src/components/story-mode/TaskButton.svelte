<script lang="ts">
  import { getRandomKeywords } from '../../lib/keywords';
  import type { ButtonProps } from '../../lib/types';
  import { rollOnDCTable } from '../../lib/tables';

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
  <input type="text" bind:value={value} class="w-9"/>
  <button onclick={generate} disabled={!hasQuestion ? true : undefined}>Check</button>
</div>

<style>
  @reference '../../app.css';
</style>