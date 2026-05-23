<template>
  <div v-if="works" class="fixed inset-0 bg-black">
    <!-- Navigation Bar -->
    <Navigation :is-preview-playing="isPreviewPlaying" />

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
          v-if="backgroundWork"
          :src="`/${backgroundWork.img}`"
          class="w-full h-full object-cover blur-2xl"
          :class="{
            'opacity-100 scale-100': currentIndex === index,
            'opacity-0 scale-105': currentIndex !== index,
            'transition-all duration-500 ease-out': isNavigatingWithArrows,
            'transition-all duration-400 ease-in-out': !isNavigatingWithArrows,
            'background-fade-in':
              isNavigatingWithArrows && currentIndex === index,
          }"
          loading="lazy"
          :alt="backgroundWork.name"
        />

        <!-- Video Players Container -->
        <div
          v-if="hasVideo(work)"
          class="absolute inset-0 transition-opacity duration-500 video-container"
          :class="{
            'opacity-0': !isPreviewPlaying, // Show video when preview is playing
            'opacity-100': isPreviewPlaying,
          }"
          style="width: 100vw; height: 100vh"
          @click="stopPreview"
        >
          <!-- YouTube Player -->
          <WorksSlideshowYoutubeSlidePlayer
            v-if="work.youtube && work.youtube[0]"
            :video-id="work.youtube[0]"
            :player-index="index"
            :origin="origin"
            class="youtube-player"
            @ready="(player, i) => registerYoutubePlayer(i, player)"
            @ended="onPlayerEnded"
          />

          <!-- Vimeo Player -->
          <WorksSlideshowVimeoSlidePlayer
            v-if="work.vimeo && work.vimeo[0]"
            :video-id="work.vimeo[0]"
            :player-index="index"
            class="vimeo-player"
            @ready="(player, i) => registerVimeoPlayer(i, player)"
          />
        </div>

        <!-- Overlay Content -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-500"
          :class="{
            'opacity-100': !isPreviewPlaying, // Hide overlay when preview is playing
            'opacity-0': isPreviewPlaying,
          }"
          @mouseenter="handleHover(true)"
          @mouseleave="handleHover(false)"
          @mousemove="() => {}"
        >
          <!-- Work Details Container -->
          <div
            class="absolute inset-0 flex items-center justify-center transition-all duration-500"
            :class="{
              'opacity-100': previewIndex === null, // Always show work details when autoplay is disabled
              'opacity-0': previewIndex !== null, // Hide main content when preview is active
            }"
          >
            <!-- Desktop Three-Column Layout -->
            <div class="hidden md:flex w-full h-full items-center">
              <!-- Left Arrow Column -->
              <div class="w-24 flex items-center justify-center">
                <button
                  aria-label="Previous Slide"
                  class="text-white/90 hover:text-white text-6xl transition-all duration-500 nav-arrow nav-arrow-left group"
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
                  <div
                    class="relative flex items-center justify-center w-full h-full"
                  >
                    <font-awesome-icon :icon="['fas', 'chevron-left']" />
                  </div>
                </button>
              </div>

              <!-- Main Content Column -->
              <div
                class="flex-1 flex justify-center items-center min-h-[50vh] px-8"
              >
                <div
                  class="w-full max-w-4xl mx-auto relative flex flex-col md:flex-row items-start gap-8 md:gap-12"
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

                      <!-- Play Preview Button - Outside scrollable area -->
                      <div class="mt-6 flex justify-start">
                        <button
                          v-if="hasVideo(work)"
                          @click="playPreview"
                          class="flex items-center gap-3 px-4 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white font-medium transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-lg hover:shadow-white/20 group"
                          title="Watch Video"
                        >
                          <div
                            class="flex items-center justify-center transition-all duration-300"
                          >
                            <font-awesome-icon
                              :icon="['fas', 'play']"
                              class="text-sm"
                            />
                          </div>
                          <span>Watch</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Arrow Column -->
              <div class="w-24 flex items-center justify-center">
                <button
                  aria-label="Next Slide"
                  class="text-white/90 hover:text-white text-6xl transition-all duration-500 nav-arrow nav-arrow-right group"
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
                  <div
                    class="relative flex items-center justify-center w-full h-full"
                  >
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />
                  </div>
                </button>
              </div>
            </div>

            <!-- Mobile Layout (unchanged) -->
            <div
              class="md:hidden w-full flex justify-center items-center min-h-[50vh]"
            >
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

                    <!-- Play Preview Button - Outside scrollable area -->
                    <div class="mt-6 flex justify-start">
                      <button
                        v-if="hasVideo(work)"
                        @click="playPreview"
                        class="flex items-center gap-3 px-4 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white font-medium transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-lg hover:shadow-white/20 group"
                        title="Watch Video"
                      >
                        <div
                          class="flex items-center justify-center transition-all duration-300"
                        >
                          <font-awesome-icon
                            :icon="['fas', 'play']"
                            class="text-sm"
                          />
                        </div>
                        <span>Watch</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Preview Content -->
          <div
            class="absolute inset-0 flex items-center justify-center transition-all duration-500 z-10 bg-black/80"
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
                    v-if="previewWork"
                    :src="`/${previewWork.img}`"
                    class="w-full h-full object-cover"
                    loading="eager"
                    :alt="previewWork.name"
                  />
                  <div
                    class="absolute inset-0 border border-white/10 rounded-lg"
                  ></div>
                </div>

                <!-- Preview Title -->
                <div class="mt-4 text-center">
                  <h3 v-if="previewWork" class="text-xl font-bold text-white">
                    {{ previewWork.name }}
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

      <!-- Video Control Buttons -->
      <div
        v-if="isPreviewPlaying"
        class="fixed top-8 right-4 md:right-8 flex items-center gap-4 z-[300]"
      >
        <!-- Rewind Video Button -->
        <button
          aria-label="Rewind Video"
          class="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white font-medium transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
          @click="rewindVideo"
          title="Rewind Video"
        >
          <div
            class="flex items-center justify-center transition-all duration-300"
          >
            <font-awesome-icon :icon="['fas', 'backward']" class="text-sm" />
          </div>
        </button>

        <!-- Close Video Button -->
        <button
          aria-label="Close Video"
          class="flex items-center gap-3 px-4 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white font-medium transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
          @click="stopPreview"
          title="Close Video"
        >
          <div
            class="flex items-center justify-center transition-all duration-300"
          >
            <font-awesome-icon :icon="['fas', 'xmark']" class="text-sm" />
          </div>
          <span>Close</span>
        </button>
      </div>

      <!-- Slide Indicators -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-[150] hidden md:flex"
      >
        <!-- Countdown Label -->
        <!-- <div
          v-if="
            isHovered &&
            hasVideo(works[currentIndex]) &&
            countdown > 0 &&
            countdown <= 3
          "
          class="bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
        >
          Autoplay in {{ countdown }} seconds
        </div> -->

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
              @click="onIndicatorClick(index)"
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
      <!-- <div class="fixed bottom-24 left-1/2 -translate-x-1/2 z-[200] md:hidden">
        <div
          v-if="
            hasVideo(works[currentIndex]) && countdown > 0 && countdown <= 3
          "
          class="bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
        >
          Autoplay in {{ countdown }} seconds
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlideshowNav } from './works-slideshow/useSlideshowNav'
import { useVideoPlayers } from './works-slideshow/useVideoPlayers'
import { useWorksData } from './works-slideshow/useWorksData'

