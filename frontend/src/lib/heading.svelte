<script lang="ts">
	export let avatar_path="/avatar.jpg";
    export let name="Name Surname";
    export let date="10.12.2002";
    export let document_link="#";
    export let text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed eget aliquam urna. In hac habitasse platea dictumst. \
        Etiam egestas vehicula commodo. Etiam auctor finibus felis in iaculis.";
</script>

<div class="inline-grid grid-cols-[5rem_1fr_1fr] grid-flow-row">
    <div>
        <img class= "rounded-full h-15 w-15 m-2" src={avatar_path} alt="Avatar">
    </div>
    <div class="grid-flow-col self-center ml-4">
        <p class="text-lg font-sans font-bold text-zinc-900 ">{name}</p>
        <p class="text-sm font-sans font-bold text-zinc-300 ">{date}</p>
    </div>
    <div/>
    <div/>
    
    <p class="text-base font-sans font-medium text-zinc-900 ml-4">
        {text}
    </p>
    <div class="flex flex-row">
        <img class= "h-10 w-10 ml-20 mb-8" src="/src/assets/doc_icon.png" alt="Link to document">
        <a class="text-sm font-sans font-medium text-zinc-600" href={document_link}> Original Document</a>
    </div>
</div>
