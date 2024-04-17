const EventPhotos = ({ eventPhoto, width, height }) => {
    return (
        <div className="eventPhotos">
            {/* Check if the eventPhoto object contains an array of imageURLs */}
            {Array.isArray(eventPhoto.imageURL) ? (
                // If it does, map over each imageURL and create an img element with the appropriate props
                eventPhoto.imageURL.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={`Event ${index + 1}`}
                        style={{ width: width, height: height, marginRight: '10px' }}
                    />
                ))
            ) : (
                // If the eventPhoto object contains a single imageURL, create an img element with the appropriate props
                <img
                    src={eventPhoto.imageURL}
                    alt={`Event`}
                    style={{ width: width, height: height, marginRight: '10px'  }}
                />
            )}
        </div>
    );
};

export default EventPhotos;
