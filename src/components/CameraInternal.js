import Image from 'material-ui-image'

function CameraInternal(props) {
    return (
        <Image
        src={props.img}
        aspectRatio={1.33}
        disableSpinner={props.spinner}
        disableTransition={props.transition}
        />
    );
}
export default CameraInternal;