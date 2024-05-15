<template>
	<div
		class="card relative flex flex-col w-full rounded-md bg-white mt-6 px-4 py-4 lg:py-2 lg:justify-between lg:flex-row"
		:class="{
			'before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-desaturated-dark-cyan before:rounded-l-md':
				props.featured,
		}">
		<img
			:src="`./src/assets/images/${props.logo}`"
			:alt="props.company"
			class="w-[50px] h-[50px] absolute -top-6 lg:w-[80px] lg:h-[80px] lg:top-[50%] lg:left-8 lg:-translate-y-1/2" />
		<div class="info-box lg:ml-[120px]">
			<div class="offer-info flex items-center gap-6 py-4 lg:py-2">
				<p class="text-sm font-bold text-desaturated-dark-cyan">
					{{ props.company }}
				</p>
				<div class="new flex gap-2">
					<p class="bg-desaturated-dark-cyan text-white text-sm font-bold rounded-2xl py-0.5 px-3" v-if="props.new">
						NEW!
					</p>
					<p
						class="bg-very-dark-grayish-cyan text-white text-sm font-bold rounded-2xl py-0.5 px-3"
						v-if="props.featured">
						FEATURED
					</p>
				</div>
			</div>
			<RouterLink
				:to="`/job-details/${$props.id}`"
				class="text-md font-bold mb-2 hover:text-desaturated-dark-cyan hover:cursor-pointer hover:transition hover:duration-300">
				{{ props.position }}
			</RouterLink>
			<ul class="offer-desc flex items-center gap-4 text-md text-gray-500 my-2">
				<li>{{ props.postedAt }}</li>
				<li>{{ props.contract }}</li>
				<li>{{ props.location }}</li>
			</ul>
		</div>
		<hr class="bg-gray-500 lg:hidden" />
		<div class="tags flex gap-4 flex-wrap mt-4 text-sm lg:items-center">
			<button
				class="px-3 py-1 rounded-sm bg-light-grayish-cyan text-desaturated-dark-cyan font-bold cursor-pointer hover:bg-desaturated-dark-cyan hover:text-white hover:transition hover:duration-300"
				@click="addFilter(props.role)">
				{{ props.role }}
			</button>
			<button
				class="px-2 py-1 rounded-sm bg-light-grayish-cyan text-desaturated-dark-cyan font-bold cursor-pointer hover:bg-desaturated-dark-cyan hover:text-white hover:transition hover:duration-300"
				@click="addFilter(props.level)">
				{{ props.level }}
			</button>
			<div v-for="language in props.languages">
				<button
					class="px-2 py-1 rounded-sm bg-light-grayish-cyan text-desaturated-dark-cyan font-bold cursor-pointer hover:bg-desaturated-dark-cyan hover:text-white hover:transition hover:duration-300"
					@click="addFilter(language)">
					{{ language }}
				</button>
			</div>
			<div v-for="tool in props.tools">
				<button
					class="px-2 py-1 rounded-sm bg-light-grayish-cyan text-desaturated-dark-cyan font-bold cursor-pointer hover:bg-desaturated-dark-cyan hover:text-white hover:transition hover:duration-300"
					@click="addFilter(tool)">
					{{ tool }}
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps([
	'id',
	'company',
	'logo',
	'new',
	'featured',
	'position',
	'role',
	'level',
	'postedAt',
	'contract',
	'location',
	'languages',
	'tools',
])
const emit = defineEmits(['add-filter'])

const addFilter = (filter: string) => {
	emit('add-filter', filter)
}
</script>
