<template>
    <div :class="{'hidden': !displayPlayer}">
        <div class="text-center text-3xl sm:text-4xl font-light pt-20 md:pt-32 pb-6">MUSIC</div>

        <client-only>
            <SoundCloud playlist="615714654" :mini="true" theme="dark" @ready="ready"/>
        </client-only>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                displayPlayer: false
            }
        },

        methods: {
            ready() {
                this.displayPlayer = true
            }
        }
    }
</script>
