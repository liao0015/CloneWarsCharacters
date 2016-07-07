"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var item_component_1 = require("./item-component/item.component");
var detail_component_1 = require("./detail-component/detail.component");
var search_pipe_1 = require("./pipe/search.pipe");
var AppComponent = (function () {
    function AppComponent() {
        this.mChaArray = characterArray;
    }
    AppComponent.prototype.showChara = function (item) {
        this.currentChara = item;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app/app.component.html",
            styleUrls: ["app/app.component.css"],
            pipes: [search_pipe_1.SearchPipe],
            directives: [item_component_1.ItemComponent, detail_component_1.DetailComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var characterArray = [
    {
        "fullname": "Anakin Skywalker",
        "nickname": "skywalker",
        "reknown": "Jedi Knight",
        "bio": "A Jedi Knight whose brash and rebellious nature will one day lead him down the dark path, at this stage in his journey, Anakin Skywalker is an idealistic leader and heroic champion of the Galactic Republic. Anakin's brash impulsiveness prompts Master Yoda to pair him with a new apprentice in an effort to help curb the young Jedi's wild ways. As Anakin steps into the role of teacher, he finally sees the other side of the Master-Padawan relationship and recognizes the difficulties that he presented for his own former Master, Obi-Wan Kenobi."
    },
    {
        "fullname": "Obi-Wan Kenobi",
        "nickname": "kenobi",
        "reknown": "Jedi Master",
        "bio": "Though he is deadly with a lightsaber and skilled in the art of war, Jedi Master Obi-Wan Kenobi is a peaceful soul, guided by an empathetic spirit even amidst the violence and devastation of the Clone Wars. He recognizes that there are often alternatives to fighting and takes up arms only in an effort to defend the values and ideals of the Galactic Republic. Having recently seen Anakin graduate to the status of Jedi Knight, Obi-Wan now finds endless delight in watching his friend and one-time student struggle with a strong-willed learner of his own."
    },
    {
        "fullname": "Ahsoka Tano",
        "nickname": "tano",
        "reknown": "Jedi",
        "bio": "Discovered as an infant by Jedi Master Plo Koon and raised in the Jedi Temple, Ahsoka Tano is Anakin's new apprentice, and she is eager to prove herself to her new master. Headstrong and enthusiastic with an abundance of innocence and optimism, she rarely hesitates to express her youthful exuberance, though she has yet to learn the finer points of diplomacy and timing. The ever-escalating galactic conflict has stretched the Jedi resources thin, so Ahsoka's talents earn her an early promotion. A nice mix of Anakin's impulsiveness and Obi-Wan’s staid deliberation, Ahsoka also brings her disarming wit to the front lines, often lightening the burden of war with a well-timed quip or an insightful jab."
    },
    {
        "fullname": "Yoda",
        "nickname": "yoda",
        "reknown": "Jedi Master",
        "bio": "Yoda is the Jedi Master, with more power than any other Jedi Knight. He is nearly 900 years old, thus he uses his vast knowledge and wisdom to guide Obi-Wan, Anakin, Mace Windu and the other Jedi Knights. Though he is aged, he uses the force to give himself more speed and agility, allowing him to duel with any enemy, including General Grievous."
    },
    {
        "fullname": "Padmé Amidala",
        "nickname": "amidala",
        "reknown": "Galactic Senate",
        "bio": "A former child-queen from Naboo, Padmé Amidala has taken her rightful seat in the Galactic Senate. As a political delegate, Padmé remains dedicated to ending the war and restoring peace to the galaxy. Though typically calm, Padmé is no stranger to peril and will wield her trusty blaster with remarkable skill in order to protect the things she holds dear, most notably, the Republic and her clandestine love for her husband, Jedi Knight Anakin Skywalker."
    },
    {
        "fullname": "R2-D2",
        "nickname": "r2",
        "reknown": "Astromech Droid",
        "bio": "Anakin received R2-D2 as a gift from Padmé, and this plucky little astromech droid and his master have been inseparable ever since. Like Anakin, Artoo is fearless, quick-thinking and dedicated. He is a tireless worker, a sympathetic listener and always ready for action when the chips are down. Armed and upgraded with an amazing array of functionalities, including hover jets, a Holoprojector, computer interfaces, diagnostic plugs, a periscope, a clasping arm, an electric prod for self-defense, storage compartments and a variety of tools attached to the end of his articulating arm, R2-D2 comes prepared to tackle any job."
    },
    {
        "fullname": "General Grievous",
        "nickname": "grievous",
        "reknown": "Warlord",
        "bio": "A highly-skilled warlord from planet Kalee, General Grievous always wanted to be a Jedi but lacked the requisite Force abilities. Realizing that his powers would never equal a Jedi's, Grievous vowed to destroy the Jedi Order. The first step in his diabolical plot was to undergo a series of surgical procedures that replaced his body parts with robotic appendages that give him superhuman strength and agility. Now, countless procedures later, Grievous lives as a man trapped inside a machine's body, a sacrifice he has made to have powers that, finally, rival those of a Jedi Knight. Grievous is third-in-command to the Separatist forces, behind only Count Dooku and, ultimately, Darth Sidious."
    },
    {
        "fullname": "Asajj Ventress",
        "nickname": "ventress",
        "reknown": "Assassin",
        "bio": "Asajj Ventress is the trusted assassin of the villainous Count Dooku, serving him from the shadows as he weaves his web of deception throughout a galaxy engulfed in the Clone Wars. Though not officially a Sith apprentice (as there can only be two Sith), Ventress has been well trained in the ways of the dark side and can wield her twin lightsabers with surgical precision and deadly force. A lifetime of enduring cruel hardships has purged any compassion from her evil heart."
    },
    {
        "fullname": "Clone Troopers",
        "nickname": "troopers",
        "reknown": "Battle soliders",
        "bio": "The Clone Troopers were created for one purpose: to win wars. They are superior to battle droids, which lost the battle on Naboo in Star Wars: The Phantom Menace. They were cloned from the genetic make-up of bounty hunter Jango Fett. They made their debut, defending the Republic, in the Battle of Geonosis. Later, Senator Palpatine would use them to wipe out the Jedi and they would become Stormtroopers. Captain Rex, in particular, was a good friend to Anakin and Ahsoka."
    },
    {
        "fullname": "Count Dooku",
        "nickname": "dooku",
        "reknown": "Former Jedi, leader of the Separatist",
        "bio": "Count Dooku was a Jedi, originally trained by Yoda. But when he wanted more power, he turned to the Dark Side, and trained with Darth Sidious. He took on the name Darth Tyranus. He became a leader in the Separatist movement."
    },
    {
        "fullname": "Cad Bane",
        "nickname": "bane",
        "reknown": "Bounty Hunter",
        "bio": "Cad Bane was the best, and most expensive, bounty hunter in the galaxy. He was tricked out with all kinds of devices on his belt and gauntlets, and carried dual, custom blaster pistols. He hailed from the planet Duro."
    },
    {
        "fullname": "Darth Maul",
        "nickname": "maul",
        "reknown": "Villian",
        "bio": "Although he was cut in half in Star Wars: The Phantom Menace, Darth Maul made a jaw-dropping return toward the end of Star Wars: The Clone Wars. Turns out he was dumped on a garbage planet, and while he was there, he fashioned a lower body for himself out of parts. His brother, Savage Opress found him and rescued him. He became obsessed with Obi-Wan Kenobi, the Jedi who cut him in half, relentlessly pursuing him."
    },
    {
        "fullname": "C-3PO",
        "nickname": "c3po",
        "reknown": "Droid",
        "bio": "C-3PO is a droid programmed for etiquette and protocol, built by the heroic Jedi Anakin Skywalker, and a constant companion to astromech R2-D2."
    },
    {
        "fullname": "Jar Jar",
        "nickname": "jarjar",
        "reknown": "Senate representative",
        "bio": "He is a Senate representative who sometimes accompanies the main characters—Anakin, Ahsoka, Obi-Wan, and Padmé—on their adventures."
    },
    {
        "fullname": "Sheev Palpatine",
        "nickname": "palpatine",
        "reknown": "the Supreme Chancellor of the Republic, secretly Darth Sidious",
        "bio": "As Supreme Chancellor of the Galactic Republic, Palpatine was head of the Galactic Senate and Commander in Chief of the Republic's Grand Army. Originally the Senate Representative for the Mid Rim planet of Naboo, Palpatine used his connections and charisma to depose his predecessor Finis Valorum and assume the mantle of Chancellor. Using his leadership qualities and powers of manipulation, Palpatine restructured much of the Republic government, even before his Declaration of a New Order, by concentrating executive and emergency powers into his own hands. Nonetheless, many of his colleagues in the Senate saw him as a brilliant visionary leader.  As the Dark Lord of the Sith, Palpatine was the secret leader of the Separatists and the Sith Master of Count Dooku. With Dooku's help, Palpatine aptly and excellently controlled every move of the war and his Droid Army. As the Commander in Chief of the Republic's Clone Army, Sidious also used the military to destabilize the galaxy, preparing it for his takeover. Through the manipulation of a series of dark side acolytes like Sev'rance Tann, Asajj Ventress, Sora Bulq and bounty hunters and mercenaries like the Gen'dai warrior known as Durge, Jango Fett, and General Grievous, Sidious also succeeded in challenging the power of the Jedi Order. As a further testament to his dark side mastery, Palpatine also cloaked all his activities and plans through the force so much so that not a single member of the Jedi Council ever suspected that the he was the reigning Dark Lord until it was far too late."
    }
];
//# sourceMappingURL=app.component.js.map