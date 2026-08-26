export type WeddingEvent = {
  name: string;
  date: string;
  time: string;
  place: string;
  mapUrl: string;
  washImage?: string;
  washImageAlt?: string;
  dressCodeColors?: string[];
};

export const events: WeddingEvent[] = [
  {
    name: "Sangeet and Engagement",
    date: "3 December",
    time: "7:00 PM",
    place: "Peerlese Nagar, Sodepur, Kolkata",
    mapUrl: "https://maps.app.goo.gl/DbBByduhva9tPuuaA",
    washImage: "/photos/event-sangeet-background-v1.png",
    washImageAlt: "Tabla, flowers, and warm lights prepared for the Sangeet",
    dressCodeColors: ["#7f1d3f", "#d66b43", "#f1b24f", "#4a2c35"],
  },
  {
    name: "Haldi",
    date: "4 December",
    time: "7:00 AM",
    place: "Shrishti Garden, Jessore Rd, Kolkata",
    mapUrl: "https://maps.app.goo.gl/ur6KqC3tBMqw4i7NA",
    washImage: "/photos/event-haldi-background-v1.png",
    washImageAlt: "Turmeric, marigolds, and fabric prepared for the Haldi",
    dressCodeColors: ["#f1be3d", "#f5d97a", "#8a9d6f", "#fff4d6"],
  },
  {
    name: "Wedding",
    date: "4 December",
    time: "5:45 PM",
    place: "Shrishti Garden, Jessore Rd, Kolkata",
    mapUrl: "https://maps.app.goo.gl/ur6KqC3tBMqw4i7NA",
    washImage: "/photos/event-wedding-background-v1.png",
    washImageAlt: "A candlelit floral mandap prepared for the wedding",
    dressCodeColors: ["#b31e3f", "#d6a64a", "#f5e7c7", "#6b3b34"],
  },
];

export const navItems = ["Story", "Events", "RSVP"];

export const storyPhotos = {
  closeCouple: "/photos/rav03380.jpg",
  sharedLaughter: "/photos/rav03100.jpg",
  sharedLaughterPortrait: "/photos/rav03100-mobile-original.jpg",
  handsDetail: "/photos/rav03383.jpg",
  classicCouple: "/photos/rav03150.jpg",
};
