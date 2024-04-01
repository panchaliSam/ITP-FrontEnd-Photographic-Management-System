const EventPhotos = ({eventPhoto, width, height}) => {
    return(
        <div className="eventPhotos">
            <img
                src={eventPhoto.imageURL}
                alt={eventPhoto.eventPhotoId}
                style={{ width: width, height: height }} 
            />
        </div>
    )
}

export default EventPhotos;