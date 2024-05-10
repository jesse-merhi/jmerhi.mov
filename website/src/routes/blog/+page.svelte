<script>
  import * as Card from "$lib/components/ui/card";
  const blogs = [
    {
      path: "llms_are_secure_for_now",
      title: "LLMs are Secure... For now.",
      author: "Jesse Merhi",
      blurb: "This is a bunch of text",
      published: "10th May, 2024",
    },
  ];
</script>

<div class="h-[100%] w-[80%] pt-10">
  {#each blogs as blog}
    <div class="h-[22rem] w-[28rem] border-2 border-border">
      <a href={`/blog/${blog.path}`}>
        <div class="w-full h-[60%] overflow-hidden">
          <img src="/imgs/Auth.webp" alt="images" />
        </div>
        <div class="flex flex-col h-[40%] justify-center p-5">
          <div class="text-foreground font-extrabold text-xl">
            {blog.title}
          </div>
          <div class="text-muted-foreground font-light font-bold text-xs p-y-2">
            {blog.author} | {blog.published}
          </div>
          <div class="text-sm text-ellipsis overflow-hidden">
            AI and LLMs are the two biggest buzzwords right now and for the most
            part they are relatively secure. But how does that translate into
            the future? Should we be worried about the future of AI?
          </div>
        </div>
      </a>
    </div>
  {/each}
</div>
