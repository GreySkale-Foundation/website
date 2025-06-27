<script>
  import classNames from "classnames";
  let hovered = false;
  import InstaImage from '$lib/assets/Instagram.svg'

  import LinkedInImage from '$lib/assets/Linkedin.svg'
  import GithubImage from '$lib/assets/github.svg'

  import MailImage from '$lib/assets/Mail.svg'
  import YoutubeImage from '$lib/assets/Youtube.svg'
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
  In
  <div
    class={classNames(
      "absolute left-1/2 bg-gray-500 rounded-2xl -z-10 origin-bottom-left transition-all duration-[480ms] ease-[cubic-bezier(0.23,1,0.32,1)]",
      hovered
        ? "top-0 w-full h-full rotate-[-25deg]"
        : "top-[-4%] w-[90%] h-[90%]",
    )}
    style="transform: translateX(-50%);"
  >
    {#if hovered}
      <div class="absolute left-4 top-1/3 -translate-y-1/2 flex flex-col gap-6">
        <a href="https://www.instagram.com" target="_blank" rel="noopener">
          <img
            src={InstaImage}
            alt="Instagram"
            class="w-9 h-9"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCVywsSBapZbjkFwV8pjarKw"
          target="_blank"
          rel="noopener"
        >
          <img
            src={YoutubeImage}
            alt="YouTube"
            class="w-9 h-9"
          />
        </a>
      </div>
    {/if}
  </div>

  
  <div
    class={classNames(
      "absolute left-1/2 bg-gray-400 rounded-2xl -z-20 origin-bottom-left transition-all duration-[480ms] ease-[cubic-bezier(0.23,1,0.32,1)]",
      hovered
        ? "top-0 w-full h-full rotate-[25deg]"
        : "top-[-8%] w-[90%] h-[90%]",
    )}
    style="transform: translateX(-50%);"
  >
    {#if hovered}
      <div
        class="absolute right-4 top-1/3 -translate-y-1/2 flex flex-col gap-6 items-end"
      >
        <a href="https://github.com" target="_blank" rel="noopener">
          <img src={GithubImage} alt="GitHub" class="w-9 h-9" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener">
          <img
            src={LinkedInImage}
            alt="LinkedIn"
            class="w-9 h-9"
          />
        </a>
      </div>
    {/if}
  </div>

  
  <div
    class="relative z-10 w-[457px] h-[371px] bg-gray-200 rounded-2xl shadow-lg flex flex-col justify-center items-center text-center px-6"
  >
    <h2 class="text-xl font-bold mb-4">Ping us!</h2>
    
<a href="mailto:greyskalerobotics@gmail.com?subject=Psss..">

        <img class="w-28 h-auto" src={MailImage} alt="Mail Us" />
        </a>
        <p class="italic text-sm">don’t worry we are socially awkward too ;)</p>
  </div>
</div>
