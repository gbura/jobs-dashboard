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
			path: '/job-offer/:id',
			name: 'job-offer',
			component: () => import('@/views/JobView.vue'),
		},
	],
})

export default router
