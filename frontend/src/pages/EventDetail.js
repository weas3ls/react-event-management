import { useParams } from "react-router-dom";

function EventDetailPage() {
    const params = useParams();

    const eventId = params.eventId;

    return (
        <>
            <h1>EventDetailPage</h1>
            <p>Event ID: {eventId}</p>
        </>
    );
}

export default EventDetailPage;
