<script lang="ts">
  import { onMount, afterUpdate } from "svelte";
  import { sineInOut } from "svelte/easing";
  import { fade } from "svelte/transition";
  import { waitForMs, typeSentence } from "./Helper";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  let cursors: boolean[] = [true, false, false];
  export let next_part: any;
  let line1: HTMLElement;
  let line2: HTMLElement;
  let line3: HTMLElement;

  function transition1() {
    next_part();
  }
  onMount(async () => {
    await waitForMs(1500);
    await typeSentence("Hey I'm Jesse!", line1);
    await waitForMs(1000);
    cursors[0] = false;
    cursors[1] = true;
    await waitForMs(200);
    await typeSentence("Lets have a chat...", line2);
    await waitForMs(1000);
    cursors[1] = false;
    cursors[2] = true;
    await waitForMs(200);
    await typeSentence("Press anywhere to start.", line3);
    await waitForMs(1000);
    cursors[2] = false;
  });
</script>

<div
  class="text-2xl sm:text-3xl text-white absolute z-10 w-full h-full flex items-center justify-center"
  on:click={transition1}
  role="link"
  tabindex="0"
  on:keypress={transition1}
  out:fade={{ easing: sineInOut }}
>
  <div class="flex items-center justify-center flex-col text-center">
    <div class="h-[2rem] sm:h-[2.25rem] w-[80dvw]">
      <span bind:this={line1}></span>
      <span id="cursor1" class={cursors[0] ? "input-cursor h-[35px]" : ""}
      ></span>
    </div>
    <div class="h-[2rem] sm:h-[2.25rem] w-[80dvw]">
      <span bind:this={line2}></span>
      <span id="cursor2" class={cursors[1] ? "input-cursor h-[35px]" : ""}
      ></span>
    </div>
    <div class="h-[2rem] sm:h-[2.25rem] w-[80dvw]">
      <span bind:this={line3}></span>
      <span id="cursor3" class={cursors[2] ? "input-cursor h-[35px]" : ""}
      ></span>
    </div>
  </div>
</div>
