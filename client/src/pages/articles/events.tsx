import { Article } from "@/components/Article";
import { StandardHead } from "@/components/StandardHead";

const eventsContent = `
Discover exciting events and gatherings hosted by Morent and join us for unforgettable experiences and opportunities to connect with fellow car enthusiasts.

## Upcoming Events

Stay tuned for our upcoming events, including car showcases, test drive events, community gatherings, and more. Join us as we celebrate our passion for cars and explore the latest trends and innovations in the automotive industry.

## Past Events

Missed out on our previous events? Don't worry! Browse through our past event highlights and relive the memorable moments shared with our community. From exclusive launches to thrilling drives, our past events showcase the excitement and camaraderie that define the Morent experience.

## Get Involved

Want to be part of our next event? Keep an eye on our event calendar and follow us on social media to stay updated on upcoming opportunities to get involved. Whether you're a car enthusiast, industry professional, or simply curious about the world of automobiles, there's something for everyone at Morent events.

Join us for an unforgettable journey filled with excitement, camaraderie, and passion for all things automotive. We look forward to seeing you at our next event!

`;

export default function EventsPage() {
  return (
    <>
      <StandardHead pageName="Events" />
      <Article title="Events">{eventsContent}</Article>;
    </>
  );
}
