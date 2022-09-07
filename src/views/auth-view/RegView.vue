<template>
    <v-form class="authorization">
        <v-card>
           <v-card-text>
              <v-text-field label="Username"/>
              <v-text-field label="Password" type="password" />
           </v-card-text>
           <v-card-actions>
              <v-btn type="submit">
                 Login
              </v-btn>
           </v-card-actions>
        </v-card>
     </v-form>
  </template>
  
  <script>
  
  export default {
    name: 'RegView'
  }
  </script>
  