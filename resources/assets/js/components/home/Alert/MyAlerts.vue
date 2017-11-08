<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 md2 v-for="alert in alerts" :key="alert.id" @click="alert(alert.id)">
                <v-card color="dark darken-2" class="white--text" hover ripple>
                    <v-container>
                        <v-layout>
                            <v-flex md8>
                                <div class="subheading">{{ alert.currency }}</div>
                                <div class="caption">
                                    <span class="grey--text darken-2">{{ alert.exchange }}</span> -
                                    <span class="cyan--text accent-1">{{ alert.price }}</span></div>
                            </v-flex>
                            <v-flex md4>
                                <v-card-media
                                        src="https://koinbulteni.com/koin-logo/Bitcoin-Logo.png/"
                                        height="35px"
                                        contain
                                ></v-card-media>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        methods: {
            alert(i) {
                console.log(i);
            }
        },
        computed: {
            alerts() {
                return this.$store.getters.alerts;
            }
        }
    }
</script>