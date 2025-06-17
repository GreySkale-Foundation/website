<script>
    let { image_data } = $props();
</script>

<div class="w-96 group relative">
    <img src={image_data.image} alt="Events" class="w-full h-auto" />

    <div
        class="absolute inset-0 bg-black opacity-0 group-hover:opacity-43 transition-opacity duration-300"
    ></div>

    <div
        class="absolute top-2 left-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >{image_data.title}</div>

    <div
        class="absolute bottom-2 left-2 text-white font-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-[77%]"
    >{image_data.desc}</div>

    <div class="absolute bottom-2 right-2 w-10 h-10 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a href={image_data.author}><img src={image_data.author_image} alt="Hello"></a>
    </div>
</div>
