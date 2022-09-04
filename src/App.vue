<template>
    <v-app>
        <SiteHeader />
        <main class="pa-4">
            <router-view></router-view>
        </main>
        <SiteFooter />
    </v-app>
    

</template>

<script>
    import SiteFooter from './components/ConstElements/SiteFooter.vue';
    import SiteHeader from './components/ConstElements/SiteHeader.vue';


    export default {
        name: 'App',

        components: {
            SiteFooter,
            SiteHeader
        },

        data: () => ({
            //
        }),
}
</script>