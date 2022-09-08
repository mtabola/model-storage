<template>
	<div class="home-page">
		<v-container fluid>
			<v-row>
				<v-col
				cols="5"
				class="grey darken-3 d-flex justify-center align-center text-h4 grey--text text--lighten-4 col-dir">
					<div class="mb-3">
						<span class="font-weight-medium">Д</span>
						<span class="mb-3 font-weight-thin">обро пожаловать на сайт</span>
					</div>
					
					<div class="mt-3">
						<span class="text-uppercase font-weight-medium">M</span>
						<span class="text-uppercase font-weight-thin">odel</span>  
						<span class="text-uppercase font-weight-medium">S</span>
						<span class="text-uppercase font-weight-thin">torage</span>
					</div>
				</v-col>
				<v-col cols="7" class="pa-0">
					<v-img src="../../assets/home-asstes/man-truck.jpeg"></v-img>
				</v-col>
			</v-row>

			<v-row>
				<v-col
				cols="5"
				class="pa-0">
					<v-img src="../../assets/home-asstes/stands.png"></v-img>
				</v-col>

				<v-col 
				cols="7"
				class="grey lighten-3 d-flex justify-center align-center text-h4 grey--text text--darken-3">
					<div class="text-center">
						<span class="font-weight-medium">L</span>
						<span class="font-weight-thin">orem ipsum dolor sit amet, consectetur adipiscing elit. 
						Proin pharetra risus sed maximus pharetra. 
						In ultricies nec dolor lacinia malesuada. 
						Maecenas leo nunc, dignissim at.</span>
					</div>
				</v-col>
			</v-row>

			<v-row>
				<v-col 
				cols="7"
				class="grey darken-3 d-flex justify-center align-center text-body-1 grey--text text--lighten-4">
					<div class="text-center">
						<span class="font-weight-medium">L</span>
						<span class="font-weight-thin">orem ipsum dolor sit amet, consectetur adipiscing elit. 
						Proin pharetra risus sed maximus pharetra. 
						In ultricies nec dolor lacinia malesuada. 
						Maecenas leo nunc, dignissim at.</span>
					</div>
				</v-col>
				
				<v-col
				cols="2"
				class="pa-0">
					<v-img src="../../assets/home-asstes/man-model.png"></v-img>
				</v-col>

				<v-col
				cols="3"
				class="grey darken-3 d-flex justify-center align-center text-body-1 grey--text text--lighten-4">
					<div class="text-center">
						<span class="font-weight-medium">L</span>
						<span class="font-weight-thin">orem ipsum dolor sit amet, consectetur adipiscing elit. 
						Proin pharetra risus sed maximus pharetra. 
						In ultricies nec dolor lacinia malesuada. 
						Maecenas leo nunc, dignissim at.</span>
					</div>
				</v-col>
			</v-row>
			
		</v-container>
		<v-container fluid>
			<v-row>
				<v-col cols="3" class="white d-flex justify-center align-center">
					<v-hover v-slot="{hover}" open-delay="100">
						<router-link to="/registration" class="text-decoration-none">
							<v-btn 
							x-large
							tile
							:elevation="hover ? 5 : 0" 
							:class="{'on-hover': hover}" 
							class="grey lighten-2 grey--text text--darken-3 text-h6 pa-5">
								<v-icon class="mr-4">mdi-account-plus-outline</v-icon>	
								Зарегестрироваться
							</v-btn>
						</router-link>
					</v-hover>
					
				</v-col>
				
				<v-spacer class="grey lighten-2"></v-spacer>

				<v-col cols="5" class="grey darken-1 text-h3 text-center grey--text text--lighten-4 insert-air">
					<span class="font-weight-medium">П</span>
					<span class="font-weight-thin">рисоединяйтесь к нам!</span>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>

export default {
	name: 'HomeView'
}
</script>

<style>
	.col-dir {
		flex-direction: column;
	}

	.insert-air {
		padding-top: 3cm;
		padding-bottom: 3cm;
	}
</style>
