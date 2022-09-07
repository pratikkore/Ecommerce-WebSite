import CardComp from './CardComp';
import data from './JSON/Toys.json'

function Toys() {
    return (
        <CardComp data={data}/>
    );
}

export default Toys;