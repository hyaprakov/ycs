<template>
    <section>
        <div class="content">
            <h1>
                Hristiyan Yaprakov
            </h1>
            <h2>
                Personal website coming soon...
            </h2>
        </div>

        <div class="bckg"></div>
    </section>
</template>

<style lang="sass">

$primary:   #ee7326
$primaryd:  #a14d1a

// Responsive ----------------

@mixin fullhd-1920
    @media (min-width: 1920px) 
        @content

@mixin fullhd-1600
    @media (min-width: 1600px) 
        @content

@mixin fullhd-1440
    @media (min-width: 1440px) 
        @content

@mixin fullhd
    @media (min-width: 1440px) 
        @content

@mixin desktop
    @media (max-width: 1366px) 
        @content

@mixin desktop-1366
    @media (max-width: 1366px) 
        @content

@mixin desktop-1280
    @media (max-width: 1280px) 
        @content

@mixin tablet
    @media (max-width: 1024px) 
        @content

@mixin tablet-1024
    @media (max-width: 1024px) 
        @content

@mixin tablet-768
    @media (max-width: 768px) 
        @content

@mixin tablet-720
    @media (max-width: 720px) 
        @content

@mixin phone-480
    @media (max-width: 480px) 
        @content

@mixin phone
    @media (max-width: 480px) 
        @content

@mixin phone-375
    @media (max-width: 375px) 
        @content

@mixin phone-360
    @media (max-width: 360px) 
        @content

@mixin phone-320
    @media (max-width: 320px) 
        @content


body, body
    height: 100%
    margin: 0
    padding: 0
    font-size: 62.5%
    font-family: Lato, Arial, sans-serif
    background: #fff

*
    box-sizing: border-box

section
    width: 100%
    height: 100vh
    display: flex
    align-items: center
    justify-content: center
    text-align: center
    background: #111
    position: relative

    .content
        position: relative
        z-index: 10
        padding: 3rem
    .bckg
        position: absolute
        top: 5rem
        right: 5rem
        bottom: 5rem
        left: 5rem
        z-index: 0
        background: rgba(255, 255, 255, 0.02)
        border-radius: .3rem

        @include phone
            top: 3rem
            right: 1.5rem
            bottom: 3rem
            left: 1.5rem

h1
    margin: 0 0 1.5rem 0
    font-size: 5rem
    font-weight: 900
    color: #fefefe

    @include phone
        font-size: 3.8rem
        line-height: 1
        margin-bottom: 2rem

h2
    margin: .5rem 0 0 0
    font-size: 1.6rem
    font-weight: 900
    color: $primary

h3
    margin: 1rem
    font-size: 1.6rem
    font-weight: normal
    color: #333




</style>

<script>

export default {
    props: [
        
    ],
    components: {
        
    },

    data: function () {
        return {
            opa: 'Opa opa',
            socials: [
                {
                    icon: 'linkedin',
                    link: ''
                }
            ]
        }
    },
    computed: {
        
    },
    methods: {
        
    },
    watch: {
        
    },
    mounted: function () {
        
    }
}
</script>
