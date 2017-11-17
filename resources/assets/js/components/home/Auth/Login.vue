<template>
    <v-card color="dark dark-4" flat>
        <v-card-text>
            <v-container fluid>
                <v-layout row wrap>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-flex>
                            <v-select
                                    v-model="a1"
                                    label="Email"
                                    autocomplete
                                    append-icon="accessibility"
                            ></v-select>
                        </v-flex>
                        <v-flex>
                            <v-select
                                    v-model="a1"
                                    label="Password"
                                    autocomplete
                                    append-icon="fingerprint"
                            ></v-select>
                        </v-flex>
                        <v-flex right>
                            <v-btn color="primary" dark right>Login</v-btn>
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
        }
    }
</script>