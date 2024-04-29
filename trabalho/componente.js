new Vue ({
    el: '#app',

    data (){
        return {
            info: null,
            meta: null
        }
    },

    mounted (){
        axios
            .get('https://rickandmortyapi.com/api/character')
            .then(response => (
                this.info = response.data.results,
                this.meta = response.data.info
            ))
    },  


})