<script lang="ts">
  import Icon from "@iconify/svelte";
  import { sineInOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { deleteSentence, typeSentence } from "./Helper";

  let messageBox: HTMLDivElement;
  let nameCursor = false;
  let getting_response = false;
  let messages: any[] = [];
  let gpt_response: string = "";
  let name = "";
  let responseCursor = false;
  let sent_name = false;
  let you: HTMLElement;
  let responseBox: HTMLElement;
  async function send_name() {
    sent_name = true;
  }
  async function submit_name() {
    await send_name();
    change_name();
    chatgpt_names();
  }
  async function get_response() {
    getting_response = true;
  }

  async function change_name() {
    nameCursor = true;
    await deleteSentence(you, 20);
    await typeSentence(name, you, 200);
    nameCursor = false;
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
    await get_response();
    gpt_response =
      "Sorry, I'm having trouble connecting to the server. Please try again later.";
    if (response.status == 200) {
      const name_response = await response.text();
      console.log(name_response);
      if (name_response == "") {
        gpt_response = `Well hey there ${name}! Nice to meet you...`;
      } else {
        gpt_response = name_response;
      }
    }
    responseCursor = true;
    await deleteSentence(responseBox, 10);
    await typeSentence(gpt_response, responseBox, 50);
    responseCursor = false;
    return;
  }
</script>

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
        class="flex flex-col w-full leading-1.5 p-4 z-20 border-gray-200 bg-transparent rounded-e-xl rounded-es-xl"
      >
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
          <span
            class="text-base font-semibold text-secondary-foreground dark:text-white"
            >Jesse</span
          >
        </div>
        <p
          class="text-base md:text-lg font-normal py-2.5 text-gray-900 dark:text-white"
        >
          Alright... lets start with something simple. What's your name?
        </p>
      </div>
    </div>
    {#if sent_name}
      <div
        class="flex items-stretch gap-2.5 max-w-[350px] mb-4 w-[350px] transition-height"
      >
        <div
          class="flex flex-col w-full leading-1.5 p-4 z-20 border-gray-200 rounded-e-xl rounded-es-xla"
        >
          <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <span class="text-base font-semibold text-gray-900 dark:text-white"
              >You</span
            >
          </div>

          <div class="min-h-[37.33px]">
            <span
              class="text-base md:text-lg font-normal py-2.5 text-gray-900 dark:text-white text-balance break-words"
              bind:this={you}
            ></span>
            <span
              id="nameCursor"
              class={nameCursor
                ? "input-cursor h-[25px] mt-[10px] ml-[2px]"
                : ""}
            ></span>
          </div>
        </div>
      </div>
    {/if}
    {#if getting_response}
      <div
        class="flex items-stretch gap-2.5 max-w-[350px] mb-4 w-[350px] transition-height"
      >
        <div
          class="flex flex-col w-full leading-1.5 p-4 z-20 border-gray-200 rounded-e-xl rounded-es-xl"
        >
          <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <span class="text-base font-semibold text-gray-900 dark:text-white"
              >Jesse</span
            >
          </div>

          <div class="min-h-[37.33px]">
            <span
              class="text-base md:text-lg font-normal py-2.5 text-gray-900 dark:text-white text-balance break-words"
              bind:this={responseBox}
            ></span>
            <span
              id="responseCursor"
              class={responseCursor
                ? "input-cursor h-[25px] mt-[10px] ml-[2px]"
                : ""}
            ></span>
          </div>
        </div>
      </div>
    {/if}
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
    class="w-[88%] z-20 text-base bg-gray-50 border md:text-lg border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Your name here..."
    maxlength="50"
    bind:value={name}
    on:mousedown={(e) => {}}
  />
  <button
    type="button"
    on:click={submit_name}
    class="text-white w-[50px] h-[50px] md:w-[50px] md:h-[50px] bg-primary hover:bg-primary-dark active:bg-primary-dark focus:outline-none font-medium rounded-lg text-base p-2.5 text-center inline-flex items-center"
  >
    <Icon icon="mdi:arrow-right" width="100%"></Icon>
    <span class="sr-only">Send</span>
  </button>
</div>

<style>
  .transition-height {
    animation-duration: 2s;
    animation-name: height;
    overflow: hidden;
    animation-timing-function: linear;
  }
  @keyframes height {
    from {
      max-height: 0px;
      opacity: 0%;
    }
    to {
      max-height: 600px;
      opacity: 100%;
    }
  }
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
</style>
