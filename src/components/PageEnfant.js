import '../style/PageEnfant.css';

function PageEnfant(props) {
  return (
    <div className="PageParent">
        {props.User.map((utilisateur) => (
            <div>
               <br/>

               {utilisateur.nom} <br/>
               {utilisateur.prenom}
               

            </div>
        ))}
    </div>

)}

export default PageEnfant;
