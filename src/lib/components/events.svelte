<script>
    import EventCard from "$lib/components/event_card.svelte";
    import Image from "$lib/assets/event/event.svg";
    import Image2 from '$lib/assets/event/event2.svg'
    import Newsletter from '$lib/assets/misc/june25.pdf';
    import {eventMaker} from "$lib/scripts/events"
    
    const monthlyEvent = eventMaker("Monthly",Image2,"Hello How are you")
    const majorEvent = eventMaker("MAIN EVENT", Image, "Very dope event")
    const weeklyEvent = eventMaker("Weekly", Image2, "This is done by Chandra Rajesh")
</script>

<div class="flex h-full w-full items-center justify-center px-2 sm:px-4">
    <!-- Mobile Layout (< md) -->
    <div class="md:hidden w-full max-w-sm mx-auto space-y-4">
        <!-- Newsletter at top -->
        <div class="relative h-[60px] rounded-lg shadow-md bg-white border-2 border-black flex items-center justify-center">
            <a href={Newsletter} download="June 2025" 
               class="font-courier-prime font-bold text-center text-sm px-2">
                Download our monthly newsletter
            </a>
        </div>

        <!-- Top row: Two smaller events side by side -->
        <div class="grid grid-cols-2 gap-3">
            <div class="relative h-[140px] rounded-lg shadow-md">
                <EventCard
                    title={monthlyEvent.eventTitle}
                    image={monthlyEvent.eventImage}
                    description={monthlyEvent.eventDesc}
                />
            </div>
            <div class="relative h-[140px] rounded-lg shadow-md">
                <EventCard
                    title={weeklyEvent.eventTitle}
                    image={weeklyEvent.eventImage}
                    description={weeklyEvent.eventDesc}
                />
            </div>
        </div>

        <!-- Major Event - Large centered card -->
        <div class="relative h-[280px] rounded-lg shadow-md">
            <EventCard
                title={majorEvent.eventTitle}
                image={majorEvent.eventImage}
                description={majorEvent.eventDesc}
            />
        </div>

        <!-- Bottom row: Blog cards -->
        <div class="grid grid-cols-2 gap-3">
            <div class="relative h-[80px] rounded-lg shadow-md bg-pink-500 flex items-center justify-center">
                <div class="text-white font-bold text-sm">Meet the Peeps</div>
            </div>
            <div class="relative h-[80px] rounded-lg shadow-md bg-pink-300 flex items-center justify-center">
                <div class="text-gray-800 font-bold text-sm">Read our Blog</div>
            </div>
        </div>
    </div>

    <!-- Desktop Layout (md+) - Original Desktop Design -->
    <div class="hidden md:block w-full">
        <div class="grid h-full w-full gap-4 p-2 grid-cols-4 auto-rows-[175px] max-w-[1050px] mx-auto">
            <div class="relative col-span-2 row-span-1 rounded-lg shadow-md flex items-center justify-center">
                <div class="h-full w-full flex justify-center items-center bg-pink-500 font-bold rounded-lg text-white">
                    Blog
                </div>
            </div>
            <div class="relative col-span-2 row-span-1 rounded-lg shadow-md flex items-center justify-center">
                <div class="h-full w-full flex justify-center items-center bg-pink-300 font-bold rounded-lg">
                    Blog
                </div>
            </div>
            <div class="relative col-span-1 row-span-2 rounded-lg shadow-md flex items-center justify-center">
                <EventCard
                    title={monthlyEvent.eventTitle}
                    image={monthlyEvent.eventImage}
                    description={monthlyEvent.eventDesc}
                />
            </div>
            <div class="relative col-span-2 row-span-2 rounded-lg shadow-md flex items-center justify-center">
                <EventCard
                    title={majorEvent.eventTitle}
                    image={majorEvent.eventImage}
                    description={majorEvent.eventDesc}
                />
            </div>
            <div class="relative col-span-1 row-span-2 rounded-lg shadow-md flex items-center justify-center">
                <EventCard
                    title={weeklyEvent.eventTitle}
                    image={weeklyEvent.eventImage}
                    description={weeklyEvent.eventDesc}
                />
            </div>
            <div class="relative col-span-4 row-span-1 rounded-lg shadow-md flex items-center justify-center">
                <div class="h-full w-full flex justify-center items-center bg-white border border-black font-courier-prime font-bold rounded-lg text-xl">
                    <a href={Newsletter} download="June 2025">
                        Download our monthly newsletter
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>