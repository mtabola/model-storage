<template>
    <nav>
        <v-toolbar app flat class="grey lighten-3">
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
                class="text-decoration-none font-weight-medium px-3 button text--primary">
                    {{topic.title}}
                </router-link>
            </v-toolbar-items>
            <router-link to="/auth" flat text="24" class="text-decoration-none pl-3 button text--primary">
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
                {id: 3, title: 'Модели', router: '/models'},
                {id: 4, title: 'Чертежи', router: '/blueprints'},
                {id: 5, title: 'Документация', router: '/documentation'},
                {id: 6, title: 'Курсовые работы', router: '/courseworks'},
            ]
        })
    }
</script>