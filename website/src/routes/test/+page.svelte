<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { sineInOut } from "svelte/easing";
  import "./app.scss";
  import { waitForMs, typeSentence, random } from "./Helper";
  import Imjesse from "./ImJesse.svelte";
  import { page } from "$app/stores";
  import MessageRecieved from "./MessageRecieved.svelte";
  import WhatIsYourName from "./WhatIsYourName.svelte";
  import { ModeWatcher, setMode } from "mode-watcher";
  // JavaScript logic for creating the circle containers
  let containers: any[] = [];
  for (let i = 1; i <= 100; i++) {
    containers.push(i);
  }

  let part = "1";

  const lineCount = 10;
  const minCharCount = 20;
  const maxCharCount = 40;

  const topPos = ((maxCharCount - 1) / 2) * 10;

  let lines: any[] = [];
  onMount(async () => {
    setMode("dark");
    if (part == "2" && lines.length == 0) {
      for (let i = 0; i < lineCount; i++) {
        generateLine(i);
      }
    }
  });
  $: if (part == "2" && lines.length == 0) {
    for (let i = 0; i < lineCount; i++) {
      generateLine(i);
    }
  }

  function getContent(length: number) {
    let result = "";
    const characters = "01";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function generateLine(index: number) {
    const charCount = random(minCharCount, maxCharCount);
    const tick = random(300, 500);
    const content = getContent(charCount);
    lines = [
      ...lines,
      {
        id: index,
        styles: {},
        content: content,
      },
    ];
    setTimeout(() => animate(index, charCount), tick + index * 100);
  }

  function animate(index: number, charCount: number) {
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

  function next_part() {
    part = String(parseInt(part) + 1);
  }
</script>

<ModeWatcher />
{#if part == "1"}
  <Imjesse {next_part} />
{:else}
  <div
    in:fade={{ easing: sineInOut, delay: 2000 }}
    class="text-2xl sm:text-3xl text-white absolute z-10 w-[100vw] h-full flex items-center justify-center flex-col"
  >
    {#if part == "2"}
      <MessageRecieved change_message={next_part} />
    {:else}
      <WhatIsYourName />
    {/if}
  </div>
{/if}
<div class="background-container z-0" id="background-container">
  {#if part == "1"}
    {#each containers as i}
      <div class="circle-container" out:fade={{ easing: sineInOut }}>
        <div class="circle"></div>
      </div>
    {/each}
  {/if}
  {#if part == "2"}
    {#each lines as line}
      <div class="lines-container">
        <div class="lines select-none">{line.content}</div>
      </div>
    {/each}
  {/if}
</div>
