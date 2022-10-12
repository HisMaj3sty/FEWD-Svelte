import { error } from '@sveltejs/kit';
import type { PageLoad }  from "./$types";
import type {API, Tread, Message} from "$lib/api_interface.js"; 
 
export async function load({ params }: Parameters<PageLoad>[0]): Promise<Tread> {
    try {
        const response = await fetch("http://127.0.0.1:5000/thread/"+params.thread_id, {mode: 'cors'});
        return await response.json();
    } catch (error) {
        console.log(error);
    }

 
  throw error(404, 'Not found');
}