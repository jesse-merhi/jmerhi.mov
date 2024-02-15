<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { sineInOut } from "svelte/easing";
  import "./app.scss";
  // JavaScript logic for creating the circle containers
  let containers: any[] = [];
  for (let i = 1; i <= 100; i++) {
    containers.push(i);
  }
  let mounted;
  let part1 = true;
  let part2 = false;
  // Part 4 is code like randomises until it says Jesse Merhi in python or something... IT WOULD BE COOL IF IT LOOKED LIKE IT base64 decoded my name or something :eyes:

  let on1: boolean[] = [true, false, false];
  const lineCount = 10;
  const minCharCount = 20;
  const maxCharCount = 40;
  const topPos = ((maxCharCount - 1) / 2) * 10;
  let lines: any[] = [];
  function transition1() {
    if (
      part1 == true &&
      on1.every((e) => {
        console.log(e);
        console.log(e == false);
        return e == false;
      })
    ) {
      part1 = false;
      part2 = true;
    }
  }
  onMount(async () => {
    if (part1) {
      await waitForMs(1500);
      await carousel("Hey I'm Jesse!", "line1");
      await waitForMs(1000);
      on1[0] = false;
      on1[1] = true;
      await waitForMs(200);
      await carousel("Lets have a chat...", "line2");
      await waitForMs(1000);
      on1[1] = false;
      on1[2] = true;
      await waitForMs(200);
      await carousel("Press anywhere to start.", "line3");
      await waitForMs(1000);
      on1[2] = false;
    } else if (part2) {
      for (let i = 0; i < lineCount; i++) {
        generateLine(i);
      }
    }
  });

  $: if (part2) {
    for (let i = 0; i < lineCount; i++) {
      generateLine(i);
    }
  }

  async function carousel(carouselList: string, eleRef: string) {
    await typeSentence(carouselList, eleRef);
  }
  async function typeSentence(sentence: string, eleRef: string, delay = 80) {
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
  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function getContent(length) {
    let result = "";
    const characters = "01";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function generateLine(index) {
    const charCount = random(minCharCount, maxCharCount);
    const tick = random(300, 500);
    const content = getContent(charCount);
    lines = [
      ...lines,
      {
        id: index,
        content: content,
      },
    ];
    setTimeout(() => animate(index, charCount), tick + index * 100);
  }

  function animate(index, charCount) {
    setInterval(() => {
      const content = getContent(charCount);
      const updatedLine = {
        ...lines[index],
        content: content,
      };

      lines = [
        ...lines.slice(0, index),
        updatedLine,
        ...lines.slice(index + 1),
      ];
    }, 1000);
  }
</script>

{#if part1}
  <div
    class="text-2xl sm:text-3xl text-white absolute z-10 w-full h-full flex items-center justify-center"
    on:click={transition1}
    role="link"
    tabindex="0"
    on:keypress={transition1}
    out:fade={{ easing: sineInOut }}
  >
    <div class="flex items-center justify-center flex-col text-center">
      <div class="h-[2rem] sm:h-[2.25rem] w-[80vw]">
        <span id="line1"></span>
        <span id="cursor1" class={on1[0] ? "input-cursor h-[35px]" : ""}></span>
      </div>
      <div class="h-[2rem] sm:h-[2.25rem] w-[80vw]">
        <span id="line2"></span>
        <span id="cursor2" class={on1[1] ? "input-cursor h-[35px]" : ""}></span>
      </div>
      <div class="h-[2rem] sm:h-[2.25rem] w-[80vw]">
        <span id="line3"></span>
        <span id="cursor3" class={on1[2] ? "input-cursor h-[35px]" : ""}></span>
      </div>
    </div>
  </div>
{/if}
<div
  class="background-container z-0"
  id="background-container"
  bind:this={mounted}
>
  {#if part1}
    {#each containers as i}
      <div class="circle-container" out:fade={{ easing: sineInOut }}>
        <div class="circle"></div>
      </div>
    {/each}
  {/if}
  {#if part2}
    {#each lines as line}
      <div class="lines-container">
        <div class="lines">{line.content}</div>
      </div>
    {/each}
  {/if}
</div>

<style>
  .input-cursor {
    position: absolute;
    display: inline-block;
    width: 2px;
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
