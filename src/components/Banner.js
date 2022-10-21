import '../style/Banner.css';
import * as React from "react";
import { Link } from "react-router-dom";



function Banner(){
	return<div className='banner'>
        <h1>Aide</h1>
        <div className='ProduitNav'>
            <Link to='/'>
                <h4 className='elementNav'>Accueil</h4>
            </Link>
            <Link to='/Condition'>
                <h4 className='elementNav'>Condition</h4>
            </Link>
            <Link to='/AffichageBoucle'>
                <h4 className='elementNav'> Boucle </h4>
            </Link>
            <Link to='/PageParent'>
                <h4 className='elementNav'>PageParent</h4>
            </Link>
        </div>
         
    </div> 
}

export default Banner;