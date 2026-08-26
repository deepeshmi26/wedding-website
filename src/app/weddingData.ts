export type WeddingEvent = {
  name: string;
  date: string;
  time: string;
  place: string;
  mapUrl: string;
  landmarkImage: string;
  landmarkAlt: string;
  landmarkWidth: number;
  landmarkHeight: number;
  landmarkClassName?: string;
  washImage?: string;
  washImageAlt?: string;
  dressCodeColors?: string[];
};

export const events: WeddingEvent[] = [
  {
    name: "Sangeet",
    date: "3 December",
    time: "7:00 PM",
    place: "Peerlese Nagar, Sodepur, Kolkata",
    mapUrl: "https://maps.app.goo.gl/DbBByduhva9tPuuaA",
    landmarkImage: "/graphics/howrah-bridge-night-card.jpg",
    landmarkAlt: "Howrah Bridge at night in Kolkata",
    landmarkWidth: 960,
    landmarkHeight: 466,
    landmarkClassName: "w-[84%]",
    washImage: "/graphics/howrah-bridge-sunset-wash.jpeg",
    washImageAlt: "Howrah Bridge at sunset over the river",
    dressCodeColors: ["#7f1d3f", "#d66b43", "#f1b24f", "#4a2c35"],
  },
  {
    name: "Haldi",
    date: "4 December",
    time: "7:00 AM",
    place: "Shrishti Garden, Jessore Rd, Kolkata",
    mapUrl: "https://maps.app.goo.gl/ur6KqC3tBMqw4i7NA",
    landmarkImage: "/graphics/victoria-memorial-card.jpg",
    landmarkAlt: "Victoria Memorial in Kolkata",
    landmarkWidth: 960,
    landmarkHeight: 472,
    washImage: "/graphics/kolkata-tram-wash.webp",
    washImageAlt: "Kolkata tram on a rainy street",
    dressCodeColors: ["#f1be3d", "#f5d97a", "#8a9d6f", "#fff4d6"],
  },
  {
    name: "Wedding",
    date: "4 December",
    time: "5:45 PM",
    place: "Shrishti Garden, Jessore Rd, Kolkata",
    mapUrl: "https://maps.app.goo.gl/ur6KqC3tBMqw4i7NA",
    landmarkImage: "/graphics/belur-math-card.jpg",
    landmarkAlt: "Belur Math near Kolkata",
    landmarkWidth: 960,
    landmarkHeight: 380,
    washImage: "/graphics/dakshineswar-temple-wash.jpg",
    washImageAlt: "Dakshineswar Kali Temple in Kolkata",
    dressCodeColors: ["#b31e3f", "#d6a64a", "#f5e7c7", "#6b3b34"],
  },
];

export const navItems = ["Story", "Events", "RSVP"];

export const storyPhotos = {
  closeCouple: "/photos/rav03380.jpg",
  handsDetail: "/photos/rav03383.jpg",
  classicCouple: "/photos/rav03150.jpg",
};
