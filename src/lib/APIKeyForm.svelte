<script lang="ts">
	import { hotKeyAction } from 'svelte-legos';
	import { SetKeyIfPossible } from './APIKeyStore';

  export let initialValue: string | null = '';

	let key = initialValue || '';
	let disabled = false;
	let isError = false;
  let inputRef: HTMLInputElement;

	const errorMessage = 'Invalid API key. Please make sure your API key is still working properly.';

	function onGetStarted() {
		if (key.trim().length > 0) {
			disabled = true;
			SetKeyIfPossible(key)
				.then(() => {
					console.log('Key is valid');
				})
				.catch((e) => {
					isError = true;
				})
				.finally(() => {
					disabled = false;
          setTimeout(() => {
            inputRef.focus();
          }, 1);
				});
		}
	}
</script>

<div class="relative flex items-center w-full">
  <span class="absolute inset-y-0 left-0 my-2 ml-3 w-5 text-gray-400">🔑</span>
  <input
    use:hotKeyAction={{ code: 'Enter', cb: onGetStarted }}
    {disabled}
    bind:value={key}
    bind:this={inputRef}
    type="text"
    placeholder="Enter your OpenAI API key (sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx)"
    class="peer block w-full rounded-md border border-gray-200 bg-white p-2 pl-10 text-sm shadow-lg focus:border-black focus:outline-none focus:ring-0 disabled:opacity-70 disabled:pointer-events-none"
  />
</div>
{#if isError}
  <div class="mt-4 text-sm mx-auto text-red-500">
    {errorMessage}
  </div>
{/if}
<div class="mx-auto mt-10 flex max-w-fit space-x-4">
  <button
    on:click={onGetStarted}
    {disabled}
    class="disabled:opacity-70 disabled:pointer-events-none rounded-full border border-black bg-black py-2 px-5 text-sm text-white shadow-lg transition-all hover:bg-white hover:text-black"
    >Get Started</button
  >
  <a
    class="flex items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white py-2 px-5 shadow-lg transition-all hover:border-gray-800"
    href="https://platform.openai.com/account/api-keys"
    target="_blank"
    rel="noreferrer"
  >
    <p class="text-sm">Get Key</p>
  </a>
</div>