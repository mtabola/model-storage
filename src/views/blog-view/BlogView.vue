<template>
	<div class="blog-page">
		<v-container class="d-flex flex-column">
			<AddItem />
			<v-row>
				<v-col cols="4" v-for="article in allArticles" v-bind:key="article.id">
					<BlogCard v-bind:article="article" />
				</v-col>
			</v-row>


		</v-container>
	</div>
</template>
  
<script>
	import { mapGetters, mapActions } from 'vuex';	
	export default {
		name: 'BlogView',
		props: ['articles'],
		components:{
			BlogCard: () => import("../../components/uiElements/BlogCard"),
			AddItem: () => import("../../components/uiElements/AddItem"),
		},
		methods: {
			...mapActions(['getArticles'])
		},
		computed: mapGetters(['allArticles']),
		created() {this.getArticles()}
	}
</script>