<script lang="ts">
    import type {API, Tread, Message} from "$lib/api_interface.js"; 
    import Thread from '$lib/thread.svelte';
    
    export let data: Tread;
</script>

<div class="grid grid-cols-[5rem_1fr]">
    <div/>
    <Thread thread_name={data.thread_name} thread_content={data.thread_content} />
</div>