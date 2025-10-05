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
  import froggo from "$lib/assets/products/froggo.png";
  import happyBuddy from "$lib/assets/products/happybuddy.png";
  import milo from "$lib/assets/products/milo.png";
  import lily from "$lib/assets/products/lily.png";
  import sunny from "$lib/assets/products/sunny.png";

  let menuOpen = false;
  const instagramId = "greyskalerobotics"; // 🔴 change this to your IG username

  const stickers = [
    { title: "Happy buddy", desc: "A+ for effort!", img: happyBuddy },
    { title: "Froggoo", desc: "Im not afraid to be seen trying", img: froggo },
    { title: "Flowers and Milo the cat", desc: "Look around! Flowers Everywhere!", img: milo },
    { title: "Lily and the musical box ", desc: "Bloom in your own pace", img: lily },
    { title: "Sunshine", desc: "good things are coming", img: sunny }
  ];

  function orderNow(sticker) {
    const defaultMsg = `Hello 👋 I want to buy the "${sticker.title}" sticker!`;
    navigator.clipboard.writeText(defaultMsg).then(() => {
      alert("📋 Message copied! Paste it in Instagram DM.");
      window.open(`https://ig.me/m/${instagramId}`, "_blank");
    });
  }
</script>

<div class="min-h-screen bg-black text-white font-sans">
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
    <div class="absolute top-16 left-0 w-full bg-black/30 backdrop-blur-2xl text-white flex flex-col items-center gap-6 py-6 md:hidden z-10">
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
        The FeelGood Stickers are hand painted–crafted with love stickers which 
        will make you feel special everytime you look at them. They are a true 
        gift to yourself or your loved ones and with its watercolor features, 
        your pc will look so adorable and fun.
      </p>
    </div>
  </section>

  <!-- Cards -->
  <section class="px-4 sm:px-6 py-10">
    <div class="flex md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 overflow-x-auto md:overflow-visible pb-4">
      {#each stickers as s}
        <div class="flex-shrink-0 w-56 sm:w-64 bg-white text-black rounded-2xl shadow-lg p-4">
          <img src={s.img} alt={s.title} class="w-full h-32 sm:h-40 object-contain mb-3" />
          <h3 class="font-bold text-base sm:text-lg">{s.title}</h3>
          <p class="text-xs sm:text-sm text-gray-700 mb-3">{s.desc}</p>

          <!-- ✅ Instagram button -->
          <button
            on:click={() => window.open(`https://ig.me/m/YOUR_INSTAGRAM_USERNAME`, "_blank")}
           class="bg-black text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg w-full hover:bg-gray-800 text-sm sm:text-base"
>
  Get now
</button>

        </div>
      {/each}
    </div>
  </section>

  <!-- Footer -->
<footer class="bg-black text-white text-center py-8 border-t border-gray-800 mt-10">
  <h3 class="text-lg font-semibold mb-2">Greyskale</h3>
  <p class="text-sm text-gray-400">
  heyy <a href="https://instagram.com/greyskalerobotics" target="_blank" class="underline hover:text-white">tag us</a> when your stickers arrive 😎
</p>
  <p class="text-xs text-gray-500 mt-3">
    © {new Date().getFullYear()} Greyskale. all rights reserved.
  </p>
</footer>

</div>
