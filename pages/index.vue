<template>
    <div class="pb-10">
        <div class="relative max-w-screen-lg pl-4 pr-4 m-auto">
            <WorksSlideshow ref="worksSlideshow" class="min-h-screen"/>
        </div>
    </div>
</template>

<script>
import WorksSlideshow from '~/components/WorksSlideshow.vue'

export default {
    components: {
        WorksSlideshow
    },
    head() {
        const meta = {
            title: "Music Composer & Sound Designer for Film & Media | Stefanos Yiassemides",
        }
        const structuredData = {
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Stefanos Yiassemides",
            "alternateName": "Stefanos Yiassemides",
            "description": "Music Composer & Sound Designer for Film & Media",
            "url": "https://stefanosyiassemides.com",
            "sameAs": [
                "https://soundcloud.com/stefanos-yiassemides",
                "https://www.linkedin.com/in/stefanos-yiassemides-99870579",
                "https://www.instagram.com/stefyiassemidesmusic",
                "https://www.imdb.com/name/nm9390509/",
                "https://twitter.com/Stef_Yia_Music",
            ]
        }
        const jsonld = {
            script: [{
                type: 'application/ld+json',
                innerHTML: JSON.stringify(structuredData)
            }],
            __dangerouslyDisableSanitizers: ['script'],
        }
        return {
            ...meta,
            ...jsonld
        }
    },
}
</script>
