<template>
	<div
		class="card relative flex flex-col w-full rounded-md bg-white mt-6 p-4 lg:py-2 lg:justify-between lg:flex-row"
		:class="{
			'before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-desaturated-dark-cyan before:rounded-l-md':
				featured,
		}">
		<img
			:src="`./images/${logo}`"
			:alt="company"
			class="w-[50px] h-[50px] absolute -top-6 lg:w-[80px] lg:h-[80px] lg:top-[50%] lg:left-8 lg:-translate-y-1/2" />
		<div class="info-box lg:ml-[120px]">
			<div class="offer-info flex items-center gap-6 py-4 lg:py-2">
				<p class="text-sm font-bold text-desaturated-dark-cyan">
					{{ company }}
				</p>
				<div class="new flex gap-2">
					<p class="bg-desaturated-dark-cyan text-white text-sm font-bold rounded-2xl py-0.5 px-3" v-if="isNew">NEW!</p>
					<p class="bg-very-dark-grayish-cyan text-white text-sm font-bold rounded-2xl py-0.5 px-3" v-if="featured">
						FEATURED
					</p>
				</div>
			</div>
			<RouterLink
				:to="`/job-details/${id}`"
				class="text-md font-bold mb-2 hover:text-desaturated-dark-cyan hover:cursor-pointer hover:transition hover:duration-300">
				{{ position }}
			</RouterLink>
			<ul class="offer-desc flex items-center gap-4 text-md text-gray-500 my-2">
				<li>{{ postedAt }}</li>
				<li>{{ contract }}</li>
				<li>{{ location }}</li>
			</ul>
		</div>
		<hr class="bg-gray-500 lg:hidden" />
		<div class="tags flex gap-4 flex-wrap mt-4 text-sm lg:items-center">
			<base-filter-button @click="addFilter(role)">
				{{ role }}
			</base-filter-button>
			<base-filter-button @click="addFilter(level)">
				{{ level }}
			</base-filter-button>
			<div v-for="(language, idx) in languages" :key="idx">
				<base-filter-button @click="addFilter(language)">
					{{ language }}
				</base-filter-button>
			</div>
			<div v-for="(tool, idx) in tools" :key="idx">
				<base-filter-button @click="addFilter(tool)">
					{{ tool }}
				</base-filter-button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Job } from '@/types/Job'
import BaseFilterButton from './ui/BaseFilterButton.vue'
import { toRefs } from 'vue'

const props = defineProps<{
	job: Job
}>()

const {
	id,
	company,
	logo,
	new: isNew,
	featured,
	position,
	postedAt,
	contract,
	location,
	role,
	level,
	languages,
	tools,
} = toRefs(props.job)

const emit = defineEmits(['add-filter'])

const addFilter = (filter: string) => {
	emit('add-filter', filter)
}
</script>
