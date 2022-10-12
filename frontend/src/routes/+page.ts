import { error } from '@sveltejs/kit';
import type {API} from "$lib/api_interface.js"; 
 
export async function load(): Promise<API> {
    try {
        const response = await fetch(import.meta.env.VITE_API_BASE_URL + "/threads", {mode: 'cors'});
        const data: API = await response.json();
        return data
    } catch (e) {
        console.log(e);
        throw error(500, "Everything went wrong");
    }
}