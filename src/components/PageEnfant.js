import '../style/PageEnfant.css';

function PageEnfant(props) {
  return (
    <div className="PageParent">
        {props.User.map((utilisateur) => (
            <div>
               {utilisateur.nom}
            </div>
        ))}
    </div>

)}

export default PageEnfant;
