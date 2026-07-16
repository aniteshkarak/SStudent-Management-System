const activities = [
    {
        icon: "✅",
        bg: "bg-green-100",
        text: "Attendance marked for CSE-2B",
        time: "5 minutes ago"
    },
    {
        icon: "📝",
        bg: "bg-amber-100",
        text: "Marks uploaded for Semester 4",
        time: "1 hour ago"
    },
    {
        icon: "➕",
        bg: "bg-blue-100",
        text: "New student added: Arjun Singh",
        time: "3 hours ago"
    },
    {
        icon: "🗑️",
        bg: "bg-red-100",
        text: "Student record removed: Rohit Sen",
        time: "Yesterday"
    },
    {
        icon: "⚙️",
        bg: "bg-zinc-100",
        text: "Department details updated: MCA",
        time: "2 days ago"
    }
];

const slot = document.getElementById("activitySlot");
const icon = document.getElementById("activityIcon");
const text = document.getElementById("activityText");
const time = document.getElementById("activityTime");
const dots = document.getElementById("activityDots");

let current = 0;

function render(index) {

    const item = activities[index];

    icon.textContent = item.icon;

    icon.className =
        `w-9 h-9 rounded-full ${item.bg}
        flex items-center justify-center text-base`;

    text.textContent = item.text;

    time.textContent = item.time;

    dots.innerHTML = "";

    activities.forEach((_, i) => {

        const dot = document.createElement("span");

        dot.className =
            `w-2 h-2 rounded-full transition-all duration-300 ${
                i === index
                    ? "bg-amber-500"
                    : "bg-zinc-300"
            }`;

        dots.appendChild(dot);

    });

}

render(current);

setInterval(() => {

    // Slide Up + Fade Out
    slot.style.opacity = "0";
    slot.style.transform = "translateY(-20px)";

    setTimeout(() => {

        current = (current + 1) % activities.length;

        render(current);

        slot.style.transition = "none";
        slot.style.transform = "translateY(20px)";

        requestAnimationFrame(() => {

            slot.style.transition = "all 300ms ease";

            slot.style.opacity = "1";
            slot.style.transform = "translateY(0)";

        });

    }, 300);

}, 1500);

// upcoming
const events = [
    {
        icon: "📅",
        bg: "bg-blue-100",
        title: "Semester Examination",
        date: "25 July 2026"
    },
    {
        icon: "🎓",
        bg: "bg-green-100",
        title: "Freshers' Orientation",
        date: "30 July 2026"
    },
    {
        icon: "💼",
        bg: "bg-amber-100",
        title: "Placement Drive",
        date: "05 August 2026"
    },
    {
        icon: "🏆",
        bg: "bg-red-100",
        title: "Annual Sports Meet",
        date: "12 August 2026"
    },
    {
        icon: "🎉",
        bg: "bg-purple-100",
        title: "College Fest",
        date: "20 August 2026"
    }
];

const eventSlot = document.getElementById("eventSlot");
const eventIcon = document.getElementById("eventIcon");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventDots = document.getElementById("eventDots");

let currentEvent = 0;

function renderEvent(index) {

    const e = events[index];

    eventIcon.textContent = e.icon;
    eventIcon.className =
        `w-10 h-10 rounded-full ${e.bg} flex items-center justify-center`;

    eventTitle.textContent = e.title;
    eventDate.textContent = e.date;

    eventDots.innerHTML = "";

    events.forEach((_, i) => {

        const dot = document.createElement("span");

        dot.className =
            `w-2 h-2 rounded-full transition-all duration-300 ${
                i === index
                ? "bg-amber-500"
                : "bg-zinc-300"
            }`;

        eventDots.appendChild(dot);

    });

}

renderEvent(currentEvent);

const EVENT_ROTATE = 1500; // 15 seconds
const EVENT_TRANSITION = 300;

setInterval(() => {

    eventSlot.style.opacity = "0";
    eventSlot.style.transform = "translateY(-20px)";

    setTimeout(() => {

        currentEvent = (currentEvent + 1) % events.length;

        renderEvent(currentEvent);

        eventSlot.style.transition = "none";
        eventSlot.style.transform = "translateY(20px)";

        requestAnimationFrame(() => {

            eventSlot.style.transition =
                `all ${EVENT_TRANSITION}ms ease`;

            eventSlot.style.opacity = "1";
            eventSlot.style.transform = "translateY(0)";

        });

    }, EVENT_TRANSITION);

}, EVENT_ROTATE);