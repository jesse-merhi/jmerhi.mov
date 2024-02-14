
<script>
  import "../app.css";
</script>
    <div class="w-screen h-screen">
      <nav class="bg-primary w-screen h-[7vh] flex items-center pl-10 pr-10">
        <a
          class="text-foreground hover:bg-primary-light transition ease-in-out duration-300 h-full items-center flex pl-8 pr-8"
          href={"/"}
        >
          Home
        </a>
        <a
          class="text-foreground hover:bg-primary-light transition ease-in-out duration-300 h-full items-center flex pl-8 pr-8"
          href={"/6443/"}
        >
          6443
        </a>
      </nav>
      <div class="bg-background w-screen h-[93vh] flex justify-center items-center">
        <slot></slot>
      </div>
    </div>
  

