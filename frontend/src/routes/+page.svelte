<script lang="ts">
    import Thread from '$lib/thread.svelte';
    import type {PageData} from "./$types"
    export let data: PageData;
</script>




<div class="bg-gray-50">
<p class="font-sans text-lg text-zinc-900 mt-5 text-center"> Here is the collection of cases that we've been dealing with over the years.</p>
<p class="font-sans text-lg text-zinc-900 mt-1 text-center"> Feel free to look at them and follow the ones you care about.</p>
<p class="font-sans text-lg text-zinc-900 mt-1 text-center"> Only cases concerning groups of students are published</p>
</div>


<div class="grid grid-cols-[5rem_1fr]">
    <div/>
    {#each data.content as { thread_name, thread_id, thread_content }, i}
        <Thread thread_name={thread_name} thread_id={thread_id} thread_content={thread_content} />
    {:else}
		<p>loading...</p>
	{/each}
</div>
