<script>
    import Events from '$lib/components/events.svelte'
    import EventData from '$lib/data/events.json'
</script>

<div class="w-[960px] ml-auto mr-auto">
   <div class="grid auto-cols-[280px] auto-rows-[280px]  gap-4">
  {#each EventData as image_data}
     <div class={`col-span-${image_data.layout.col} ` + `row-span-${image_data.layout.row} rounded-2xl`}>
        <Events image_data={image_data}/>
     </div>
  {/each}
</div>
</div>
