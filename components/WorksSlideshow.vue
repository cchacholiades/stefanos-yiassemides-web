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
          :class="{ 'opacity-100': isHovered || !hasVideo(work), 'opacity-0': !isHovered && hasVideo(work) }"
          loading="lazy"
          :alt="work.name"
        />

        <!-- Video Players Container -->
        <div
          v-if="hasVideo(work)"
          class="absolute inset-0 transition-opacity duration-500 video-container"
          :class="{ 'opacity-0': isHovered, 'opacity-100': !isHovered }"
          style="width: 100vw; height: 100vh;"
        >
          <!-- YouTube Player -->
          <youtube
            v-if="work.youtube && work.youtube[0]"
            ref="youtubePlayers"
            :video-id="work.youtube[0]"
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
          />

          <!-- Vimeo Player -->
          <vimeo-player
            v-if="work.vimeo && work.vimeo[0]"
            ref="vimeoPlayers"
            :video-id="work.vimeo[0]"
            :options="{
              autoplay: false,
              controls: false,
              responsive: true,
              dnt: true,
              background: false,
              playsinline: true,
              muted: false,
              loop: true
            }"
            class="vimeo-player"
            @ready="onVimeoReady($event, index)"
          />
        </div>

        <!-- Overlay Content -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500"
          :class="{ 'opacity-100': isHovered, 'opacity-0': !isHovered }"
          @mouseenter="handleHover(true)"
          @mouseleave="handleHover(false)"
        >
          <!-- Work Details Container -->
          <div
            class="absolute inset-0 flex items-center justify-center transition-all duration-500"
            :class="{ 'opacity-100': isHovered, 'opacity-0': !isHovered }"
          >
            <!-- Content Wrapper -->
            <div class="w-full max-w-3xl mx-auto px-8">
              <!-- Title and Description -->
              <div class="mb-6">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">{{ work.name }}</h2>
                <p class="text-lg text-white/90 max-w-2xl leading-relaxed" v-html="work.description"></p>
              </div>

              <!-- Platforms -->
              <div v-if="work.platforms" class="flex gap-4 items-center">
                <div v-for="platform in work.platforms" :key="platform"
                     class="text-2xl text-white/90 hover:text-white transition-colors">
                  <font-awesome-icon v-if="platform !== 'netflix'" :icon="['fab', platform]"/>
                  <img v-else src="/icons/netflix.svg" alt="Netflix" class="w-6 h-6">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button
        class="fixed left-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-6xl transition-colors z-[200] nav-arrow nav-arrow-left"
        @click="prevSlide"
        aria-label="Previous Slide"
      >
        <font-awesome-icon :icon="['fas', 'chevron-left']"/>
      </button>
      <button
        class="fixed right-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-6xl transition-colors z-[200] nav-arrow nav-arrow-right"
        @click="nextSlide"
        aria-label="Next Slide"
      >
        <font-awesome-icon :icon="['fas', 'chevron-right']"/>
      </button>

      <!-- Slide Indicators -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-[150] slide-indicators">
        <button
          v-for="(work, index) in works"
          :key="work.id"
          :class="currentIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'"
          class="w-3 h-3 rounded-full border-2 border-white shadow-lg transition-all duration-300 focus:outline-none"
          @click="currentIndex = index"
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
      isHovered: true,
      works: null,
      youtubePlayers: [],
      vimeoPlayers: [],
      autoPlayTimer: null,
      isAutoPlaying: false
    }
  },

  computed: {
    origin() {
      return process.client ? window.location.origin : ''
    }
  },

  watch: {
    currentIndex() {
      // Reset auto-play when changing slides
      this.resetAutoPlay()
    }
  },

  async mounted() {
    // Import works data from the Works component
    const WorksComponent = await import('./Works.vue')
    this.works = WorksComponent.default.data().works.sort((a, b) => a.order - b.order)

    // Add keyboard event listener
    window.addEventListener('keydown', this.handleKeyDown)

    // Add visibility change listener
    document.addEventListener('visibilitychange', this.handleVisibilityChange)

    // Add window blur/focus listeners
    window.addEventListener('blur', this.handleWindowBlur)
    window.addEventListener('focus', this.handleWindowFocus)

    // Start auto-play timer for first slide
    this.resetAutoPlay()
  },

  beforeDestroy() {
    // Remove keyboard event listener
    window.removeEventListener('keydown', this.handleKeyDown)

    // Remove visibility change listener
    document.removeEventListener('visibilitychange', this.handleVisibilityChange)

    // Remove window blur/focus listeners
    window.removeEventListener('blur', this.handleWindowBlur)
    window.removeEventListener('focus', this.handleWindowFocus)

    // Clear auto-play timer
    if (this.autoPlayTimer) {
      clearTimeout(this.autoPlayTimer)
    }
  },

  methods: {
    handleKeyDown(event) {
      // Only handle arrow keys
      if (event.key === 'ArrowLeft') {
        this.prevSlide()
      } else if (event.key === 'ArrowRight') {
        this.nextSlide()
      }
    },
    hasVideo(work) {
      return (work.youtube && work.youtube.length > 0) || (work.vimeo && work.vimeo.length > 0)
    },
    nextSlide() {
      this.stopCurrentVideo()
      this.currentIndex = (this.currentIndex + 1) % this.works.length
    },
    prevSlide() {
      this.stopCurrentVideo()
      this.currentIndex = (this.currentIndex - 1 + this.works.length) % this.works.length
    },
    handleVisibilityChange() {
      if (document.hidden) {
        // Pause video when tab is not visible
        this.stopCurrentVideo()
      } else if (!this.isHovered && this.isAutoPlaying) {
        // Resume video when tab becomes visible again and auto-play was active
        this.playCurrentVideo()
      }
    },
    resetAutoPlay() {
      // Clear existing timer
      if (this.autoPlayTimer) {
        clearTimeout(this.autoPlayTimer)
        this.autoPlayTimer = null
      }

      // Reset auto-play state and show overlay
      this.isAutoPlaying = false
      this.isHovered = true

      // Start new timer if current work has video
      const currentWork = this.works[this.currentIndex]
      if (this.hasVideo(currentWork)) {
        this.autoPlayTimer = setTimeout(() => {
          this.isAutoPlaying = true
          this.isHovered = false // Hide overlay and show video
          this.playCurrentVideo()
        }, 5000)
      }
    },
    handleHover(isHovered) {
      this.isHovered = isHovered
      const currentWork = this.works[this.currentIndex]

      if (isHovered && this.hasVideo(currentWork)) {
        // Pause video when hovering
        this.stopCurrentVideo()
      } else if (!isHovered && this.hasVideo(currentWork) && this.isAutoPlaying) {
        // Resume video when not hovering and auto-play is active
        this.playCurrentVideo()
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
      if (currentWork.youtube && currentWork.youtube[0] && this.youtubePlayers[this.currentIndex]) {
        this.youtubePlayers[this.currentIndex].playVideo()
      } else if (currentWork.vimeo && currentWork.vimeo[0] && this.vimeoPlayers[this.currentIndex]) {
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
    },
    handleWindowBlur() {
      // Pause video when window loses focus
      this.stopCurrentVideo()
    },
    handleWindowFocus() {
      // Resume video when window regains focus and auto-play was active
      if (!this.isHovered && this.isAutoPlaying) {
        this.playCurrentVideo()
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
  width: 100vw !important;
  height: 100vh !important;
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
  width: 100vw !important;
  height: 100vh !important;
  pointer-events: none;
  z-index: 1;
}

/* Overlay Content Styles */
.absolute.inset-0.bg-gradient-to-t {
  z-index: 2;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0) 100%
  );
}

/* Slide Indicators */
.slide-indicators {
  z-index: 150 !important;
  margin-bottom: 1rem;
}

/* Responsive Adjustments */
@media (max-width: 640px) {
  .max-w-7xl {
    padding: 1.5rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1rem;
  }
}

.nav-arrow {
  background: rgba(0,0,0,0.3);
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  transition: background 0.2s;
}
.nav-arrow:hover {
  background: rgba(0,0,0,0.6);
}
.nav-arrow :deep(.fa-icon),
.nav-arrow :deep(svg) {
  font-size: 1.7rem !important;
  width: 1.7rem !important;
  height: 1.7rem !important;
}

@media (max-width: 640px) {
  .nav-arrow {
    width: 48px;
    height: 48px;
    font-size: 2rem;
  }
  .nav-arrow :deep(.fa-icon),
  .nav-arrow :deep(svg) {
    font-size: 1.2rem !important;
    width: 1.2rem !important;
    height: 1.2rem !important;
  }
}
</style>