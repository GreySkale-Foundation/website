<script>
    let { image_data } = $props();
</script>

<div class="w-full h-full group relative">
    <img
        src={image_data.image}
        alt={image_data.title}
        class="absolute  w-full h-full object-cover rounded-2xl"
    />
    <div
        class="absolute  rounded-2xl bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"
    ></div>

    <div
        class="absolute top-2 left-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
        {image_data.title}
    </div>

    <div
        class="absolute bottom-2 left-2 text-white font-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-[77%]"
    >
        {image_data.desc}
    </div>

    <div
        class="absolute bottom-2 right-2 w-10 h-10 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
        <a href={image_data.author}
            ><img src={image_data.author_image} alt={image_data.author} /></a
        >
    </div>
</div>
