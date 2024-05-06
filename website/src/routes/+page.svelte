<script>
  // @ts-nocheck

  import Icon from "@iconify/svelte";
  import { fade } from "svelte/transition";
  let scrollHeight = 0;
  let innerHeight = 0;
  let scrollable = null;
</script>

<svelte:window bind:innerHeight />
<div
  class="w-[100%] h-[100%] overflow-y-auto"
  bind:this={scrollable}
  on:scroll={(e) => (scrollHeight = e.target.scrollTop)}
>
  <div class="flex sm:flex-row flex-col w-[100%] h-[93%] sm:pl-5 z-0 relative">
    <div
      class="sm:w-[50%] h-[30%] sm:h-full flex flex-col justify-center items-center relative z-10"
    >
      <div class="flex sm:flex-col flex-row text-left">
        <h1 class="text-4xl sm:text-4xl md:text-6xl lg:text-7xl">
          Hey 👋&nbsp;
        </h1>
        <h1 class="text-4xl sm:text-4xl md:text-6xl lg:text-7xl">I'm Jesse!</h1>
      </div>
      <h2 class="text-2xl sm:text-xl md:text-2xl lg:text-4xl">
        Welcome to my site.
      </h2>
    </div>

    <div
      class="sm:w-[50%] sm:h-full h-[70%] flex flex-col justify-center items-center relative z-0"
    >
      <img
        src="/imgs/me.png"
        class="h-full w-full object-cover overflow-visible"
        alt="headshot"
      />
    </div>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="h-[7%] w-full flex justify-center items-center bg-primary relative z-10"
  >
    {#if scrollHeight < innerHeight / 5}
      <div
        transition:fade={{ duration: 200 }}
        on:click={(e) =>
          scrollable.scrollTo({
            top:
              e.target.getBoundingClientRect().top -
              scrollable.getBoundingClientRect().top,
            behavior: "smooth",
          })}
      >
        <Icon
          icon="lucide:circle-arrow-down"
          class="text-primary-foreground text-3xl"
        />
      </div>
    {/if}
  </div>
  <div class=" flex justify-center bg-primary w-full relative z-10 pb-10">
    <div
      class="w-full flex justify-center items-center text-primary-foreground text-center text-5xl"
    >
      My website is still under 🚧 construction 🚧 <br />
      Come back a bit later 😉
    </div>
  </div>
</div>
