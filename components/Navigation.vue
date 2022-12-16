<template>
    <div class="flex items-center justify-center">
        <div class="ml-auto mt-6 z-50 cursor-pointer text-white text-4xl md:hidden hover:opacity-80 px-4">
            <div v-if="isNavOpen" @click.prevent="toggle">
                <font-awesome-icon :icon="['fas', 'xmark']" fixed-width/>
            </div>

            <div v-if="!isNavOpen" @click.prevent="toggle">
                <font-awesome-icon :icon="['fas', 'bars']" fixed-width/>
            </div>
        </div>
        <NavigationMenuOpen v-if="isNavOpen" v-scroll-lock="isNavOpen" @menuopengoto="captureGoTo" @closenav="captureCloseNav"/>

        <div class="hidden md:block mt-6 text-2xl font-bold w-full px-4">
            <ul class="flex flex-row justify-between w-full">
                <li class="mb-6"><a href="#works" class="hover:text-yellow duration-300 transition-colors" @click.prevent="emitGoTo('works')">CREDITS</a></li>
                <li class="mb-6"><a href="#music" class="hover:text-yellow duration-300 transition-colors" @click.prevent="emitGoTo('music')">MUSIC</a></li>
                <li class="mb-6"><a href="#clients" class="hover:text-yellow duration-300 transition-colors" @click.prevent="emitGoTo('clients')">CLIENTS</a></li>
                <li class="mb-6"><a href="#about" class="hover:text-yellow duration-300 transition-colors" @click.prevent="emitGoTo('about')">ABOUT</a></li>
                <li class="mb-6"><a href="#testimonials" class="hover:text-yellow duration-300 transition-colors" @click.prevent="emitGoTo('testimonials')">TESTIMONIALS</a></li>
                <li class="mb-6"><a href="#contact" class="hover:text-yellow duration-300 transition-colors" @click.prevent="emitGoTo('contact')">CONTACT</a></li>
            </ul>
        </div>
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
            },
            captureCloseNav() {
                this.isNavOpen = false
            },
            captureGoTo(refName) {
                this.emitGoTo(refName)
            },
            emitGoTo(refName) {
                this.$emit('goto', refName)
            }
        }
    }
</script>