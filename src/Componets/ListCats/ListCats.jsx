import {useEffect, useState} from "react";
import Card from "../Card/Card.jsx";
import Modal from "../Modal/Modal.jsx";

const ListCats = () => {
    const [cats, setCats] = useState([]);
    const [selectedCat, setSelectedCat] = useState(null);

    const handleClick = (cat) => {
        setSelectedCat(cat); // Establece la imagen seleccionada
    };

    const handleCloseModal = () => {
        setSelectedCat(null); // Cerrar el modal cuando se haga clic en el botón de cancelación
    };

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search?limit=8')
            .then(res => res.json())
            .then(data => {
                setCats(data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {cats.map((cat) => (
                    <Card key={cat.id} cat={cat} onClick={handleClick} />
                ))}
            </div>

            {/* Mostrar modal si hay una imagen seleccionada */}
            {selectedCat && <Modal cat={selectedCat} onClose={handleCloseModal} />}
        </div>
    );
};

export default ListCats;
