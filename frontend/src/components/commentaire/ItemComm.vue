<template>
    <div v-if="this.PostId === this.publication" class="comm">        <!-- affiche post suivant UserDisplay -->
        <div class="entete">
            <!--h3>ItemComm</h3-->
            <!--p>createurId : {{ PostId }}</p-->
            <span>Posted by <span class="pseudo">{{ createurPseudo }}</span>le {{ conversionDate }} 
                <button v-if="(this.$store.state.UserLogin == this.createur) || (this.$store.state.moderateur == 'oui')" @click="suppComm" class="poubelle"><i class="far fa-trash-alt"></i></button>
            </span>
            <p class="newPost" v-if="this.dateCreation > this.$store.state.dateDerniereConnexion" ><i class="fas fa-bell animCloche"></i></p>
        </div>
        <div class="main2">
            <p>{{ texte }}</p>
        </div>
    </div>
    
</template>


<!------------------------------------------------------------------------>
<script>
const axios = require('axios');

export default {
    name: 'ItemComm',
    props: ['id','texte','dateCreation','publication','createurId','PostId','createur', 'createurPseudo','couleurComm'],
    computed: {
        // un accesseur (getter) calculé
        conversionDate: function () {
            const dateFormatee = new Date(this.dateCreation)
            return dateFormatee.toLocaleString();
        },
        //coulComm: function () {
            //if (this.dateCreation > this.$store.state.dateDerniereConnexion) {

            //}
        //},      
    },
    methods: {
        suppComm: function () {
            const headers = {'Authorization': `token ${this.$store.state.token}`}
            axios.delete(`http://localhost:3000/comm/${this.id}`,{
                headers: headers
            })
            .then(response => {
                console.log('response requête delete : ',response.data.message); 
                //this.$store.dispatch('requete_get_publication');
                this.$store.dispatch('requete_get_post_comm');              
            });
            //this.$forceUpdate();
        }
    }

}
</script>


<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">
.comm {
    width: 95%;
    margin: auto;
    padding: 0px 0px;
    display: flex;
    flex-direction: column;
    background-color:white;
    border-bottom-width: 1px;
    //border-width:1px;
    border-bottom-style:solid;
    border-bottom-color:rgb(210, 210, 210);
}
p {
    margin-top: 0px;
    margin-bottom: 0px;
}
h3 { color:rgb(104, 206, 153)}

.corps {
    margin: 0px 0px;
    //display: flex;
    //flex-direction: row;
    //background-color:rgb(216, 248, 249);
}
img {
    width: 100%;
}
.bordure {
    text-align: justify;
    margin-top: 0px;
    margin: auto;
    padding: 5px;
    background-color:white;
}
.entete {
    background-color:rgb(242, 248, 252);
    //margin: 3px;
    display: flex;
    justify-content: space-between;

        span {
            margin-left: 2px;
            margin-right: 5px;
            //font-weight:bold;
            font-size: .8em;
            vertical-align: -1px;
        }
            .pseudo {
            font-size: 1.4em;
            font-weight: bold;
        }

}
.poubelle {
  background-color: rgb(242, 248, 252);
  border: none;
  color: red;
  border-radius: 4px;
  padding: 0px 4px;
  font-size: 1em;
  cursor: pointer;
}
.btn {

  //background-color: rgb(105, 114, 123);
  border: none;
  color: black;
  border-radius: 4px;
  padding: 2px 5px;
  font-size: 12px;
  cursor: pointer;
}
/* Darker background on mouse-over */
.btn:hover {
  background-color: rgb(255, 0, 0);
}
.main2 {
    text-align: left;
    font-size: 1.2em;
    margin-top: 5px;
        margin-bottom: 10px;
}
.animCloche {
    color:rgb(33, 0, 154);
    font-size: .8em;
}
@media screen and (max-width: 700px) {
  .entete {
    font-size: .8em;
  }
}
</style>