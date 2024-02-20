import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from './Button';
import Skeletonn from './Skeleton';
import PhotosListItem from './PhotosListitem';


function PhotosList({ album }) {

    const {data, isFetching, error} = useFetchPhotosQuery( album );
    const [addPhoto, addPhotoResults] = useAddPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    };

    let content;
    if (isFetching) {
        content = <Skeleton className="h-8 w-8" times={4} />
    }

    return <div>
        <div className="m-2 flex flex-row items-center justify-between">
            <h3 className="text-lg font-bold">Photos In ${album.title}</h3>
            <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
                + Add Photo
            </Button>
        </div>
    </div>;
}

export default PhotosList;