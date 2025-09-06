<script>
    import EventCard from "$lib/components/event_card.svelte";
    import Image from "$lib/assets/event/event.svg";
    import Image1 from "$lib/assets/event/Weekly.jpg";
    import Image2 from "$lib/assets/event/event2.svg";
    import Major_event from "$lib/assets/event/bigevent.jpg";
    import Newsletter from "$lib/assets/misc/aug25.pdf";
    import { eventMaker } from "$lib/scripts/events";

    const monthlyEvent = eventMaker("Monthly", Image2, "Our Montly Event");
    const majorEvent = eventMaker(
        "MAIN EVENT",
        Major_event,
        "Collaboration Event",
    );
    const weeklyEvent = eventMaker("Weekly", Image1, "Weekly Regular Event");
</script>

<div class="flex h-full w-full items-center justify-center px-2 sm:px-4">
    <!-- Mobile Layout (< md) -->
    <div class="md:hidden w-full max-w-sm mx-auto space-y-4">
        <!-- Newsletter at top -->
        <div
            class="relative h-[60px] rounded-lg shadow-md bg-white border-2 border-black flex items-center justify-center"
        >
            <a
                href={Newsletter}
                download="August 2025"
                class="font-courier-prime font-bold text-center text-sm px-2"
            >
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
            <div
                class="relative h-[80px] shadow-md flex items-center justify-center bg-white border border-black font-courier-prime font-bold rounded-lg text-xl"
            >
                <div class="text-black font-bold text-sm">
                    <a
                        href="https://medium.com/@greyskalerobotics/behind-greyskale-79fbb6603944"
                    >
                        Read our Blog</a
                    >
                </div>
            </div>
            <div
                class="relative h-[80px] shadow-md flex items-center justify-center bg-white border border-black font-courier-prime font-bold rounded-lg text-xl"
            >
                <a href="/products"
                    ><div class="text-black font-bold text-sm">
                        Our Products
                    </div>
                </a>
            </div>
        </div>
    </div>

    <!-- Desktop Layout (md+) - Original Desktop Design -->
    <div class="hidden md:block w-full">
        <div
            class="grid h-full w-full gap-4 p-2 grid-cols-4 auto-rows-[175px] max-w-[1050px] mx-auto"
        >
            <div
                class="relative col-span-2 row-span-1 rounded-lg shadow-md flex items-center justify-center"
            >
                <div
                    class="h-full w-full flex justify-center items-center bg-white border border-black font-courier-prime font-bold rounded-lg text-xl"
                >
                    <a
                        href="https://medium.com/@greyskalerobotics/behind-greyskale-79fbb6603944"
                        >Read our Blog</a
                    >
                </div>
            </div>
            <div
                class="relative col-span-2 row-span-1 rounded-lg shadow-md flex items-center justify-center"
            >
                <a
                    href="/products"
                    class="h-full w-full flex justify-center items-center bg-white border border-black font-courier-prime font-bold rounded-lg text-xl"
                >
                    Our Products
                </a>
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
                    class="h-full w-full flex justify-center items-center bg-white border border-black font-courier-prime font-bold rounded-lg text-xl"
                >
                    <a href={Newsletter} download="June 2025">
                        Download our monthly newsletter
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
