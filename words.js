const deck = {
    words : "あ 	い 	う 	え 	お か 	き 	く 	け 	こ さ 	し 	す 	せ 	そ た 	ち 	つ 	て 	と な 	に 	ぬ 	ね 	の は 	ひ 	ふ 	へ 	ほ ま 	み 	む 	め 	も や ゆ よ ら 	り 	る 	れ 	ろ",
    translations : "a i u e o ka ki ku ke ko sa si su se so ta ti tsu te to na ni nu ne no ha hi fu he ho ma mi mu me mo ya yu yo ra ri ru re ro",
}
// const words = "あ 	い 	う 	え 	お か 	き 	く 	け 	こ さ 	し 	す 	せ 	そ た 	ち 	つ 	て 	と な 	に 	ぬ 	ね 	の は 	ひ 	ふ 	へ 	ほ ま 	み 	む 	め 	も や ゆ よ ら 	り 	る 	れ 	ろ";
const list = deck.words.split(' ');
// const translations = "a i u e o ka ki ku ke ko sa si su se so ta ti tsu te to na ni nu ne no ha hi fu he ho ma mi mu me mo ya yu yo ra ri ru re ro"
const translist = deck.translations.split(' ');
const page = document.querySelector(".page");
const body = document.querySelector(".page > div");
// words.forEach((word) => body.textContent = word);
let indexed = [];
let w;
function nextword() {
    w = Math.floor(Math.random() * list.length);
    if (indexed.length == list.length) {
        alert("that's it for today!");
    } else {
        while(indexed.includes(list[w])) {
            w = Math.floor(Math.random() * list.length);
        }
        
        indexed.push(list[w]);
        body.innerHTML = `<h1>${list[w]}</h1>`;
        document.removeEventListener("click", nextword);
        document.addEventListener("click", translate);    
    }

}

function translate() {
    const trans = document.createElement("div");
    trans.textContent = translist[w];
    body.appendChild(trans);
    document.removeEventListener("click", translate);
    document.addEventListener("click", nextword);
}

document.addEventListener("click", nextword);