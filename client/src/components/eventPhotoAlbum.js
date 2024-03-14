const EventPhotoDetails = ({ eventPhoto, width, height }) => {
    return (
        <div className="eventphotosalbumsDetails">
            <h>All Photos</h>
            <h4>{eventPhoto.title}</h4>
            <p>
                <strong>Image: </strong>
                <img 
                    src={eventPhoto.imageUrl} 
                    alt={eventPhoto.title} 
                    style={{ width: width, height: height }} 
                />
            </p>
        </div>
    )
}

export default EventPhotoDetails;
