<script>
  export let event; // { id, posterUrl, status, hostAvatar }
</script>

<div class="relative w-48 h-48 group cursor-pointer">
  <!-- Event Poster (Dims on hover) -->
  <img
    src={event.posterUrl}
    alt="Event poster"
    class="w-full h-full object-cover group-hover:brightness-65 transition"
  />

  <!-- Status Badge (Top-Left) -->
  <div class="absolute top-2 left-2 px-2 py-1 text-xs font-medium rounded-full
              bg-black/70 text-white">
    {event.status}
  </div>

  <!-- Host Avatar (Bottom-Right) -->
  <div class="absolute bottom-2 right-2 w-8 h-8 rounded-full overflow-hidden
              border-2 border-white">
    <img
      src={event.hostAvatar}
      alt="Host"
      class="w-full h-full object-cover"
    />
  </div>
</div>
