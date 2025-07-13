<script>
    import GSKLogo from "$lib/assets/gsklogo.svg";
    import About from "$lib/components/about.svelte";
    import Card from "$lib/components/card.svelte";
    import Events from "$lib/components/events.svelte";
    import Tiles from "$lib/components/tiles.svelte";
    import Mission from "$lib/components/mission.svelte";
    import { scrollReveal } from "$lib/scripts/lazyScroll";
</script>

<div class="bg-offwhite">
    <section class="flex items-center justify-center min-h-[90vh] bg-black snap-center">
        <div class="group relative">
            <img
                src={GSKLogo}
                alt="GreySkale"
                class="w-64 h-auto transition-opacity duration-300 group-hover:opacity-0"
            />
            <div
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-center text-3xl font-semibold text-white font-irish-grover"
            >
                Be who you ought to be.
            </div>
        </div>
    </section>

    <section
        class="min-h-[50vh] bg-linear-to-b from-black from-30% via-pink-400 via-55% to-offwhite to-100%"
    ></section>
    <section
        class="min-h-[30vh] bg-linear-to-b from-offwhite from-20% via-pink-400 via-75% to-black to-100%"
    >
        <section use:scrollReveal>
            <About />
        </section>

        <div class="pt-20 sm:pt-80"></div>

        <section class="h-auto snap-center" use:scrollReveal>
            <Events />
        </section>

        <div class="pt-48"></div>

        <section use:scrollReveal>
            <Mission />
        </section>

        <div class="pt-48"></div>
        <section class="snap-center h-auto" use:scrollReveal><Tiles /></section>

        <div class="pt-20 sm:pt-80"></div>

        <!-- Optimized footer with proper spacing -->
        <section use:scrollReveal>
            <footer class="px-8 py-4 text-sm text-white font-bold pointer-events-auto relative overflow-x-hidden overflow-y-hidden min-h-0">
                <!-- Desktop layout -->
                <div class="hidden sm:flex flex-col items-center w-full">
                    <!-- Card with extra padding above -->
                    <div class="pt-16 pb-8 w-full flex justify-center">
                        <Card />
                    </div>
                    
                    <!-- Text with proper spacing at edges -->
                    <div class="flex justify-between w-full pt-8 px-8">
                        <p>Made by greyskale</p>
                        <p>Made with <b class="text-lg">❤</b></p>
                    </div>
                </div>
                
                <!-- Mobile layout -->
                <div class="sm:hidden flex flex-col items-center space-y-4">
                    <!-- Card with extra padding above -->
                    <div class="pt-16 w-full flex justify-center">
                        <div class="scale-80 origin-center">
                            <Card />
                        </div>
                    </div>
                    
                    <!-- Text with proper spacing -->
                    <div class="flex justify-between w-full px-4 text-sm pt-8 pb-4">
                        <p>Made by greyskale</p>
                        <p class="flex items-baseline">Made with <b class="text-base ml-1">❤</b></p>
                    </div>
                </div>
            </footer>
        </section>
    </section>
</div>