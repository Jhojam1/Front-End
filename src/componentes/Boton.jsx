import './Boton.css'; // Asegúrate de que la ruta sea correcta

const Boton = ({text}) => {
    return (
        <div className="btn-bg bg-1">
            <div className="btn btn-1">
                    <button>{text}</button>
            </div>
        </div>
    );
};

export default Boton;