<template>
    <v-card color="dark dark-4" flat>
        <v-card-text>
            <v-container fluid>
                <v-layout row wrap>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-flex>
                            <v-select
                                    v-bind:items="states"
                                    label="Mail"
                                    autocomplete
                                    append-icon="chat_bubble"
                            ></v-select>
                        </v-flex>
                        <v-flex>
                            <v-select
                                    v-bind:items="password"
                                    label="Password"
                                    autocomplete
                                    append-icon="fingerprint"
                            ></v-select>
                        </v-flex>
                        <v-flex>
                            <v-select
                                    v-bind:items="repassword"
                                    label="Password"
                                    autocomplete
                                    append-icon="fingerprint
"
                            ></v-select>
                        </v-flex>
                        <v-flex right>
                            <v-btn color="primary" dark right>Update Profile</v-btn>
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
                price : {
                    props: Integer
                },
                states: [
                    'Alabama', 'Alaska', 'American Samoa', 'Arizona',
                    'Arkansas', 'California', 'Colorado', 'Connecticut',
                    'Delaware', 'District of Columbia', 'Federated States of Micronesia',
                ],
                currency: [
                    'BTC/USD',
                    'ETH/USD',
                    'ETH/BTC',
                    'XRP/BTC',
                    'NEO/BTC',
                    'OMG/BTC',
                    'VTC/BTC',
                    'DOGE/BTC'
                ]
            }
        }
    }
</script>