<script>
  import Layout from "../__layout.svelte";
  let max_week = 3;
</script>

<Layout>
  <div class="flex">
    <div class="m-10">
      <h1
        class="mb-4 text-copy text-4xl font-extrabold leading-none tracking-tight"
      >
        Slides
      </h1>
      {#each Array(max_week).keys() as week}
        <ul class="list-disc">
          <li>
            <a class="underline" href="/6443/week{week + 1}">
              Week {week + 1}
            </a>
          </li>
        </ul>
      {/each}
    </div>
    <div class="m-10">
      <h1
        class="mb-4 text-copy text-4xl font-extrabold leading-none tracking-tight"
      >
        Resources
      </h1>
      <ul class="list-disc">
        <li>
          <a class="underline" href="/6443/resources/recon"> Recon Tools </a>
        </li>
      </ul>
    </div>
  </div>
</Layout>
