export default {
    data() {
        return {
            products:[],
            loading:true,
        }
    },
    methods: {
        getProductsAccessories() {
            this.products = this.$resource('products/accessories', {}, {}, {
                before: () => {
                    this.loading = true
                },
                after: () => this.loading = false
            })
            this.products.query().then((response) => {
                this.products = response.data
            }, (response) => {
                console.log('error', response)
            })
        }
    },
    mounted() {
        this.getProductsAccessories()
    }
}