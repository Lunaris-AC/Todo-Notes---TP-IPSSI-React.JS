# Application de Gestion de Tâches et de Notes

Ce projet est une application web simple, développée avec React.js, qui vous permet de gérer des listes de tâches (Todo Lists) et des notes. Les données sont stockées localement dans votre navigateur, ce qui signifie qu'elles seront disponibles même après avoir fermé et rouvert la page.

## Fonctionnalités

*   **Gestion de Listes de Tâches (Todo Lists) :**
    *   Création de multiples listes de tâches.
    *   Ajout de nouvelles tâches à une liste.
    *   Marquer les tâches comme complétées (barrer la tâche).
    *   Supprimer des tâches individuelles d'une liste.
    *   Supprimer des listes de tâches entières.
*   **Gestion de Notes :**
    *   Création de multiples notes.
    *   Édition du contenu de chaque note.
    *   Supprimer des notes.
*   **Organisation par Onglets :**
    *   Une section principale pour les "Listes de Tâches".
    *   Une section principale pour les "Notes".
    *   Dans chaque section principale, les différentes listes ou notes sont organisées en sous-onglets accessibles via un menu déroulant.
*   **Stockage Local :**  Toutes les données (listes de tâches et notes) sont sauvegardées dans le `localStorage` de votre navigateur. Vos données persistent donc entre les sessions.
*   **Interface Utilisateur Moderne :**  L'interface est stylisée avec Tailwind CSS pour une apparence propre et réactive.

## Prérequis

Avant de pouvoir exécuter cette application, vous devez avoir Node.js et npm (ou yarn) installés sur votre machine. Vous pouvez télécharger Node.js depuis [le site officiel de Node.js](https://nodejs.org/). npm est généralement inclus avec l'installation de Node.js.

## Installation

1. **Cloner le dépôt (si vous avez accès au code source) :**
    ```bash
    git clone [URL_DU_DEPOT]
    cd [NOM_DU_DOSSIER_DU_PROJET]
    ```

2. **Installer les dépendances :**
    ```bash
    npm install
    # ou
    yarn install
    ```

## Utilisation

1. **Démarrer l'application :**
    ```bash
    npm start
    # ou
    yarn start
    ```
    Cette commande lancera l'application et ouvrira une page dans votre navigateur (généralement `http://localhost:3000`).

2. **Navigation :**
    *   Utilisez les onglets principaux "Liste de Tâches" et "Notes" pour basculer entre les sections.
    *   Dans chaque section, cliquez sur le bouton "Gérer les Listes" pour ouvrir un menu déroulant affichant les listes de tâches ou les notes existantes.
    *   Cliquez sur le nom d'une liste ou d'une note dans le menu déroulant pour afficher son contenu.
    *   Cliquez sur le bouton "+ New" dans le menu déroulant pour créer une nouvelle liste ou note.

3. **Gestion des Listes de Tâches :**
    *   Pour créer une nouvelle liste, cliquez sur "+ New" dans le menu "Gérer les Listes" de la section "Listes de Tâches" et entrez le nom de la liste.
    *   Pour ajouter une tâche à la liste affichée, tapez la tâche dans le champ de texte et cliquez sur le bouton "Ajouter".
    *   Pour marquer une tâche comme complétée, cochez la case à côté de la tâche.
    *   Pour supprimer une tâche, cliquez sur l'icône de la corbeille à côté de la tâche.
    *   Pour supprimer une liste entière, ouvrez le menu "Gérer les Listes" et cliquez sur l'icône de la corbeille à côté du nom de la liste.

4. **Gestion des Notes :**
    *   Pour créer une nouvelle note, cliquez sur "+ New" dans le menu "Gérer les Listes" de la section "Notes" et entrez le titre de la note.
    *   Pour éditer le contenu d'une note, cliquez sur son nom dans le menu "Gérer les Listes" et commencez à taper dans la zone de texte. Les modifications sont sauvegardées automatiquement.
    *   Pour supprimer une note, ouvrez le menu "Gérer les Listes" et cliquez sur l'icône de la corbeille à côté du titre de la note.

## Technologies Utilisées

*   **React.js :**  Une bibliothèque JavaScript pour la construction d'interfaces utilisateur.
*   **Tailwind CSS :** Un framework CSS utilitaire pour un style rapide et flexible.
*   **LocalStorage :**  L'API du navigateur pour stocker les données localement.
*   **Heroicons :** Une collection d'icônes SVG utilisées pour les actions.

## Auteur

Lunaris-AC