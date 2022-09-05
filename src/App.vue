<template>
	<v-app>
		<AppHeader />
		<v-main>
			<router-view />
		</v-main>
		<AppFooter/>
	</v-app>
</template>

<script>
	import AppFooter from './components/ConstElements/AppFooter.vue';
	import AppHeader from './components/ConstElements/AppHeader.vue';

	export default {
		name: 'App',

		components: {
			AppFooter,
			AppHeader,
		},

		data: () => ({
			
		}),
	};
</script>
