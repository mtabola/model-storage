<template>
	<div class="blog-page">
		<v-container class="d-flex">
			<v-row>
				<v-col cols="4" v-for="article in articles" :key="article.id">
					<v-card>
						<v-img :src="article.img">
						</v-img>
						<v-card-title class="text-h5">{{article.title}}</v-card-title>
						<v-divider></v-divider>
						<v-card-subtitle>Опубликовано: {{new Date().getFullYear()}}</v-card-subtitle>
						<v-card-text>
							{{article.description}}
						</v-card-text>
						<v-card-actions>
							<v-hover v-slot="{hover}" open-delay="100">
								<v-btn
								:elevation="hover ? 3: 0" 
								:class="{'on-hover': hover}"
								class="grey lighten-2 grey--text text--darken-3 pa-5"
								>
									<v-icon left>mdi-book-open-page-variant-outline</v-icon>
									<span>Читать</span>
								</v-btn>
							</v-hover>
							
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
			

		</v-container>
	</div>
</template>
  
  <script>
  
  export default {
    name: 'BlogView',
	data: () =>({
		articles: [
			{
				id: 1, 
				title: 'Vestibulum vulputate commodo arcu.',
				description: 'Cras et sodales purus. Duis ut fringilla mi, \
				accumsan pulvinar arcu. Praesent sed malesuada purus. \
				Vestibulum suscipit lacus et elit.',
				img: require('../../assets/blog-assets/npd.jpeg')
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

<style>
	.opacity-5{
		opacity: 0.5;
	}
	.opacity-10{
		opacity: 1;
	}
</style>