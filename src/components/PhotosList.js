import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from './Button';


function PhotosList({ album }) {

    useFetchPhotosQuery( album );
    const [addPhoto, addPhotoResults] = useAddPhotoMutation();

    return <div>
        <div>

        </div>
    </div>;
}

export default PhotosList;