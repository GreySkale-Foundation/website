<script>
let image_data = $props()
</script>


<div class="absolute inset-0 overflow-hidden rounded-2xl">
  <!-- the group wrapper is now inside the flex-grow container -->
  <div class="relative group w-full h-full">
    <img
      src={image_data.image}
      alt={image_data.title}
      class="absolute inset-0 w-full h-full object-cover"
    />

    <div
      class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40
             transition-opacity duration-300 rounded-2xl"
    ></div>

    <div
      class="absolute top-2 left-2 text-white font-semibold
             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      {image_data.title}
    </div>

    <div
      class="absolute bottom-2 left-2 text-white text-sm
             opacity-0 group-hover:opacity-100 transition-opacity duration-300
             max-w-[75%]"
    >
      {image_data.desc}
    </div>
</div>
</div>
