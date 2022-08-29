<template>
    <v-app>
        <!--component is the root of your application and a direct replacement for the default Vue entrypoint-->
        <SiteHeader />
        <v-main>
            <!--Здесь располагается изменяемый контент (и как тут нам все менять?????)-->

        </v-main>
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
