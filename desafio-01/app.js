new Vue({
    el: '#desafio',
    data: {
        nome: 'Andre',
        idade: '19',
        image: 'https://i.ytimg.com/vi/dhDUbFLUFRM/maxresdefault.jpg'
    },
    methods: {
        idadeX3: function() {
            return this.idade * 3;
        },
        aleatorio: function() {
            return Math.random().toPrecision(2);
        }
    }
})