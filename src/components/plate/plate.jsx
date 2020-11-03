import './plate.scss';

const Plate = ({value, description}) => (            
<div className="plate__info">
    <span>{value}</span>
    <span>{description}</span>
</div>);

export default Plate;