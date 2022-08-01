import React from 'react';

export default function Publish() {
    return (
        <form>
            <div>
                <div>
                    <label>Titre</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Décris ton article</label>
                    <input type="text" />
                </div>
            </div>
            <div>
                <div>
                    <label>Marque</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Taille</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Couleur</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Etat</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Lieu</label>
                    <input type="text" />
                </div>
            </div>
            <div>
                <div>
                    <label>Prix</label>
                    <input type="number" />
                </div>

                <div>
                    <input type="checkbox" />
                    <label>Je suis intéressé(e) par les échanges</label>
                </div>
            </div>
        </form>
    );
}
