<script lang="ts">
  import type { assets } from '$app/paths';
    import Heading from '../lib/heading.svelte'
    import type {Message} from "./api_interface.js"; 

    export let thread_name = "How ipsum mocked lorem"
    export let thread_id = 0
    export let thread_content : Array<Message>

    let email = ""
    let error = false
    let errorMessage = ""
    let success = false
    async function handleSubmit() {
        let exception_caught = false
        if (!is_valid_email(email)){
            success=false
            error=true
            errorMessage="The email is invalid"
            return
        }
        const rawResponse = await fetch('http://127.0.0.1:5000/thread/subscribe?'+ new URLSearchParams({
            "thread_id":thread_id.toString()
        }), {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({"email":email})
        });
        try {
            const content = await rawResponse.json();
        } catch(e) {
            exception_caught = true
            success=false
            error=true
            errorMessage="The request was not successfull"
        }
        if (!exception_caught) {
            success=true
            error=false
        }
        
        
    }

    function is_valid_email(email_to_validate: string){
        return email_to_validate.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    }

    import pic_319 from "../assets/319_avatar.jpg"
    import pic_su from "../assets/su_avatar.jpg"
  import { get } from 'svelte/store';

    const string_to_pic = new Map([["su_avatar.jpg",pic_su], ["319_avatar.jpg",pic_319]])

</script>

<div>
    <a class="text-2xl font-sans font-bold text-zinc-900 underline mt-4 ml-4" href={"/thread/"+thread_id}>{thread_name}</a>
    {#each thread_content as {level, avatar_path, author_name, date, document_id, text}}
        <div class="ml-{level*20}">
            <Heading avatar_path={string_to_pic.get(avatar_path)} name={author_name} date={date} document_link={"#"} text={text}/>
        </div>
    {/each}
    <div class="ml-4">
        <p class="text-base font-sans font-bold text-zinc-900 mt-4 ">Subscribe to the thread</p>
        <form on:submit|preventDefault={handleSubmit} class="text-base font-sans text-zinc-900">
            <label for="fname">Email:</label>
            <input type="text" bind:value={email} class="border border-slate-900">
            <input type="submit" value="Subscribe" class="border rounded-md border-slate-900 p-1 shadow-md shadow-black bg-slate-300  hover:bg-slate-200">
        </form>
        <div class="text-xl font-sans font-bold mt-4">
            {#if error}
                <p class=" text-rose-600">{errorMessage}<p>
            {/if}
            {#if success}
                <p class=" text-green-700">Subscribed!<p>
            {/if}
        </div>
    </div>
</div>
