<script>
    import EventCard from "$lib/components/event_card.svelte";
    import Image from "$lib/assets/event.svg";
    import {eventMaker} from "$lib/scripts/events"


    const monthlyEvent = eventMaker("Monthly",Image,"Hello How are you")
    const majorEvent = eventMaker("MAIN EVENT", Image, "Very dope event")
    const weeklyEvent = eventMaker("Weekly", Image, "This is done by Chandra Rajesh")
</script>

<div class="flex h-full w-full items-center justify-center">
    <div
        class="grid h-full w-full gap-4 p-2 grid-cols-4 auto-rows-[175px] max-w-[1050px]"
    >
        <div
            class="relative col-span-2 row-span-1 rounded-lg shadow-md flex items-center justify-center"
        >
            <div
                class="h-full w-full flex justify-center items-center bg-pink-500 font-bold rounded-lg"
            >
                Blog
            </div>
        </div>
        <div
            class="relative col-span-2 row-span-1 rounded-lg shadow-md flex items-center justify-center"
        >
            <div
                class="h-full w-full flex justify-center items-center bg-pink-300 font-bold rounded-lg"
            >
                Blog
            </div>
        </div>
        <div
            class="relative col-span-1 row-span-2 rounded-lg shadow-md flex items-center justify-center"
        >
            <EventCard
                title={monthlyEvent.eventTitle}
                image={monthlyEvent.eventImage}
                description={monthlyEvent.eventDesc}
            />
        </div>
        <div
            class="relative col-span-2 row-span-2 rounded-lg shadow-md flex items-center justify-center"
        >
            <EventCard
                title={majorEvent.eventTitle}
                image={majorEvent.eventImage}
                description={majorEvent.eventDesc}
            />
        </div>
        <div
            class="relative col-span-1 row-span-2 rounded-lg shadow-md flex items-center justify-center"
        >
            <EventCard
                title={weeklyEvent.eventTitle}
                image={weeklyEvent.eventImage}
                description={weeklyEvent.eventDesc}
            />
        </div>
        <div
            class="relative col-span-4 row-span-1 rounded-lg shadow-md flex items-center justify-center"
        >
            <div
                class="h-full w-full flex justify-center items-center bg-pink-700 font-bold rounded-lg"
            >
                Newsletter
            </div>
        </div>
    </div>
</div>
