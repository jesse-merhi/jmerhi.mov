<script lang="ts">
  import { onMount } from "svelte";
  import "./app.scss";
  // JavaScript logic for creating the circle containers
  let containers: any[] = [];
  for (let i = 1; i <= 100; i++) {
    containers.push(i);
  }
  let on1 = [false, false, false];
  onMount(async () => {
    await waitForMs(1500);
    on1[0] = true;
    await carousel("Hey I'm Jesse!", "line1");
    await waitForMs(1500);
    on1[0] = false;
    on1[1] = true;
    await carousel("Lets have a chat...", "line2");
    await waitForMs(1500);
    on1[1] = false;
    on1[2] = true;

    await carousel("Press anywhere on the screen to start", "line3");
    await waitForMs(1500);
    on1[2] = false;
  });

  async function carousel(carouselList: string, eleRef: string) {
    await typeSentence(carouselList, eleRef);
  }
  async function typeSentence(sentence: string, eleRef: string, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
      document.getElementById(eleRef)!.innerHTML += letters[i];
      await waitForMs(delay);
      i++;
    }
    return;
  }

  function waitForMs(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
</script>

<div
  class="text-4xl text-white absolute z-10 w-full h-full flex items-center justify-center"
>
  <div class="flex items-center justify-center flex-col">
    <div>
      <span id="line1"></span>
      <span id="cursor1" class={on1[0] ? "input-cursor" : ""}></span>
    </div>
    <div>
      <span id="line2"></span>
      <span id="cursor2" class={on1[1] ? "input-cursor" : ""}></span>
    </div>
    <div>
      <span id="line3"></span>
      <span id="cursor3" class={on1[2] ? "input-cursor" : ""}></span>
    </div>
  </div>
</div>

<div class="container z-0">
  {#each containers as i}
    <div class="circle-container">
      <div class="circle"></div>
    </div>
  {/each}
</div>

<style>
  .input-cursor {
    position: absolute;
    display: inline-block;
    width: 2px;
    height: 42px;
    background-color: white;
    margin-left: 8px;
    animation: blink 0.4s linear infinite alternate;
  }
  @keyframes blink {
    0% {
      opacity: 1;
    }
    40% {
      opacity: 1;
    }
    60% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
</style>
