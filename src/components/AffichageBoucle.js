import '../style/AffichageBoucle.css';

let fruit = ['Fraise', 'bananes', 'tomates','pommes']

function AffichageBoucle() {
    return (
        <div className="AffichageBoucle">
                {fruit.map((fruit, index) => (
        <div>         
            je vous propose le fruits suivant : 
            {fruit}
        </div>
        ))}
    </div>
)}


export default AffichageBoucle;
