<template>
    <div v-if="works">
        <div class="font-sourceCodePro text-center text-3xl sm:text-4xl font-bold pt-20 md:pt-32 sm:pt-32 pb-10">CREDITS</div>
        <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
            <div v-for="work in works" :key="work.id" class="relative flex flex-col rounded items-baseline cursor-pointer aspect-w-4 aspect-h-5" @click.prevent="showOverlay(work)">
                <img class="w-full h-full inset-0 object-cover object-top" :src="`/${work.img}`" :alt="work.name"/>
                <div class="bg-black bg-opacity-80 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 px-4 flex justify-center items-center text-center text-lg text-white font-semibold font-montserrat">
                    {{ work.name }}
                </div>
            </div>
        </div>
        <div v-if="shouldDisplayOverlay" v-scroll-lock="shouldDisplayOverlay" class="font-montserrat flex flex-col fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
            <div class="max-w-md md:max-w-xl pb-4 relative flex w-full">
                <div class="ml-auto cursor-pointer" @click="closeOverlay">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div class="max-w-md md:max-w-xl px-4 max-h-96 relative h-full overflow-y-scroll scrollbar-hide">
                <div>
                    <h4 class="text-3xl sm:text-4xl border-solid border-yellow border-b-4 pb-2">{{ selected.name }}</h4>
                    <!-- eslint-disable vue/no-v-html -->
                    <p class="mt-4 break-words" v-html="selected.description"></p>
                    <!--eslint-enable-->

                    <!-- <p v-if="selected.youtube">{{ selected.youtube }}</p> -->
                    <div v-if="selected.youtube">
                        <div class="mt-6">
                            <client-only>
                                <youtube :video-id="selected.youtube" player-width="100%" />
                            </client-only>
                        </div>
                        <div v-if="selected.youtube_playlist" class="mt-4"><a class="text-yellow hover:underline" :href="selected.youtube_playlist">View Full Playlist</a></div>
                    </div>

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
                    description: "Discover the wonderful world of Rainbcorns. Well beyond the products, this is their story. Follow through the animated series in Rainbocorn Town or let your imagination get tickled by the play belief of others.",
                    youtube: ["https://www.youtube.com/channel/UCsencBt7cZUdXb94yyffLBA"]
                },        {
                    id: 2,
                    img: "works/2.webp",
                    name: "Go Buster (Sound Design)",
                    description: "Go Buster is a vehicle adventure show about Buster, a fun-loving young bus. Little ones will love learning colors, shapes, and numbers with Buster and his friends.",
                    youtube: ["https://www.youtube.com/channel/UCnEHS4Wa8WOxvQiKX4Vd-5g"]
                },
                {
                    id: 3,
                    img: "works/3.jpeg",
                    name: "Lego Duplo",
                    description: "A world where your favourite LEGO characters sing popular nursery rhymes that are loved by children and their parents all around the world.",
                    youtube: ["https://www.youtube.com/channel/UCVHBEAYKN0GFTbGmEC1IdLQ/featured"],
                },
                {
                    id: 4,
                    img: "works/4.png",
                    name: "appMink",
                    description: "appMink is a kids animation channel with high quality kids songs, kids music, kids shows, kids cartoons, kids movies, compilations and a ton of other great videos for kids.",
                    youtube: ["https://www.youtube.com/c/appMink/featured"]
                },
                {
                    id: 5,
                    img: "works/5.jpg",
                    name: "Little Baby Bum",
                    description: "Little Baby Bum is a fun and educational show for kids featuring classic and new nursery rhymes.",
                    youtube: ["https://www.youtube.com/c/LittleBabyBum/featured"]
                },
                {
                    id: 6,
                    img: "works/6.jpg",
                    name: "The Untold Legacy",
                    description: "Currently in development by Iconic Games, The Untold Legacy is an engaging, atmosphere drenched action-adventure RPG, with a bright and colorful art style set in a surreal and often creepy setting.",
                    youtube: null
                },
                {
                    id: 7,
                    img: "works/7.jpg",
                    name: "T-Rex Ranch",
                    description: "T-Rex Ranch follows Park Rangers on their action-packed, everyday dinosaur adventures. T-Rex Ranch is a favorite of kids age 4-8, and has over 1.7 million fans on YouTube. Its imaginative storylines and CGI dinosaurs entertain while teaching kids about the natural and prehistoric world.",
                    youtube: ["https://www.youtube.com/user/ToyLabTV?fbclid=IwAR1fITjcTmsEYvvDw02SW9z7IdxIkKNgHL_NreSUin9qAEbW4uKpA0fDo_o"],
                },
                {
                    id: 8,
                    img: "works/8.jpeg",
                    name: "Mega Bloks (Seasons)",
                    description: `Animated series for kids based on the Mega Bloks&reg; line of construction set toys. Produced by <a class="text-yellow hover:underline" href="https://www.moonbug.com/" rel="noopener" target="_blank" rel="nofollow">Moonbug Entertainment</a>.`,
                    youtube: "2KN7v75srZQ",
                    youtube_playlist: "https://www.youtube.com/playlist?list=PLKCNCfD_4af8sxGFvIuYG3k9nvJQkv58r",
                },
                {
                    id: 9,
                    img: "works/9.jpg",
                    name: "Westworld Scoring Competition",
                    description: "Entry for the Westworld Scoring Competition hosted by Spitfire Audio. The task was to re-imagine and score a scene from Westworld Season 3.",
                    youtube: "T__-goYTu3Q",
                },
                {
                    id: 10,
                    img: "works/10.jpg",
                    name: "Caminandes: Llamigos (Rescore)",
                    description: "It's winter in Patagonia, food is getting scarce. Koro the Llama engages with Oti the pesky penguin in an epic fight over that last tasty berry!",
                    youtube: "mEcKY9gbUx4",
                },
                {
                    id: 11,
                    img: "works/11.jpg",
                    name: "It Will Find You",
                    description: `It Will Find You is a first person narrative driven horror experience, with a focus on environmental interaction and progressive narrative through game-play. It Will Find You aims to provide an immersive experience where a dark, twisting narrative evolves in tandem with your decisions. Developed by <a href="https://twitter.com/heraldofloco" class="text-yellow hover:underline" rel="nofollow">Mega Sloth Studios</a>.`,
                    youtube: null
                },
                {
                    id: 12,
                    img: "works/12.png",
                    name: "Rescue Heroes",
                    description: `Stop-motion animated series for kids produced by <a class="text-yellow hover:underline" href="https://www.moonbug.com/" target="_blank" rel="noopener">Moonbug Entertainment</a>. Based on the Fisher-Price&reg; toy line of "Rescue Heroes", this online series tracks the adventures of a team of emergency responders who rescue people from various disasters.`,
                    youtube: "KJltqNGhWns",
                    youtube_playlist: "https://www.youtube.com/playlist?list=PLKCNCfD_4af-UtKntqcAQsPZykytye5lU",
                },
                {
                    id: 13,
                    img: "works/13.jpg",
                    name: "The Oceanmaker (Rescore)",
                    description: "In a post-apocalyptic world where all the water and seas have disappeared, a courageous young female pilot fights against vicious sky pirates for control over the last remaining source of water, the clouds.",
                    youtube: null,
                    vimeo: ["229325041"],
                },
                {
                    id: 14,
                    img: "works/14.jpeg",
                    name: "Wallace & Gromit: A Grand Day Out (Rescore)",
                    description: "Wallace, after finding no cheese in the kitchen, decides that he and Gromit should go to a place known for its cheese. A glance out the window at the night sky gives him the idea to travel to the moon, since, according to Wallace, everybody knows that the moon is made of cheese.",
                    youtube: null,
                    vimeo: ["239726433"],
                },
                {
                    id: 15,
                    img: "works/15.jpg",
                    name: "BBC Hidden Kingdoms: Lizard Attack, Mouse Leaves Home (Rescore)",
                    description: `Lizard Attack is a part of a dramatized natural history series by BBC called Hidden Kingdoms. Set in the African savannah, it tells the story about the encounter between a small, mouse-sized and long-nosed insectivore called elephant-shrew (otherwise known as sengi), and its nemesis, the monitor lizard.</br>Mouse leaves home, is the story about the grasshopper mouse, who specializes in venomous prey, especially bark scorpions, the only scorpion in the USA capable of killing a human.`,
                    youtube: null,
                    vimeo: [
                        "239716421",
                        "239732509",
                    ]
                },
            ],
            selected: null
        }
    },

    computed: {
        shouldDisplayOverlay() {
            return this.selected
        }
    },

    methods: {
        showOverlay(work) {
            this.selected = work
        },
        closeOverlay() {
            this.selected = null
        }
    }
}
</script>

<style>
.video-responsive{
overflow:hidden;
padding-bottom:56.25%;
position:relative;
height:0;
}
.video-responsive iframe{
left:0;
top:0;
height:100%;
width:100%;
position:absolute;
}
</style>