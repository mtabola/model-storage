<template>
    <v-footer app flat>             <!--Чуть позже копирайт добавь. Нужно узнать как работает контейнер для того чтобы поместить нижний кусок кода в одну строку-->
            <span class="text-decoration-underline font-weight-medium">Спасибо,</span>
            <span class="font-weight-thin">что присоединились к нам!</span>
            <v-spacer></v-spacer>
            <v-btn v-for="icon in icons" :key="icon" class="mx-3" icon flat>
                <v-icon>{{icon}}</v-icon>
            </v-btn>
    </v-footer>
</template>

<script>
    export default {
        name: 'SiteFooter',
        data: () => ({
            icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
        })
    }
</script>