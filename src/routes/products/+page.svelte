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
  import froggo from "$lib/assets/products/froggo.png"
  import happyBuddy from "$lib/assets/products/happybuddy.png"
  import milo from "$lib/assets/products/milo.png"
  import lily from "$lib/assets/products/lily.png"
  import sunny from "$lib/assets/products/sunny.png"
  const stickers = [
    {
      title: "Happy buddy",
      desc: "A+ for effort!",
      img: happyBuddy
    },
    {
      title: "Froggoo",
      desc: "Im not afraid to be seen trying",
      img: froggo
    },
    {
      title: "Flowers and Milo the cat",
      desc: "Look around! Flowers Everywhere!",
      img: milo
    },
    {
      title: "Lily and the musical box ",
      desc: "Bloom in your own pace",
      img: lily
    },
    {
      title: "Sunshine",
      desc: "good things are coming",
      img: sunny
    },
  ];
</script>

<div class="min-h-screen bg-black text-white font-sans">
  <!-- Navbar -->
  <nav class="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-20">
    <img class="fill-black" src={GSKLogo} alt="greyskale">
    <div class="flex items-center gap-8">
      <a href="#" class="hover:underline">Stickers</a>
      <a href="#" class="hover:underline">Explore</a>
      <a href="#" class="hover:underline">Contact us</a>
      <button class="text-xl">♡</button>
    </div>
  </nav>

  <!-- Hero -->
  <section class="relative h-[70vh] flex items-center justify-center text-center">
    <img 
      src={bg} 
      alt="background" 
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black"></div>

    <div class="relative max-w-2xl px-6">
      <h2 class="text-4xl md:text-5xl font-extrabold mb-6">
        The FeelGood Stickers!
      </h2>
      <p class="text-lg leading-relaxed">
        The FeelGood Stickers are hand painted–crafted with love stickers which 
        will make you feel special everytime you look at them. They are a true 
        gift to yourself or your loved ones and with its watercolor features, 
        your pc will look so adorable and fun.
      </p>
    </div>
  </section>

  <!-- Scrollable cards -->
  <section class="px-6 py-10 overflow-x-auto">
    <div class="flex gap-6">
      {#each stickers as s}
        <div class="flex-shrink-0 w-64 bg-white text-black rounded-2xl shadow-lg p-4">
          <img src={s.img} alt={s.title} class="w-full h-40 object-contain mb-3" />
          <h3 class="font-bold text-lg">{s.title}</h3>
          <p class="text-sm text-gray-700 mb-3">{s.desc}</p>
          <button 
            class="bg-black text-white px-4 py-2 rounded-lg w-full hover:bg-gray-800"
          >
            Get now
          </button>
        </div>
      {/each}
    </div>
  </section>
</div>
