<template>
    <div>
        <v-navigation-drawer
                fixed
                clipped
                v-model="drawer"
                app
        >
            <v-list dense>
                <v-list-tile v-for="item in items" :key="item.text" :to="item.path">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{ item.text }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-subheader class="mt-3 grey--text text--darken-1">Account</v-subheader>

                <v-list-tile
                        v-for="account in accounts"
                        :key="account.text"
                        :to="account.path"
                        v-if="isAuth">
                    <v-list-tile-action>
                        <v-icon color="grey darken-1">{{ account.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title class="grey--text text--darken-1">{{ account.text }}</v-list-tile-title>
                </v-list-tile>
                <v-list-tile
                        :to="'logout'"
                        v-if="isAuth"
                        @click="logout()">
                    <v-list-tile-action>
                        <v-icon color="grey darken-1">chevron_left</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title class="grey--text text--darken-1">Logout</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="red" dense fixed clipped-left app>
            <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-icon class="ml-3">fa-youtube</v-icon>
            </v-toolbar-title>
        </v-toolbar>

        <form id="logout-form" action="/logout" method="POST" style="display: none;">
            <input type="hidden" name="_token" :value='csrfToken()'>
        </form>
    </div>
</template>

<script>
    export default {
        props: {
            source: String
        },
        data: () => ({
            drawer: true,
            items: [
                {icon: 'alarm_add', text: 'Add Alert', path: 'add-alert'},
                {icon: 'near_me', text: 'My Alerts', path: 'my-alerts'},
            ],
            accounts: [
                {icon: 'settings', text: 'Settings', path: 'edit-profile'}
            ]
        }),
        computed: {
            isAuth() {
                return this.$store.getters.checkAuth;
            }
        },
        methods: {
            logout() {

                return document.getElementById('logout-form').submit();
            },
            csrfToken() {
                let csrfToken = document.getElementsByName('csrf-token')[0].getAttribute('content');
                return csrfToken;
            }
        }


    }
</script>