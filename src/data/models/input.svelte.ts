import MarkdownIt from 'markdown-it';

let md = new MarkdownIt({
  html: true,
  xhtmlOut: true,
  breaks: true,
  linkify: true,
});

export function createInput() {
  let value = $state('');
  let cleared = $state(false);

  function reset() {
    value = '';
    cleared = true;
  }

  function update(data: string) {
    value = md.renderInline(data);
    cleared = false;
  }

  function emptied() {
    cleared = false;
  }

  return {
    get value() {
      return value;
    },
    get cleared() {
      return cleared;
    },
    reset,
    update,
    emptied,
  }
};