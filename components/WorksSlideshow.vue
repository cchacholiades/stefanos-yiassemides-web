<template>
  <div v-if="works" class="fixed inset-0 bg-black">
    <!-- Navigation Bar -->
    <div
      class="fixed top-0 left-0 right-0 z-[200] transition-all duration-500"
      :class="{
        'opacity-0': !isHovered && isAutoPlaying,
        'opacity-100': isHovered || !isAutoPlaying,
      }"
    >
      <div class="relative container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="text-white flex flex-col">
            <h1
              class="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
            >
              Stefanos Yiassemides
            </h1>
            <p class="text-sm text-white/70 font-medium tracking-wide mt-0.5">
              Music Composer
            </p>
          </div>
          <div
            class="desktop-socials-bar hidden md:flex flex-wrap items-center gap-2 md:gap-4 mt-3 md:mt-0"
            @mouseenter="isSocialsBarHovered = true"
            @mouseleave="isSocialsBarHovered = false"
          >
            <a
              class="social-icon-link"
              href="https://soundcloud.com/stefanos-yiassemides"
              title="Stefanos Yiassemides on Soundcloud"
              target="_blank"
              rel="noopener"
              ><font-awesome-icon :icon="['fab', 'soundcloud']"
            /></a>
            <a
              class="social-icon-link"
              href="https://www.linkedin.com/in/stefanos-yiassemides-99870579"
              title="Stefanos Yiassemides on LinkedIn"
              target="_blank"
              rel="noopener"
              ><font-awesome-icon :icon="['fab', 'linkedin']"
            /></a>
            <a
              class="social-icon-link"
              href="https://www.instagram.com/stefyiassemidesmusic"
              title="Stefanos Yiassemides on Instagram"
              target="_blank"
              rel="noopener"
              ><font-awesome-icon :icon="['fab', 'instagram']"
            /></a>
            <a
              class="social-icon-link"
              href="https://www.imdb.com/name/nm9390509/"
              title="Stefanos Yiassemides on IMDB"
              target="_blank"
              rel="noopener"
              ><font-awesome-icon :icon="['fab', 'imdb']"
            /></a>
            <a
              class="social-icon-link"
              href="https://twitter.com/Stef_Yia_Music"
              title="Stefanos Yiassemides on Twitter"
              target="_blank"
              rel="noopener"
              ><font-awesome-icon :icon="['fab', 'twitter']"
            /></a>
          </div>
          <!-- Floating socials bar for mobile -->
        </div>
        <div
          class="mobile-socials-bar md:hidden"
          @mouseenter="isSocialsBarHovered = true"
          @mouseleave="isSocialsBarHovered = false"
        >
          <div class="flex items-center justify-center gap-2">
            <a
              class="social-icon-link social-icon-mobile"
              href="https://soundcloud.com/stefanos-yiassemides"
              title="Stefanos Yiassemides on Soundcloud"
              target="_blank"
              rel="noopener"
              ><font-awesome-icon :icon="['fab', 'soundcloud']"
            /></a>
            <a
              class="social-icon-link social-icon-mobile"
              href="https://www.linkedin.com/in/stefanos-yiassemides-99870579"
              title="Stefanos Yiassemides on LinkedIn"
              target="_blank"
              rel="noopener"
              ><font-awesome-icon :icon="['fab', 'linkedin']"
            /></a>
            <a
              class="social-icon-link social-icon-mobile"
              href="https://www.instagram.com/stefyiassemidesmusic"
              title="Stefanos Yiassemides on Instagram"
              target="_blank"
              rel="noopener"
              ><font-awesome-icon :icon="['fab', 'instagram']"
            /></a>
            <a
              class="social-icon-link social-icon-mobile"
              href="https://www.imdb.com/name/nm9390509/"
              title="Stefanos Yiassemides on IMDB"
              target="_blank"
              rel="noopener"
              ><font-awesome-icon :icon="['fab', 'imdb']"
            /></a>
            <a
              class="social-icon-link social-icon-mobile"
              href="https://twitter.com/Stef_Yia_Music"
              title="Stefanos Yiassemides on Twitter"
              target="_blank"
              rel="noopener"
              ><font-awesome-icon :icon="['fab', 'twitter']"
            /></a>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Slideshow Container -->
    <div class="relative w-full h-full">
      <!-- Current Slide -->
      <div
        v-for="(work, index) in works"
        v-show="currentIndex === index"
        :key="work.id"
        class="absolute inset-0"
        :class="{
          'opacity-100': currentIndex === index,
          'opacity-0': currentIndex !== index,
        }"
      >
        <!-- Background Image -->
        <NuxtImg
          v-if="works && works[activeIndexForBackground]"
          :src="`/${works[activeIndexForBackground].img}`"
          class="w-full h-full object-cover transition-opacity duration-500 blur-2xl"
          loading="lazy"
          :alt="works[activeIndexForBackground].name"
        />

        <!-- Video Players Container -->
        <div
          v-if="hasVideo(work)"
          class="absolute inset-0 transition-opacity duration-500 video-container"
          :class="{
            'opacity-0': isHovered || !isAutoPlaying,
            'opacity-100': !isHovered && isAutoPlaying,
          }"
          style="width: 100vw; height: 100vh"
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
              fs: 0,
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
              loop: true,
            }"
            class="vimeo-player"
            @ready="onVimeoReady($event, index)"
          />
        </div>

        <!-- Overlay Content -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-500"
          :class="{
            'opacity-100': isHovered || !hasVideo(work) || !isAutoPlaying,
            'opacity-0': !isHovered && hasVideo(work) && isAutoPlaying,
          }"
          @mouseenter="handleHover(true)"
          @mouseleave="handleHover(false)"
          @mousemove="handleMouseMove"
        >
          <!-- Work Details Container -->
          <div
            class="absolute inset-0 flex items-center justify-center transition-all duration-500"
            :class="{
              'opacity-100':
                (isHovered || !hasVideo(work) || !isAutoPlaying) &&
                previewIndex === null,
              'opacity-0':
                (!isHovered && hasVideo(work) && isAutoPlaying) ||
                previewIndex !== null,
            }"
          >
            <!-- Content Wrapper -->
            <div class="w-full flex justify-center items-center min-h-[50vh]">
              <div
                class="w-full max-w-4xl mx-auto px-8 md:px-16 relative flex flex-col md:flex-row items-start gap-8 md:gap-12"
              >
                <!-- Work Image -->
                <div class="w-[180px] flex-shrink-0">
                  <div
                    class="relative aspect-[2/3] rounded-lg overflow-hidden shadow-2xl"
                  >
                    <NuxtImg
                      :src="`/${work.img}`"
                      class="w-full h-full object-cover"
                      loading="lazy"
                      :alt="work.name"
                      width="180"
                      height="270"
                    />
                    <div
                      class="absolute inset-0 border border-white/10 rounded-lg"
                    ></div>
                  </div>
                </div>

                <!-- Content -->
                <div class="flex-1 space-y-8 pt-2 h-[270px] flex flex-col">
                  <!-- Title and Description -->
                  <div class="flex-1 flex flex-col">
                    <h2
                      class="font-bold text-white mb-4 tracking-tight pr-12 md:pr-0"
                      :class="{
                        'text-2xl md:text-4xl':
                          work.name.length > TITLE_LENGTH_THRESHOLD,
                        'text-3xl md:text-5xl':
                          work.name.length <= TITLE_LENGTH_THRESHOLD,
                      }"
                    >
                      {{ work.name }}
                    </h2>
                    <div class="overflow-y-auto pr-4 space-y-8">
                      <p
                        class="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed"
                        v-html="work.description"
                      ></p>

                      <!-- Platforms -->
                      <div
                        v-if="work.platforms"
                        class="flex gap-6 items-center"
                      >
                        <div
                          v-for="platform in work.platforms"
                          :key="platform"
                          class="text-xl md:text-2xl text-white/90 hover:text-white transition-colors"
                        >
                          <font-awesome-icon
                            v-if="platform !== 'netflix'"
                            :icon="['fab', platform]"
                          />
                          <img
                            v-else
                            src="/icons/netflix.svg"
                            alt="Netflix"
                            class="w-5 h-5 md:w-6 md:h-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Preview Content -->
          <div
            class="absolute inset-0 flex items-center justify-center transition-all duration-500"
            :class="{
              'opacity-100': previewIndex !== null,
              'opacity-0 pointer-events-none': previewIndex === null,
            }"
          >
            <div class="w-full max-w-4xl mx-auto px-8 md:px-16">
              <div
                class="relative w-64 mx-auto transform transition-all duration-300"
                :class="{
                  'scale-100': previewIndex !== null,
                  'scale-95': previewIndex === null,
                }"
              >
                <!-- Preview Image -->
                <div
                  class="relative w-full aspect-[2/3] rounded-lg overflow-hidden shadow-2xl"
                >
                  <NuxtImg
                    v-if="previewIndex !== null"
                    :src="`/${works[previewIndex]?.img}`"
                    class="w-full h-full object-cover"
                    loading="eager"
                    :alt="works[previewIndex]?.name"
                  />
                  <div
                    class="absolute inset-0 border border-white/10 rounded-lg"
                  ></div>
                </div>

                <!-- Preview Title -->
                <div class="mt-4 text-center">
                  <h3 class="text-xl font-bold text-white">
                    {{ works[previewIndex]?.name }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation Arrows -->
      <div
        class="fixed bottom-8 left-0 right-0 flex justify-center items-center gap-4 z-[200] md:hidden"
      >
        <button
          aria-label="Previous Slide"
          class="text-white/90 hover:text-white text-3xl transition-all duration-500 nav-arrow nav-arrow-left group"
          :class="{
            'opacity-100': previewIndex === null,
            'opacity-0': previewIndex !== null,
          }"
          @click="prevSlide"
          @mouseenter="handleNavHover(true)"
          @mouseleave="handleNavHover(false)"
        >
          <div
            class="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          ></div>
          <div class="relative flex items-center justify-center w-full h-full">
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
          </div>
        </button>
        <button
          aria-label="Next Slide"
          class="text-white/90 hover:text-white text-3xl transition-all duration-500 nav-arrow nav-arrow-right group"
          :class="{
            'opacity-100': previewIndex === null,
            'opacity-0': previewIndex !== null,
          }"
          @click="nextSlide"
          @mouseenter="handleNavHover(true)"
          @mouseleave="handleNavHover(false)"
        >
          <div
            class="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          ></div>
          <div class="relative flex items-center justify-center w-full h-full">
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
          </div>
        </button>
      </div>

      <!-- Desktop Navigation Arrows -->
      <div class="hidden md:block">
        <button
          aria-label="Previous Slide"
          class="fixed left-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-6xl transition-all duration-500 z-[200] nav-arrow nav-arrow-left group"
          :class="{
            'opacity-100': previewIndex === null,
            'opacity-0': previewIndex !== null,
          }"
          @click="prevSlide"
          @mouseenter="handleNavHover(true)"
          @mouseleave="handleNavHover(false)"
        >
          <div
            class="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md transform -scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          ></div>
          <div class="relative flex items-center justify-center w-full h-full">
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
          </div>
        </button>
        <button
          aria-label="Next Slide"
          class="fixed right-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-6xl transition-all duration-500 z-[200] nav-arrow nav-arrow-right group"
          :class="{
            'opacity-100': previewIndex === null,
            'opacity-0': previewIndex !== null,
          }"
          @click="nextSlide"
          @mouseenter="handleNavHover(true)"
          @mouseleave="handleNavHover(false)"
        >
          <div
            class="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          ></div>
          <div class="relative flex items-center justify-center w-full h-full">
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
          </div>
        </button>
      </div>

      <!-- Slide Indicators -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-[150] hidden md:flex"
      >
        <!-- Countdown Label -->
        <div
          v-if="
            isHovered &&
            hasVideo(works[currentIndex]) &&
            countdown > 0 &&
            countdown <= 3
          "
          class="bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
        >
          Autoplay in {{ countdown }} seconds
        </div>

        <!-- Indicators Container -->
        <div
          class="flex gap-3 slide-indicators"
          @mouseenter="handleIndicatorsEnter"
          @mouseleave="handleIndicatorsLeave"
        >
          <div
            v-for="(work, index) in works"
            :key="work.id"
            class="relative group flex items-center"
            @mouseenter="showPreview(index)"
            @mouseleave="setHoveredIndicator(index)"
          >
            <!-- Indicator Button -->
            <button
              :class="[
                currentIndex === index
                  ? 'bg-white scale-110 ring-4 ring-white/20'
                  : 'bg-white/30 hover:bg-white/50',
                hoveredIndicatorIndex === index && previewIndex !== null
                  ? 'scale-150 ring-4 ring-white/40'
                  : '',
                'w-3 h-3 rounded-full transition-all duration-150 ease-out',
              ]"
              class="focus:outline-none backdrop-blur-sm"
              @click="currentIndex = index"
            >
              <!-- Hover Circle -->
              <div
                :class="[
                  'absolute inset-0 rounded-full bg-white/10 transition-transform duration-150 ease-out',
                  hoveredIndicatorIndex === index && previewIndex !== null
                    ? 'scale-150 opacity-100'
                    : 'scale-0 opacity-0',
                ]"
              ></div>
            </button>

            <!-- Active Indicator Ring -->
            <div
              v-if="currentIndex === index"
              class="absolute inset-0 rounded-full ring-2 ring-white/30 animate-pulse"
            ></div>
          </div>
        </div>
      </div>

      <!-- Mobile Autoplay Label -->
      <div class="fixed bottom-24 left-1/2 -translate-x-1/2 z-[200] md:hidden">
        <div
          v-if="
            hasVideo(works[currentIndex]) && countdown > 0 && countdown <= 3
          "
          class="bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
        >
          Autoplay in {{ countdown }} seconds
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
      previewTimer: null,
      isIOS: false,
      hasUserInteracted: false,
      isCountingDown: false,
      isNavHovered: false,
      isSocialsBarHovered: false,
      TITLE_LENGTH_THRESHOLD: 30,
      hoveredIndicatorIndex: null,
    }
  },

  computed: {
    origin() {
      return process.client ? window.location.origin : ''
    },
    activeIndexForBackground() {
      return this.previewIndex !== null ? this.previewIndex : this.currentIndex
    },
  },

  watch: {
    currentIndex() {
      // Reset auto-play when changing slides
      this.resetAutoPlay()
    },
  },

  async mounted() {
    // Check if device is iOS
    this.isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream

    // Fetch works data from JSON file
    let data = []
    try {
      const response = await fetch('/works.json')
      data = await response.json()
      if (!Array.isArray(data)) {
        console.error('works.json did not return an array:', data)
        data = []
      }
    } catch (e) {
      console.error('Failed to fetch works.json:', e)
      data = []
    }
    this.works = data.sort((a, b) => a.order - b.order)

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
      overlay.addEventListener('touchstart', this.handleTouchStart, {
        passive: true,
      })
      overlay.addEventListener('touchmove', this.handleTouchMove, {
        passive: true,
      })
      overlay.addEventListener('touchend', this.handleTouchEnd, {
        passive: true,
      })
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
    document.removeEventListener(
      'visibilitychange',
      this.handleVisibilityChange
    )

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
      return (
        (work.youtube && work.youtube.length > 0) ||
        (work.vimeo && work.vimeo.length > 0)
      )
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
      this.isCountingDown = false

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
      // Don't start countdown if window is not visible, focused, already counting down, slider is hovered, or socials bar is hovered
      if (
        document.hidden ||
        !document.hasFocus() ||
        this.isCountingDown ||
        this.previewIndex !== null ||
        this.isSocialsBarHovered
      ) {
        return
      }

      // Clear any existing countdown
      if (this.countdownTimer) {
        clearInterval(this.countdownTimer)
        this.countdownTimer = null
      }

      this.isCountingDown = true
      this.countdown = 3
      this.countdownTimer = setInterval(() => {
        // Check window state before continuing countdown
        if (document.hidden || !document.hasFocus()) {
          clearInterval(this.countdownTimer)
          this.countdownTimer = null
          this.countdown = 0
          this.isCountingDown = false
          return
        }

        this.countdown--

        if (this.countdown <= 0) {
          clearInterval(this.countdownTimer)
          this.countdownTimer = null
          this.isCountingDown = false
          this.isHovered = false
          this.isAutoPlaying = true
          this.playCurrentVideo()
        }
      }, 1000)
    },

    handleNavHover(isHovered) {
      this.isNavHovered = isHovered
      // Don't trigger the main hover handler when hovering over nav arrows
    },

    handleHover(isHovered) {
      // Only handle hover if not hovering over nav arrows or slider indicators
      if (this.isNavHovered || this.previewIndex !== null) return

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
          this.countdownTimer = null
        }

        // Reset countdown state
        this.isCountingDown = false
        this.countdown = 0

        // Start countdown immediately
        this.startCountdown()
      } else if (!isHovered && this.hasVideo(currentWork)) {
        // Clear countdown when mouse leaves
        if (this.countdownTimer) {
          clearInterval(this.countdownTimer)
          this.countdownTimer = null
        }
        this.isCountingDown = false
        this.countdown = 0
      }
    },
    onPlayerReady(event, index) {
      this.youtubePlayers[index] = event.target

      // If this is the current slide and we're ready to play, start the video
      if (index === this.currentIndex && this.isAutoPlaying) {
        const player = event.target
        if (this.isIOS && !this.hasUserInteracted) {
          player.mute()
        } else if (this.isIOS && this.hasUserInteracted) {
          player.unMute()
        }
        player.playVideo()
        setTimeout(() => {
          if (player.getPlayerState() !== 1) {
            if (this.isIOS && !this.hasUserInteracted) {
              player.mute()
            } else if (this.isIOS && this.hasUserInteracted) {
              player.unMute()
            }
            player.playVideo()
          }
        }, 1000)
        setTimeout(() => {
          if (player.getPlayerState() !== 1) {
            if (this.isIOS && !this.hasUserInteracted) {
              player.mute()
            } else if (this.isIOS && this.hasUserInteracted) {
              player.unMute()
            }
            player.playVideo()
          }
        }, 2000)
        setTimeout(() => {
          if (player.getPlayerState() !== 1) {
            if (this.isIOS && !this.hasUserInteracted) {
              player.mute()
            } else if (this.isIOS && this.hasUserInteracted) {
              player.unMute()
            }
            player.playVideo()
          }
        }, 3000)
      }
    },
    onVimeoReady(player, index) {
      this.vimeoPlayers[index] = player
      if (index === 0 && this.isAutoPlaying) {
        if (this.isIOS && !this.hasUserInteracted) {
          player.setVolume(0)
        } else if (this.isIOS && this.hasUserInteracted) {
          player.setVolume(1)
        }
        this.playCurrentVideo()
      }
    },
    playCurrentVideo() {
      const currentWork = this.works[this.currentIndex]
      if (
        currentWork.youtube &&
        currentWork.youtube[0] &&
        this.youtubePlayers[this.currentIndex]
      ) {
        try {
          const player = this.youtubePlayers[this.currentIndex]
          if (this.isIOS && !this.hasUserInteracted) {
            player.mute()
          } else if (this.isIOS && this.hasUserInteracted) {
            player.unMute()
          }
          player.playVideo()
          setTimeout(() => {
            const state = player.getPlayerState()
            if (state !== 1) {
              if (this.isIOS && !this.hasUserInteracted) {
                player.mute()
              } else if (this.isIOS && this.hasUserInteracted) {
                player.unMute()
              }
              player.playVideo()
            }
          }, 1000)
        } catch (error) {}
      } else if (
        currentWork.vimeo &&
        currentWork.vimeo[0] &&
        this.vimeoPlayers[this.currentIndex]
      ) {
        try {
          const player = this.vimeoPlayers[this.currentIndex]
          if (this.isIOS && !this.hasUserInteracted) {
            player.setVolume(0)
          } else if (this.isIOS && this.hasUserInteracted) {
            player.setVolume(1)
          }
          player.play()
        } catch (error) {}
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
      this.currentIndex =
        (this.currentIndex - 1 + this.works.length) % this.works.length
      this.resetAutoPlay()
    },
    handleTouchStart(event) {
      // Handle touch start
      this.handleHover(true)
      this.hasUserInteracted = true
    },
    handleTouchMove(event) {
      // Handle touch move
      this.hasUserInteracted = true
    },
    handleTouchEnd(event) {
      // Handle touch end
      this.handleHover(false)
      this.hasUserInteracted = true
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
      this.previewIndex = index
      this.hoveredIndicatorIndex = index
    },
    setHoveredIndicator(index) {
      this.hoveredIndicatorIndex = index
    },
    handleIndicatorsEnter() {
      if (this.hoveredIndicatorIndex !== null) {
        this.previewIndex = this.hoveredIndicatorIndex
      }
      // Pause or reset autoplay/countdown when slider is hovered
      if (this.countdownTimer) {
        clearInterval(this.countdownTimer)
        this.countdownTimer = null
      }
      this.isCountingDown = false
      this.countdown = 0
      this.isAutoPlaying = false
      this.hasStartedAutoplay = false
    },
    handleIndicatorsLeave() {
      this.previewIndex = null
      this.hoveredIndicatorIndex = null
    },
  },
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
  padding: 0.5rem;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.slide-indicators button {
  position: relative;
  overflow: hidden;
  transform-origin: center;
  will-change: transform, background-color;
}

