<template>
  <div class="fixed inset-0 bg-black" v-if="works">
    <!-- Navigation Bar -->
    <div
      class="fixed top-0 left-0 right-0 z-[200] transition-all duration-500"
      :class="{ 'opacity-0': !isHovered && isAutoPlaying, 'opacity-100': isHovered || !isAutoPlaying }"
    >
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-[20px] supports-[backdrop-filter]:bg-white/5"></div>
      <div class="relative container mx-auto px-6 py-4">
        <div class="flex items-center">
          <div class="text-white">
            <h1 class="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Stefanos Yiassemides
            </h1>
            <p class="text-sm text-white/70 font-medium tracking-wide mt-0.5">
              Music Composer
            </p>
          </div>
        </div>
      </div>
    </div>

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
          :class="{ 'opacity-100': isHovered || !hasVideo(work) || !isAutoPlaying, 'opacity-0': !isHovered && hasVideo(work) && isAutoPlaying }"
          loading="lazy"
          :alt="work.name"
        />

        <!-- Video Players Container -->
        <div
          v-if="hasVideo(work)"
          class="absolute inset-0 transition-opacity duration-500 video-container"
          :class="{ 'opacity-0': isHovered || !isAutoPlaying, 'opacity-100': !isHovered && isAutoPlaying }"
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
          :class="{ 'opacity-100': isHovered || !hasVideo(work) || !isAutoPlaying, 'opacity-0': !isHovered && hasVideo(work) && isAutoPlaying }"
          @mouseenter="handleHover(true)"
          @mouseleave="handleHover(false)"
          @mousemove="handleMouseMove"
        >
          <!-- Work Details Container -->
          <div
            class="absolute inset-0 flex items-center justify-center transition-all duration-500"
            :class="{ 'opacity-100': isHovered || !hasVideo(work) || !isAutoPlaying, 'opacity-0': !isHovered && hasVideo(work) && isAutoPlaying }"
          >
            <!-- Content Wrapper -->
            <div class="w-full max-w-3xl mx-auto px-8 md:px-16 relative">
              <!-- Title and Description -->
              <div class="mb-6 md:mb-8">
                <h2 class="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight pr-12 md:pr-0">{{ work.name }}</h2>
                <p class="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed" v-html="work.description"></p>
              </div>

              <!-- Platforms -->
              <div v-if="work.platforms" class="flex gap-4 items-center">
                <div v-for="platform in work.platforms" :key="platform"
                     class="text-xl md:text-2xl text-white/90 hover:text-white transition-colors">
                  <font-awesome-icon v-if="platform !== 'netflix'" :icon="['fab', platform]"/>
                  <img v-else src="/icons/netflix.svg" alt="Netflix" class="w-5 h-5 md:w-6 md:h-6">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation Arrows -->
      <div class="fixed bottom-8 left-0 right-0 flex justify-center items-center gap-4 z-[200] md:hidden">
        <button
          class="text-white/90 hover:text-white text-3xl transition-all duration-300 nav-arrow nav-arrow-left group"
          @click="prevSlide"
          aria-label="Previous Slide"
        >
          <div class="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>
          <div class="relative flex items-center justify-center w-full h-full">
            <font-awesome-icon :icon="['fas', 'chevron-left']"/>
          </div>
        </button>
        <button
          class="text-white/90 hover:text-white text-3xl transition-all duration-300 nav-arrow nav-arrow-right group"
          @click="nextSlide"
          aria-label="Next Slide"
        >
          <div class="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>
          <div class="relative flex items-center justify-center w-full h-full">
            <font-awesome-icon :icon="['fas', 'chevron-right']"/>
          </div>
        </button>
      </div>

      <!-- Desktop Navigation Arrows -->
      <div class="hidden md:block">
        <button
          class="fixed left-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-6xl transition-all duration-300 z-[200] nav-arrow nav-arrow-left group"
          @click="prevSlide"
          aria-label="Previous Slide"
        >
          <div class="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md transform -scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>
          <div class="relative flex items-center justify-center w-full h-full">
            <font-awesome-icon :icon="['fas', 'chevron-left']"/>
          </div>
        </button>
        <button
          class="fixed right-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-6xl transition-all duration-300 z-[200] nav-arrow nav-arrow-right group"
          @click="nextSlide"
          aria-label="Next Slide"
        >
          <div class="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>
          <div class="relative flex items-center justify-center w-full h-full">
            <font-awesome-icon :icon="['fas', 'chevron-right']"/>
          </div>
        </button>
      </div>

      <!-- Slide Indicators -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-[150] hidden md:flex">
        <!-- Countdown Label -->
        <div
          v-if="isHovered && hasVideo(works[currentIndex]) && countdown > 0 && countdown <= 3"
          class="bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
        >
          Autoplay in {{ countdown }} seconds
        </div>

        <!-- Indicators Container -->
        <div class="flex gap-2 slide-indicators">
          <div
            v-for="(work, index) in works"
            :key="work.id"
            class="relative"
          >
            <!-- Indicator Button -->
            <button
              :class="currentIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'"
              class="w-3 h-3 rounded-full border-2 border-white shadow-lg transition-all duration-300 focus:outline-none backdrop-blur-sm"
              @click="currentIndex = index"
              @mouseenter="showPreview(index)"
              @mouseleave="hidePreview(index)"
            />

            <!-- Preview Popup -->
            <div
              v-show="previewIndex === index"
              class="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300"
              :class="{
                'opacity-100 translate-y-0': previewIndex === index,
                'opacity-0 translate-y-2': previewIndex !== index
              }"
            >
              <!-- Glass Effect Background -->
              <div class="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 backdrop-blur-md"></div>

              <!-- Preview Content -->
              <div class="relative">
                <!-- Preview Image -->
                <div class="relative w-full h-24 overflow-hidden">
                  <NuxtImg
                    :src="`/${work.img}`"
                    class="w-full h-full object-cover"
                    loading="lazy"
                    :alt="work.name"
                  />
                  <!-- Image Overlay Gradient -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                <!-- Preview Title -->
                <div class="p-2 text-center">
                  <h3 class="text-sm font-medium text-white truncate">{{ work.name }}</h3>
                </div>

                <!-- Arrow Pointer -->
                <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-black/90 transform rotate-45 backdrop-blur-md"></div>
              </div>
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
      currentIndex: 0,
      isHovered: true,
      works: null,
      youtubePlayers: [],
      vimeoPlayers: [],
      autoPlayTimer: null,
      isAutoPlaying: false,
      hasStartedAutoplay: false,
      inactivityTimer: null,
      playAttempts: 0,
      countdown: 0,
      countdownTimer: null,
      lastMouseMove: Date.now(),
      mouseMoveTimer: null,
      previewIndex: null,
      previewTimer: null
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

    // Add touch event listeners with passive option
    const overlay = document.querySelector('.overlay-content')
    if (overlay) {
      overlay.addEventListener('touchstart', this.handleTouchStart, { passive: true })
      overlay.addEventListener('touchmove', this.handleTouchMove, { passive: true })
      overlay.addEventListener('touchend', this.handleTouchEnd, { passive: true })
    }

    // Start inactivity timer for first slide
    this.$nextTick(() => {
      const currentWork = this.works[this.currentIndex]
      if (this.hasVideo(currentWork)) {
        console.log('Starting inactivity timer for first slide')
        this.inactivityTimer = setTimeout(() => {
          if (!document.hidden && document.hasFocus()) {
            console.log('Inactivity timer completed, starting video')
            this.isAutoPlaying = true
            this.hasStartedAutoplay = true
            this.isHovered = false
            // Try to play the video multiple times to ensure it starts
            this.playCurrentVideo()
            // Add additional retry attempts with increasing delays
            setTimeout(() => this.playCurrentVideo(), 1000)
            setTimeout(() => this.playCurrentVideo(), 2000)
            setTimeout(() => this.playCurrentVideo(), 3000)
          }
        }, 3000)
      }
    })
  },

  beforeDestroy() {
    // Remove keyboard event listener
    window.removeEventListener('keydown', this.handleKeyDown)

    // Remove visibility change listener
    document.removeEventListener('visibilitychange', this.handleVisibilityChange)

    // Remove window blur/focus listeners
    window.removeEventListener('blur', this.handleWindowBlur)
    window.removeEventListener('focus', this.handleWindowFocus)

    // Remove touch event listeners
    const overlay = document.querySelector('.overlay-content')
    if (overlay) {
      overlay.removeEventListener('touchstart', this.handleTouchStart)
      overlay.removeEventListener('touchmove', this.handleTouchMove)
      overlay.removeEventListener('touchend', this.handleTouchEnd)
    }

    // Clear all timers
    if (this.autoPlayTimer) {
      clearTimeout(this.autoPlayTimer)
    }
    if (this.inactivityTimer) {
      clearTimeout(this.inactivityTimer)
    }
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer)
    }
    if (this.mouseMoveTimer) {
      clearTimeout(this.mouseMoveTimer)
    }
    if (this.previewTimer) {
      clearTimeout(this.previewTimer)
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
    resetAutoPlay() {
      // Clear existing timers
      if (this.autoPlayTimer) {
        clearTimeout(this.autoPlayTimer)
        this.autoPlayTimer = null
      }
      if (this.inactivityTimer) {
        clearTimeout(this.inactivityTimer)
        this.inactivityTimer = null
      }
      if (this.countdownTimer) {
        clearInterval(this.countdownTimer)
        this.countdownTimer = null
      }
      if (this.mouseMoveTimer) {
        clearTimeout(this.mouseMoveTimer)
        this.mouseMoveTimer = null
      }
      if (this.previewTimer) {
        clearTimeout(this.previewTimer)
        this.previewTimer = null
      }

      // Reset states
      this.isAutoPlaying = false
      this.isHovered = true
      this.hasStartedAutoplay = false
      this.countdown = 0
      this.previewIndex = null

      // Start new timer if current work has video
      const currentWork = this.works[this.currentIndex]
      if (this.hasVideo(currentWork)) {
        this.startInactivityTimer()
      } else {
        // Keep overlay visible for slides without video
        this.isHovered = true
      }
    },
    startInactivityTimer() {
      // Clear any existing timer
      if (this.inactivityTimer) {
        clearTimeout(this.inactivityTimer)
      }

      const currentWork = this.works[this.currentIndex]
      if (this.hasVideo(currentWork)) {
        this.inactivityTimer = setTimeout(() => {
          // Only start if tab is visible and window is focused
          if (!document.hidden && document.hasFocus()) {
            this.isAutoPlaying = true
            this.hasStartedAutoplay = true
            this.isHovered = false
            this.playCurrentVideo()
          }
        }, 3000) // Start after 3 seconds of inactivity
      }
    },
    handleMouseMove() {
      this.lastMouseMove = Date.now()

      // Clear existing mouse move timer
      if (this.mouseMoveTimer) {
        clearTimeout(this.mouseMoveTimer)
      }

      // If video is playing, pause it and show image
      if (this.isAutoPlaying) {
        this.stopCurrentVideo()
        this.isAutoPlaying = false
      }

      // Start new timer for mouse inactivity
      this.mouseMoveTimer = setTimeout(() => {
        if (this.isHovered && this.hasVideo(this.works[this.currentIndex])) {
          this.startCountdown()
        }
      }, 1000) // Wait 1 second of mouse inactivity before starting countdown
    },

    startCountdown() {
      // Don't start countdown if window is not visible or focused
      if (document.hidden || !document.hasFocus()) {
        return
      }

      // Clear any existing countdown
      if (this.countdownTimer) {
        clearInterval(this.countdownTimer)
      }

      this.countdown = 5
      this.countdownTimer = setInterval(() => {
        // Check window state before continuing countdown
        if (document.hidden || !document.hasFocus()) {
          clearInterval(this.countdownTimer)
          this.countdown = 0
          return
        }

        this.countdown--

        if (this.countdown <= 0) {
          clearInterval(this.countdownTimer)
          this.isHovered = false
          this.isAutoPlaying = true
          this.playCurrentVideo()
        }
      }, 1000)
    },

    handleHover(isHovered) {
      this.isHovered = isHovered
      const currentWork = this.works[this.currentIndex]

      if (isHovered && this.hasVideo(currentWork)) {
        // Pause video when hovering and show image
        this.stopCurrentVideo()
        this.isAutoPlaying = false

        // Clear any existing timers
        if (this.inactivityTimer) {
          clearTimeout(this.inactivityTimer)
        }
        if (this.countdownTimer) {
          clearInterval(this.countdownTimer)
        }

        // Start countdown
        this.startCountdown()
      } else if (!isHovered && this.hasVideo(currentWork)) {
        // Clear countdown when mouse leaves
        if (this.countdownTimer) {
          clearInterval(this.countdownTimer)
        }
        this.countdown = 0
      }
    },
    onPlayerReady(event, index) {
      console.log('YouTube player ready for index:', index)
      this.youtubePlayers[index] = event.target

      // If this is the current slide and we're ready to play, start the video
      if (index === this.currentIndex && this.isAutoPlaying) {
        console.log('Player ready for current slide, attempting to play')
        const player = event.target
        player.playVideo()

        // Add multiple retry attempts with increasing delays
        setTimeout(() => {
          if (player.getPlayerState() !== 1) {
            console.log('First retry attempt for video playback...')
            player.playVideo()
          }
        }, 1000)

        setTimeout(() => {
          if (player.getPlayerState() !== 1) {
            console.log('Second retry attempt for video playback...')
            player.playVideo()
          }
        }, 2000)

        setTimeout(() => {
          if (player.getPlayerState() !== 1) {
            console.log('Final retry attempt for video playback...')
            player.playVideo()
          }
        }, 3000)
      }
    },
    onVimeoReady(player, index) {
      this.vimeoPlayers[index] = player
      // If this is the first slide and we're ready to play, start the video
      if (index === 0 && this.isAutoPlaying) {
        this.playCurrentVideo()
      }
    },
    playCurrentVideo() {
      const currentWork = this.works[this.currentIndex]
      if (currentWork.youtube && currentWork.youtube[0] && this.youtubePlayers[this.currentIndex]) {
        try {
          const player = this.youtubePlayers[this.currentIndex]
          console.log('Attempting to play YouTube video for index:', this.currentIndex)

          // Force play the video
          player.playVideo()

          // Check if video started playing
          setTimeout(() => {
            const state = player.getPlayerState()
            console.log('Current player state:', state)
            if (state !== 1) { // 1 is playing
              console.log('Video not playing, retrying...')
              player.playVideo()
            }
          }, 1000)
        } catch (error) {
          console.error('Error playing YouTube video:', error)
        }
      } else if (currentWork.vimeo && currentWork.vimeo[0] && this.vimeoPlayers[this.currentIndex]) {
        try {
          this.vimeoPlayers[this.currentIndex].play()
          console.log('Playing Vimeo video')
        } catch (error) {
          console.error('Error playing Vimeo video:', error)
        }
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
      // Pause video and show overlay when window loses focus
      this.stopCurrentVideo()
      this.isHovered = true
      this.isAutoPlaying = false
      // Reset autoplay when window loses focus
      this.resetAutoPlay()
    },
    handleWindowFocus() {
      const currentWork = this.works[this.currentIndex]
      if (this.hasVideo(currentWork)) {
        // Start new inactivity timer when window gains focus
        this.startInactivityTimer()
      }
    },
    nextSlide() {
      this.stopCurrentVideo()
      this.currentIndex = (this.currentIndex + 1) % this.works.length
      this.resetAutoPlay()
    },
    prevSlide() {
      this.stopCurrentVideo()
      this.currentIndex = (this.currentIndex - 1 + this.works.length) % this.works.length
      this.resetAutoPlay()
    },
    handleTouchStart(event) {
      // Handle touch start
      this.handleHover(true)
    },
    handleTouchMove(event) {
      // Handle touch move
      // No need to prevent default as we're using passive listener
    },
    handleTouchEnd(event) {
      // Handle touch end
      this.handleHover(false)
    },
    handleVisibilityChange() {
      if (document.hidden) {
        // Pause video and show overlay when tab is hidden
        this.stopCurrentVideo()
        this.isHovered = true
        this.isAutoPlaying = false
        // Reset autoplay when tab is hidden
        this.resetAutoPlay()
      }
    },
    showPreview(index) {
      // Clear any existing preview timer
      if (this.previewTimer) {
        clearTimeout(this.previewTimer)
      }

      // Set preview index after a small delay to prevent flickering
      this.previewTimer = setTimeout(() => {
        this.previewIndex = index
      }, 50)
    },

    hidePreview(index) {
      // Clear any existing preview timer
      if (this.previewTimer) {
        clearTimeout(this.previewTimer)
      }

      // Hide preview after a small delay to allow for hover on the preview itself
      this.previewTimer = setTimeout(() => {
        this.previewIndex = null
      }, 100)
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
  .max-w-3xl {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  h2 {
    font-size: 1.75rem;
    line-height: 1.2;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 0.9375rem;
    line-height: 1.5;
  }
}

/* Navigation Arrows */
.nav-arrow {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border-radius: 50%;
  will-change: transform, opacity;
}

.nav-arrow:hover {
  transform: translateY(-50%);
}

.nav-arrow .absolute {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, transform;
}

.nav-arrow :deep(.fa-icon),
.nav-arrow :deep(svg) {
  font-size: 1.7rem !important;
  width: 1.7rem !important;
  height: 1.7rem !important;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
  position: relative;
  z-index: 1;
  will-change: transform;
}

/* Mobile Navigation Arrows */
@media (max-width: 767px) {
  .nav-arrow {
    width: 40px;
    height: 40px;
  }

  .nav-arrow :deep(.fa-icon),
  .nav-arrow :deep(svg) {
    font-size: 1rem !important;
    width: 1rem !important;
    height: 1rem !important;
  }

  .nav-arrow .absolute {
    opacity: 0;
  }

  .nav-arrow:hover {
    transform: none;
  }

  .nav-arrow:hover .absolute {
    opacity: 1;
  }
}

/* Desktop Navigation Arrows */
@media (min-width: 768px) {
  .nav-arrow {
    width: 64px;
    height: 64px;
  }

  .nav-arrow :deep(.fa-icon),
  .nav-arrow :deep(svg) {
    font-size: 1.7rem !important;
    width: 1.7rem !important;
    height: 1.7rem !important;
  }
}
</style>