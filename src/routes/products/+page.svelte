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

