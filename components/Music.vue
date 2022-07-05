<template>
    <div :class="{'hidden': !displayPlayer}">
        <div class="text-center text-3xl sm:text-4xl font-bold mt-20 md:mt-32 mb-6">MUSIC</div>

        <client-only>
            <SoundCloud playlist="1454448193" :mini="true" theme="dark" @ready="ready"/>
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
