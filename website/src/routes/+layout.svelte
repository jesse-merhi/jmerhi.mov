<script>
  import "../app.pcss";
  import { ModeWatcher } from "mode-watcher";
  import Icon from "@iconify/svelte";
  import { Button } from "$lib/components/ui/button";

  import { toggleMode } from "mode-watcher";
  import { page } from "$app/stores";
  import { slide } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  $page.url.pathname;
  const endpoints = [
    { path: "/", content: "Home" },
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

<div class="w-screen h-screen">
  <nav
    class="bg-secondary w-screen h-[5vh] flex items-center justify-between pl-10 pr-10"
  >
    <div class="flex flex-row">
      {#each endpoints as endpoint}
        <a
          class="{$page.url.pathname == endpoint.path
            ? 'text-muted-muted'
            : 'text-muted-foreground hover:text-white'} transition ease-in-out duration-100 h-full items-center flex pl-8 pr-8"
          href={endpoint.path}
        >
          {endpoint.content}
        </a>
      {/each}
    </div>
    <div>
      <ModeWatcher />
      <Button on:click={toggleMode} variant="outline" size="icon">
        <Icon
          icon="ph:sun"
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Icon
          icon="ph:moon"
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
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
