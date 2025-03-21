import Modal from "../Modal/Modal.jsx";

const Card = ({cat}) => {
    return (
        <div>
            <img key={cat.id} src={cat.url} alt={cat.id}
                 className="transition-all duration-300 rounded-lg blur-xs hover:blur-none"></img>
            <Modal cat={cat}></Modal>
        </div>
    )
}
export default Card;