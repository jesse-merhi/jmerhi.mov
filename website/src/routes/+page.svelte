<script>
  import Layout from "./+layout.svelte";
  import { mode } from "mode-watcher";
</script>

<div class="text-8xl">
  <img
    src={$mode == "dark" ? "imgs/dark_mode.svg" : "imgs/light_mode.svg"}
    class="w-[40rem]"
    alt="logo"
  />
</div>
