<template>
	<TheHeader />
	<RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/layout/TheHeader.vue'
</script>
