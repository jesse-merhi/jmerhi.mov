<script>
  import "../app.pcss";
  import { ModeWatcher, toggleMode } from "mode-watcher";
  import Icon from "@iconify/svelte";
  import { Button } from "$lib/components/ui/button";
  import { page } from "$app/stores";
  import { slide } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import { mode } from "mode-watcher";
  $page.url.pathname;
  const endpoints = [
    //{ path: "/blog", content: "BLOG" },
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
      class="bg-transparent h-[5vh] flex items-center justify-between m-[20px] mb-0"
    >
      <div class="flex flex-row h-full">
        <a class="h-full" href="/">
          {#if $mode}
            <img
              src={$mode == "dark"
                ? "imgs/dark_mode.svg"
                : "imgs/light_mode.svg"}
              class="h-full"
              alt="home"
            />
          {/if}
        </a>
      </div>
      <div class="flex flex-row h-full">
        {#each endpoints as endpoint}
          <a
            class="{$page.url.pathname == endpoint.path
              ? 'text-muted-muted underline h-full text-secondary font-black '
              : 'text-muted-foreground font-black  hover:text-black dark:hover:text-white '} transition ease-in-out duration-100 h-full items-center flex pl-8 pr-8"
            href={endpoint.path}
          >
            {endpoint.content}
          </a>
        {/each}
        <ModeWatcher />
        <Button
          class="w-[4.5vh] h-[4.5vh]  hover:text-foreground text-secondary"
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
