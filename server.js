var express =  require('express');
var app  = express();
//app.get('/',function(req,res){
//   res.send("Hello word from srver.js");
//});
app.use(express.static(__dirname+"/"));
app.get("/livrelist",function(req,res){
    var livrelist = [
        {
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
            "Disponibilité": "En stock",
            "DateSortie": "21 janv. 2016",
            "UrlImage": "https://placeholdit.imgix.net/~text?txtsize=82&txt=First+slide&w=350&h=350",
            "Categorie": "VoyagesNature",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 2,
            "Nom": "Les cavaliers d'Allah",
            "Auteur": "Geneviève Chauvel | L'Archipel",
            "Description": "Au début du VIIe siècle, tandis que l’Occident s’assoupit, au cœur de l’Orient, en Arabie, naît une doctrine qui se répand à la vitesse du vent : l’islam. Par la voix du Prophète, elle séduit et s’impose. Ses cavaliers n’auront désormais qu’un but : conquérir et répandre la révélation du Tout-Puissant. Lorsque Muhammad s’éteint en 632, toute la péninsule arabique est islamisée. Les califes successeurs s’élancent hors des frontières pour clamer le nom d’Allah. Force est de constater avec quelle rapidité les Arabes ont imposé l’islam : en soixante ans à peine, les habitants d’Afrique du Nord ont oublié cinq siècles de latinisation et de rites chrétiens pour adopter la doctrine musulmane. La célèbre Kahéna, Jeanne d’Arc berbère à la tête de cent mille hommes, n’a pu empêcher le général Hassan Ibn Noman de s’imposer par les armes et par la ruse. C’est en arabe, désormais, que l’histoire du pays va s’écrire. Dans un style épique, Geneviève Chauvel retrace la chevauchée des cavaliers d’Allah, des abords de La Mecque à la bataille de Poitiers (732). Des guerriers qui ont lancé le monde arabe sur sa trajectoire actuelle.",
            "Langue": "Français",
            "Prix": 52.000,
            "ISBN": "978-2-8098-1797-3",
            "MaisonEdition": "L'Archipel",
            "NombrePages": 268,
            "Poids": "370 g",
            "Disponibilité": "",
            "DateSortie": "20 janv. 2016",
            "UrlImage": "https://placeholdit.imgix.net/~text?txtsize=82&txt=First+slide&w=350&h=350",
            "Categorie": "VoyagesNature",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 3,
            "Nom": "Ainsi résonne l'écho infini des montagnes",
            "Auteur": "Khaled Hosseini ",
            "Description": "Dans le village de Shadbagh, Abdullah, dix ans, veille sur sa petite soeur Pari, trois ans. Entre les deux enfants, le lien est indéfectible, un amour si fort qu'il leur permet de supporter la disparition de leur mère, les absences de leur père en quête désespérée d'un travail et ces jours ou la faim les tenaille. Mais un événement va venir distendre ce lien, un choix terrible qui modifiera à jamais le destin des deux jeunes vies, et de bien d'autres encore... Après les Cerfs-volants de Kaboul et de Mille Soleils splendides, Khaled Hosseini nous emmène dans un voyage bouleversant, d'un village afghan des années 1950 à la Californie des années 2000, et signe une fresque familiale renversante d'émotion, d'une ampleur et d'une audace inouïes.",
            "Langue": "Français",
            "Prix": 22.800,
            "ISBN": "978-2-264-06349-6",
            "MaisonEdition": "10-18",
            "NombrePages": 504,
            "Poids": "330 g",
            "Disponibilité": "",
            "DateSortie": "2 oct. 2014",
            "UrlImage": "https://placeholdit.imgix.net/~text?txtsize=82&txt=First+slide&w=350&h=350",
            "Categorie": "VoyagesNature",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        }];
    res.json(livrelist);

});
app.listen(3000);
console.log("server running on port 3000");