<template>
  <section
    class="about relative bg-black px-6 py-20 pt-28 md:px-12 md:pt-32 lg:px-16 shrink-0 snap-start snap-always flex items-center min-h-[100dvh]"
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

        <div
          class="space-y-5 text-base leading-relaxed text-white/75 md:text-lg"
        >
          <p>
            I'm a versatile music composer based in Bristol, UK, with a lifelong
            passion for music and film that began at an early age. I believe the
            synergy between music and visuals is one of the most beautiful art
            forms. Scoring for media felt like a natural path for me, and I find
            joy in crafting music that enhances visual storytelling, bringing
            each scene to life with every note.
          </p>
          <p>
            I've had the privilege of writing music for award-winning global
            entertainment companies behind some of the most popular kids' titles
            in the world. My work has been featured on platforms such as
            Netflix, YouTube, and Amazon. Over the years, I've worked on a
            variety of projects, including video games, cartoons, animated
            series, short-form content, and feature films.
          </p>
          <p>
            My journey began in Cyprus, where I studied under some of the most
            acclaimed music mentors. I later continued my education in the UK,
            earning a BA in Music Performance &amp; Songwriting from the BIMM
            Institute Brighton in 2013, followed by a Master's in Music
            Composition and Film Scoring from the University of Bristol in 2017.
          </p>
          <div class="pt-2">
            <a
              href="mailto:info@stefanosyiassemides.com"
              class="about__contact"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <div class="mt-14 border-t border-white/10 pt-12">
        <p class="brand-name mb-8 text-white/40">Clients</p>
        <div
          class="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 sm:gap-x-10 items-center"
        >
          <a
            rel="nofollow"
            href="https://www.moonbug.com/"
            class="flex items-center justify-center"
          >
            <NuxtImg
              format="webp"
              src="/clients/1b.png"
              class="about__client-logo"
              loading="lazy"
              alt="Moonbug Entertainment"
              width="304"
              height="70"
            />
          </a>
          <a
            rel="nofollow"
            href="https://www.lego.com/en-gb/themes/duplo"
            class="flex items-center justify-center"
          >
            <NuxtImg
              format="webp"
              src="/clients/2.png"
              class="about__client-logo"
              loading="lazy"
              alt="Lego Duplo"
              width="288"
              height="288"
            />
          </a>
          <a
            rel="nofollow"
            href="https://www.fisher-price.com/"
            class="flex items-center justify-center"
          >
            <NuxtImg
              format="webp"
              src="/clients/3.png"
              class="about__client-logo"
              loading="lazy"
              alt="Fisher-Price"
              width="304"
              height="120"
            />
          </a>
          <a
            rel="nofollow"
            href="https://www.megabrands.com/en-us/mega-bloks"
            class="flex items-center justify-center"
          >
            <NuxtImg
              format="webp"
              src="/clients/4.svg"
              class="about__client-logo"
              loading="lazy"
              alt="Mega Bloks"
              width="256"
              height="184"
            />
          </a>
          <a
            rel="nofollow"
            href="https://zurutoys.com/brands/rainbocorns"
            class="flex items-center justify-center"
          >
            <NuxtImg
              format="webp"
              src="/clients/5.png"
              class="about__client-logo"
              loading="lazy"
              alt="Zuru Rainbocorns"
              width="304"
              height="106"
            />
          </a>
          <a
            rel="nofollow"
            href="https://appmink.tv/"
            class="flex items-center justify-center"
          >
            <NuxtImg
              format="webp"
              src="/clients/6a.png"
              class="about__client-logo"
              loading="lazy"
              alt="appMink"
              width="256"
              height="256"
            />
          </a>
          <a
            rel="nofollow"
            href="https://www.spinmaster.com/"
            class="flex items-center justify-center"
          >
            <NuxtImg
              src="/clients/spinmaster.png"
              class="about__client-logo"
              loading="lazy"
              alt="Spin Master"
              width="256"
              height="256"
            />
          </a>
          <a
            rel="nofollow"
            href="https://www.animaj.com/"
            class="flex items-center justify-center"
          >
            <NuxtImg
              src="/clients/animaj.png"
              class="about__client-logo"
              loading="lazy"
              alt="Animaj"
              width="1000"
              height="562"
            />
          </a>
        </div>
      </div>

      <div
        class="about__testimonials mt-16 space-y-8 border-t border-white/10 pt-14"
      >
        <p class="brand-name mb-8 text-white/40">Testimonials</p>

        <blockquote class="about__quote">
          <p class="about__quote-text">
            &ldquo;Stefanos is a fantastic composer to work with on projects. He
            is an extremely reliable, versatile and creative artist who responds
            very well to our musical briefs and feedback. He is a very versatile
            composer who can work effectively across our varied musical
            requirements from epic orchestral scores to melodic pop/rock
            songs&rdquo;
          </p>
          <footer class="about__quote-author">
            <span>Joshua Embury</span> &mdash; Music Director, Moonbug
            Entertainment
          </footer>
        </blockquote>

        <blockquote class="about__quote">
          <p class="about__quote-text">
            &ldquo;A fantastic experience with Stefanos! His work truly elevated
            our project and his ability to understand our vision made the
            process seamless and enjoyable. His professionalism and
            responsiveness was really appreciated and I look forward to working
            together again in the future!&rdquo;
          </p>
          <footer class="about__quote-author">
            <span>Majda Al Maskati</span> &mdash; Director &amp; Producer, Al
            Maskati Productions
          </footer>
        </blockquote>

        <blockquote class="about__quote">
          <p class="about__quote-text">
            &ldquo;From the outset Stefanos worked hard to accommodate a
            constantly shifting design ethos, adapting to rough briefs with a
            creativity that enhanced the projects narrative elements. With each
            track he brought a distinct tone and emotional drive that
            underpinned the core themes of the narrative events they framed, and
            when change was needed he worked hard to accommodate the needs of
            the game with a friendly and easy to approach manner. If you need
            distinct, emotionally driven music, then there are few composers I
            could recommend more.&rdquo;
          </p>
          <footer class="about__quote-author">
            <span>Nick Pritchard</span> &mdash; Game Developer, Mega Sloth
            Studios
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__contact {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  text-decoration: none;
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;
}

.about__contact:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.35);
  color: #fff;
}

.about__contact:active {
  transform: scale(0.98);
}

.about__client-logo {
  max-height: 2.5rem;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  transition: opacity 0.3s ease;
}

.about__client-logo:hover {
  opacity: 0.7;
}

.about__quote {
  padding-left: 1.25rem;
  border-left: 2px solid rgba(255, 255, 255, 0.15);
  margin: 0;
}

.about__quote-text {
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.65);
  font-style: italic;
  margin: 0 0 0.6rem;
}

.about__quote-author {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.35);
  letter-spacing: 0.02em;
}

.about__quote-author span {
  color: rgba(255, 255, 255, 0.55);
  font-weight: 500;
}
</style>
