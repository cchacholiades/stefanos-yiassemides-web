<template>
    <div class="flex items-center justify-center">
        <div class="ml-auto mt-4 z-50 cursor-pointer text-white text-4xl md:hidden hover:opacity-80">
            <div v-if="isNavOpen" @click.prevent="toggle">
                <font-awesome-icon :icon="['fas', 'xmark']"/>
            </div>

            <div v-if="!isNavOpen" @click.prevent="toggle">
                <font-awesome-icon :icon="['fas', 'bars']"/>
            </div>
        </div>
        <NavigationMenuOpen v-if="isNavOpen" v-scroll-lock="isNavOpen"/>

        <div class="hidden md:block mt-10 text-2xl font-semibold w-full border-solid border-yellow border-b-4">
            <ul class="flex flex-row justify-between w-full">
                <li class="mb-6"><a href="#" class="hover:text-yellow" @click.prevent="goto('works')">CREDITS</a></li>
                <li class="mb-6"><a href="#" class="hover:text-yellow" @click.prevent="goto('music')">MUSIC</a></li>
                <li class="mb-6"><a href="#" class="hover:text-yellow" @click.prevent="goto('clients')">CLIENTS</a></li>
                <li class="mb-6"><a href="#" class="hover:text-yellow" @click.prevent="goto('about')">ABOUT</a></li>
                <li class="mb-6"><a href="#" class="hover:text-yellow" @click.prevent="goto('testimonials')">TESTIMONIALS</a></li>
                <li class="mb-6"><a href="#" class="hover:text-yellow" @click.prevent="goto('contact')">CONTACT</a></li>
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
            goto(refName) {
                this.$nextTick(() => {
                    const element = this.$refs[refName];
                    const top = element.offsetTop;
                    window.scrollTo(0, top);
                })
            }
        }
    }
</script>