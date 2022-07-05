<template>
    <div class="md:hidden bg-black fixed top-0 bottom-0 left-0 right-0 z-40 flex items-center justify-center text-center text-4xl font-semibold">
        <ul>
            <li class="mb-6"><a href="#" class="hover:text-yellow" @click.prevent="emitGoTo('works')">CREDITS</a></li>
            <li class="mb-6"><a href="#" class="hover:text-yellow" @click.prevent="emitGoTo('music')">MUSIC</a></li>
            <li class="mb-6"><a href="#" class="hover:text-yellow" @click.prevent="emitGoTo('clients')">CLIENTS</a></li>
            <li class="mb-6"><a href="#" class="hover:text-yellow" @click.prevent="emitGoTo('about')">ABOUT</a></li>
            <li class="mb-6"><a href="#" class="hover:text-yellow" @click.prevent="emitGoTo('testimonials')">TESTIMONIALS</a></li>
            <li class="mb-6"><a href="#" class="hover:text-yellow" @click.prevent="emitGoTo('contact')">CONTACT</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        methods: {
            emitGoTo(refName) {
                this.$emit('menuopengoto', refName)
                this.$emit('closenav', true)
            }
        }
    }
</script>
