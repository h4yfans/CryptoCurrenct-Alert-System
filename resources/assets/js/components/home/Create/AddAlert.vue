<template>
    <v-card color="dark dark-4" flat>
        <v-card-text>
            <v-container fluid>
                <v-layout row wrap>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-flex>
                            <v-select
                                    v-model="exchange"
                                    label="Exhanges"
                                    required
                                    autocomplete
                                    append-icon="trending_up"
                            ></v-select>
                        </v-flex>
                        <v-flex>
                            <v-select
                                    v-model="currency"
                                    label="Currency"
                                    required
                                    autocomplete
                                    append-icon="monetization_on"
                            ></v-select>
                        </v-flex>
                        <v-flex>
                            <v-text-field
                                    label="Price"
                                    required
                                    append-icon="notifications_active"
                            ></v-text-field>
                        </v-flex>
                        <v-flex right>
                            <v-btn color="primary" dark right>Create this alert</v-btn>
                        </v-flex>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                exchange: '',
                currency: '',
                price: '',
                test :['kaan','sevde']
            }
        },

        methods: {
            alertsInfo() {
                return this.$store.getters.alertsInfo;
            }
        },
        created() {
            console.log(this.$store.getters.alertsInfo);
        }
    }
</script>