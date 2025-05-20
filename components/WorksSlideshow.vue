<template>
  <div class="fixed inset-0 bg-black" v-if="works">
    <!-- Main Slideshow Container -->
    <div class="relative w-full h-full">
      <!-- Current Slide -->
      <div
        v-for="(work, index) in works"
        :key="work.id"
        v-show="currentIndex === index"
        class="absolute inset-0 transition-opacity duration-500"
        :class="{ 'opacity-100': currentIndex === index, 'opacity-0': currentIndex !== index }"
      >
        <!-- Background Image -->
        <NuxtImg
          :src="`/${work.img}`"
          class="w-full h-full object-cover transition-opacity duration-500"
          :class="{ 'opacity-0': isHovered && (work.youtube || work.vimeo), 'opacity-100': !isHovered || (!work.youtube && !work.vimeo) }"
          loading="lazy"
          :alt="work.name"
        />

        <!-- Video Players Container -->
        <div
          v-if="work.youtube || work.vimeo"
          class="absolute inset-0 transition-opacity duration-500 video-container"
          :class="{ 'opacity-100': isHovered, 'opacity-0': !isHovered }"
          style="width: 100vw; height: 100vh;"
        >
          <!-- YouTube Player -->
          <youtube
            v-if="work.youtube"
            :video-id="work.youtube"
            :player-vars="{
              autoplay: 0,
              controls: 0,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
              iv_load_policy: 3,
              playsinline: 1,
              mute: 1,
              enablejsapi: 1,
              origin: origin,
              fs: 0
            }"
            class="youtube-player"
            @ready="onPlayerReady($event, index)"
            @ended="onPlayerEnded(index)"
            ref="youtubePlayers"
          />

          <!-- Vimeo Player -->
          <vimeo-player
            v-if="work.vimeo"
            :video-id="work.vimeo"
            :options="{
              autoplay: false,
              controls: false,
              responsive: true,
              dnt: true,
              background: true,
              playsinline: true,
              muted: true,
              loop: true
            }"
            class="vimeo-player"
            @ready="onVimeoReady($event, index)"
            ref="vimeoPlayers"
          />
        </div>

        <!-- Overlay Content -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          @mouseenter="handleHover(true)"
          @mouseleave="handleHover(false)"
        >
          <!-- Work Details (Always Visible, Hidden on Hover) -->
          <div
            class="absolute bottom-0 left-0 right-0 p-8 transition-all duration-300"
            :class="{ 'translate-y-4 opacity-0': isHovered, 'translate-y-0 opacity-100': !isHovered }"
          >
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">{{ work.name }}</h2>
            <p class="text-lg text-white/90 max-w-2xl">{{ work.description }}</p>

            <!-- Platforms -->
            <div v-if="work.platforms" class="flex gap-4 mt-4">
              <div v-for="platform in work.platforms" :key="platform" class="text-2xl text-white">
                <font-awesome-icon v-if="platform !== 'netflix'" :icon="['fab', platform]"/>
                <img v-else src="/icons/netflix.svg" alt="Netflix" class="w-6 h-6">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button
        @click="prevSlide"
        class="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-4xl transition-colors z-50"
      >
        <font-awesome-icon :icon="['fas', 'chevron-left']"/>
      </button>
      <button
        @click="nextSlide"
        class="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-4xl transition-colors z-50"
      >
        <font-awesome-icon :icon="['fas', 'chevron-right']"/>
      </button>

      <!-- Slide Indicators -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        <button
          v-for="(work, index) in works"
          :key="work.id"
          @click="currentIndex = index"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="currentIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      isHovered: false,
      works: null,
      youtubePlayers: [],
      vimeoPlayers: []
    }
  },

  computed: {
    origin() {
      return process.client ? window.location.origin : ''
    }
  },

  async mounted() {
    // Import works data from the Works component
    const WorksComponent = await import('./Works.vue')
    this.works = WorksComponent.default.data().works.sort((a, b) => a.order - b.order)
  },

  methods: {
    nextSlide() {
      this.stopCurrentVideo()
      this.currentIndex = (this.currentIndex + 1) % this.works.length
    },
    prevSlide() {
      this.stopCurrentVideo()
      this.currentIndex = (this.currentIndex - 1 + this.works.length) % this.works.length
    },
    handleHover(isHovered) {
      this.isHovered = isHovered
      if (isHovered) {
        this.playCurrentVideo()
      } else {
        this.stopCurrentVideo()
      }
    },
    onPlayerReady(event, index) {
      this.youtubePlayers[index] = event.target
    },
    onVimeoReady(player, index) {
      this.vimeoPlayers[index] = player
    },
    playCurrentVideo() {
      const currentWork = this.works[this.currentIndex]
      if (currentWork.youtube && this.youtubePlayers[this.currentIndex]) {
        this.youtubePlayers[this.currentIndex].playVideo()
      } else if (currentWork.vimeo && this.vimeoPlayers[this.currentIndex]) {
        this.vimeoPlayers[this.currentIndex].play()
      }
    },
    stopCurrentVideo() {
      if (this.youtubePlayers[this.currentIndex]) {
        this.youtubePlayers[this.currentIndex].pauseVideo()
      }
      if (this.vimeoPlayers[this.currentIndex]) {
        this.vimeoPlayers[this.currentIndex].pause()
      }
    },
    onPlayerEnded(index) {
      if (this.youtubePlayers[index]) {
        this.youtubePlayers[index].seekTo(0)
        this.youtubePlayers[index].playVideo()
      }
    }
  }
}
</script>

<style scoped>
/* Add touch swipe support */
@media (hover: none) {
  .overlay-content {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Video container */
.video-container {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  overflow: hidden;
  z-index: 1;
}

/* YouTube Player */
:deep(.youtube-player) {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  pointer-events: none;
  z-index: 1;
}

:deep(.youtube-player iframe) {
  position: fixed !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 177.77777778vh !important; /* 16:9 aspect ratio */
  height: 56.25vw !important; /* 16:9 aspect ratio */
  min-width: 100vw !important;
  min-height: 100vh !important;
  pointer-events: none;
  z-index: 1;
}

/* Vimeo Player */
:deep(.vimeo-player) {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  pointer-events: none;
  z-index: 1;
}

:deep(.vimeo-player iframe) {
  position: fixed !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 177.77777778vh !important; /* 16:9 aspect ratio */
  height: 56.25vw !important; /* 16:9 aspect ratio */
  min-width: 100vw !important;
  min-height: 100vh !important;
  pointer-events: none;
  z-index: 1;
}

/* Ensure overlay content stays on top */
.absolute.inset-0.bg-gradient-to-t {
  z-index: 2;
}

/* Browser-specific fixes */
@supports (-webkit-touch-callout: none) {
  /* Safari-specific styles */
  :deep(.youtube-player iframe),
  :deep(.vimeo-player iframe) {
    width: 177.77777778vh !important;
    height: 56.25vw !important;
    min-width: 100vw !important;
    min-height: 100vh !important;
    transform: translate(-50%, -50%) !important;
  }
}
</style>