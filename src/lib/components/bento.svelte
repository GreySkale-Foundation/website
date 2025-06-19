<script>
    import poster1 from "$lib/assets/poster1.png"
    import poster2 from "$lib/assets/poster2.png"
    import Events from "./events.svelte";

  // Sample data (replace with your API/data)
  const events = [
    { id: 1, posterUrl: "/poster1.jpg", status: "Upcoming", hostAvatar: "/poster2.jpg" },
    { id: 2, posterUrl: "/poster2.jpg", status: "Ended", hostAvatar: "/poster1.jpg" },
    // ... 7 more events
  ];
</script>

<div class="grid grid-cols-3 gap-4 w-max mx-auto">
  {#each events as event}
    <Events {event} />
  {/each}
</div>