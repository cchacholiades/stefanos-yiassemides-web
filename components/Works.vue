<template>
    <div v-if="works">
        <div class="text-center text-3xl sm:text-4xl font-bold mt-20 md:mt-32 mb-6">CREDITS</div>
        <!-- Filters -->
        <!--
        <div class="flex flex-row mb-4 items-center">
            <p class="mr-2 font-bold">Filter by Genre</p>
            <select v-model="selectedGenre" name="genres" class="font-semibold outline-none h-10 rounded border-2 border-black-lighter px-2 text-black">
                <option disabled selected value="" class="text-black-lighter"> -- Select filter -- </option>
                <option v-for="(genre, index) in filteredGenres" :key="index" :value="genre">{{ genre }}</option>
            </select>
            <div v-if="selectedGenre" class="ml-auto hover:opacity-80 cursor-pointer text-4xl" @click="resetFilters">
                <font-awesome-icon :icon="['fas', 'xmark']"/>
            </div>
        </div>
        -->
        <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
            <div v-for="work in filteredWorks" :key="work.id" class="relative flex flex-col rounded items-baseline cursor-pointer aspect-w-4 aspect-h-5" @click.prevent="showOverlay(work)">
                <img class="w-full h-full inset-0 object-cover object-top rounded-3xl max-h-[270px]" :src="`/stefanos-yiassemides-web/${work.img}`" :alt="work.name"/>
                <div class="bg-black bg-opacity-90 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 px-4 flex justify-center items-center text-center text-lg text-white font-semibold">
                    {{ work.name }}
                </div>
            </div>
        </div>
        <div v-if="shouldDisplayOverlay" v-scroll-lock="shouldDisplayOverlay" class="flex flex-col fixed top-0 left-0 right-0 bottom-0 flex items-center bg-black bg-opacity-95 z-50 py-6">
            <div class="max-w-md md:max-w-xl pb-4 relative px-4 flex w-full hover:opacity-80">
                <div class="ml-auto cursor-pointer text-4xl" @click="closeOverlay">
                    <font-awesome-icon :icon="['fas', 'xmark']" fixed-width/>
                </div>
            </div>
            <div class="max-w-md md:max-w-xl px-4 relative overflow-y-scroll scrollbar-hide">
                <div>
                    <h4 class="text-3xl sm:text-4xl border-solid border-yellow border-b-4 pb-2">{{ selected.name }}</h4>
                    <!-- eslint-disable vue/no-v-html -->
                    <p class="mt-4 break-words" v-html="selected.description"></p>
                    <!--eslint-enable-->

                    <div v-if="selected.platforms" class="text-white flex flex-row items-center mt-2">
                        <p class="font-semibold">Available on: </p>

                        <div v-if="selected.platforms.includes('playstation')" class="px-2 text-2xl">
                            <font-awesome-icon :icon="['fab', 'playstation']"/>
                        </div>

                        <div v-if="selected.platforms.includes('xbox')" class="px-2 text-2xl">
                            <font-awesome-icon :icon="['fab', 'xbox']"/>
                        </div>

                        <div v-if="selected.platforms.includes('windows')" class="px-2 text-2xl">
                            <font-awesome-icon :icon="['fab', 'windows']"/>
                        </div>

                        <div v-if="selected.platforms.includes('steam')" class="px-2 text-2xl">
                            <font-awesome-icon :icon="['fab', 'steam']"/>
                        </div>

                        <div v-if="selected.platforms.includes('netflix')" class="px-2 text-2xl">
                            <img src="/stefanos-yiassemides-web/icons/netflix.svg" alt="Netflix icon" class="w-6 pb-0.5">
                        </div>

                        <div v-if="selected.platforms.includes('youtube')" class="px-2 text-2xl">
                            <font-awesome-icon :icon="['fab', 'youtube']"/>
                        </div>
                    </div>

                    <div v-if="selected.youtube">
                        <div class="mt-6">
                            <div v-for="(v, index) in selected.youtube" :key="index" class="mt-6">
                                <client-only>
                                    <youtube :video-id="v" player-width="100%" />
                                </client-only>
                            </div>
                        </div>
                        <div v-if="selected.youtube_playlist" class="mt-4"><a class="font-semibold text-yellow hover:underline" :href="selected.youtube_playlist">View Full Playlist</a></div>
                    </div>

                    <div v-if="selected.youtube_channel" class="mt-4"><a class="font-semibold text-yellow hover:underline" :href="selected.youtube_channel">View {{ selected.name }} Channel on Youtube</a></div>

                    <div v-if="selected.vimeo">
                        <div v-for="(v, index) in selected.vimeo" :key="index" class="mt-6">
                            <client-only>
                                <vimeo-player ref="player" :video-id="v" player-width="100%" :options="{ 'responsive': true }"/>
                            </client-only>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            works: [
                {
                    id: 1,
                    img: "works/1.jpg",
                    name: "Rainbocorns",
                    genre: ["Animation"],
                    description: "Discover the wonderful world of Rainbcorns. Well beyond the products, this is their story. Follow through the animated series in Rainbocorn Town or let your imagination get tickled by the play belief of others.",
                    youtube: ["FnvGnfZgF0g"],
                    youtube_channel: "https://www.youtube.com/channel/UCsencBt7cZUdXb94yyffLBA",
                    platforms: ["youtube"],
                    order: 2
                },        {
                    id: 2,
                    img: "works/2.webp",
                    name: "Go Buster (Sound Design)",
                    genre: ["Animation"],
                    description: "Go Buster is a vehicle adventure show about Buster, a fun-loving young bus. Little ones will love learning colors, shapes, and numbers with Buster and his friends.",
                    youtube: ["6_EDRNivnnI"],
                    youtube_channel: "https://www.youtube.com/channel/UCnEHS4Wa8WOxvQiKX4Vd-5g",
                    platforms: ["youtube"],
                    order: 3
                },
                {
                    id: 3,
                    img: "works/3.jpeg",
                    name: "Lego Duplo",
                    genre: ["Animation"],
                    description: "A world where your favourite LEGO characters sing popular nursery rhymes that are loved by children and their parents all around the world.",
                    youtube: ["NqFxPrOXjVk"],
                    youtube_channel: "https://www.youtube.com/channel/UCVHBEAYKN0GFTbGmEC1IdLQ/featured",
                    platforms: ["youtube"],
                    order: 4
                },
                {
                    id: 4,
                    img: "works/4.png",
                    name: "appMink",
                    genre: ["Animation"],
                    description: "appMink is a kids animation channel with high quality kids songs, kids music, kids shows, kids cartoons, kids movies, compilations and a ton of other great videos for kids.",
                    youtube: ["94YnB8nndf0"],
                    youtube_channel: "https://www.youtube.com/c/appMink/featured",
                    platforms: ["youtube"],
                    order: 7
                },
                {
                    id: 5,
                    img: "works/5.jpg",
                    name: "Little Baby Bum",
                    genre: ["Animation"],
                    description: "Little Baby Bum is a fun and educational show for kids featuring classic and new nursery rhymes.",
                    youtube: ["eT3eeaeI4vM"],
                    youtube_channel: "https://www.youtube.com/c/LittleBabyBum/featured",
                    youtube_playlist: "https://www.youtube.com/playlist?list=OLAK5uy_lDs7vUSxyA05wtoZx7SbuPely5bUexJ2Y",
                    platforms: ["youtube"],
                    order: 8
                },
                {
                    id: 6,
                    img: "works/6.jpg",
                    name: "The Untold Legacy",
                    genre: ["Video Game"],
                    description: "Currently in development by Iconic Games, The Untold Legacy is an engaging, atmosphere drenched action-adventure RPG, with a bright and colorful art style set in a surreal and often creepy setting.",
                    youtube: ["frKQTxZoSzw", "yBBLivbQQ54"],
                    platforms: ["playstation", "windows", "xbox", "steam"],
                    order: 6
                },
                {
                    id: 7,
                    img: "works/7.jpg",
                    name: "T-Rex Ranch",
                    genre: ["TV Show"],
                    description: "T-Rex Ranch follows Park Rangers on their action-packed, everyday dinosaur adventures. T-Rex Ranch is a favorite of kids age 4-8, and has over 2.4 million fans on YouTube. Its imaginative storylines and CGI dinosaurs entertain while teaching kids about the natural and prehistoric world.",
                    youtube: ["2KicJko_cVY"],
                    youtube_channel: "https://www.youtube.com/user/ToyLabTV",
                    youtube_playlist: "https://www.youtube.com/watch?v=cJq9WdU5w4U&list=PLcR5BD0tGGBNZP7paeGlKNkmPVtFZH0KP",
                    platforms: ["youtube", "netflix"],
                    order: 1,
                },
                {
                    id: 8,
                    img: "works/8.jpeg",
                    name: "Mega Bloks (Seasons)",
                    genre: ["Animation"],
                    description: `Animated series for kids based on the Mega Bloks&reg; line of construction set toys. Produced by <a class="font-semibold text-yellow hover:underline" href="https://www.moonbug.com/" rel="noopener" target="_blank" rel="nofollow">Moonbug Entertainment</a>.`,
                    youtube: ["2KN7v75srZQ"],
                    youtube_playlist: "https://www.youtube.com/playlist?list=PLKCNCfD_4af8sxGFvIuYG3k9nvJQkv58r",
                    platforms: ["youtube"],
                    order: 5

                },
                {
                    id: 9,
                    img: "works/9.jpg",
                    name: "Westworld Scoring Competition",
                    genre: ["Re-score"],
                    description: "Entry for the Westworld Scoring Competition hosted by Spitfire Audio. The task was to re-imagine and score a scene from Westworld Season 3.",
                    youtube: ["T__-goYTu3Q"],
                    order: 10
                },
                {
                    id: 10,
                    img: "works/10.jpg",
                    name: "Caminandes: Llamigos (Re-score)",
                    genre: ["Re-score", "Animation"],
                    description: "It's winter in Patagonia, food is getting scarce. Koro the Llama engages with Oti the pesky penguin in an epic fight over that last tasty berry!",
                    youtube: ["mEcKY9gbUx4"],
                    order: 12
                },
                {
                    id: 11,
                    img: "works/11.jpg",
                    name: "It Will Find You",
                    genre: ["Video Game"],
                    description: `It Will Find You is a first person narrative driven horror experience, with a focus on environmental interaction and progressive narrative through game-play. It Will Find You aims to provide an immersive experience where a dark, twisting narrative evolves in tandem with your decisions. Developed by <a href="https://twitter.com/heraldofloco" class="text-yellow hover:underline" rel="nofollow">Mega Sloth Studios</a>.`,
                    youtube: ["k0RMwoxzLi0"],
                    platforms: ["steam", "windows"],
                    order: 11
                },
                {
                    id: 12,
                    img: "works/12.png",
                    name: "Rescue Heroes",
                    genre: ["Animation"],
                    description: `Stop-motion animated series for kids produced by <a class="font-semibold text-yellow hover:underline" href="https://www.moonbug.com/" target="_blank" rel="noopener">Moonbug Entertainment</a>. Based on the Fisher-Price&reg; toy line of "Rescue Heroes", this online series tracks the adventures of a team of emergency responders who rescue people from various disasters.`,
                    youtube: ["KJltqNGhWns"],
                    youtube_playlist: "https://www.youtube.com/playlist?list=PLKCNCfD_4af-UtKntqcAQsPZykytye5lU",
                    order: 9
                },
                {
                    id: 13,
                    img: "works/13.jpg",
                    name: "The Oceanmaker (Re-score)",
                    genre: ["Re-score", "Animation"],
                    description: "In a post-apocalyptic world where all the water and seas have disappeared, a courageous young female pilot fights against vicious sky pirates for control over the last remaining source of water, the clouds.",
                    youtube: null,
                    vimeo: ["229325041"],
                    order: 13
                },
                {
                    id: 14,
                    img: "works/14.jpeg",
                    name: "Wallace & Gromit: A Grand Day Out (Re-score)",
                    genre: ["Re-score", "Stop Motion"],
                    description: "Wallace, after finding no cheese in the kitchen, decides that he and Gromit should go to a place known for its cheese. A glance out the window at the night sky gives him the idea to travel to the moon, since, according to Wallace, everybody knows that the moon is made of cheese.",
                    youtube: null,
                    vimeo: ["239726433"],
                    order: 14
                },
                {
                    id: 15,
                    img: "works/15.jpg",
                    name: "BBC Hidden Kingdoms: Lizard Attack, Mouse Leaves Home (Re-score)",
                    genre: ["Re-score", "Documentary"],
                    description: `Lizard Attack is a part of a dramatized natural history series by BBC called Hidden Kingdoms. Set in the African savannah, it tells the story about the encounter between a small, mouse-sized and long-nosed insectivore called elephant-shrew (otherwise known as sengi), and its nemesis, the monitor lizard.</br>Mouse leaves home, is the story about the grasshopper mouse, who specializes in venomous prey, especially bark scorpions, the only scorpion in the USA capable of killing a human.`,
                    youtube: null,
                    vimeo: [
                        "239716421",
                        "239732509",
                    ],
                    order: 15
                },
            ],
            selected: null,
            selectedGenre: null
        }
    },

    computed: {
        shouldDisplayOverlay() {
            return this.selected
        },
        filteredGenres() {
            const flattened = this.works.flatMap(obj => {
                return obj.genre.map(inner => inner)
            }).sort()

            return [...new Set(flattened)]
        },
        filteredWorks() {
            const filterGenre = this.selectedGenre
            if (this.selectedGenre) {
                return this.works.filter((item) => {
                      return item.genre.includes(filterGenre)
                })
            } else {
                return [...this.works].sort((a,b) => a.order - b.order)
            }
        }
    },

    methods: {
        showOverlay(work) {
            this.selected = work
        },
        closeOverlay() {
            this.selected = null
        },
        resetFilters() {
            this.selectedGenre = null
        }
    }
}
</script>
