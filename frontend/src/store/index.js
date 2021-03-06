import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UserLogin: 0,
    token: null,
    UserDisplay: 0,
    moderateur: 'non',
    dateDerniereConnexion: '',
    stat: [],
    publication: [],
    commentaire: []
  },
  mutations: {
    SET_USERLOGIN(state, payload) {
      state.UserLogin = payload
    },
    SET_TOKEN(state, payload) {
      state.token = payload
    },
    SET_USERDISPLAY(state, payload) {
      state.UserDisplay = payload
    },
    SET_PUBLICATION(state,data) {
      state.publication = data;
    },
    SET_COMMENTAIRE(state,data) {
      state.commentaire = data;
    },
    SET_STAT(state,data) {
      state.stat = data;
    },
    SET_MODERATEUR(state,data) {
      state.moderateur = data;
    },
    SET_DATECONNECTION(state,data) {
      state.dateDerniereConnexion = data;
    },
    /*SET_DATECONNECTION(state,data) {
      state.texteVisu = data;
    }

    CLEAR_USERLOGIN(state) {
      state.UserLogin = null
      localStorage.removeItem("groupomania_userId")
    },
    CLEAR_TOKEN(state) {
      state.token = null
      localStorage.removeItem("groupomania_token")
    },
    CLEAR_USERDISPLAY(state) {
      state.UserDisplay = null
      localStorage.removeItem("groupomania_userDisplay")
    },*/

  },
  actions: {
    setLocalStockage() {
      localStorage.setItem("groupomania_userId",this.state.UserLogin);
      localStorage.setItem("groupomania_token",this.state.token);
      localStorage.setItem("groupomania_userDisplay",this.state.UserDisplay)
    },
    clearLocalStockage() {
      localStorage.removeItem("groupomania_userId");
      localStorage.removeItem("groupomania_token");
      localStorage.removeItem("groupomania_userDisplay")
    },
    /*requete_get_publication(context) {
      axios.get('http://localhost:3000/post')
      .then( function(res) {
        context.commit('SET_PUBLICATION', res.data);
      })
    },*/

    requete_get_post_comm(context) {
      //if (this.$store.state.token !== null) {
        let axiosConfig = {
          headers: {
            'Authorization': `token ${this.state.token}` 
          }
        };
        function get_publication() {
          return  axios.get('http://localhost:3000/post', axiosConfig)
        }       
        function get_commentaire() {
          return axios.get('http://localhost:3000/comm', axiosConfig)
        }
        Promise.all([get_publication(), get_commentaire()])
        .then(function (results) {
          context.commit('SET_PUBLICATION', results[0].data);
          context.commit('SET_COMMENTAIRE', results[1].data);
        });
    //}
  }
  },
  modules: {
  }
})
/*             axios.post('http://localhost:3000/Comm', {
                texte: this.newrequete,
                publication: this.PostId,
            })*/