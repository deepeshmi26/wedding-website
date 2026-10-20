export type WeddingEvent = {
  id: string;
  name: string;
  date: string;
  year: string;
  time: string;
  place: string;
  mapUrl: string;
  washImage?: string;
  washImageAlt?: string;
  dressCodeColors?: string[];
};

export type WeddingEventGroup = {
  id: string;
  title?: string;
  invitation?: string;
  events: WeddingEvent[];
};

const eventDetails: Record<string, Pick<WeddingEvent, "mapUrl" | "washImage" | "dressCodeColors">> = {
  kolkataSangeet: {
    mapUrl: "https://maps.app.goo.gl/DbBByduhva9tPuuaA",
    washImage: "/photos/event-sangeet-background-v1.png",
    dressCodeColors: ["#7f1d3f", "#d66b43", "#f1b24f", "#4a2c35"],
  },
  kolkataHaldi: {
    mapUrl: "https://maps.app.goo.gl/ur6KqC3tBMqw4i7NA",
    washImage: "/photos/event-haldi-background-v1.png",
    dressCodeColors: ["#df7f96"],
  },
  kolkataWedding: {
    mapUrl: "https://maps.app.goo.gl/ur6KqC3tBMqw4i7NA",
    washImage: "/photos/event-wedding-background-v1.png",
    dressCodeColors: ["#b31e3f", "#d6a64a", "#f5e7c7", "#6b3b34"],
  },
  raigarhBouBhaat: {
    mapUrl: "https://share.google/YsUFwMhoT02GxT2P5",
    washImage: "/photos/raigarh-bou-bhaat-editorial.jpg",
  },
  raigarhReception: {
    mapUrl: "https://share.google/YsUFwMhoT02GxT2P5",
    washImage: "/photos/raigarh-reception-editorial.jpg",
  },
};

export function getEventGroups(groups: WeddingEventGroup[]): WeddingEventGroup[] {
  return groups.map((group) => ({
    ...group,
    events: group.events.map((event) => ({
      ...event,
      ...eventDetails[event.id],
    })),
  }));
}

export const storyPhotos = {
  closeCouple: "/photos/rav03380.jpg",
  sharedLaughter: "/photos/rav03100.jpg",
  sharedLaughterPortrait: "/photos/rav03100-mobile-original.jpg",
  handsDetail: "/photos/rav03383.jpg",
  classicCouple: "/photos/rav03150.jpg",
};
