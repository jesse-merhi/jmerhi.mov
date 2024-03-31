<script lang="ts">
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import { sineInOut } from "svelte/easing";
  import { fade } from "svelte/transition";
  import { typeSentence, waitForMs } from "./Helper";

  export let change_message: any;
  let line4: HTMLElement;
  let cursor = false;

  onMount(() => {
    waitForMs(2500)
      .then(() => (cursor = true))
      .then(() => waitForMs(1000))
      .then(() => typeSentence("Message Recieved.", line4))
      .then(() => (cursor = false));
  });
</script>

<div
  class="text-white absolute flex items-center justify-center flex-col"
  on:click={change_message}
  on:keypress={change_message}
  in:fade={{ easing: sineInOut, delay: 2000 }}
  out:fade={{ easing: sineInOut }}
>
  <div
    class=" cursor-pointer w-[100px] active:w-[90px] hover:w-[110px] transition-all text-neutral-100 hover:text-white"
  >
    <Icon icon="mdi:message-badge" width="100%"></Icon>
  </div>
  <div class="h-[2rem] sm:h-[2.25rem]">
    <span bind:this={line4}></span>
    <span id="cursor4" class={cursor ? "input-cursor h-[35px]" : ""}></span>
  </div>
</div>
