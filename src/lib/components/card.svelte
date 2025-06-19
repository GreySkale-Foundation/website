<script>
  import classNames from 'classnames';
  let hovered = false;
</script>

<!-- Wrapper -->
<div
  role="button"
  tabindex="0"
  on:mouseenter={() => (hovered = true)}
  on:mouseleave={() => (hovered = false)}
  on:focus={() => (hovered = true)}
  on:blur={() => (hovered = false)}
  class="relative flex items-center justify-center w-[457px] h-[371px] rounded-2xl transition-all duration-[480ms] ease-[cubic-bezier(0.23,1,0.32,1)] group outline-none mx-auto my-12"
>

  <!-- Back Layer 1 -->
  <div
    class={classNames(
      'absolute left-1/2 bg-gray-500 rounded-2xl -z-10 origin-bottom-left transition-all duration-[480ms] ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-center',
      hovered ? 'top-0 w-full h-full rotate-[-25deg]' : 'top-[-4%] w-[90%] h-[90%]'
    )}
    style="transform: translateX(-50%);"
  >
    {#if hovered}
      <div class="flex gap-4">
        <img src="/lib/assets/Linkedin.svg" alt="LinkedIn" class="w-6 h-6" />
        <img src="/lib/assets/Instagram.svg" alt="Instagram" class="w-6 h-6" />
      </div>
    {/if}
  </div>

  <!-- Back Layer 2 -->
  <div
    class={classNames(
      'absolute left-1/2 bg-gray-400 rounded-2xl -z-20 origin-bottom-left transition-all duration-[480ms] ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-center',
      hovered ? 'top-0 w-full h-full rotate-[25deg]' : 'top-[-8%] w-[90%] h-[90%]'
    )}
    style="transform: translateX(-50%);"
  >
    {#if hovered}
      <img src="/icons/youtube.svg" alt="YouTube" class="w-7 h-7" />
    {/if}
  </div>

  <!-- Front Card -->
  <div class="flex flex-col items-start gap-6 p-9 rounded-2xl bg-gray-200 text-gray-800 z-10 w-full h-full shadow-lg">
    <p class="text-[18px] leading-relaxed font-medium">
      PING US
    </p>
    <a href="/about" class="text-blue-600 text-[16px] hover:underline">
      Read more
    </a>
  </div>
</div>
