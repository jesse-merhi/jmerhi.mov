<script>
  import { onMount } from "svelte";
  import SvelteMarkdown from "svelte-markdown";
  import CodeComponent from "./CodeComponent.svelte";
  import { page } from "$app/stores";
  let blog_name = $page.params.blog_name;
  let blogContent = "";
  let blogConfig = {};
  onMount(async () => {
    let response = await fetch("/blog/" + blog_name + "/blog.md");
    if (response.ok) {
      blogContent = await response.text();
    } else {
      blogContent = "Blog Not Found :(";
    }
    response = await fetch("/blog/" + blog_name + "/config.json");
    console.log(response);
    blogConfig = await response.json();
  });
</script>

{#if blogConfig != {}}
  <div class="h-[100%] w-[95%] sm:w-[70%]">
    <div
      class="markdown h-[100%] w-[100%] pr-[20px] pl-[20px] pb-[50px] overflow-y-scroll overflow-x-hidden break-words"
    >
      <div class="h-[50px]"></div>
      <h1>{blogConfig.title || ""}</h1>
      <p>{blogConfig.author || ""} {blogConfig.published || ""}</p>
      <SvelteMarkdown
        source={blogContent}
        renderers={{ code: CodeComponent }}
      />
    </div>
  </div>
{/if}

<style lang="postcss">
  * {
    @apply text-lg font-extralight text-pretty;
  }

  .markdown :global(img) {
    @apply mb-[20px] mt-[20px];
  }

  .markdown :global(h1) {
    @apply text-5xl mb-[30px] font-black;
  }
  .markdown :global(h2) {
    @apply text-3xl font-black	mb-[15px] pt-[30px];
  }
  .markdown :global(h3) {
    @apply text-xl font-black	mb-[15px] pt-[30px];
  }
  .markdown :global(h4) {
    @apply text-lg font-black	mb-[15px] pt-[30px];
  }
  .markdown :global(strong) {
    @apply font-extrabold;
  }
  .markdown :global(p) {
    @apply text-lg mb-[10px];
  }
  .markdown :global(a) {
    @apply text-secondary underline;
  }
  .markdown :global(ol) {
    @apply text-lg list-decimal list-inside pl-[10px] pb-[10px];
  }
  .markdown :global(li) {
    @apply mb-[0px];
  }
  .markdown :global(ul) {
    @apply text-lg list-disc list-inside pl-[10px];
  }
  .markdown :global(blockquote) {
    border-left: 10px solid #ccc;
    padding: 0.5em 10px;
    @apply text-lg mb-[20px] mt-[20px];
  }
  .markdown :global(blockquote p) {
    display: inline;
    @apply text-lg;
  }
</style>
