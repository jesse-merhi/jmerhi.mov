<script>
  import { HighlightAuto } from "svelte-highlight";
  import github from "svelte-highlight/styles/github";
  export let text;
</script>

<svelte:head>
  {@html github}
</svelte:head>
<HighlightAuto code={text} />
