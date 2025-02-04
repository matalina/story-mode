<script type="ts">
import { getRandomKeywords } from '../../lib/keywords';
import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();

export let count = 3;
$: keywords = [];

function generate() {
    keywords = getRandomKeywords(count);
    dispatch('click', {type: 'keyword', output: keywords.join(', ')})
}
</script>


<button on:click={generate} class="py-2 px-3 border bg-orange-300 border-orange-900 text-orange-900 hover:bg-orange-400 focus:bg-orange-400">Ask Keywords</button>
