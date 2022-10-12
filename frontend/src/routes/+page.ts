import { error } from '@sveltejs/kit';
import type { PageLoad }  from "./$types";
import type {API, Tread, Message} from "$lib/api_interface.js"; 
 
export async function load(): Promise<API> {
    try {
        const response = await fetch("http://127.0.0.1:5000/threads", {mode: 'cors'});
        const data: API = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }

 
  throw error(404, 'Not found');
}