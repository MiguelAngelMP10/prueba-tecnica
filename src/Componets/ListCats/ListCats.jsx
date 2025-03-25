import { useEffect, useState } from "react";
import Card from "../Card/Card.jsx";
import Modal from "../Modal/Modal.jsx";

const ListCats = () => {
    const [cats, setCats] = useState([]);
    const [selectedCat, setSelectedCat] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchCats = () => {
        setLoading(true);
        fetch(`https://api.thecatapi.com/v1/images/search?limit=8`)
            .then((res) => res.json())
            .then((data) => {
                setCats((prevCats) => [...prevCats, ...data]); // Agregar nuevos gatos a la lista existente
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };

    const handleClick = (cat) => {
        setSelectedCat(cat); // Establece la imagen seleccionada
    };

    const handleCloseModal = () => {
        setSelectedCat(null); // Cerrar el modal cuando se haga clic en el botón de cancelación
    };

    useEffect(() => {
        fetchCats(); // Carga inicial
    }, []);

    // Detectar scroll al final de la página
    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && // A 100px del final
                !loading
            ) {
                fetchCats(); // Realiza otra petición para cargar más gatos
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loading]);

    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {cats.map((cat) => (
                    <Card key={cat.id} cat={cat} onClick={handleClick} />
                ))}
            </div>

            {loading && (
                <div className="text-center mt-4">
                    <p className="text-gray-500">Cargando más gatos...</p>
                </div>
            )}

            {/* Mostrar modal si hay una imagen seleccionada */}
            {selectedCat && <Modal cat={selectedCat} onClose={handleCloseModal} />}
        </div>
    );
};

export default ListCats;
