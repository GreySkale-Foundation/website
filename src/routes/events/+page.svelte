<script>
   import Events from "$lib/components/events.svelte";
   import EventData from "$lib/data/events.json";
</script>

<div class="h-screen bg-black">
   <div class="flex mx-auto h-96 w-[65%] items-center justify-center">
      <div
         class="grid h-full gap-4 w-full grid-cols-4 grid-rows-3 rounded-lg shadow-md"
      >
         {#each EventData as image_data, indx}
            {#if indx === 5}
               <div
                  class={`col-span-${image_data.layout.col} ` +
                     `row-span-${image_data.layout.row} items-center shadow-md justify-center rounded-2xl h-16`}
               >
                  <Events {image_data} />
               </div>
            {:else}
               <div
                  class={`col-span-${image_data.layout.col} ` +
                     `row-span-${image_data.layout.row} items-center shadow-md justify-center rounded-2xl`}
               >
                  <Events {image_data} />
               </div>
            {/if}
         {/each}
      </div>
   </div>
</div>
