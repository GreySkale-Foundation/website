<script>
  import GSKLogo from "$lib/assets/gsklogo.svg";
  import About from "$lib/components/about.svelte";
  import Card from "$lib/components/card.svelte";
  import Events from "$lib/components/events.svelte";
</script>

<!-- class="min-h-48 w-full bg-linear-to-b from-black from-40% via-pink-400 via-50% to-white to-60%"> -->
<div>
  <section class="flex items-center justify-center min-h-[90vh] bg-black">
    <div class="group relative">
      <img
        src={GSKLogo}
        alt="GreySkale"
        class="w-64 h-auto transition-opacity duration-300 group-hover:opacity-0"
      />

      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-center text-2xl font-semibold text-white"
        style="font-family:'Trebuchet MS', 'sans-serif';"
      >
        Be who you ought to be.
      </div>
    </div>
  </section>

  <section
    class="min-h-[30vh] bg-linear-to-b from-black from-30% via-pink-400 via-50% to-white to-100%"
  ></section>
  <About />
  <section class="mb-10"></section>
  <section class="pt-500"></section>
  <section
    class="min-h-[30vh] bg-linear-to-b from-white from-30% via-pink-400 via-50% to-black to-100%"
  >
    <section class="mb-10"></section>
    <section class="pt-500"></section>

    <div class="relative z-10">
    <Card />
    </div>

    <footer
      class="w-full px-6 py-4 text-white text-sm flex justify-between items-center"
    >
      <p class="text-gray-400">Made by GreySkale</p>
      <p class="text-gray-400">Made with ❤️</p>
    </footer>
  </section>
</div>
