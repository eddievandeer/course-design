<template>
    <header class="header-wrapper">
        <div class="header-mask"></div>
        <app-menu :transparent="transparent"></app-menu>
        <hotel-info></hotel-info>
    </header>
</template>

<script>
    import {
        onMounted,
        ref
    } from 'vue'
    import {
        onBeforeRouteLeave
    } from 'vue-router'
    import AppMenu from './AppMenu'
    import HotelInfo from './HotelInfo'

    export default {
        components: {
            AppMenu,
            HotelInfo
        },
        name: 'AppHeader',
        setup() {
            let transparent = ref(true)

            function onScroll() {
                let card = document.querySelector('.hotel-info-card')
                const scrolled = Math.max(
                    window.pageYOffset,
                    document.documentElement.scrollTop,
                    document.body.scrollTop
                )
                if (scrolled <= card.offsetTop - 100) {
                    transparent.value = true
                } else {
                    transparent.value = false
                }
                return false
            }

            onMounted(() => {
                window.addEventListener("scroll", onScroll)
            })

            onBeforeRouteLeave((to, from) => {
                window.removeEventListener("scroll", onScroll)
            })

            return {
                transparent
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header-wrapper {
        width: 100%;
        height: 22.8rem;
        background-image: url('../../assets/back.jpg');
        background-size: cover;
        background-position: center;
        position: relative;

        .header-mask {
            width: 100%;
            height: 100%;
            background-image: linear-gradient(transparent 60%, rgba(255, 255, 255, .7) 100%);
        }
    }
</style>