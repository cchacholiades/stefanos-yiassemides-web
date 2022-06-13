<template>
    <div>
        <div class="text-center text-3xl sm:text-4xl font-bold pt-20 md:pt-32 pb-10 font-sourceCodePro">MUSIC</div>

        <client-only>
            <SoundCloud playlist="615714654" :mini="true" theme="dark" />
        </client-only>
    </div>
</template>

<script>
    export default {}
</script>
