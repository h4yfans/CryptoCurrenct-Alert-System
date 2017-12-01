<template>
    <v-card color="dark dark-4" flat>
        <v-card-text>
            <v-container fluid>
                <v-layout row wrap>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-alert v-if="showNotification" color="info" :value="true">
                            {{ informationText }}
                        </v-alert>
                        <v-flex>
                            <v-text-field
                                    label="Mail"
                                    name="Mail"
                                    id="mail"
                                    v-model="email"
                                    required
                                    :type="password"
                                    append-icon="chat_bubble"
                                    :rules="[validEmail]"
                            ></v-text-field>
                        </v-flex>
                        <v-flex>
                            <v-text-field
                                    v-model="password"
                                    label="Password"
                                    :type="'password'"
                                    append-icon="fingerprint"
                                    required
                            ></v-text-field>
                        </v-flex>
                        <v-flex>
                            <v-text-field
                                    v-model="repeatPassword"
                                    label="Password"
                                    :type="'password'"
                                    append-icon="fingerprint"
                                    :rules="[comparePasswords]"
                            ></v-text-field>
                        </v-flex>
                        <v-flex right>
                            <v-btn color="primary" :disabled="!button" dark right @click="changeUserInfo">Update Profile</v-btn>
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
                password: '',
                repeatPassword: ''
            }
        },
        methods: {
            changeUserInfo() {
                this.$store.dispatch('changeAuthInfo', {email: this.email, password: this.password})
            }
        },
        mounted() {
            this.$store.dispatch('getUserInfo');
        },
        computed: {
            comparePasswords() {
                return this.password !== this.repeatPassword ? 'Password do not match' : '';
            },
            validEmail() {
                const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(this.email) || 'Invalid e-mail.'
            },
            button(){
              return this.validEmail && (this.comparePasswords == '');
            },
            informationText(){
                return this.$store.getters.informationText;
            },
            showNotification(){
             return this.$store.getters.showNotification;
            },
            email: {
                get() {
                    return this.$store.getters.email;
                },
                set(mail) {
                    this.$store.commit('UPDATE_EMAIL', mail)
                }
            }
        }
    }
</script>