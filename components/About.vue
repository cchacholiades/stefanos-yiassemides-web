<template>
    <div class="mt-4">
        <div class="border-l-8 pl-4 border-solid border-yellow text-3xl sm:text-4xl font-bold mt-20 md:mt-32 mb-6 md:mb-10">ABOUT</div>
        <div class="md:flex text-lg md:text-xl">
            <NuxtImg format="webp" src="/about-2.jpeg" class="w-full mb-6 md:w-56 md:h-56 m-auto mb-6 md:mb-0 md:mr-6 md:mt-0 md:ml-0 rounded-full object-cover grayscale max-w-[200px]" style="aspect-ratio: 1 / 1;" loading="lazy" alt="Stefanos Yiassemides self image" width="448" height="448"/>
            <div>
                <div class="mb-4 break-words whitespace-pre-line">
                    <v-clamp autoresize :max-lines="8">
                    Stefanos Yiassemides is a Greek Cypriot composer and guitarist currently based in Bristol, UK. He took his first musical steps at the age of 12 and since then performing and writing music has been his lifelong passion. His versatility and attitude allow him to work on a wide variety of projects, regardless of genre, from pop songs and electronic music to full scale orchestral cinematic pieces. Stefanos has written music for award-winning global entertainment companies behind some of the most popular kids’ titles in the world, featuring his work on platforms such as Netflix, YouTube and Roku. He has worked on numerous multiplicity projects including video games, cartoons, animated series, short form and feature films.

                    After studying under some of the most acclaimed music mentors in Cyprus, he went on to continue his studies in the UK. He earned his BA degree in Music Performance & Songwriting from the BIMM Institute Brighton in 2013 and a Master's degree in Music Composition and Film Scoring from the University of Bristol in 2017.

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
