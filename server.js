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
            "Description": "Lily, championne de ski junior, s�entra�ne chaque jour afin de participer aux Jeux olympiques, sous le regard bienveillant mais inquiet de son p�re qui ne s�est jamais vraiment remis de la disparition de sa femme. Mais parfois, h�las, la vigilance ne suffit pas. Victime d�un terrible accident, Lily est condamn�e � passer le restant de ses jours en fauteuil roulant. Il lui faudra d�sormais tout r�apprendre et tout reconstruire. Accepter d�abandonner ses anciens r�ves pour en construire de nouveaux� plus grands encore.",
            "Langue": "Fran�ais",
            "Prix": 18.000,
            "ISBN": "978-2-266-26208-8",
            "MaisonEdition": "Pocket",
            "NombrePages": 352,
            "Poids": "190 g",
            "Disponibilit�": "En stock",
            "DateSortie": "21 janv. 2016",
            "UrlImage": "https://placeholdit.imgix.net/~text?txtsize=82&txt=First+slide&w=350&h=350",
            "Categorie": "VoyagesNature",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 2,
            "Nom": "Les cavaliers d'Allah",
            "Auteur": "Genevi�ve Chauvel | L'Archipel",
            "Description": "Au d�but du VIIe si�cle, tandis que l�Occident s�assoupit, au c�ur de l�Orient, en Arabie, na�t une doctrine qui se r�pand � la vitesse du vent : l�islam. Par la voix du Proph�te, elle s�duit et s�impose. Ses cavaliers n�auront d�sormais qu�un but : conqu�rir et r�pandre la r�v�lation du Tout-Puissant. Lorsque Muhammad s��teint en 632, toute la p�ninsule arabique est islamis�e. Les califes successeurs s��lancent hors des fronti�res pour clamer le nom d�Allah. Force est de constater avec quelle rapidit� les Arabes ont impos� l�islam : en soixante ans � peine, les habitants d�Afrique du Nord ont oubli� cinq si�cles de latinisation et de rites chr�tiens pour adopter la doctrine musulmane. La c�l�bre Kah�na, Jeanne d�Arc berb�re � la t�te de cent mille hommes, n�a pu emp�cher le g�n�ral Hassan Ibn Noman de s�imposer par les armes et par la ruse. C�est en arabe, d�sormais, que l�histoire du pays va s��crire. Dans un style �pique, Genevi�ve Chauvel retrace la chevauch�e des cavaliers d�Allah, des abords de La Mecque � la bataille de Poitiers (732). Des guerriers qui ont lanc� le monde arabe sur sa trajectoire actuelle.",
            "Langue": "Fran�ais",
            "Prix": 52.000,
            "ISBN": "978-2-8098-1797-3",
            "MaisonEdition": "L'Archipel",
            "NombrePages": 268,
            "Poids": "370 g",
            "Disponibilit�": "",
            "DateSortie": "20 janv. 2016",
            "UrlImage": "https://placeholdit.imgix.net/~text?txtsize=82&txt=First+slide&w=350&h=350",
            "Categorie": "VoyagesNature",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        },
        {
            "Id": 3,
            "Nom": "Ainsi r�sonne l'�cho infini des montagnes",
            "Auteur": "Khaled Hosseini ",
            "Description": "Dans le village de Shadbagh, Abdullah, dix ans, veille sur sa petite soeur Pari, trois ans. Entre les deux enfants, le lien est ind�fectible, un amour si fort qu'il leur permet de supporter la disparition de leur m�re, les absences de leur p�re en qu�te d�sesp�r�e d'un travail et ces jours ou la faim les tenaille. Mais un �v�nement va venir distendre ce lien, un choix terrible qui modifiera � jamais le destin des deux jeunes vies, et de bien d'autres encore... Apr�s les Cerfs-volants de Kaboul et de Mille Soleils splendides, Khaled Hosseini nous emm�ne dans un voyage bouleversant, d'un village afghan des ann�es 1950 � la Californie des ann�es 2000, et signe une fresque familiale renversante d'�motion, d'une ampleur et d'une audace inou�es.",
            "Langue": "Fran�ais",
            "Prix": 22.800,
            "ISBN": "978-2-264-06349-6",
            "MaisonEdition": "10-18",
            "NombrePages": 504,
            "Poids": "330 g",
            "Disponibilit�": "",
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