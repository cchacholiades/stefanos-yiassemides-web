<template>
    <div class="flex items-center justify-center">
        <div class="mt-4 z-50 cursor-pointer">
            <div v-if="isNavOpen" @click.prevent="toggle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>

            <div v-if="!isNavOpen" @click.prevent="toggle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </div>
        <NavigationMenuOpen v-if="isNavOpen"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isNavOpen: false
            }
        },

        methods: {
            toggle() {
                this.isNavOpen = !this.isNavOpen
            }
        }
    }
</script>