<template>
	<RouterLink :to="{ name: 'dashboard' }"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6 border-red-500">
			<path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
		</svg>
	</RouterLink>
	{{ test }}
	<div class="container mt-10">
		<div class="bg-white flex flex-col items-center justify-center gap-4 py-4 px-4">
			<img src="../assets/images/account.svg" alt="Company logo" />
			<strong>Company Name</strong>
			<p>Position</p>
			<hr class="bg-black w-full" />
			<div class="flex gap-6 flex-wrap">
				<p
					class="px-2 py-1 rounded-sm bg-light-grayish-cyan text-desaturated-dark-cyan font-bold cursor-pointer hover:bg-desaturated-dark-cyan hover:text-white hover:transition hover:duration-300">
					HTML
				</p>
				<p
					class="px-2 py-1 rounded-sm bg-light-grayish-cyan text-desaturated-dark-cyan font-bold cursor-pointer hover:bg-desaturated-dark-cyan hover:text-white hover:transition hover:duration-300">
					CSS
				</p>
				<p
					class="px-2 py-1 rounded-sm bg-light-grayish-cyan text-desaturated-dark-cyan font-bold cursor-pointer hover:bg-desaturated-dark-cyan hover:text-white hover:transition hover:duration-300">
					JAVASCRIPT
				</p>
				<p
					class="px-2 py-1 rounded-sm bg-light-grayish-cyan text-desaturated-dark-cyan font-bold cursor-pointer hover:bg-desaturated-dark-cyan hover:text-white hover:transition hover:duration-300">
					TYPESCRIPT
				</p>
				<p
					class="px-2 py-1 rounded-sm bg-light-grayish-cyan text-desaturated-dark-cyan font-bold cursor-pointer hover:bg-desaturated-dark-cyan hover:text-white hover:transition hover:duration-300">
					VUE 3
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()

const test = ref(route.params.id)
</script>
