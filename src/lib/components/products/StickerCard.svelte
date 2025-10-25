<script>
  let { sticker } = $props();

  let isPopup = $state(false);

  function showPopup() {
    isPopup = true;
  }

  function hidePopup() {
    isPopup = false;
  }
</script>

<button
  onclick={showPopup}
  tabindex="0"
  class="flex-shrink-0  sm:h-[120%]  bg-white text-black rounded-2xl shadow-lg p-4 cursor-pointer hover:scale-[1.02] transition"
>
  <img
    src={sticker.img}
    alt={sticker.title}
    class="w-full h-32 sm:h-40 object-contain mb-3"
  />
  <h3 class="font-bold text-base sm:text-lg">{sticker.title}</h3>
  <p class="text-xs sm:text-sm text-gray-700 mb-3">{sticker.desc}</p>
  <div class="flex justify-start gap-6">
    <p class="text-sm font-semibold line-through">{sticker.price}</p>
    <p class="text-sm font-semibold">{sticker.altprice}</p>
  </div>
</button>

{#if isPopup}
  <div
    class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4"
  >
    <div
      class="bg-white text-black rounded-2xl opacity-100 shadow-2xl p-6 relative w-11/12 max-w-lg sm:w-[400px] animate-fadeIn"
    >
      <button
        class="absolute top-2 right-5 text-2xl text-gray-500 hover:text-black cursor-pointer"
        onclick={hidePopup}>x</button
      >

      <div class="flex flex-col items-center">
        <img
          src={sticker.img}
          alt={sticker.title}
          class="w-auto h-48 sm:h-42 sm:w-auto object-contain mb-3 rounded-lg transition"
        />
        <h3 class="font-bold text-lg mb-2">{sticker.title}</h3>
        <p class="text-sm text-gray-700 mb-2">{sticker.desc}</p>
        <p class="text-lg font-semibold mb-4">{sticker.altprice}</p>

        <a
          href="https://ig.me/greyskalerobotics" target="_blank"
          class="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 text-center transition w-full"
          >Get now</a
        >
      </div>
    </div>
  </div>
{/if}

<svelte:window
  onkeydown={(event) => {
    if (event.key === "Escape") {
      isPopup = false;
    }
  }}
/>
