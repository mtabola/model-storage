<template>
    <nav >
        <v-toolbar flat app>
            <v-toolbar-title class="text-uppercase">
                <span class="text-decoration-underline font-weight-medium">Dani</span>
                <span class="font-weight-thin">Blog</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn v-for="topic in topics" :key="topic" flat class="font-weight-medium"> <!-- определненно рефактор нужен-->
                    {{topic}}
                </v-btn>
            </v-toolbar-items>
            <v-btn flat>
                <v-icon left>mdi-login-variant</v-icon>
                <span class="text-decoration-underline">Войти</span>
            </v-btn>
        </v-toolbar>
    </nav>
</template>

<script>
    export default {
        name: 'SiteHeader',
        data: () => ({
            tab: null,
            topics: ['Главная', 'Блог', 'Модели'], //может тут создавать картежи по типу {title, path}????
        })
    }
</script>