<script>
  const blogs = [
    { path: "llms_are_secure_for_now", title: "LLMs are Secure... For now." },
  ];
</script>

<div>
  {#each blogs as blog}
    <a href={`/blog/${blog.path}`}>{blog.title}</a>
  {/each}
</div>
