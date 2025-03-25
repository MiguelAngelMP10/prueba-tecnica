const Card = ({cat, onClick}) => {
    return (
        <div className="cursor-pointer" onClick={() => onClick(cat)}>
            <img src={cat.url} alt={`Cat ${cat.id}`} className="w-full h-auto" />
        </div>
    );
};

export default Card;
