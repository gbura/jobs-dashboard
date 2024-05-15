import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'dashboard',
			component: () => import('@/views/DashboardView.vue'),
		},
		{
			path: '/job-details/:id',
			name: 'job-details',
			component: () => import('@/views/JobDetails.vue'),
		},
		{
			path: '/:catchAll(.*)',
			name: 'NotFound',
			redirect: '/',
		},
	],
})

export default router
