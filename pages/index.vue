<template>
    <div class="pb-10">

        <div class="relative">
            <div class="absolute top-0 left-0 right-0 flex h-96 md:h-max">
                <img class="w-full relative top-0 z-10 grayscale object-cover" src="/bg-2.jpeg" alt="">
                <div class="absolute bottom-0 z-20 bg-gradient-to-t from-black to-transparent h-32 w-full"></div>
            </div>
        </div>

        <div class="relative max-w-screen-lg pl-4 pr-4 m-auto z-20">
            <div class="flex flex-col">
                <Navigation/>
                <Logo/>
            </div>
            <Works/>
            <Music/>
            <About/>
            <Clients/>
            <Testimonials/>
            <Contact/>
        </div>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: "Music Composer & Sound Designer for Film & Media | Stefanos Yiassemides",
                meta: [
                    {
                        hid: "description",
                        name: "description",
                        content: "Discover, save, book, and review London theatre's hidden gems"
                    }
                ],
                bodyAttrs: {
                    class: "antialiased bg-black text-white"
                }
            }
        },

        methods: {

        }
    }
</script>
