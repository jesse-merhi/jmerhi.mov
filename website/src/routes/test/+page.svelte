<script lang="ts">
  import { onMount, afterUpdate } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { sineInOut } from "svelte/easing";
  import Icon from "@iconify/svelte";
  import "./app.scss";
  // JavaScript logic for creating the circle containers
  let containers: any[] = [];
  for (let i = 1; i <= 100; i++) {
    containers.push(i);
  }
  let name_error = false;
  let mounted = false;
  let name = "";
  let part1 = false;
  let gpt_response: string = "";
  let part2 = true;
  let part2_1 = false;
  let messageBox: HTMLDivElement;
  let message_clicked = false;
  let on1: boolean[] = [true, false, false, false];
  const lineCount = 10;
  const minCharCount = 20;
  const maxCharCount = 40;
  let messages: any[] = [];
  const topPos = ((maxCharCount - 1) / 2) * 10;
  $: if (!part2_1 && part2 && mounted) {
    waitForMs(2500)
      .then(() => (on1[3] = true))
      .then(() => waitForMs(1000))
      .then(() => carousel("Message Recieved.", "line4"))
      .then(() => (on1[3] = false));
  }
  async function chatgpt_names() {
    const response = await fetch("/api/gpt/name", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
      }),
    });
    messages = [
      ...messages,
      {
        role: "user",
        content: name,
      },
    ];
    if (response.status != 200) {
      messages = [
        ...messages,
        {
          role: "system",
          content:
            "Sorry, I'm having trouble connecting to the server. Please try again later.",
        },
      ];
      gpt_response =
        "Sorry, I'm having trouble connecting to the server. Please try again later.";
      return;
    }
    const name_response = await response.text();
    console.log(name_response);
    if (name_response == "") {
      gpt_response = `Well hey there ${name}! Nice to meet you...`;
      messages = [
        ...messages,
        {
          role: "system",
          content: `Well hey there ${name}! Nice to meet you...`,
        },
      ];
    } else {
      messages = [
        ...messages,
        {
          role: "system",
          content: name_response,
        },
      ];
    }
  }

  $: {
    if (messages) {
      setTimeout(() => scrollToBottom(messageBox), 2000);
    }
  }
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

  function change_message() {
    part2_1 = true;
  }
  onMount(() => {
    setTimeout(() => scrollToBottom(messageBox), 2000);
  });
  onMount(async () => {
    mounted = true;

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
    } else if (part2 && lines.length == 0) {
      for (let i = 0; i < lineCount; i++) {
        generateLine(i);
      }
    }
  });

  $: if (part2 && lines.length == 0) {
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
      if (typeof document != undefined) {
        document.getElementById(eleRef)!.innerHTML += letters[i];
        await waitForMs(delay);
        i++;
      }
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
        styles: {},
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

  const scrollToBottom = async (node: any) => {
    node.scroll({ top: node.scrollHeight, behavior: "smooth" });
    console.log("SCROLLED");
  };
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
      <div class="h-[2rem] sm:h-[2.25rem] w-[80dvw]">
        <span id="line1"></span>
        <span id="cursor1" class={on1[0] ? "input-cursor h-[35px]" : ""}></span>
      </div>
      <div class="h-[2rem] sm:h-[2.25rem] w-[80dvw]">
        <span id="line2"></span>
        <span id="cursor2" class={on1[1] ? "input-cursor h-[35px]" : ""}></span>
      </div>
      <div class="h-[2rem] sm:h-[2.25rem] w-[80dvw]">
        <span id="line3"></span>
        <span id="cursor3" class={on1[2] ? "input-cursor h-[35px]" : ""}></span>
      </div>
    </div>
  </div>
{/if}
{#if part2}
  <div
    in:fade={{ easing: sineInOut, delay: 2000 }}
    class="text-2xl sm:text-3xl text-white absolute z-10 w-[100vw] h-full flex items-center justify-center flex-col"
  >
    {#if !part2_1}
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
          <span id="line4"></span>
          <span id="cursor4" class={on1[3] ? "input-cursor h-[35px]" : ""}
          ></span>
        </div>
      </div>
    {:else}
      <div
        bind:this={messageBox}
        class={`max-h-[70vh] w-[100vw]  ${messages.length > 0 ? "overflow-y-auto" : ""} `}
      >
        <div class="flex flex-col items-center justify-center scrollbar-shift">
          <div
            class="flex items-stretch gap-2.5 max-w-[350px] mb-4"
            in:fly={{
              delay: 1000,
              duration: 1000,
              easing: sineInOut,
              y: "50vh",
            }}
          >
            <div
              class="flex flex-col w-full leading-1.5 p-4 z-20 border-gray-200 bg-gray rounded-e-xl rounded-es-xl dark:bg-gray-700"
            >
              <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <span
                  class="text-sm font-semibold text-gray-900 dark:text-white"
                  >Jesse</span
                >
                <span
                  class="text-sm font-normal text-gray-500 dark:text-gray-400"
                  >now</span
                >
              </div>
              <p
                class="text-sm md:text-lg font-normal py-2.5 text-gray-900 dark:text-white"
              >
                Alright... lets start with something simple. What's your name?
              </p>
            </div>
          </div>
          {#each messages as message}
            <div
              class="flex items-stretch gap-2.5 max-w-[350px] mb-4 transition-height w-[350px]"
            >
              <div
                class="flex flex-col w-full leading-1.5 p-4 z-20 border-gray-200 bg-gray rounded-e-xl rounded-es-xl dark:bg-gray-700"
              >
                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                  <span
                    class="text-sm font-semibold text-gray-900 dark:text-white"
                    >{#if message.role == "system"}Jesse{:else}You{/if}</span
                  >
                </div>

                <p
                  class="text-sm md:text-lg font-normal py-2.5 text-gray-900 dark:text-white text-balance break-words"
                >
                  {message.content}
                </p>
              </div>
            </div>
          {/each}
        </div>
      </div>
      <div
        class="w-[350px] flex flex-row"
        in:fly={{
          delay: 3000,
          duration: 1000,
          easing: sineInOut,
          y: "50vh",
        }}
      >
        <input
          id="their-name"
          aria-describedby="helper-text-explanation"
          class="w-[88%] z-20 bg-gray-50 border md:text-lg border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your name here..."
          bind:value={name}
          on:mousedown={(e) => {}}
        />
        <button
          type="button"
          on:click={chatgpt_names}
          class="text-white w-[42px] h-[42px] md:w-[50px] md:h-[50px] bg-primary hover:bg-primary-dark active:bg-primary-dark focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center"
        >
          <Icon icon="mdi:arrow-right" width="100%"></Icon>
          <span class="sr-only">Icon description</span>
        </button>
      </div>
    {/if}
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
        <div class="lines select-none">{line.content}</div>
      </div>
    {/each}
  {/if}
</div>

<style>
  .scrollbar-shift {
    padding-left: calc(100vw - 100%);
  }
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: rgb(55, 65, 81);
  }
  .transition-height {
    animation-duration: 2s;
    animation-name: height;
    overflow: hidden;
    animation-timing-function: ease-in-out;
  }
  @keyframes height {
    from {
      max-height: 0;
      opacity: 0%;
    }
    to {
      max-height: 600px;
      opacity: 100%;
    }
  }
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
