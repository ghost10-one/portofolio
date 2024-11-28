import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  skills:any[]  = [
    {
      title: 'Administrateur Réseau',
      description:
        "Gestion, configuration et sécurisation des infrastructures réseau pour assurer une connectivité optimale et fiable.",
      img: "assets/ad.jpg", // Image représentant l'administration réseau
    },
    {
      title: 'Maintenance Informatique',
      description:
        "Diagnostic, réparation et optimisation des équipements matériels et logiciels pour garantir leur bon fonctionnement.",
      img: 'assets/maintenance.jpg', // Image pour la maintenance informatique
    },
    {
      title: 'Développement Full-Stack',
      description:
        "Conception et déploiement d'applications web dynamiques, combinant des interfaces modernes et des API sécurisées.",
      img: 'assets/fs.jpg', // Image pour le développement full-stack
    },
    {
      title: 'IoT (Internet des Objets)',
      description:
        "Création de solutions connectées et intelligentes pour intégrer des appareils et optimiser les processus.",
      img: 'assets/iot.jpg', // Image pour les projets IoT
    },
    {
      title: 'Bureautique',
      description:
        "Maîtrise des outils bureautiques pour une gestion efficace des documents, des présentations et des données.",
      img: 'assets/bureau.jpeg', // Image pour la bureautique
    },

    {
      title: 'Circuits Imprimés',
      description:
        "Conception et réalisation de circuits imprimés précis et fonctionnels pour des projets électroniques spécifiques.",
      img: 'assets/circuit.jpg', // Image pour les circuits imprimés
    },
    {
      img: 'assets/powerbi.png', // Chemin de l'image de Power BI
      title: 'Data Visualization ',
      description: "Analyse et présentation des données via des tableaux de bord interactifs bases sur POWER BI."
    },
    {
      img: 'assets/info.jpg',
      title: 'Infographie',
      description: "Création de visuels attrayants pour des besoins professionnels et marketing."
    }

  ];

}
