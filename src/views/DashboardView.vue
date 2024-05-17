<template>
	<div class="container py-4 flex flex-col gap-6 lg:gap-0">
		<ChosenFilters
			v-if="selectedFilters.length > 0"
			:selectedFilters="selectedFilters"
			@remove-all-filters="removeAllFilters" />
		<JobCard
			v-for="job in filteredJobs"
			:key="job.id"
			:id="job.id"
			:company="job.company"
			:logo="job.logo"
			:new="job.new"
			:featured="job.featured"
			:position="job.position"
			:postedAt="job.postedAt"
			:contract="job.contract"
			:location="job.location"
			:role="job.role"
			:level="job.level"
			:languages="job.languages"
			:tools="job.tools"
			@add-filter="addFilter" />
	</div>
</template>

<script setup lang="ts">
import JobCard from '@/components/JobCard.vue'
import ChosenFilters from '@/components/ChosenFilters.vue'
import database from '@/db/data.json'
import type { Job } from '@/types/Job'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const jobs = ref<Job[]>([])
jobs.value = database

const selectedFilters = ref<string[]>([])

const addFilter = (filter: string) => {
	if (selectedFilters.value.includes(filter)) {
		return
	} else {
		selectedFilters.value.push(filter)
		updateQuery()
	}
}

const removeAllFilters = () => {
	selectedFilters.value = []
	router.push({ query: { filters: undefined } })
}

const updateQuery = () => {
	const query = selectedFilters.value.length > 0 ? selectedFilters.value.join('?') : undefined
	router.push({ query: { filters: query } })
}

const filteredJobs = computed(() => {
	if (selectedFilters.value.length === 0) {
		return jobs.value
	} else {
		return jobs.value.filter(job => {
			return selectedFilters.value.every(filter => {
				return (
					job.role === filter || job.level === filter || job.languages.includes(filter) || job.tools?.includes(filter)
				)
			})
		})
	}
})
</script>
