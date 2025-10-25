<script>
  import { goto } from "$app/navigation";
  import { stickers } from "$lib/data/stickers";

  import bg from "$lib/assets/products/bg.jpg";
  import GSKLogo from "$lib/assets/gsklogo.svg";
  import StickerCard from "$lib/components/products/StickerCard.svelte";

  let menuOpen = $state(false);

  function goToEvents() {
    goto("/#events");
  }

  function closeMenu(){
    menuOpen = false
  }
  function toggleMenu(){
    menuOpen = !menuOpen
  }
  function handleMobileExplore(){
    closeMenu()
    goToEvents()
  }
</script>

<svelte:head>
  <style>
    :global(html){
      scroll-behavior : smooth;
      scroll-snap-type : none;
    }
  </style>
</svelte:head>

<div class="min-h-screen bg-black text-white font-sans relative">
  <!-- Navbar -->
  <nav
    class="absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-8 py-4 z-20"
  >
    <a href="/" aria-label="Homepage" ><img src={GSKLogo} alt="greyskale" class="h-6 sm:h-8 md:h-10 w-auto" /></a>

    <!-- Desktop Nav -->
    <div class="hidden md:flex items-center gap-8">
      <a href="#sticker" class="hover:underline">Stickers</a>
      <button onclick={goToEvents} class="hover:underline">Explore</button>
      <a
        href="mailto:greyskalerobotics@gmail.com?subject=Hello, I would like to buy"
        class="hover:underline">Contact us</a
      >
      <button class="text-xl">♡</button>
    </div>

    <!-- Mobile Hamburger -->
    <button
      class="md:hidden  cursor-pointer text-3xl focus:outline-none"
      aria-controls="mobile-menu"
      aria-expanded={menuOpen}
      onclick={toggleMenu}
      > {menuOpen ? "✕" : "☰"}
    </button>
  </nav>

  <!-- Mobile Menu Dropdown -->
  {#if menuOpen}
    <div
    id="mobile-menu"
      class="absolute top-16 left-0 w-full bg-black/50 backdrop-blur-2xl text-white flex flex-col items-center gap-6 py-6 md:hidden z-10"
    >
      <a href="#sticker" class="hover:underline" onclick={closeMenu}>Stickers</a>
      <button
        onclick={handleMobileExplore}
        class="hover:underline" >Explore</button
      >
      <a
        href="mailto:greyskalerobotics@gmail.com?subject=Hello, I would like to buy"
        class="hover:underline"
        >Contact us</a
      >
      <button class="text-xl">♡</button>
    </div>
  {/if}
<main class="scroll-smooth">

  <!-- Hero -->
  <section
    class="relative h-[70vh] flex items-center justify-center text-center px-4"
  >
    <img
      src={bg}
      alt="background"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black"
    ></div>

    <div class="relative max-w-2xl">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">
        The FeelGood Stickers!
      </h2>
      <p class="text-base sm:text-lg leading-relaxed px-2 sm:px-0">
        The FeelGood Stickers are hand-painted and crafted with love — little
        artworks that’ll make you smile every time you see them.
      </p>
    </div>
  </section>

  <!-- Product cards -->
  <section id="sticker" class="px-4 sm:px-6 py-10">
    <div
      class="flex md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-4 overflow-x-auto md:overflow-visible pb-4"
    >
      {#each stickers as s}
        <StickerCard sticker={s} />
      {/each}
    </div>
  </section>
</main>

  <!-- Footer -->
  <footer
    class="text-center py-8 text-gray-400 text-sm border-t border-gray-800"
  >
    <p>
      © {new Date().getFullYear()} Greyskale. tag us if your laptop looks cute!!
      🖤
    </p>
  </footer>
</div>