<script>
    import Layout from "../../__layout.svelte";

    import { page } from '$app/stores';
    let week = $page.params.week;
</script>
<Layout>
{#if week == undefined}
    <h1>Week not found</h1>
{:else}
    <iframe
    title="6443"
        src={'/6443/'+week+'/index.html'}
        class="w-full h-full"
    ></iframe>
{/if}
</Layout>


