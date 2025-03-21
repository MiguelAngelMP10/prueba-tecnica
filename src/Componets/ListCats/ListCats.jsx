import {useEffect, useState} from "react";
import Card from "../Card/Card.jsx";

const ListCats = () => {
    const [cats, setCats] = useState([])

   const [isOpenModal, setIsOpenModal] = useState(true);


    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search?limit=8')
            .then(res => res.json())
            .then(data => {
                setCats(data)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                cats.map((cat) => (
                    <Card cat={cat}></Card>
                ))
            }
        </div>
    )
}
export default ListCats;