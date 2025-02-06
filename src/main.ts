import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import { createContent } from './lib/content.svelte'

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app;