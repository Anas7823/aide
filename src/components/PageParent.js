import '../style/PageParent.css';
import Tamere from './PageEnfant';

function PageParent(PageEnfant) {
    let User = [
    {
        nom : "Laury", 
        prenom: "Nathan"
      },
      {nom : "Sahebektiari",
       prenom : "Behnam"
      }]

  return (
    <div className="PageParent">
        <Tamere User={User}/>

    </div>
  )
}

export default PageParent;
