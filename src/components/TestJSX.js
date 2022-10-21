import '../style/TestJSX.css';
import image from '../assets/vachegif.gif'

function TestJSX() {
  return (
    <div className="TestJSX">
            <div className='titre'>
                <h1>La Vache</h1>
            </div>
        <div className='bord'>
           <div className='image'>
                <img alt='' src={image} />
            </div>

            <div className='description'>
            <h4>
                Fatah, un paysan algérien modeste, joyeux et optimiste, n'a jamais quitté sa campagne. Aimant la culture française et notamment la musique de variété des années 1980, il rêve d'emmener sa vache, Jacqueline, au salon de l'agriculture de Paris. Un jour, à la surprise générale, il reçoit une invitation pour s'y rendre, l'organisation de l'évènement exprimant le souhait de récompenser sa persévérance. Il est toutefois incapable de financer le voyage et doit donc emprunter de l'argent à tous les hommes du village pour mener à bien son voyage, qui consentent à ce prêt malgré les réticences.
                Il quitte alors sa femme Naïma et ses deux filles et prend le bateau pour Marseille avec sa vache. Avant d'entamer, à pied, sa marche vers Paris, il rend visite à son beau-frère, Hassan, qui vit depuis des années à Marseille. Il découvre que ce dernier a caché l'existence de son mariage avec une Française et de leurs deux enfants. Hassan incite fortement Fatah à ne rien révéler et à s'en aller rapidement. Le paysan algérien débute ensuite son périple à travers la France, où il fait des rencontres variées : il se retrouve à animer une fête de village trop arrosée, puis il est accueilli chez un comte ruiné lorsque Jacqueline se voit bloquée par la traversée d'un cours d'eau, puis il est impliqué malgré lui dans un mouvement de revendications paysannes qui lui vaut d'être injustement arrêté par la police lors d'une manifestation qui dégénère. Repéré par une journaliste de la télévision française, le courageux marcheur fait soudainement le buzz dans les médias et sur les réseaux sociaux, suscitant l'admiration et subissant également quelques moqueries.
                Alors que les ennuis le retardent, il n'est pas sûr d'arriver à temps au concours de la plus belle vache tarentaise. D'autre part, des photographies embarrassantes, le montrant ivre ou embrassant une femme, créent un scandale parmi les habitants de son village qui les reçoivent à cause d'un quiproquo.
            </h4>
            </div>
        </div>
    </div>
  );
}

export default TestJSX;
