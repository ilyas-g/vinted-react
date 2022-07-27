import React from 'react';
import "./style.css";

export default function Header() {
    return (
        <header className='entete__main'>
            <div className='container u-flexbox u-align-items-center u-fill-height'>
                <div className='entete__content'>
                    <div className='entete__logo'>
                        <a className="d-block" href=''><span>Header</span></a>
                    </div>
                    <div className='searchBar'>
                        <form>
                            <div className='position-relative'>
                                <div className='entete-bar_input'>
                                    <input className='bar_value' id="search_text" name="search_text" placeholder="Rechercher des articles" data-testid="search-text--input"
                                        autocomplete="off" aria-labelledby="search-item" value="" />
                                    <div className='entete-bar_suffix'></div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='u-desktops-only u-flexbox u-align-items-center'>
                        <button>S'inscrire</button>
                        <button>Se connecter</button>
                        <button>Vends maintenant</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
