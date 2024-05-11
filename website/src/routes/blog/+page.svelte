<script>
  import * as Card from "$lib/components/ui/card";
  const blogs = [
    {
      path: "llms_are_secure_for_now",
      title: "LLMs are Secure... For now.",
      author: "Jesse Merhi",
      blurb:
        "AI and LLMs are the two biggest buzzwords right now and for the most" +
        "part they are relatively secure. But how does that translate into" +
        "the future? Should we be worried about the future of AI?",
      published: "10th May, 2024",
    },
  ];
</script>

<div
  class="h-[100%] w-[90%] sm:w-[80%] md:w-[70%] min-[1024px]:w-[60%] pt-10 overflow-y-auto flex flex-col items-center"
>
  {#each blogs as blog}
    <div
      class=" w-full sm:w-full border-2 border-border mb-10 sm:max-h-[30%] hover:border-muted-foreground transition-all ease-in-out duration-200"
    >
      <a
        href={`/blog/${blog.path}`}
        class="w-full h-full flex flex-col sm:flex-row"
      >
        <div class="w-full h-[10rem] sm:h-full sm:w-[30%] overflow-clip">
          <img
            src="/imgs/Auth.webp"
            class="h-full w-full object-cover"
            alt="images"
          />
        </div>
        <div class="flex flex-col justify-center p-5 sm:w-[70%]">
          <div
            class="text-foreground font-extrabold text-xl min-[1150px]:text-2xl"
          >
            {blog.title}
          </div>
          <div
            class="text-muted-foreground font-bold text-xs p-y-2 min-[1150px]:text-sm"
          >
            {blog.author} | {blog.published}
          </div>
          <div
            class=" text-xs sm:text-xs md:text-sm min-[1150px]:text-lg text-ellipsis overflow-hidden"
          >
            {blog.blurb}
          </div>
        </div>
      </a>
    </div>
  {/each}
</div>
