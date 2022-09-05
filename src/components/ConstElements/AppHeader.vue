<template>
    <nav>
        <v-toolbar flat app class="px-4 py-2">
            <v-toolbar-title class="ma-0">
                <span class="text-uppercase font-weight-medium">M</span>
                <span class="text-uppercase font-weight-thin">odel</span>  
                <span class="text-uppercase font-weight-medium">S</span>
                <span class="text-uppercase font-weight-thin">torage</span>  
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="align-center">
                <router-link 
                v-for="topic in topics" 
                :key="topic.title" 
                :to="topic.router" 
                flat 
                class="text-decoration-none font-weight-medium px-3 button">
                    {{topic.title}}
                </router-link>
            </v-toolbar-items>
            <router-link to="/auth" flat class="text-decoration-none pl-3 button">
                <v-icon left>mdi-login-variant</v-icon>
                <span class="text-decoration-underline">Войти</span>
            </router-link>
        </v-toolbar>
    </nav>
</template>

<script>
    export default {
        name: 'SiteHeader',
        data: () => ({
            tab: null,
            topics: [
                {id: 1, title: 'Главная', router: '/'},
                {id: 2, title: 'Блог', router: '/blogs'},
                {id: 3, title: 'Модели', router: '/models'}
            ]
        })
    }
</script>