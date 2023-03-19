import { writable } from "svelte/store";
import { isClient } from "./utils";

export function APIKeyStore() {
  let initialAPIKey = null;
  if (isClient) {
    try {
      initialAPIKey = localStorage.getItem('apiKey') as string;
    } catch(e) {
      console.warn('Could not read API key from localstorage', e);
    }
  }
  const store = writable<string | null>(initialAPIKey);

  function set(apiKey: string) {
    localStorage.setItem('apiKey', apiKey);
    store.set(apiKey);
  }

  return { subscribe: store.subscribe, set };
}