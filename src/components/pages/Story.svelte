<script lang="ts">
	import Sidebar from './../story-mode/Sidebar.svelte';
  import MarkdownIt from 'markdown-it';
  import Content from '../story-mode/Content.svelte';
  import TurndownService from 'turndown';
  import Input from '../story-mode/Input.svelte';

  const md = new MarkdownIt({
    html: false,
    xhtmlOut: true,
    breaks: true,
    linkify: true,
  });

  let question = $state('');

  const types = [
    'input',
    'oracle',
    'task',
    'roll',
    'start',
    'keyword',
  ] as const;
  type Type = (typeof types)[number];
  interface StoryEntry {
    [datetime: number]: {
      output: string; // should be HTML
      type: Type;
    };
  }

  const turndown = new TurndownService({
    headingStyle: 'atx',
    bulletListMarker: '*',
    codeBlockStyle: 'fenced',
    emDelimiter: '_',
    strongDelimiter: '**',
  });

  let content: StoryEntry = $state(JSON.parse(localStorage.content || `{}`));
  let empty = $derived(length > 0);

  function addContent({output, type}: {output: string, type: string}) {
    updateStore(output, type);
    question = '';
  }

  function updateStore(text: string, type: string) {
    if (type !== 'start') {
      content[Date.now() - 1000] = {
        output: md.render(question),
        type: 'input' as Type,
      };
    }
    if (type !== 'input') {
      content[Date.now()] = {
        output: text,
        type: type as Type,
      };
    }
    localStorage.content = JSON.stringify(content);
  }


  function clearSession() {
    content = {};
    localStorage.content = JSON.stringify(content);
  }

  function refreshSession() {
    content = JSON.parse(localStorage.content);
  }




</script>

<Content />
<div class="flex flex-col gap-2">
  <Sidebar />
  <Input />
</div>
