<script>
  import { onMount } from 'svelte';
  import Video1 from '$lib/assets/misc/video1.mp4';
  import Video2 from '$lib/assets/misc/video2.mp4';
  import Video3 from '$lib/assets/misc/video3.mp4';

  let video1, video2, video3;
  let videoStates = {
    video1: { playing: false, touched: false },
    video2: { playing: false, touched: false },
    video3: { playing: false, touched: false }
  };

  // Tailwind “md” breakpoint (<768px) → mobile
  let isMobile = false;
  onMount(() => {
    const check = () => isMobile = window.innerWidth < 768;
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  });

  const playlistLinks = {
    podcasts:  'https://youtube.com/playlist?list=PL6tYeJJ6gFfQDndiLrHjf34mmC2e7E1Cp&si=jkn1yQplyScwAB8V',
    tutorials: 'https://youtube.com/playlist?list=PL6tYeJJ6gFfQDndiLrHjf34mmC2e7E1Cp&si=jkn1yQplyScwAB8V',
    vlogs:     'https://youtube.com/playlist?list=PL6tYeJJ6gFfQBM9mFw7suUNB9Q4R245ZU&si=fYM01Q8UqXGgQ0Hd'
  };

  // Desktop hover logic
  function handleHover(videoEl, type, key) {
    if (isMobile || !videoEl) return;
    if (type === 'enter') {
      videoStates[key].playing = true;
      videoEl.currentTime = 0;
      videoEl.play();
    } else {
      videoStates[key].playing = false;
      videoEl.pause();
      videoEl.currentTime = 0;
    }
  }

  // Mobile tap logic: first tap plays 3s, second tap navigates
  function handleMobileTouch(videoEl, key, e) {
    if (!isMobile || !videoEl) return;
    e.preventDefault();

    const state = videoStates[key];
    if (!state.touched) {
      state.touched = true;
      state.playing = true;
      videoEl.currentTime = 0;
      videoEl.play();
      setTimeout(() => {
        if (state.playing) {
          state.playing = false;
          videoEl.pause();
          videoEl.currentTime = 0;
        }
      }, 3000);
    } else {
      const link = {
        video1: playlistLinks.podcasts,
        video2: playlistLinks.tutorials,
        video3: playlistLinks.vlogs
      }[key];
      window.open(link, '_blank');
    }
  }
</script>

