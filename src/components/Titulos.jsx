import  PropTypes from 'prop-types';
function Titulo({nombre, apellido}) {
//function Titulo(props) {
    //console.log(props);
   // return ( <h1>hola{props.nombre} {props.apellido}</h1> );
    return ( <h1>hola{nombre} {apellido}</h1> );
}
Titulo().propTypes={
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string
};
export default Titulo;