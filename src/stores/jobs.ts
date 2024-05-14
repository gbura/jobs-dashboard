import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

import type { Job } from '@/types/Job'

export const useJobOffers = defineStore('jobsStore', () => {
	const jobs = ref<Job[]>([])

	async function getJobs() {
		try {
			const response = await axios.get('./db/data.json')
			jobs.value = response.data
		} catch (error) {
			console.error('Blad pobierania danych', error)
		}
	}
	return { jobs, getJobs }
})
