<script>
let {title, image, description} = $props()
</script>


<div class="absolute inset-0 overflow-hidden rounded-lg">
  <div class="relative group w-full h-full">
    <img
      src={image}
      alt={title}
      class="absolute w-full h-full object-cover"
    />

    <div
      class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40
             transition-opacity duration-300 rounded-2xl"
    ></div>

    <div
      class="absolute top-2 left-2 text-white font-semibold
             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      {title}
    </div>

    <div
      class="absolute bottom-2 left-2 text-white text-sm
             opacity-0 group-hover:opacity-100 transition-opacity duration-300
             max-w-[75%]"
    >
      {description}
    </div>
</div>
</div>
