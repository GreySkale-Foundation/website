<script>
    import GSKLogo from "$lib/assets/gsklogo.svg";
    import About from "$lib/components/about.svelte";
    import Card from "$lib/components/card.svelte";
    import Events from "$lib/components/events.svelte";
    import Tiles from "$lib/components/tiles.svelte";
    import lockImage from "$lib/assets/Lock.svg";
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
        class="min-h-[30vh] bg-linear-to-b from-offwhite from-20% via-pink-400 via-50% to-black to-100%"
    >
        <section>
            <About />
        </section>

        <div class="pt-20 sm:pt-80"></div>

        <section class="h-auto snap-center">
            <Events />
        </section>

        <div class="pt-48"></div>
        <section class="snap-center h-auto"><Tiles /></section>

        <div class="pt-20 sm:pt-80"></div>

        <section class="snap-center h-auto">
            <div
                class="w-[440px] h-44 bg-white mx-auto rounded-lg flex items-center justify-center text-center"
            >
                <h1 class="text-gray-400 font-bold text-3xl">PRODUCTS</h1>
                <h3 class="absolute mt-24">Yet to be unlocked.</h3>
                <img src={lockImage} alt="Locked" class="w-6 h-6 ml-0.5" />
            </div>
        </section>

        <div class="pt-20 sm:pt-80"></div>
        <section class="relative snap-center z-10">
            <Card />
        </section>
        <section>
            <footer
                class="flex justify-between items-center px-8 py-4 text-sm text-white font-bold"
            >
                <p class="ml-8 mb-2">Made by greyskale</p>
                <!-- moved slightly right -->
                <p class="mr-8 mb-2">Made with <b class="text-lg">❤</b></p>
                <!-- moved slightly left -->
            </footer>
        </section>
    </section>
</div>
