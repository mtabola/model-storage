<template>
   <v-container>
      <v-form class="authorization" elevating>
         <v-card>
            <v-card-text>
               <v-text-field label="Username"/>
               <v-text-field label="Password" type="password" />
            </v-card-text>
            <v-card-actions>
               <v-btn type="submit">
                  Login
               </v-btn>
               <router-link to="/registration">Зарегестрироваться</router-link>
            </v-card-actions>
         </v-card>
      </v-form>
   </v-container>

    
  </template>
  
  <script>
  
  export default {
    name: 'AuthView'
  }
  </script>
  