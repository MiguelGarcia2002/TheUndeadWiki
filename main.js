const evilMfs = ["Arthas - World of Warcraft", "Mordekaiser - League Of Legends", "Karthus - League Of Legends", "Tiny-bones - Magic The Gathering", "Nekusar - Magic The Gathering", "Sauron - Lord Of The Rings"];


const paragraph1 = "Arthas Menethil is a character who first appeared in the Reign of Chaos campaign in Warcraft 3. He was the main playable character for most of the campaign, serving as a paladin of the Silver Hand and crown prince of Lordaeron. At the end of the campaign he wielded and was cursed by the blade Frostmourne that slowly corrupted his mind in the Frozen Throne campaign, by the end of the campaign he was crowned as the new Lich King and wouldn't return to the Warcraft universe until 2008. In World of Warcraft Arthas the Lich King returns as the central antagonist in the Wrath Of the Lich King expansion.  \n\n First appearance in Warcraft 3: July 3, 2002 \n\n First appearance in World of Warcraft: November 13, 2008 (Wrath of the Lich King expansion)";
const paragraph2 = "Twice slain and thrice born, Mordekaiser is a champion from League of legends and one of the main antaoginsits that threatens Runeterra. Mordekaiser is a brutal warlord who uses necromatic sorcery to resurect the souls of the damned and entrap them for his undead army. Mordekaiser is mainly played on the top lane usually restorting to tanky or AP bruiser builds, he is also played in the Jungle role where the current build is going tank with Jaksho. The champion is commonly referred to have an easy kit that makes him unkillable and unufn to play against.\n\n Initial champion release: February 24, 2010 \n\n Reworked: June 12, 2019" ;
const paragraph3 = "The harbringer of oblivion, Karthus is an undying spiirt who liberates the living to offer the eternal bliss of death. Karthus\' fascination with death started with the sick people he was tending to in his mortal life, he often questioned them as to what they saw beyond death and was unsatisifed with the answers provided. Some spoke of the accursed Shadow Isles and his curioisty lead him to the Isels, there the blackmist consumed his mind and body laving him in an threshold between life and death. Karthus is tpyically played in the Jungle role and Midlane role as an AP burn mage with a passive that keeps him momentarily alive after death. \n\n Initial champion release: June 12, 2009 \n\n Visually updated: June 5, 2014";
const paragraph4 = "Tiny-Bones is a mono black legendary creature who lives in urborg. Tiny-Bones\' main ojective is to steal gems from strangers that are none the wiser to feed his family, despite not having an adreniland organ. For the most part Tiny-bones is infamous in the Commander format for being a mono-black discard commander, his static ability benefits the user for making opponets discard cards and the six mana ability is oten used as a finisher. \n\n Date first printed: July 16, 2020 \n\n First set printed: Jumpstart 2020";
const paragraph5 = "Nekusar is a Grixis legendray creature who lives in an unkown plane. Nekusar was a king that schemed to retain his kingship even after death, he attained many enemies and was obsessed with the people that threatened his reign. After a failed assassination attempt towards his rival Nekusar was killed, however he transformed himseld into a lich lord after death. Nekusar was released as a Commander exclusive card that is mainly known as a wheels commander, the general playstyle of playing a ton of wheel cards isnt the most enticing for most commander opponents.\n\n Date first printed: November 1, 2013\n\n First set printed: Mind Seize (Commander deck 2013)" ;
const paragraph6 = "The true lord of the rings Sauron is the central antagonist of the Lord of the Rings trilogy and served as a secondary villain in the Hobbit trilogy. Sauron was the creator of the \"One Ring\" under the command of Morgoth, after Morgoth's death Sauron became the second dark lord conquer Middle Earth, until he was deafeated in the War of the Last Alliance. Most of his power was taken away after the One Ring was cut from him in that battle. From then on Sauron layed dormant until the near end of the Third Age, by then he had gathered his strength and develoepd schemes to regain the ring. He was ultimately defeated at Mount Doom by Froddo Baggins after Frodo destroyed the ring. \n\n First Theatrical Appearance: December 19, 2001";

const arthasPic = "images/The_lich_king_Wotlk.webp";
const mordPic = "images/MordekaiserPic.webp";
const karthusPic = "images/karthusPic.png";
const tinybonesPic = "images/TinyBones.jpg";
const nekusarPic = "images/nekusar.webp";
const sauronPic = "images/SauronPic.png";

const paragraphs = [paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6];
const pics = [arthasPic, mordPic, karthusPic, tinybonesPic, nekusarPic, sauronPic];

const number = 0;

(function(){
    makingDivs('nameInsert', evilMfs, paragraphs, pics);
})();

function makingDivs(elementId, names, parahraphList, pictures){

for(let i=0; i<names.length; i++){
    const newDivs = document.createElement("div")
    const header = document.createElement("h1");
    const imagen = document.createElement("img");
    const paraG = document.createElement("p");

    header.classList += 'namesClass';
    header.innerText = names[i]

    imagen.src = pictures[i];
    imagen.classList += 'imagesClass';

    paraG.classList += 'wikiPara';
    paraG.innerText = parahraphList[i];

    newDivs.appendChild(header);
    newDivs.append(paraG);
    newDivs.appendChild(imagen);
    newDivs.classList.add('paragraphBox');

    document.body.appendChild(newDivs);
    }   
}




