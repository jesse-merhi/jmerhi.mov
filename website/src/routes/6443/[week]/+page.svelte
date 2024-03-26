<script lang="ts">
  import Layout from "../../+layout.svelte";

  import { page } from "$app/stores";
  let week = $page.params.week;
  let regex = /^week\d\d?$/g;
  let week_number: number;
  if (week.match(regex) == null) {
    week_number = -1;
  } else {
    week_number = parseInt(week.replace("week", ""));
    if (week_number <= 0 || week_number >= 10) {
      week_number = -1;
    }
  }
</script>

{#if week_number == undefined || week_number == -1}
  <h1>Week not found</h1>
{:else if week}
  <iframe
    title="6443"
    src={"/6443/" + week + "/index.html"}
    class="w-full h-full"
  ></iframe>
{/if}
