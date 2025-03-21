import {useEffect, useState} from "react";

const Breeds = () => {


    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/breeds?limit=8')
            .then(res => res.json())
            .then(data => setBreeds(data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="inline-flex rounded-fluid shadow-xs my-10 ">
            {
                breeds.map(breed => (
                    <a href="#" key={breed.id} aria-current="page"
                       className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                        {breed.name}
                    </a>
                ))
            }

        </div>
    );

}

export default Breeds;