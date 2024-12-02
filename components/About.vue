<template>
    <div class="mt-4">
        <div class="border-l-8 pl-4 border-solid border-yellow text-3xl sm:text-4xl font-bold mt-20 md:mt-32 mb-6 md:mb-10">ABOUT</div>
        <div class="md:flex text-lg md:text-xl">
            <div class="md:w-56 md:h-56 flex-shrink-0">
                <NuxtImg format="webp" src="/about-2.jpeg" class="w-full mb-6 m-auto mb-6 md:mb-0 md:mr-6 md:mt-0 md:ml-0 rounded-full object-cover grayscale max-w-[200px]" style="aspect-ratio: 1 / 1;" loading="lazy" alt="Stefanos Yiassemides self image" width="448" height="448"/>
            </div>
            <div>
                <div class="mb-4 break-words whitespace-pre-line">
                    <v-clamp autoresize :max-lines="7">
                        I'm a versatile music composer based in Bristol, UK, with a lifelong passion for music and film that began at an early age. I believe the synergy between music and visuals is one of the most beautiful art forms. Scoring for media felt like a natural path for me, and I find joy in crafting music that enhances visual storytelling, bringing each scene to life with every note.

                        I've had the privilege of writing music for award-winning global entertainment companies behind some of the most popular kids’ titles in the world. My work has been featured on platforms such as Netflix, YouTube, and Amazon. Over the years, I’ve worked on a variety of projects, including video games, cartoons, animated series, short-form content, and feature films.

                        My journey began in Cyprus, where I studied under some of the most acclaimed music mentors. I later continued my education in the UK, earning a BA in Music Performance & Songwriting from the BIMM Institute Brighton in 2013, followed by a Master's in Music Composition and Film Scoring from the University of Bristol in 2017.
                    <button
                        v-if="expanded || clamped"
                        slot="after"
                        slot-scope="{ toggle, expanded, clamped }"
                        class="block text-yellow hover:underline text-base transition-all duration-300 font-semibold"
                        @click="toggle"
                    >
                        {{ expanded ? 'Show less' : 'Show more' }}
                    </button>
                    </v-clamp>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VClamp from 'vue-clamp'

    export default {
        components: {
            VClamp
        }
    }
</script>
