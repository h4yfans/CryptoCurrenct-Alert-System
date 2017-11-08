<template>
    <v-app dark
           id="inspire">
        <sidebar></sidebar>
        <main>
            <v-content>
                <v-container>
                    <router-view></router-view>
                </v-container>
            </v-content>
        </main>
    </v-app>
</template>

<script>

</script>

<style>
    .input-group__details:after {
        background-color: rgba(255, 255, 255, 0.32) !important;
    }
</style>
