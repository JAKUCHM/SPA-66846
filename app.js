new Vue({
  el: '#app',
  data: {
    products: [
      { id: 1, name: 'Fotel bujany', price: 150, image: 'bujany.jpeg' },
      { id: 2, name: 'Fotel', price: 250, image: 'fotel.jpeg' },
      { id: 3, name: 'Biurko ', price: 350, image: 'biurko.jpeg' },
	  { id: 4, name: 'Krzesło drewniane', price: 350, image: 'krzeslo.jpeg' },
    ],
    cart: [],
    cartOpen: false,
    useSmallImages: false,
  },
  computed: {
    total() {
      let cartTotal = this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
      return cartTotal;
    },
  },
  methods: {
    addToCart(product) {
      const itemInCart = this.cart.find(item => item.product.id === product.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        this.cart.push({ product, quantity: 1 });
      }
    },
    removeFromCart(product) {
      const index = this.cart.findIndex(item => item.product.id === product.id);
      if (index !== -1) {
        if (this.cart[index].quantity > 1) {
          this.cart[index].quantity--;
        } else {
          this.cart.splice(index, 1);
        }
      }
    },
    toggleCart() {
      this.cartOpen = !this.cartOpen;
    },
    productImage(imagePath) {
      if (this.useSmallImages) {
      
        return imagePath.replace('.jpg', '_small.jpg').replace('.jpeg', '_small.jpeg');
      } else {
        return imagePath;
      }
    },
  },
});
