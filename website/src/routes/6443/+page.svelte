<script>
  const weeks = [
    { name: "Week 1", content: "Reconnaisance", img: "Recon.webp", week: "1" },
    { name: "Week 2", content: "Auth(N/Z)", img: "Auth.webp", week: "2" },
    { name: "Week 3", content: "Identity", img: "Identity.webp", week: "3" },
    { name: "Week 4", content: "SQLI (Squilly)", img: "SQLI.webp", week: "4" },
    {
      name: "Week 5",
      content: "LFI SSRF SSTI & More",
      img: "SSRFetc.webp",
      week: "5",
    },
    {
      name: "Week 7",
      content: "Cross Site Scripting",
      img: "SSRFetc.webp",
      week: "7",
    },
  ];
  const resources = [
    { name: "Recon Tools", path: "recon", img: "ReconTools.webp" },
  ];
  import * as Carousel from "$lib/components/ui/carousel/";
  import * as Card from "$lib/components/ui/card";
</script>

<div class="flex flex-col w-[95vw] p-10 h-full">
  <div>
    <h1
      class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl p-4"
    >
      Slides
    </h1>
    <Carousel.Root>
      <Carousel.Content>
        {#each weeks as week}
          <a href="/6443/week{week.week}">
            <Carousel.Item>
              <Card.Root class="h-[22rem] w-[18rem] ">
                <Card.Header class="bg-primary">
                  <Card.Title>{week.name}</Card.Title>
                  <Card.Description class="text-primary-foreground"
                    >{week.content}</Card.Description
                  >
                </Card.Header>
                <Card.Content class="mt-3">
                  <img src="/imgs/{week.img}" alt="images" />
                </Card.Content>
              </Card.Root>
            </Carousel.Item>
          </a>
        {/each}
      </Carousel.Content>
      <Carousel.Previous />
      <Carousel.Next />
    </Carousel.Root>
  </div>
  <div>
    <h1
      class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl p-4"
    >
      Resources
    </h1>
    <Carousel.Root>
      <Carousel.Content class="w-full max-w-[25rem]">
        {#each resources as resource, index}
          <a href="/6443/resources/{resource.path}">
            <Carousel.Item>
              <Card.Root class="h-[22rem] w-[18rem]">
                <Card.Header class="bg-primary">
                  <Card.Title>{resource.name}</Card.Title>
                </Card.Header>
                <Card.Content class="p-5">
                  <img src="/imgs/{resource.img}" alt="images" />
                </Card.Content>
              </Card.Root>
            </Carousel.Item>
          </a>
        {/each}
      </Carousel.Content>
      <Carousel.Previous />
      <Carousel.Next />
    </Carousel.Root>
  </div>
</div>
