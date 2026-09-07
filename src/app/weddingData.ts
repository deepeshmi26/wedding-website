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

const eventDetails = [
  {
    mapUrl: "https://maps.app.goo.gl/DbBByduhva9tPuuaA",
    washImage: "/photos/event-sangeet-background-v1.png",
    dressCodeColors: ["#7f1d3f", "#d66b43", "#f1b24f", "#4a2c35"],
  },
  {
    mapUrl: "https://maps.app.goo.gl/ur6KqC3tBMqw4i7NA",
    washImage: "/photos/event-haldi-background-v1.png",
    dressCodeColors: ["#f1be3d", "#f5d97a", "#8a9d6f", "#fff4d6"],
  },
  {
    mapUrl: "https://maps.app.goo.gl/ur6KqC3tBMqw4i7NA",
    washImage: "/photos/event-wedding-background-v1.png",
    dressCodeColors: ["#b31e3f", "#d6a64a", "#f5e7c7", "#6b3b34"],
  },
];

export function getEvents(items: Pick<WeddingEvent, "name" | "date" | "time" | "place" | "washImageAlt">[]): WeddingEvent[] {
  return eventDetails.map((details, index) => ({ ...details, ...items[index] }));
}

export const storyPhotos = {
  closeCouple: "/photos/rav03380.jpg",
  sharedLaughter: "/photos/rav03100.jpg",
  sharedLaughterPortrait: "/photos/rav03100-mobile-original.jpg",
  handsDetail: "/photos/rav03383.jpg",
  classicCouple: "/photos/rav03150.jpg",
};
