const calendarLines = [
  "BEGIN:VCALENDAR",
  "VERSION:2.0",
  "PRODID:-//Rajshree and Deepesh//Wedding Celebrations//EN",
  "CALSCALE:GREGORIAN",
  "METHOD:PUBLISH",
  "X-WR-CALNAME:Rajshree & Deepesh's Wedding",
  "X-WR-TIMEZONE:Asia/Kolkata",
  "REFRESH-INTERVAL;VALUE=DURATION:PT12H",
  "X-PUBLISHED-TTL:PT12H",
  "BEGIN:VEVENT",
  "UID:sangeet-20261203@rajshreedeepesh.co.in",
  "DTSTAMP:20261014T000000Z",
  "DTSTART:20261203T133000Z",
  "SUMMARY:Rajshree & Deepesh - Engagement & Sangeet",
  "DESCRIPTION:Join us for an evening of music and celebration.",
  "LOCATION:Peerlese Nagar\, Sodepur\, Kolkata",
  "STATUS:CONFIRMED",
  "END:VEVENT",
  "BEGIN:VEVENT",
  "UID:haldi-20261204@rajshreedeepesh.co.in",
  "DTSTAMP:20261014T000000Z",
  "DTSTART:20261204T013000Z",
  "SUMMARY:Rajshree & Deepesh - Haldi",
  "DESCRIPTION:Join us for the Haldi ceremony.",
  "LOCATION:Shrishti Garden\, Jessore Rd\, Kolkata",
  "STATUS:CONFIRMED",
  "END:VEVENT",
  "BEGIN:VEVENT",
  "UID:wedding-20261204@rajshreedeepesh.co.in",
  "DTSTAMP:20261014T000000Z",
  "DTSTART:20261204T121500Z",
  "SUMMARY:Rajshree & Deepesh's Wedding",
  "DESCRIPTION:Join us for the wedding ceremony at 5:45 PM.",
  "LOCATION:Shrishti Garden\, Jessore Rd\, Kolkata",
  "STATUS:CONFIRMED",
  "END:VEVENT",
  "END:VCALENDAR",
];

export const dynamic = "force-static";

export function GET() {
  return new Response(`${calendarLines.join("\r\n")}\r\n`, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Content-Disposition": 'inline; filename="rajshree-deepesh-wedding.ics"',
      "Content-Type": "text/calendar; charset=utf-8",
    },
  });
}
