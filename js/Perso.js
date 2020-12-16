class Perso extends ElementHtml{
    constructor($html) {
        super($html);
        this.$bulle=$html.find(".bulle");
        this.mots=[
            "Kamehameha !!"
            ,"Un super saiyan !"
            ,"Son ki est énorme !"
            ,"Big Bang Attack !!"
            ,"Mais où est Cell ?"
            ,"Ils se sont beaucoup entrainés"
            ,"Aller Goku !"
            ,"C'est Vegeta qui va gagner !"
            ,"C'est tendu !"
        ];
    }
    parle(blabla){
        let ici=this;
        this.$bulle.text(blabla);
        setTimeout(function(){
            ici.$bulle.text("");
        },1500);
    }

    /**
     * Renvoie un mot aléatoire
     * @returns {string}
     */
    get motAleatoire(){
        return this.mots[Math.floor(Math.random() * this.mots.length)];
    }

}