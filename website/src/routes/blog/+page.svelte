<script>
  import { onMount } from "svelte";
  import BlogComponent from "./BlogComponent.svelte";
  let blogContent = "";
  let blogConfig = {};

  onMount(async () => {
    let response = await fetch("/blog_assets/llms_are_secure_for_now/blog.md");
    if (response.ok) {
      blogContent = await response.text();
    } else {
      blogContent = "Blog Not Found :(";
    }
    response = await fetch("/blog_assets/llms_are_secure_for_now/config.json");
    console.log(response);
    blogConfig = await response.json();
  });
</script>

<BlogComponent {blogContent} {blogConfig} />
