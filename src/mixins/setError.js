import { mapMutations } from 'vuex'

export default {
  methods: {
    /*
    *El segundo argumento es un objeto con las funciones
    *que queremos mapear, es decir, le hemos dicho que nuestra mutación SET_ERROR,
    *e convierta en un método de nombre setError en nuestro componente.
    */
    ...mapMutations('error', {
    // De esta forma podemos usarlo como un componente local con la sintaxis de siempre this.setError()
      setError: 'SET_ERROR'
    }),
    // desde un componente (en el cual tengamos importado el mixin) podemos llamar al método
    setApiErr (params) {
      this.setError(params)
    }
  }
}