.slide-indicators button::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 9999px;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.2)
  );
  opacity: 0;
  transition: opacity 0.15s ease;
}

.slide-indicators button:hover::before {
  opacity: 1;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Work Image Styles */
.aspect-\[2\/3\] {
  aspect-ratio: 2/3;
}

.aspect-\[2\/3\] img {
  object-fit: cover;
  object-position: center;
}

/* Responsive Adjustments */
@media (max-width: 640px) {
  .max-w-4xl {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  h2 {
    font-size: 1.75rem;
    line-height: 1.2;
    margin-bottom: 1rem;
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
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

.social-icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
  border-radius: 9999px;
  transition: background 0.22s, color 0.22s, box-shadow 0.22s, transform 0.22s,
    border-radius 0.22s;
  padding: 0.25rem;
  position: relative;
  width: 4.5rem;
  height: 2.5rem;
}
.social-icon-link:hover {
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
  box-shadow: 0 2px 24px 0 rgba(255, 255, 255, 0.22),
    0 1.5px 12px 0 rgba(120, 180, 255, 0.13);
  filter: brightness(1.18) drop-shadow(0 0 8px #e0e7ef);
  transform: scale(1.13);
  z-index: 2;
  border-radius: 9999px;
  backdrop-filter: blur(8px) saturate(1.3);
  -webkit-backdrop-filter: blur(8px) saturate(1.3);
}
.social-icon-link:active {
  transform: scale(0.97);
  background: rgba(255, 255, 255, 0.18);
}

.social-icon-mobile {
  width: 2.5rem;
  height: 2rem;
  font-size: 1.2rem;
  padding: 0.15rem;
}
@media (max-width: 767px) {
  .social-icon-link {
    width: 2.5rem;
    height: 2rem;
    font-size: 1.2rem;
    padding: 0.15rem;
  }
}

.mobile-socials-bar {
  display: none;
}
@media (max-width: 767px) {
  .mobile-socials-bar {
    display: flex;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(50%);
    bottom: -1.2rem;
    width: max-content;
    background: rgba(255, 255, 255, 0.18);
    border-radius: 9999px;
    box-shadow: 0 2px 24px 0 rgba(255, 255, 255, 0.22),
      0 1.5px 12px 0 rgba(120, 180, 255, 0.13);
    backdrop-filter: blur(8px) saturate(1.3);
    -webkit-backdrop-filter: blur(8px) saturate(1.3);
    padding: 0.25rem 0.3rem;
    z-index: 210;
    align-items: center;
  }
  .social-icon-link {
    width: 2.5rem;
    height: 2rem;
    font-size: 1.2rem;
    padding: 0.15rem;
  }
}

@media (min-width: 768px) {
  .desktop-socials-bar {
    background: rgba(255, 255, 255, 0.13);
    border-radius: 9999px;
    box-shadow: 0 2px 24px 0 rgba(255, 255, 255, 0.13),
      0 1.5px 12px 0 rgba(120, 180, 255, 0.08);
    backdrop-filter: blur(8px) saturate(1.2);
    -webkit-backdrop-filter: blur(8px) saturate(1.2);
    padding: 0.3rem 0.5rem;
    border: 1.5px solid rgba(255, 255, 255, 0.18);
    align-items: center;
    transition: background 0.22s, box-shadow 0.22s, border 0.22s;
  }
  .social-icon-link {
    width: 4.5rem;
    height: 2.5rem;
    font-size: 2rem;
    padding: 0.25rem;
  }
}
</style>
