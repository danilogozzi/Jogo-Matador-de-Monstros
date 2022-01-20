new Vue({
  el: "#desafio",
  data: {
    vidaJogador: 500,
    vidaMonstro: 500,
    barraVida: "green",
    especialQtd: 1,
    curaQtd:1,
    quit:false,
    desistiu:false
  },
  methods: {
    desistiu: function(){
      this.vidaJogador == 500,
      this.vidaMonstro == 500
    },
    ataqueJogador: function () {
      if (this.vidaJogador > -1) {
        this.vidaJogador -= parseInt(Math.random(20, 40) * 100);
        if (this.vidaJogador < 0) {
          this.vidaJogador = 0;
        }
      }
      if (this.vidaMonstro > -1)
        this.vidaMonstro -= parseInt(Math.random(20, 30) * 100);
      if (this.vidaMonstro < 0) {
        this.vidaMonstro = 0;
      }
    },
    especial: function(){
      while(this.especialQtd != 0){
        if (this.vidaJogador > -1) {
          this.vidaJogador -= parseInt(Math.random(20, 40) * 100);
          if (this.vidaJogador < 0) {
            this.vidaJogador = 0;
          }
        }
        if (this.vidaMonstro > -1)
          this.vidaMonstro -= parseInt(Math.random(30, 50) * 100);
        if (this.vidaMonstro < 0) {
          this.vidaMonstro = 0;
        }
        this.especialQtd -= 1
      }
    },
    cura: function(){
      while(this.curaQtd != 0){
        if (this.vidaJogador > -1) {
          this.vidaJogador += parseInt(Math.random(30, 50) * 100);
          if (this.vidaJogador < 0) {
            this.vidaJogador = 0;
          }
        }
        this.curaQtd -= 1
      }
    },
    barraVidas: function () {
      if (this.vidaJogador < 400 || this.vidaMonstro < 400) {
        this.barraVida = "yellow";
      }
      if (this.vidaJogador < 300 || this.vidaMonstro < 300) {
        this.barraVida = "orange";
      }
      if (this.vidaJogador < 200 || this.vidaMonstro < 200) {
        this.barraVida = "red";
      }
      if (this.vidaJogador < 1 || this.vidaMonstro < 1) {
        this.barraVida = "gray";
      }
    }
  },
  computed: {
    ataqueProgressoJogador() {
      return {
        width: this.vidaJogador + "px",
        backgroundColor: this.barraVida,
      };
    },
    ataqueProgressoMonstro() {
      return {
        width: this.vidaMonstro + "px",
        backgroundColor: this.barraVida
      };
    },
  },
});
