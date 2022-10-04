<template>
    <v-card>
        <v-img :src="article.previewImage">
        </v-img>
        <v-card-title class="text-h5">{{article.title}}</v-card-title>
        <v-divider></v-divider>
        <v-card-subtitle>Опубликовано: {{getPublicationDate()}}</v-card-subtitle>
        <v-card-text>
            {{article.description}}
        </v-card-text>
        <v-card-actions>
            <v-hover v-slot="{hover}" open-delay="100">
                <v-btn
                :elevation="hover ? 3: 0" 
                :class="{'on-hover': hover}"
                class="grey lighten-2 grey--text text--darken-3 pa-5">
                    <v-icon left>mdi-book-open-page-variant-outline</v-icon>
                    <span>Читать</span>
                </v-btn>
            </v-hover>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: 'BlogCard',
        props: ["article"],
        methods: {
            getPublicationDate: function() {
                return new Date(this.dateOfPublication).toLocaleDateString({day: 'numeric', month: 'short', year: 'numeric'})

            }
        }
    }
</script>