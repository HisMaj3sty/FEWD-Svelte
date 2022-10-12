<script lang="ts">
    import TailwindCss from './src/lib/TailwindCSS.svelte';
    import Thread from './src/lib/thread.svelte';
    import Footer from './src/lib/footer.svelte';
    import { onMount } from "svelte";
    import type {API, Tread, Message} from "./src/lib/api_interface.js"; 

    let api : API;
    let clean_threads = [] as Array<Tread>
    onMount(async () => {
    fetch("http://127.0.0.1:5000/threads?thread_id=-1", {mode: 'cors'})
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data
    })
    .then(data => {
        api = data
        console.log(api);
        api.content.forEach( thread => {
        let clean_thread = {} as Tread
        
        clean_thread.thread_name = thread.thread_name
        clean_thread.thread_id = thread.thread_id
        clean_thread.thread_content = thread.thread_content.map(
            threa => ({
            level:threa.level, 
            avatar_path:threa.avatar_path, 
            author_name:threa.author_name, 
            date:threa.date, 
            document_id:threa.document_id, 
            text:threa.text
            })) as Array<Message>;
        clean_threads.push(clean_thread)
        })
        clean_threads = clean_threads
        return 1
    })
    .catch(error => {
        console.log(error);
        return {};
    });
    });
    console.log(clean_threads)
</script>


<TailwindCss />



<div class="bg-gray-50">
<div class="ml-0 ml-20 ml-40 ml-60 ml-80 ml-100"/>
<Footer/>
<p class="font-sans text-lg text-zinc-900 mt-5 text-center"> Here is the collection of cases that we've been dealing with over the years.</p>
<p class="font-sans text-lg text-zinc-900 mt-1 text-center"> Feel free to look at them and follow the ones you care about.</p>
<p class="font-sans text-lg text-zinc-900 mt-1 text-center"> Only cases concerning groups of students are published</p>
</div>


<div class="grid grid-cols-[5rem_1fr]">
    <div/>
    {#each clean_threads as { thread_name, thread_id, thread_content }, i}
        <Thread thread_name={thread_name} thread_content={thread_content} />
    {:else}
		<!-- this block renders when photos.length === 0 -->
		<p>loading...</p>
	{/each}
</div>
