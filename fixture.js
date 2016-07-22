/**
 * Created by Mohamed on 16/07/2016.
 */
var pow = require('pow-mongodb-fixtures');
var fixtures = pow.connect('jebouquine');
var id = pow.createObjectId;
fixtures.clearAndLoad({
    livres: [{
        "Id": 1,
        "Nom": "Victoires",
        "Auteur": "Danielle Steel | Pocket",
        "Description": "Lily, championne de ski junior, s’entraîne chaque jour afin de participer aux Jeux olympiques, sous le regard bienveillant mais inquiet de son père qui ne s’est jamais vraiment remis de la disparition de sa femme. Mais parfois, hélas, la vigilance ne suffit pas. Victime d’un terrible accident, Lily est condamnée à passer le restant de ses jours en fauteuil roulant. Il lui faudra désormais tout réapprendre et tout reconstruire. Accepter d’abandonner ses anciens rêves pour en construire de nouveaux… plus grands encore.",
        "Langue": "Français",
        "Prix": 18.000,
        "ISBN": "978-2-266-26208-8",
        "MaisonEdition": "Pocket",
        "NombrePages": 352,
        "Poids": "190 g",
        "Disponibilite": "En stock",
        "DateSortie": "2016-06-20T15:38:34.728Z",
        "UrlImage": "https://placeholdit.imgix.net/~text?txtsize=82&txt=First+slide&w=350&h=350",
        "Categorie": "VoyagesNature",
        "Quantite": 0,
        "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
    }  ,{
        "Id": 2,
        "Nom": "First Global Vision of Religion",
        "Auteur": "Bernard Picart",
        "Description": "Lily, championne de ski junior, s’entraîne chaque jour afin de participer aux Jeux olympiques, sous le regard bienveillant mais inquiet de son père qui ne s’est jamais vraiment remis de la disparition de sa femme. Mais parfois, hélas, la vigilance ne suffit pas. Victime d’un terrible accident, Lily est condamnée à passer le restant de ses jours en fauteuil roulant. Il lui faudra désormais tout réapprendre et tout reconstruire. Accepter d’abandonner ses anciens rêves pour en construire de nouveaux… plus grands encore.",
        "Langue": "Français",
        "Prix": 28.000,
        "ISBN": "978-2-266-26208-8",
        "MaisonEdition": "Pocket",
        "NombrePages": 352,
        "Poids": "190 g",
        "Disponibilite": "En stock",
        "DateSortie": "2016-06-20T15:38:34.728Z",
        "UrlImage": "http://cdn.shopify.com/s/files/1/0130/8502/products/978-0-89236-968-3_1024x1024.jpeg?v=1332458577",
        "Categorie": "VoyagesNature",
        "Quantite": 0,
        "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
    } ,
        {
            "Id": 3,
            "Nom": "In Whom We Live",
            "Auteur": "Philip Clayton",
            "Description": "Lily, championne de ski junior, s’entraîne chaque jour afin de participer aux Jeux olympiques, sous le regard bienveillant mais inquiet de son père qui ne s’est jamais vraiment remis de la disparition de sa femme. Mais parfois, hélas, la vigilance ne suffit pas. Victime d’un terrible accident, Lily est condamnée à passer le restant de ses jours en fauteuil roulant. Il lui faudra désormais tout réapprendre et tout reconstruire. Accepter d’abandonner ses anciens rêves pour en construire de nouveaux… plus grands encore.",
            "Langue": "Français",
            "Prix": 58.000,
            "ISBN": "978-2-266-26208-8",
            "MaisonEdition": "Pocket",
            "NombrePages": 852,
            "Poids": "10 g",
            "Disponibilite": "En stock",
            "DateSortie": "2016-06-20T15:38:34.728Z",
            "UrlImage": "https://s-media-cache-ak0.pinimg.com/736x/07/a6/29/07a629712a15e99ee0ae5c0635019319.jpg",
            "Categorie": "ScolairePedagogie",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        }
    ],
    categories:[{Id : "Jeunesse",Libelle :"Lecture jeunesse"},
        {Id : "SciencesTechniques",Libelle :"Sciences & Techniques"},
        {Id : "DroitEconomieGestion",Libelle :"Droit, Economie & Gestion"},
        {Id : "VoyagesNature",Libelle :"Voyages & Nature"},
        {Id : "ScolairePedagogie",Libelle :"Scolaire & Pédagogie"}     ],

    comptes:[{Sexe : "H", Nom :"Belaid",Prenom: "Mohamed", Email: "medbbelaid@gmail.com", Password: "3e4b729c32ff4503bb1915c44cf03390" }]
    },
    function(err) {     if(err){       console.log('************** ERREUR : clearAndLoad');       console.log(err);
        console.log('************** ERREUR : clearAndLoad');     } });
