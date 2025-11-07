const drinkdata = {
  data() {
    return {
      drink: [
        {
          "drink_name": "Iced Matcha Latte",
          "fact": "A vibrant blend of green tea powder, milk, and ice for a smooth, earthy taste.",
          "section": "101",
          "counter": "201"
        },
        {
          "drink_name": "Cold Brew Coffee",
          "fact": "Brewed slowly in cold water for 12 hours, giving a naturally sweet and rich flavor.",
          "section": "101",
          "counter": "202"
        },
        {
          "drink_name": "Chai Tea Latte",
          "fact": "A cozy mix of black tea, milk, and spices like cinnamon, cardamom, and cloves.",
          "section": "102",
          "counter": "203"
        },
        {
          "drink_name": "London Fog",
          "fact": "Earl Grey tea with steamed milk and vanilla syrup — soft, floral, and comforting.",
          "section": "102",
          "counter": "204"
        },
        {
          "drink_name": "Thai Iced Tea",
          "fact": "Sweet and creamy black tea served over ice, a favorite street drink in Thailand.",
          "section": "103",
          "counter": "205"
        },
        {
          "drink_name": "Taro Milk Tea",
          "fact": "Sweet, nutty, and naturally purple — made from taro root and black tea.",
          "section": "103",
          "counter": "206"
        },
        {
          "drink_name": "Hibiscus Iced Tea",
          "fact": "Tart and refreshing with a deep ruby hue — naturally caffeine-free.",
          "section": "104",
          "counter": "207"
        },
        {
          "drink_name": "Espresso Macchiato",
          "fact": "A strong espresso shot topped with a dollop of steamed milk foam.",
          "section": "104",
          "counter": "208"
        },
        {
          "drink_name": "Mocha Latte",
          "fact": "Espresso and steamed milk with a rich chocolate flavor — a cozy favorite.",
          "section": "115",
          "counter": "229"
        }
      ],
      drinkname: "",
      fact: "",
      counter: 0,
      selectedDrink: ""
    };
  },

  methods: {
    showDrink() {
      const current = this.drink[this.counter];
      if (!current) return;

      this.drinkname = current.drink_name;
      this.fact = current.fact;

      this.counter++;
      if (this.counter >= this.drink.length) {
        this.counter = 0;
      }
    },

    displayDrink() {
      const chosen = this.drink.find(d => d.drink_name === this.selectedDrink);
      if (chosen) {
        this.drinkname = chosen.drink_name;
        this.fact = chosen.fact;
      }
    }
  },

  mounted() {
    this.showDrink();
  }
};

Vue.createApp(drinkdata).mount('#drink');
    