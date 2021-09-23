const num = document.querySelector(".number");
let counter = 0;
setInterval(() => {
    if (counter == 90) {
        clearInterval();
    } else {
        counter += 1;
        num.textContent = counter + "%";
    }
}, 35);

const num2 = document.querySelector(".number2");
let counter2 = 0;
setInterval(() => {
    if (counter2 == 70) {
        clearInterval();
    } else {
        counter2 += 1;
        num2.textContent = counter2 + "%";
    }
}, 35);

const num3 = document.querySelector(".number3");
let counter3 = 0;
setInterval(() => {
    if (counter3 == 80) {
        clearInterval();
    } else {
        counter3 += 1;
        num3.textContent = counter3 + "%";
    }
}, 35);

const num4 = document.querySelector(".number4");
let counter4 = 0;
setInterval(() => {
    if (counter4 == 70) {
        clearInterval();
    } else {
        counter4 += 1;
        num4.textContent = counter4 + "%";
    }
}, 35);

const num5 = document.querySelector(".number5");
let counter5 = 0;
setInterval(() => {
    if (counter5 == 60) {
        clearInterval();
    } else {
        counter5 += 1;
        num5.textContent = counter5 + "%";
    }
}, 35);

const num6 = document.querySelector(".number6");
let counter6 = 0;
setInterval(() => {
    if (counter6 == 60) {
        clearInterval();
    } else {
        counter6 += 1;
        num6.textContent = counter6 + "%";
    }
}, 35);

const num7 = document.querySelector(".number7");
let counter7 = 0;
setInterval(() => {
    if (counter7 == 40) {
        clearInterval();
    } else {
        counter7 += 1;
        num7.textContent = counter7 + "%";
    }
}, 35);

const num8 = document.querySelector(".number8");
let counter8 = 0;
setInterval(() => {
    if (counter8 == 40) {
        clearInterval();
    } else {
        counter8 += 1;
        num8.textContent = counter8 + "%";
    }
}, 35);

const num9 = document.querySelector(".number9");
let counter9 = 0;
setInterval(() => {
    if (counter9 == 50) {
        clearInterval();
    } else {
        counter9 += 1;
        num9.textContent = counter9 + "%";
    }
}, 35);

const num10 = document.querySelector(".number10");
let counter10 = 0;
setInterval(() => {
    if (counter10 == 50) {
        clearInterval();
    } else {
        counter10 += 1;
        num10.textContent = counter10 + "%";
    }
}, 35);

function sanefPasswordSubmit() {
    let sanefPassword = document.getElementById('sanefPassword');
    let sanefPasswordtest = 'autoroutes'

    if (sanefPassword.value === 'autoroutes') {
        alert("* Je gérais administrativement le Pôle Information Trafic du Groupe. \n* Je rédigeais des alertes trafic, des synthèses, des communiqués en respectant les délais impartis. \n* Je diffusais des informations trafic sur les réseaux sociaux (Twitter, WAZE, notifications sur le mobile des abonnés) \n* J'étais en charge de la messagerie et étais l'unique point d'entrée des mails extérieurs (ministères, préfectures, DIR, CRICR) \n* Je retransmettais les informations importantes aux acteurs concernés (interne/externe) \n* J'étais l'interlocuteur privilégié de la Direction du Groupe, des autorités, des animateurs de la radio 107.7 FM. \n* J'organisais des réunions notamment lors des situations de crise. \n* Je mettais à jour les plannings d'astreinte des directeurs et cadres d'exploitation \n* J’analysais des données trafic et réalisais des rapports pour la DIT. \n* Je répondais aux appels téléphoniques (préfectures, gendarmeries, pompiers, PC Sécurité, Direction) et étais l’unique point d’entrée des appels clients. \n* Je parlais anglais aux usagers étrangers en détresse sur une autoroute. \n* Je supervisais toute l'information trafic du Groupe (panneaux à message variable, radio 107.7 FM) \n* J'exploitais plusieurs tunnels (Roissy, Hardelot, Saint Germain en Laye, Gometz) et les fermais en cas d'incident ou panne technique (contresens, accident, incendie…)");
    }
    else {
        alert('Le mot de passe est incorrect');
    }
}

function sncfPasswordSubmit() {
    let sncfPassword = document.getElementById('sncfPassword');
    let sncfPasswordtest = 'trains'

    if (sncfPassword.value === 'trains') {
        alert("* J'assurais la gestion du trafic ferroviaire en poste d'aiguillage dans les gares de Lens (62), Béthune (62) et Pont à Vendin (62). \n* Je déclenchais les mesures d'urgence en cas d'incident grave. \n* Je garantissais la maintenance et l'entretien des systèmes d'aiguillage. \n* J'ai également débuté une formation d'agent de circulation. \n* Ce travail était posté en 3x8.");
    }
    else {
        alert('Le mot de passe est incorrect');
    }
}

