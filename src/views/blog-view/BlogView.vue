<template>
	<div class="blog-page">
		<v-container class="d-flex flex-column">
			<AddItem/>
			<v-row>
				<v-col cols="4" v-for="article in articles" :key="article.id">
					<BlogCard v-bind:article="article"/>
				</v-col>
			</v-row>
			

		</v-container>
	</div>
</template>
  
  <script>
  
  export default {
    name: 'BlogView',
	components:{
    BlogCard: () => import("../../components/uiElements/BlogCard"),
    AddItem: () => import("../../components/uiElements/AddItem"),
},
	data: () =>({
		articles: [
			{
				id: 1, 
				title: 'Vestibulum vulputate commodo arcu.',
				description: 'Cras et sodales purus. Duis ut fringilla mi, \
				accumsan pulvinar arcu. Praesent sed malesuada purus. \
				Vestibulum suscipit lacus et elit.',
				img: require('../../assets/blog-assets/npd.jpeg'),
				dateOfPublication: Date.now()
			},
			{
				id: 2, 
				title: 'Vestibulum vulputate commodo arcu.',
				description: 'Cras et sodales purus. Duis ut fringilla mi, \
				accumsan pulvinar arcu. Praesent sed malesuada purus. \
				Vestibulum suscipit lacus et elit.',
				img: require('../../assets/blog-assets/npd.jpeg')
			},
			{
				id: 3, 
				title: 'Vestibulum vulputate commodo arcu.',
				description: 'Cras et sodales purus. Duis ut fringilla mi, \
				accumsan pulvinar arcu. Praesent sed malesuada purus. \
				Vestibulum suscipit lacus et elit.',
				img: require('../../assets/blog-assets/npd.jpeg')
			},
			{
				id: 4, 
				title: 'Vestibulum vulputate commodo arcu.',
				description: 'Cras et sodales purus. Duis ut fringilla mi, \
				accumsan pulvinar arcu. Praesent sed malesuada purus. \
				Vestibulum suscipit lacus et elit.',
				img: require('../../assets/blog-assets/npd.jpeg')
			},
			{
				id: 5, 
				title: 'Vestibulum vulputate commodo arcu.',
				description: 'Cras et sodales purus. Duis ut fringilla mi, \
				accumsan pulvinar arcu. Praesent sed malesuada purus. \
				Vestibulum suscipit lacus et elit.',
				img: require('../../assets/blog-assets/npd.jpeg')
			},
			{
				id: 6, 
				title: 'Vestibulum vulputate commodo arcu.',
				description: 'Cras et sodales purus. Duis ut fringilla mi, \
				accumsan pulvinar arcu. Praesent sed malesuada purus. \
				Vestibulum suscipit lacus et elit.',
				img: require('../../assets/blog-assets/npd.jpeg')
			}
		]
	})
  }
  </script>