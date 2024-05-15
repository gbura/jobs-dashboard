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
	<div class="container py-4">
		<div class="bg-white flex flex-col items-center justify-center gap-4 py-4 px-4 lg:gap-8 lg:text-lg">
			<img :src="`../src/assets/images/${selectedJob?.logo}`" alt="Company logo" />
			<strong class="lg:text-xl">{{ selectedJob?.company }}</strong>
			<p class="lg:text-lg">{{ selectedJob?.position }}</p>
			<hr class="bg-black w-full" />
			<div class="flex gap-4 flex-wrap my-4 text-sm lg:items-center lg:text-lg">
				<div v-for="language in selectedJob?.languages">
					<p
						class="px-2 py-1 rounded-sm bg-light-grayish-cyan text-desaturated-dark-cyan font-bold cursor-pointer lg:text-lg hover:bg-desaturated-dark-cyan hover:text-white hover:transition hover:duration-300">
						{{ language }}
					</p>
				</div>
				<div v-for="tool in selectedJob?.tools">
					<p
						class="px-2 py-1 rounded-sm bg-light-grayish-cyan text-desaturated-dark-cyan font-bold cursor-pointer lg:text-lg hover:bg-desaturated-dark-cyan hover:text-white hover:transition hover:duration-300">
						{{ tool }}
					</p>
				</div>
			</div>
			<hr class="bg-black w-full" />
			<p class="lg:text-lg">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi dolores eum enim architecto! Enim consequatur
				et quaerat vero quod provident, est unde eaque dicta quidem consequuntur cum voluptates vel rem?
			</p>
			<hr class="bg-black w-full" />
			<button
				class="uppercase bg-desaturated-dark-cyan text-white font-bold py-2 px-3 rounded-sm hover:bg-blue-400 hover:transition hover:duration-300">
				aplikuj
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'
import { ref, computed } from 'vue'
import database from '@/db/data.json'

const route = useRoute()
const jobId = ref(route.params.id)

const selectedJob = computed(() => {
	return database.find(job => job.id.toString() === jobId.value)
})
</script>
