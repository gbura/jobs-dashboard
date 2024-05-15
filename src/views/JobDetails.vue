<template>
	<div class="container py-4">
		<div class="relative bg-white flex flex-col items-center justify-center gap-4 py-4 px-4 lg:gap-8 lg:text-lg">
			<RouterLink :to="{ name: 'dashboard' }" class="absolute top-2 left-2 flex gap-2 items-center"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 border-red-500">
					<path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
				</svg>
				<span
					class="hidden lg:block text-sm uppercase text-gray-400 hover:text-black hover:transition-colors hover:duration-300"
					>go back</span
				>
			</RouterLink>
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
				class="uppercase bg-desaturated-dark-cyan text-white font-bold py-2 px-3 rounded-sm hover:bg-blue-400 hover:transition hover:duration-300"
				@click="apply">
				apply
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { ref, computed } from 'vue'
import { useToast } from 'vue-toastification'
import database from '@/db/data.json'

const route = useRoute()
const router = useRouter()
const toast = useToast()

const jobId = ref<string | string[]>(route.params.id)
const selectedJob = computed(() => {
	const job = database.find(job => job.id.toString() === jobId.value)
	if (!job) {
		toast.error('Error! Offer not found!', {
			timeout: 2000,
		})
		router.push({ name: 'dashboard' })
	}
	return job
})

const apply = () => {
	toast.success('Application sent successfully.', {
		timeout: 2000,
	})
}
</script>
