<template>
    <div class="pb-10">
        <div class="relative h-96 md:h-max">
            <div class="block flex justify-center items-center ">
                <img class="w-full h-96 md:h-max relative z-10 grayscale object-cover" src="/stefanos-yiassemides-web/bg-2.jpeg" alt="Cover photo">
                <Logo class="absolute z-20 top-0"/>
            </div>
            <div class="absolute bottom-0 z-20 bg-gradient-to-t from-black to-transparent h-32 w-full"></div>
        </div>

        <Navigation class="fixed top-0 left-0 right-0 max-w-screen-lg z-40 bg-gradient-to-b from-black to-transparent m-auto" @goto="captureGoTo"/>

        <div class="relative max-w-screen-lg pl-4 pr-4 m-auto">
            <Works ref="works"/>
            <Music ref="music"/>
            <Clients ref="clients"/>
            <About ref="about"/>
            <Testimonials ref="testimonials"/>
            <Contact ref="contact"/>
            <Copyright/>
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
                        content: ""
                    }
                ],
                bodyAttrs: {
                    class: "antialiased bg-black text-white scrollbar-hide font-montserrat"
                }
            }
        },

        methods: {
            captureGoTo(refName) {
                this.goto(refName)
            },
            goto(refName) {
                const element = this.$refs[refName].$el
                const yOffset = -60;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({top: y, behavior: 'smooth'});
            }
        }
    }
</script>
