import React from "react";
import SectionOne from "../components/Section1";
import Collapse from "../components/Collapse";
import img from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import "../style/about.css";
function About() {
    const a = "auto";
    const b = "96%";
    return (
        <div>
            <div className="contenant">
                <SectionOne backgroundImg={img} />
                <div className="all-collapses">
                    <Collapse
                        title="Fiabilité"
                        text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
                        collapseHeight={a}
                        collapsewidth={b}
                    />
                    <Collapse
                        title="Respect"
                        text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                        collapsewidth={b}
                        collapseHeight={a}
                    />{" "}
                    <Collapse
                        title="Service"
                        text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                        collapsewidth={b}
                        collapseHeight={a}
                    />
                    <Collapse
                        title="Sécurité"
                        text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                        collapsewidth={b}
                        collapseHeight={a}
                    />
                </div>{" "}
            </div>
        </div>
    );
}

export default About;
