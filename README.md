# Journal d'aventure

Un planificateur de tâches présenté comme un journal de quêtes d'aventure : cœurs-horloge (6 h → 22 h), capital, quêtes principales et secondaires, souvenirs, fond d'écran animé ou personnel, et rédaction des quêtes par l'IA Gemini.

## Carte du jour

Touche **M** (ou le bouton « Carte » à côté du titre) pour passer du journal à la carte. Ta journée y est un chemin de 6 h à 22 h : glisse une quête sur le chemin pour la placer, déplace un point pour changer l'heure, ajoute des créneaux libres (repas, rendez-vous, sport, pause). « ✦ Organiser ma journée » demande à Gemini une proposition que tu acceptes créneau par créneau. Les flèches ← → changent de jour.

## Google Agenda (lecture seule)

Réglages → « Google Agenda » : colle l'ID client OAuth de ton projet Google Cloud, puis « Se connecter à Google ». Les rendez-vous de ton agenda principal apparaissent sur la carte (points ronds roses). Le site ne peut que les lire. La connexion dure environ une heure ; ensuite un clic sur « Reconnecter » suffit.

## Étapes

Chaque quête peut contenir une liste d'étapes (Modifier → « Étapes de la quête », ou « ✦ Proposer des étapes » avec Gemini). Quand la dernière étape est cochée, la quête s'accomplit toute seule. Si tu décoches une étape d'une quête accomplie, elle se rouvre.

## Où sont mes données ?

- **Dans ton navigateur, sur ton ordinateur.** Rien n'est envoyé sur ce site ni sur GitHub.
- **Sauvegarde automatique dans un dossier** (Chrome ou Edge) : Réglages → Sauvegardes → « Choisir le dossier ». Le journal y est recopié à chaque modification :
  - `journal.json` : l'état actuel ;
  - `historique/` : une copie par jour ;
  - `medias/` : tes images et ton fond d'écran.
- **Historique interne** : un point toutes les 15 minutes d'activité, un point avant chaque effacement, et l'état de chaque journée sur 30 jours (Réglages → Sauvegardes → « Restaurer »).

## Gemini

Réglages → « Intelligence artificielle · Gemini » : colle ta clé, puis « Tester la clé ». La clé reste dans ce navigateur. Elle n'est jamais incluse dans les sauvegardes ni dans le code du site. Les appels partent directement de ton navigateur vers les serveurs de Google.

## Raccourcis

| Touche | Action |
|---|---|
| ↑ ↓ | Choisir une quête |
| ← → | Changer de catégorie |
| Entrée | Suivre la quête |
| A | Accomplir / rouvrir |
| 1 à 9 | Cocher ou décocher l'étape correspondante |
| N | Nouvelle quête |
| E | Modifier |
| Suppr | Effacer |
| R | Réglages |
| M | Passer du journal à la carte |

Sur la carte : ← → changer de jour, ↑ ↓ choisir un créneau, N ajouter, E modifier, A fait, Suppr retirer, T aujourd'hui, G organiser avec Gemini.

## Licences

Polices Noto Sans et Marcellus SC : SIL Open Font License 1.1. Icônes, paysages, sons et animations : créations originales pour ce projet.
