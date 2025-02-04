<script>
  import MarkdownIt from 'markdown-it';
  export let markdown;
  export let small = false;
  const md = new MarkdownIt();
</script>

<div class="prose" class:prose-sm={small}>
  {@html md.render(markdown)}
</div>
