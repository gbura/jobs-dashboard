<template>
	<div class="relative w-full rounded-sm bg-white flex flex-wrap gap-4 px-4 py-4">
		<button
			class="absolute top-0 right-2 text-sm font-bold cursor-pointer text-gray-500 lg:top-1/2 lg:-translate-y-1/2 hover:underline hover:text-desaturated-dark-cyan hover:transition hover:duration-300"
			@click="removeAllFilters">
			Clear
		</button>
		<button
			class="py-1 rounded-md bg-light-grayish-cyan text-desaturated-dark-cyan font-bold cursor-pointer"
			v-for="(filter, index) in selectedFilters"
			:key="index">
			<span class="px-2">{{ filter }}</span>
			<span
				class="py-[5px] px-3 ml-2 bg-desaturated-dark-cyan text-white rounded-r-md hover:bg-very-dark-grayish-cyan hover:transition hover:duration-300"
				@click="removeFilter(index)"
				>X</span
			>
		</button>
	</div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, type PropType } from 'vue'

const props = defineProps({
	selectedFilters: {
		type: Array as PropType<string[]>,
		required: true,
	},
})

const emit = defineEmits(['remove-all-filters'])

const removeFilter = (index: number) => {
	props.selectedFilters.splice(index, 1)
}

const removeAllFilters = () => {
	emit('remove-all-filters')
}
</script>
