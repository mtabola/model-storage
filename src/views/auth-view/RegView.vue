<template>
   <v-container>
      <v-form class="authorization" elevating>
         <v-card>
            <v-card-text>
               <v-text-field label="Имя"/>
               <v-text-field label="Фамилия"/>
               <v-text-field label="E-mail"/>
               <v-text-field label="Пароль" type="password"/>
               <v-text-field label="Повторите пароль" type="password"/>
            </v-card-text>
            <v-card-actions>
               <v-btn type="registration">
                  Зарегистрироваться
               </v-btn>
            </v-card-actions>
         </v-card>
      </v-form>
   </v-container>
  </template>
  
  <script>
  
  export default {
    name: 'RegView'
  }
  </script>
  