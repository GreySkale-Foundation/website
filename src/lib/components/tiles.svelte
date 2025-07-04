<script>
  // Define YouTube playlist URLs for each tile
  const playlistLinks = {
    podcasts: "https://youtube.com/playlist?list=PL6tYeJJ6gFfQDndiLrHjf34mmC2e7E1Cp&si=jkn1yQplyScwAB8V",
    tutorials: "https://youtube.com/playlist?list=PL6tYeJJ6gFfQDndiLrHjf34mmC2e7E1Cp&si=jkn1yQplyScwAB8V",
    vlogs: "https://youtube.com/playlist?list=PL6tYeJJ6gFfQBM9mFw7suUNB9Q4R245ZU&si=fYM01Q8UqXGgQ0Hd"
  };
</script>

<div class="w-full py-16">
  <div class="max-w-6xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
      <div class="md:col-span-1 flex items-end">
        <h1 class="text-3xl font-bold text-black">Check us out!</h1>
      </div>
      <div class="hidden md:block"></div>
      <div class="md:col-span-1 md:text-right flex items-end justify-end">
        <p class="text-black">
          We make content on YouTube, mostly tech related - tutorials,
          podcasts and stories!
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Podcasts Tile -->
      <a 
        href={playlistLinks.podcasts} 
        target="_blank"
        rel="noopener noreferrer"
        class="group relative bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
      >
        <div class="p-7 flex flex-col h-full">
          <!-- Title section with aligned indicator -->
          <div class="flex justify-between items-start mb-4">
            <h3
              class="text-2xl font-bold text-black pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[3px] after:bg-black group-hover:after:w-full after:transition-all after:duration-300"
            >
              PODCASTS
            </h3>
            
            <!-- Click to watch indicator aligned with title -->
            <div class="bg-black text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
              Click to watch
            </div>
          </div>
          
          <!-- Image container -->
          <div class="w-full h-48 mb-6 bg-gray-100 border border-dashed border-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
            <!-- Add your image here -->
            <span class="text-gray-400">Add Podcast Image</span>
          </div>
          
          <div class="mt-auto">
            <p class="text-black leading-relaxed">
              We make podcasts every month featuring our members,
              get ready to unwind genuine curious questions!
            </p>
          </div>
        </div>
        
        <!-- YouTube icon overlay -->
        <div class="absolute bottom-4 right-4 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-white">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
        </div>
      </a>

      <!-- Tutorials Tile -->
      <a 
        href={playlistLinks.tutorials} 
        target="_blank"
        rel="noopener noreferrer"
        class="group relative bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
      >
        <div class="p-7 flex flex-col h-full">
          <!-- Title section with aligned indicator -->
          <div class="flex justify-between items-start mb-4">
            <h3
              class="text-2xl font-bold text-black pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[3px] after:bg-black group-hover:after:w-full after:transition-all after:duration-300"
            >
              TUTORIALS
            </h3>
            
            <!-- Click to watch indicator aligned with title -->
            <div class="bg-black text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
              Click to watch
            </div>
          </div>
          
          <!-- Image container -->
          <div class="w-full h-48 mb-6 bg-gray-100 border border-dashed border-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
            <!-- Add your image here -->
            <span class="text-gray-400">Add Tutorial Image</span>
          </div>
          
          <div class="mt-auto">
            <p class="text-black leading-relaxed">
              Coding, design and much more!
            </p>
          </div>
        </div>
        
        <!-- YouTube icon overlay -->
        <div class="absolute bottom-4 right-4 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-white">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
        </div>
      </a>

      <!-- Vlogs Tile -->
      <a 
        href={playlistLinks.vlogs} 
        target="_blank"
        rel="noopener noreferrer"
        class="group relative bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
      >
        <div class="p-7 flex flex-col h-full">
          <!-- Title section with aligned indicator -->
          <div class="flex justify-between items-start mb-4">
            <h3
              class="text-2xl font-bold text-black pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[3px] after:bg-black group-hover:after:w-full after:transition-all after:duration-300"
            >
              VLOGS
            </h3>
            
            <!-- Click to watch indicator aligned with title -->
            <div class="bg-black text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
              Click to watch
            </div>
          </div>
          
          <div class="w-full h-48 mb-6 bg-gray-100 border border-dashed border-gray-300 rounded-lg overflow-hidden">
            <!-- Replace this with your image -->
              <img 
                src="D:\website\src\lib\assets\cars.jpg" 
                alt="Vlogs" 
                class="w-full h-full object-cover"/>
          </div>
          
          <div class="mt-auto">
            <p class="text-black leading-relaxed">
              Travel with us, Explore and Experience.
            </p>
          </div>
        </div>
        
        <!-- YouTube icon overlay -->
        <div class="absolute bottom-4 right-4 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-white">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
        </div>
      </a>
    </div>

    <div class="mt-12 text-center">
      <p class="text-xl font-bold">
        WATCH THESE IF YOU FIND THEM <span class="text-[#AE3579]">INTERESTING!!</span>
      </p>
    </div>
  </div>
</div>