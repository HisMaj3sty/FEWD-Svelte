import { error } from '@sveltejs/kit';
import type { PageLoad }  from "./$types";
import type {API, Tread, Message} from "$lib/api_interface.js"; 
 
export async function load({ params }: Parameters<PageLoad>[0]): Promise<Tread> {
    try {
        const response = await fetch(import.meta.env.VITE_API_BASE_URL + "/thread/"+params.thread_id, {mode: 'cors'});
        return await response.json();
    } catch (e) {
        console.log(e);
        throw error(500, "Everything went wrong");
    }
}