const TITLE_LENGTH_THRESHOLD = 30

const { works } = useWorksData()

const {
  currentIndex,
  previewIndex,
  hoveredIndicatorIndex,
  isNavigatingWithArrows,
  activeIndexForBackground,
  nextSlide: navNext,
  prevSlide: navPrev,
  showPreview,
  handleIndicatorsEnter,
  handleIndicatorsLeave,
  setHoveredIndicator,
  handleIndicatorClick,
  handleNavHover,
  isNavHovered,
  setupKeyboardListener,
} = useSlideshowNav(works)

const backgroundWork = computed(() => {
  if (!works.value?.length) return undefined
  return works.value[activeIndexForBackground.value]
})

const previewWork = computed(() => {
  if (previewIndex.value === null || !works.value?.length) return undefined
  return works.value[previewIndex.value]
})

const {
  isPreviewPlaying,
  isHovered,
  origin,
  hasVideo,
  registerYoutubePlayer,
  registerVimeoPlayer,
  playPreview,
  stopPreview,
  rewindVideo,
  onPlayerEnded,
  onNavigate,
} = useVideoPlayers(works, currentIndex)

setupKeyboardListener(onNavigate)

function nextSlide() {
  navNext(onNavigate)
}

function prevSlide() {
  navPrev(onNavigate)
}

function onIndicatorClick(index: number) {
  handleIndicatorClick(index, onNavigate)
}

function handleHover(isHoveredValue: boolean) {
  if (isNavHovered.value || previewIndex.value !== null) return
  isHovered.value = isHoveredValue
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
  cursor: pointer;
  pointer-events: auto;
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
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
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
  position: relative;
}

.nav-arrow:hover {
  transform: scale(1.1);
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

/* Background Image Navigation Animation */
@keyframes backgroundFadeIn {
  0% {
    opacity: 0;
    transform: scale(1.1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.background-fade-in {
  animation: backgroundFadeIn 0.6s ease-out;
}
</style>