<div class="w-full py-8 md:py-16">
  <div class="max-w-6xl mx-auto px-4 md:px-6">
    <!-- Header -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
      <div class="md:col-span-1 flex items-end">
        <h1 class="text-3xl font-bold text-black">Check us out!</h1>
      </div>
      <div class="hidden md:block"></div>
      <div class="md:col-span-1 md:text-right flex items-end justify-end">
        <p class="text-black">
          We make content on YouTube, mostly tech related – tutorials, podcasts and stories!
        </p>
      </div>
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Podcasts Card -->
      <a
        {...(!isMobile ? { href: playlistLinks.podcasts } : {})}
        target="_blank" rel="noopener noreferrer"
        class="group relative h-[400px] bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
        on:mouseenter={() => handleHover(video1, 'enter', 'video1')}
        on:mouseleave={() => handleHover(video1, 'leave', 'video1')}
        on:click|preventDefault={(e) => isMobile && handleMobileTouch(video1, 'video1', e)}
      >
        <video
          bind:this={video1}
          class="absolute inset-0 w-full h-full object-cover scale-110 opacity-80 md:pointer-events-none"
          muted loop preload="metadata" playsinline
        >
          <source src={Video1} type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 transition-all duration-300 md:pointer-events-none"></div>

        {#if isMobile && !videoStates.video1.playing}
          <div class="absolute inset-0 flex items-center justify-center bg-black/20 md:hidden">
            <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
              <svg class="w-8 h-8 fill-black ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        {/if}

        {#if isMobile && videoStates.video1.touched && videoStates.video1.playing}
          <div class="absolute top-4 left-4 bg-white/90 text-black text-xs px-3 py-1.5 rounded-full md:hidden">
            Tap again for YouTube
          </div>
        {/if}

        <div class="relative z-10 p-7 h-full flex flex-col text-white">
          <div class="flex justify-between items-start mb-6">
            <h3
              class="text-2xl font-bold pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[3px] after:bg-white group-hover:after:w-full after:transition-all after:duration-300 drop-shadow-lg"
            >
              PODCASTS
            </h3>
          </div>
          <div
            class="mt-auto pb-10 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            class:opacity-0={videoStates.video1.playing}
            class:opacity-100={!videoStates.video1.playing}
          >
            <p class="leading-relaxed drop-shadow-lg">
              We make podcasts every month featuring our members, get ready to unwind genuine curious questions!
            </p>
          </div>
        </div>

        <div class="absolute bottom-4 right-4 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
        </div>
      </a>

      <!-- Tutorials Card -->
      <a
        {...(!isMobile ? { href: playlistLinks.tutorials } : {})}
        target="_blank" rel="noopener noreferrer"
        class="group relative h-[400px] bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
        on:mouseenter={() => handleHover(video2, 'enter', 'video2')}
        on:mouseleave={() => handleHover(video2, 'leave', 'video2')}
        on:click|preventDefault={(e) => isMobile && handleMobileTouch(video2, 'video2', e)}
      >
        <video
          bind:this={video2}
          class="absolute inset-0 w-full h-full object-cover scale-110 opacity-80 md:pointer-events-none"
          muted loop preload="metadata" playsinline
        >
          <source src={Video2} type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 transition-all duration-300 md:pointer-events-none"></div>

        {#if isMobile && !videoStates.video2.playing}
          <div class="absolute inset-0 flex items-center justify-center bg-black/20 md:hidden">
            <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
              <svg class="w-8 h-8 fill-black ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        {/if}

        {#if isMobile && videoStates.video2.touched && videoStates.video2.playing}
          <div class="absolute top-4 left-4 bg-white/90 text-black text-xs px-3 py-1.5 rounded-full md:hidden">
            Tap again for YouTube
          </div>
        {/if}

        <div class="relative z-10 p-7 h-full flex flex-col text-white">
          <div class="flex justify-between items-start mb-6">
            <h3
              class="text-2xl font-bold pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[3px] after:bg-white group-hover:after:w-full after:transition-all after:duration-300"
            >
              TUTORIALS
            </h3>
          </div>
          <div
            class="mt-auto pb-10 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            class:opacity-0={videoStates.video2.playing}
            class:opacity-100={!videoStates.video2.playing}
          >
            <p class="leading-relaxed drop-shadow-lg">
              Coding, design and much more!
            </p>
          </div>
        </div>

        <div class="absolute bottom-4 right-4 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
        </div>
      </a>

      <!-- Stories Card -->
      <a
        {...(!isMobile ? { href: playlistLinks.vlogs } : {})}
        target="_blank" rel="noopener noreferrer"
        class="group relative h-[400px] bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
        on:mouseenter={() => handleHover(video3, 'enter', 'video3')}
        on:mouseleave={() => handleHover(video3, 'leave', 'video3')}
        on:click|preventDefault={(e) => isMobile && handleMobileTouch(video3, 'video3', e)}
      >
        <video
          bind:this={video3}
          class="absolute inset-0 w-full h-full object-cover scale-110 opacity-80 md:pointer-events-none"
          muted loop preload="metadata" playsinline
        >
          <source src={Video3} type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 transition-all duration-300 md:pointer-events-none"></div>

        {#if isMobile && !videoStates.video3.playing}
          <div class="absolute inset-0 flex items-center justify-center bg-black/20 md:hidden">
            <div class="w-16 h-16 bg-white/90 rounded-full flex.items-center justify-center shadow-lg">
              <svg class="w-8 h-8 fill-black ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        {/if}

        {#if isMobile && videoStates.video3.touched && videoStates.video3.playing}
          <div class="absolute top-4 left-4 bg-white/90 text-black text-xs px-3 py-1.5 rounded-full md:hidden">
            Tap again for YouTube
          </div>
        {/if}

        <div class="relative z-10 p-7 h-full flex flex-col text-white">
          <div class="flex justify-between items-start mb-6">
            <h3
              class="text-2xl font-bold pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[3px] after:bg-white group-hover:after:w-full after:transition-all after:duration-300"
            >
              STORIES
            </h3>
          </div>
          <div
            class="mt-auto pb-10 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            class:opacity-0={videoStates.video3.playing}
            class:opacity-100={!videoStates.video3.playing}
          >
            <p class="leading-relaxed drop-shadow-lg">
              Travel with us, explore and experience.
            </p>
          </div>
        </div>

        <div class="absolute bottom-4 right-4 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
        </div>
      </a>

    </div>

    <!-- Footer -->
    <div class="mt-12 text-center">
      <p class="text-xl font-bold">
        WATCH THESE IF YOU FIND THEM <span class="text-red-500">INTERESTING!!</span>
      </p>
    </div>
  </div>
</div>

