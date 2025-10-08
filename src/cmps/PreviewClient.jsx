export function PreviewClient({ client }) {
    return (
        <div className="preview-client">
            <img src={client.src} alt={client.alt} className="client-img" />

            {client.stars && (
                <p className="client-stars">{client.stars}</p>
            )}

            {client.comment && (
                <p className="client-comment">{client.comment}</p>
            )}

        </div>
    );
}
