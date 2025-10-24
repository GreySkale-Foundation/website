<!--
<script>
  import hamsterImage from '$lib/assets/misc/hamster.webp';
</script>

<section class="min-h-screen bg-gradient-to-b from-black via-pink-400 to-offwhite flex flex-col items-center justify-center text-center px-4">
  <img 
    src={hamsterImage} 
    alt="Hamster on a wheel" 
    class="w-[300px] sm:w-[400px] md:w-[500px] rounded-xl mt-3.5 mb-8 drop-shadow-2xl" 
  />

  <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-4">
    Products Coming Soon!
  </h1>

  <p class="text-lg sm:text-xl text-shadow-white mb-8 max-w-xl">
    The team is currently writing supply exams... but we promise we’re running on a hamster wheel behind the scenes 🐹💻
  </p>

  <a 
    href="/" 
    class="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-pink-200 transition"
  >
    GO BACK
  </a>
</section>
-->
<script>
  import bg from "$lib/assets/products/bg.jpg";
  import GSKLogo from "$lib/assets/gsklogo.svg";
  import froggo from "$lib/assets/products/froggo.svg";
  import happyBuddy from "$lib/assets/products/happy buddy.svg";
  import milo from "$lib/assets/products/milo.svg";
  import lily from "$lib/assets/products/lilly.svg";
  import sunny from "$lib/assets/products/sunshine.svg";

  let menuOpen = false;
  let selectedSticker = null;
  let showAlt = false;

  // optional alt images (if you have them)
 // import froggoAlt from "$lib/assets/products/froggo_alt.png";
 // import happyBuddyAlt from "$lib/assets/products/happybuddy_alt.png";

  const stickers = [
    { title: "Happy buddy", desc: "A+ for effort!", img: happyBuddy, price: "15/-", altprice: "12/- only!" },
    { title: "Froggoo", desc: "I’m not afraid to be seen trying", img: froggo, price: "15/-" , altprice: "12/- only!"},
    { title: "Flowers and Milo the cat", desc: "Look around! Flowers Everywhere!", img: milo, price: "15/-",   altprice: "12/- only!" },
    { title: "Lily and the musical box", desc: "Bloom in your own pace", img: lily, price: "15/-", altprice: "12/- only!" },
    { title: "Sunshine", desc: "Good things are coming", img: sunny, price: "15/-",  altprice: "12/- only!" }
  ];

  const instagramHandle = "greyskalerobotics"; 

  function openModal(sticker) {
    selectedSticker = sticker;
    showAlt = false;
  }

  function closeModal() {
    selectedSticker = null;
  }

  function orderNow(sticker) {
    const message = encodeURIComponent(`Hey 👋 I’d like to order the "${sticker.title}" sticker!`);
    window.open(`https://www.instagram.com/${instagramHandle}`, "_blank");
  }
</script>

<div class="min-h-screen bg-black text-white font-sans relative">
  <!-- Navbar -->
  <nav class="absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-8 py-4 z-20">
    <img src={GSKLogo} alt="greyskale" class="h-6 sm:h-8 md:h-10 w-auto" />

    <!-- Desktop Nav -->
    <div class="hidden md:flex items-center gap-8">
      <a href="#" class="hover:underline">Stickers</a>
      <a href="#" class="hover:underline">Explore</a>
      <a href="#" class="hover:underline">Contact us</a>
      <button class="text-xl">♡</button>
    </div>

    <!-- Mobile Hamburger -->
    <button 
      class="md:hidden text-3xl focus:outline-none" 
      on:click={() => menuOpen = !menuOpen}
    >
      {menuOpen ? "✕" : "☰"}
    </button>
  </nav>

  <!-- Mobile Menu Dropdown -->
  {#if menuOpen}
    <div class="absolute top-16 left-0 w-full bg-black/50 backdrop-blur-2xl text-white flex flex-col items-center gap-6 py-6 md:hidden z-10">
      <a href="#" class="hover:underline" on:click={() => menuOpen = false}>Stickers</a>
      <a href="#" class="hover:underline" on:click={() => menuOpen = false}>Explore</a>
      <a href="#" class="hover:underline" on:click={() => menuOpen = false}>Contact us</a>
      <button class="text-xl">♡</button>
    </div>
  {/if}

  <!-- Hero -->
  <section class="relative h-[70vh] flex items-center justify-center text-center px-4">
    <img src={bg} alt="background" class="absolute inset-0 w-full h-full object-cover" />
    <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black"></div>

    <div class="relative max-w-2xl">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">
        The FeelGood Stickers!
      </h2>
      <p class="text-base sm:text-lg leading-relaxed px-2 sm:px-0">
        The FeelGood Stickers are hand-painted and crafted with love — little artworks 
        that’ll make you smile every time you see them.
      </p>
    </div>
  </section>

  <!-- Product cards -->
  <section class="px-10 sm:px-6 py-10">
    <div class="flex md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 overflow-x-auto md:overflow-visible pb-4">
    {#each stickers as s}
  <div
    on:click={() => openModal(s)}
    class="flex-shrink-0 w-56 sm:w-64 bg-white text-black rounded-2xl shadow-lg p-4 cursor-pointer hover:scale-[1.02] transition"
  >
    <img
      src={s.img}
      alt={s.title}
      class={`w-full h-40 sm:h-40 object-contain mb-3 transition-transform duration-300 ${
        s.title === "Froggoo" ? "scale-150" : ""
      }`}
    />
    <h3 class="font-bold text-base sm:text-lg">{s.title}</h3>
    <p class="text-xs sm:text-sm text-gray-700 mb-3">{s.desc}</p>
    <div class="flex justify-start gap-6">
      <p class="text-sm font-semibold line-through">{s.price}</p>
      <p class="text-sm font-semibold">{s.altprice}</p>
    </div>
  </div>
{/each}

    </div>
  </section>

  <!-- Footer -->
  <footer class="text-center py-8 text-gray-400 text-sm border-t border-gray-800">
    <p>© {new Date().getFullYear()} Greyskale. tag us if your laptop looks cute!! 🖤</p>
  </footer>
</div>

<!-- Modal -->
{#if selectedSticker}
  <div class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
    <div class="bg-white text-black rounded-2xl shadow-2xl w-11/12 sm:w-[400px] p-6 relative animate-fadeIn">
      <button on:click={closeModal} class="absolute top-2 right-3 text-2xl text-gray-500 hover:text-black">✕</button>

      <div class="flex flex-col items-center">
        <img
          src={showAlt && selectedSticker.alt ? selectedSticker.alt : selectedSticker.img}
          alt={selectedSticker.title}
          class="w-48 h-48 object-contain mb-3 rounded-lg transition"
          on:click={() => (showAlt = !showAlt)}
        />
        {#if selectedSticker.alt}
          <p class="text-xs text-gray-500 mb-2">(tap image to view another)</p>
        {/if}
        <h2 class="font-bold text-xl mb-2">{selectedSticker.title}</h2>
        <p class="text-gray-700 text-sm mb-2">{selectedSticker.desc}</p>
        <p class="font-semibold text-lg mb-4">{selectedSticker.altprice}</p>
        <button
          on:click={() => orderNow(selectedSticker)}
          class="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition w-full"
        >
          Get now
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.2s ease-out;
  }
</style>