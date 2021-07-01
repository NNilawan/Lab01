// const product = 'Socks'
//2.1
const app = Vue.createApp({
        data() {
            return {
                // 2.4
                // product: 'Socks'
                // product: 'Boots',
                // 2.4

                // 2.5
                description: 'A boot is a type of footwear which covers at least the foot and usually the ankle, and sometimes extends up to the knee or even the hip. They come in every imaginable variation of height, color, material and style. Most have a heel which is clearly distinguishable from the rest of the sole, even if the two are made of one piece.',
                // 2.5

                // 3.2
                image: './assets/images/socks_green.jpg',
                // 3.2

                // 3.6
                link: 'https://www.camt.cmu.ac.th',
                // 3.6

                // 4.2,4.5
                product: 'Shoes',
                inStock: true,
                inventory: 5,
                // 4.2,4.5

                // 5.1
                details: ['50% cotton', '30% wool', '20% polyester'],
                // 5.9
                sizes: ['S', 'M', 'L'],

                // 2.3
                variants: [
                    { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                    { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
                ],
                // 6.1
                cart: 0,
                // 4.9
                onSale: true


            }
        },
        // 6.4
        methods: {
            addToCart() {
                this.cart += 1
                this.inventory -= 1
            },
            updateImage(varianImage) {
                this.image = varianImage
            },
            checkStock() {
                if (this.inventory <= 0) {
                    this.inStock = false
                } else {
                    this.inStock = true
                }

            }
        }
    })
    //2.1