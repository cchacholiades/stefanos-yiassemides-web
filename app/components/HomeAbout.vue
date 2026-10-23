<template>
  <section
    class="about relative bg-black px-6 py-20 md:px-12 lg:px-16 shrink-0 snap-start snap-always flex items-center min-h-[100dvh]"
    aria-label="About"
  >
    <div class="about__inner mx-auto w-full max-w-3xl">
      <p class="brand-name mb-10 text-white/40">About</p>

      <div class="flex flex-col gap-8 md:flex-row md:gap-14">
        <div class="shrink-0">
          <NuxtImg
            src="/about-2.jpeg"
            alt="Stefanos Yiassemides"
            class="aspect-square w-36 rounded-full object-cover grayscale md:w-52"
            loading="lazy"
            width="448"
            height="448"
          />
        </div>

        <div class="space-y-5 text-base leading-relaxed text-white/75 md:text-lg">
          <p>
            I'm a versatile music composer based in Bristol, UK, with a lifelong
            passion for music and film that began at an early age. I believe the
            synergy between music and visuals is one of the most beautiful art
            forms. Scoring for media felt like a natural path for me, and I find
            joy in crafting music that enhances visual storytelling, bringing each
            scene to life with every note.
          </p>
          <p>
            I've had the privilege of writing music for award-winning global
            entertainment companies behind some of the most popular kids' titles
            in the world. My work has been featured on platforms such as Netflix,
            YouTube, and Amazon. Over the years, I've worked on a variety of
            projects, including video games, cartoons, animated series, short-form
            content, and feature films.
          </p>
          <p>
            My journey began in Cyprus, where I studied under some of the most
            acclaimed music mentors. I later continued my education in the UK,
            earning a BA in Music Performance &amp; Songwriting from the BIMM
            Institute Brighton in 2013, followed by a Master's in Music
            Composition and Film Scoring from the University of Bristol in 2017.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
