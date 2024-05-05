<script>
  import "../app.pcss";
  import { ModeWatcher, toggleMode } from "mode-watcher";
  import Icon from "@iconify/svelte";
  import { Button } from "$lib/components/ui/button";
  import { page } from "$app/stores";
  import { slide } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  $page.url.pathname;
  const endpoints = [
    { path: "/", content: "Home" },
    { path: "/blog", content: "Blog" },
    { path: "/6443", content: "6443" },
  ];
  export let data;

  function fadeSlide(node, options) {
    const slideTrans = slide(node, options);
    return {
      duration: options.duration,
      delay: options.delay || 0,
      css: (t) => `
            ${slideTrans.css(t)}
            opacity: ${t};
        `,
    };
  }
</script>

{#if $page.url.pathname == "/test"}
  <slot />
{:else}
  <div class="w-screen h-screen">
    <nav
      class="bg-transparent w-screen h-[5vh] flex items-center justify-between m-[20px]"
    >
      <div class="flex flex-row h-full">
        {#each endpoints as endpoint}
          <a
            class="{$page.url.pathname == endpoint.path
              ? 'text-muted-muted bg-secondary rounded-full border-black border-[3px] shadow-[3px_3px_0px_rgba(0,0,0,1)] h-full text-black dark:text-background font-black '
              : 'text-muted-foreground font-black hover:text-black dark:hover:text-white '} no-underline transition ease-in-out duration-100 h-full items-center flex pl-8 pr-8"
            href={endpoint.path}
          >
            {endpoint.content}
          </a>
        {/each}
      </div>
      <div>
        <ModeWatcher />
        <Button
          class="w-[4.5vh] h-[4.5vh]  hover:text-foreground text-muted-foreground"
          on:click={toggleMode}
          variant="link"
          size="icon"
        >
          <Icon
            icon="ph:sun"
            class="h-[3vh] w-[3vh] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Icon
            icon="ph:moon"
            class="absolute h-[3vh] w-[3vh] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 "
          />
          <span class="sr-only">Toggle theme</span>
        </Button>
      </div>
    </nav>
    {#key data.url}
      <div
        class="bg-background w-screen h-[93vh] flex justify-center items-center"
        in:fadeSlide={{ duration: 400, delay: 0 }}
        out:fadeSlide={{ duration: 400 }}
      >
        <slot />
      </div>
    {/key}
  </div>
{/if}
