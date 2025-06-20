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
      'absolute left-1/2 bg-gray-500 rounded-2xl -z-10 origin-bottom-left transition-all duration-[480ms] ease-[cubic-bezier(0.23,1,0.32,1)]',
      hovered ? 'top-0 w-full h-full rotate-[-25deg]' : 'top-[-4%] w-[90%] h-[90%]'
    )}
    style="transform: translateX(-50%);"
  ></div>

  <!-- Back Layer 2 -->
  <div
    class={classNames(
      'absolute left-1/2 bg-gray-400 rounded-2xl -z-20 origin-bottom-left transition-all duration-[480ms] ease-[cubic-bezier(0.23,1,0.32,1)]',
      hovered ? 'top-0 w-full h-full rotate-[25deg]' : 'top-[-8%] w-[90%] h-[90%]'
    )}
    style="transform: translateX(-50%);"
  ></div>

  <!-- Front Card -->
   
  <div class="flex flex-col items-center gap-6 p-9 rounded-2xl bg-gray-200 text-gray-800 z-10 w-full h-full shadow-lg">
    <p class="text-[18px] leading-relaxed font-medium text-center">
      PING US
    </p>
    <a href="/greyskalerobotics@gmail.com" class="text-blue-600 text-[16px] hover:underline text-center">
  Mail us
</a>
  </div>
</div>


