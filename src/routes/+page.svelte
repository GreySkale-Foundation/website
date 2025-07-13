<script>
    import GSKLogo from "$lib/assets/gsklogo.svg";
    import About from "$lib/components/about.svelte";
    import Card from "$lib/components/card.svelte";
    import Events from "$lib/components/events.svelte";
    import Tiles from "$lib/components/tiles.svelte";
    import Mission from "$lib/components/mission.svelte";
    import { scrollReveal } from "$lib/scripts/lazyScroll";
</script>

<!-- class="min-h-48 w-full bg-linear-to-b from-black from-40% via-pink-400 via-50% to-white to-60%"> -->

<!-- style="font-family : 'Trebuchet MS', 'sans-serif';" -->
<div class="bg-offwhite">
    <section
        class="flex items-center justify-center min-h-[90vh] bg-black snap-center"
    >
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
        <!-- <section -->
        <!--     class="relative snap-center z-10 overflow-hidden" -->
        <!--     use:scrollReveal -->
        <!-- > -->
        <!--     <div class="overflow-hidden"> -->
        <!--         <Card /> -->
        <!--     </div> -->
        <!-- </section> -->
        <!--         <section use:scrollReveal> -->
        <!--             <footer class=" flex justify-between items-end relative px-8 py-4 text-sm text-white font-bold"> -->
        <!--                 <div class="flex items-end"> -->
        <!--                     <p class="ml-8 mb-2">Made by greyskale</p> -->
        <!--                    moved slightly right --> 
        <!-- <div class="flex justify-center overflow-hidden"> -->
        <!--                     <Card /> -->
        <!--                 </div> -->
        <!--                      moved slightly left --> 
        <!--                 </div> -->

        <!--                     <p class="mr-8 mb-2">Made with <b class="text-lg">❤</b></p> -->
        <!--             </footer> -->
        <!--         </section> -->

<section use:scrollReveal>
    <footer class="px-8 py-4 text-sm text-white font-bold pointer-events-auto relative overflow-x-hidden overflow-y-hidden min-h-0">
        <!-- Desktop layout with top padding for card expansion -->
        <div class="hidden sm:flex justify-between items-end pt-20">
            <!-- Left text -->
            <div class="flex-1">
                <p class="ml-8 mb-2">Made by greyskale</p>
            </div>
            
            <!-- Center card -->
            <div class="flex-1 flex text-black justify-center">
                <Card />
            </div>
            
            <!-- Right text -->
            <div class="flex-1 flex justify-end">
                <p class="mr-8 mb-2">Made with <b class="text-lg">❤</b></p>
            </div>
        </div>
        
        <!-- Mobile layout -->
        <div class="sm:hidden flex flex-col items-center space-y-4">
            <!-- Card with scaling and extra padding -->
            <div class="w-full flex justify-center pt-20">
                <div class="scale-80 origin-center">
                    <Card />
                </div>
            </div>
            
            <!-- Footer text with proper alignment -->
            <div class="flex justify-between items-baseline w-full px-4 text-xs">
                <p>Made by greyskale</p>
                <p class="flex items-baseline">Made with <b class="text-sm ml-1">❤</b></p>
            </div>
        </div>
    </footer>
</section>
    </section>
</div>
