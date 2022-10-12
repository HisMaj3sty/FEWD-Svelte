export interface Message {
    id: number,
    level: number,
    avatar_path: string,
    author_name: string,
    date: string,
    document_id: number,
    text: string
  }
export interface Tread {
    thread_id: number,
    thread_name: string,
    thread_content: Array<Message>
  }
export interface API {
  content: Array<Tread>
}

export const BASE_URL = ""

