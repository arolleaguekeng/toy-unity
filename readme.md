https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[[/aur/license/:packageName](https://img.shields.io/bower/l/t)](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

# Toy Unity

Nom du projet est une application de vente de jouets pour enfants développée avec Node.js et le framework Express.js. Cette application permet aux utilisateurs de parcourir une sélection de jouets pour enfants, de les ajouter à leur panier et de passer une commande.

## Installation

1. Clonez le référentiel GitHub sur votre machine locale.
2. Installez les dépendances en exécutant la commande `npm install`.
3. Créez un fichier `.env` à la racine du projet et ajoutez les variables d'environnement suivantes :

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/toy-store
```

4. Exécutez l'application en exécutant la commande `npm start`.

## Fonctionnal

- Parcourir une sélection de jouets pour enfants.
- Ajouter des jouets au panier.
- Passer une commande.
- Gérer les commandes en tant qu'administrateur.

## Technologies utilisées

- Node.js
- Express.js
- MongoDB

## Structure du projet

```
.
├── controllers
│   ├── auth.js
│   ├── cart.js
│   ├── category.js
│   ├── orders.js
│   └── operationController.js
│   └── toyController.js
├── models
│   ├── Cart.js
│   └── Cathegory.js
│   └── ToyModel.js
│   └── operationModel.js
│   └── panierModel.js
├── routes
│   ├── admin.js
│   ├── cart.js
│   ├── error.js
│   ├── index
│   ├── orders.js
│   └── products.js
├── validator
│   ├── auth.js.js
├── .env
├── app
├── package.json
└── README.md
```


## Licence

Ce projet est sous licence [MIT](https://opensource.org/licenses/MIT).