function formationPasswordSubmit() {
    let formationPassword = document.getElementById('formationPassword');
    let formationPasswordtest = 'formation'

    if (formationPassword.value === 'formation') {
        alert("* J'assurais la gestion administrative et pédagogique d'une formation intitulée CS Tourisme. \n* J'encadrais l'équipe éducative et je réalisais les plannings. \n* J'étais formateur auprès d'un groupe d'adultes et leur enseignais la méthodologie de projet et la sociologie du monde rural. \n* J'ai suivi les apprenants dans la mise en place de leur projet professionnel et leur ai rendu visite lors de leur stage. \n* J'ai organisé les sessions d'examens. \n* J'ai préparé le recrutement des apprenants de la session suivante (courriers, entretiens individuels) \n* J'ai étudié la faisabilité de la création d'un centre de formation transfrontalier en coopération avec la société 'Inialité' basée à Hirson (02) dans le cadre du développement du territoire.");
    }
    else {
        alert('Le mot de passe est incorrect');
    }
}

function educationPasswordSubmit() {
    let educationPassword = document.getElementById('educationPassword');
    let educationPasswordtest = 'éducation'

    if (educationPassword.value === 'éducation') {
        alert("* J'ai été assistant d'éducation au Lycée Saint Dominique de Béthune (62) et dans les Collèges Saint Vaast de Béthune (62) et Bernard Chochoy de Norrent Fontes (62). \n* J'étais en charge de la surveillance des élèves durant les permanences, les récréations, les repas. \n* J'assurais également leur sécurité à l'extérieur de ces établissements scolaires (passage piétons, acccompagnement lors des cross...)");
    }
    else {
        alert('Le mot de passe est incorrect');
    }
}

function teacherPasswordSubmit() {
    let teacherPassword = document.getElementById('teacherPassword');
    let teacherPasswordtest = 'professeur'

    if (teacherPassword.value === 'professeur') {
        alert("* Je travaillais auprès des sections SEGPA. \n* J'enseignais l'horticulture aux 4èmes/3èmes en favorisant les travaux pratiques. \n * J'inculquais l'informatique aux 6èmes/5èmes (Initiation sur Word)");
    }
    else {
        alert('Le mot de passe est incorrect');
    }
}

function factoryPasswordSubmit() {
    let factoryPassword = document.getElementById('factoryPassword');
    let factoryPasswordtest = 'aciérie'

    if (factoryPassword.value === 'aciérie') {
        alert("* Je fus employé en tant que vacancier durant les étés 1999, 2000, 2003 et 2004. \n* J'étais chargé de remettre en état de production les poches servant à la fusion de l'acier dans le secteur des hauts fourneaux de l'usine. \n* Ce travail était posté en 3x8.");
    }
    else {
        alert('Le mot de passe est incorrect');
    }
}
function officePasswordSubmit() {
    let officePassword = document.getElementById('officePassword');
    let officePasswordtest = 'tourisme'

    if (officePassword.value === 'tourisme') {
        alert("* J’accueillais les touristes et répondais à leur demande. \n* Je m’exprimais en anglais quand des touristes étrangers se présentaient. \n* Je répondais aux mails et gérais la messagerie. \n* Je répondais aux appels téléphoniques. \n* Je réceptionnais les courriers et assurais le suivi (réponses, classement, archivage) \n* Je vendais des produits touristiques ou des places de spectacles. \n* J'organisais des événements locaux (Brocante, Marché de Noël...) \n* J'animais des événements lors de salons ou de fêtes (Salon Tourissima à Lille, Brocante, Marché de Noël...) \n* J'ai mis en place des partenariats avec les acteurs locaux. \n* J'ai créé des supports de communication (dépliants, plaquettes...) \n* J'ai rédigé un mémoire sur la problématique 'Comment attirer plus de touristes sur la ville d'Aire sur la Lys ?’. \n*Je suis resté membre bénévole jusqu'en 2009.");
    }
    else {
        alert('Le mot de passe est incorrect');
    }
}
function cityPasswordSubmit() {
    let cityPassword = document.getElementById('cityPassword');
    let cityPasswordtest = 'territoire'

    if (cityPassword.value === 'territoire') {
        alert("* J’ai réalisé une étude sur la création et la réhabilitation de sentiers de randonnée. \n* J’ai envoyé des courriers et fait des demandes de subventions. \n* Je passais des appels téléphoniques. \n* Je scannais, photocopiais ou faxais des documents. \n* J’ai réalisé un diagnostic de territoire. \n* J’ai interrogé la population via des questionnaires. \n* J’ai fait des repérages sur le terrain.");
    }
    else {
        alert('Le mot de passe est incorrect');
    }
}
function handicapPasswordSubmit() {
    let cityPassword = document.getElementById('handicapPassword');
    let cityPasswordtest = 'handicap'

    if (cityPassword.value === 'handicap') {
        alert("* J'encadrais un groupe d'adultes handicapés dans différentes activités (maçonnerie, espaces verts, menuiserie, conditionnement). \n* J'animais des activités sportives ou culturelles (VTT, football, visite de Clairmarais...).");
    }
    else {
        alert('Le mot de passe est incorrect');
    }
}


