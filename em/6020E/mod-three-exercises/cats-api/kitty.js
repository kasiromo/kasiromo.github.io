new Vue({
  el: '#app',
  data: {
    catArray: [],
    catIMGurl: "https://cdn2.thecatapi.com/images/",
    catURLExtension: ".jpg",
    fallbackImage: '' // Placeholder image for if cat breed has no associated image.
  },

  created() {
    this.loadNextImage();
  },

  methods: {
    async loadNextImage() {
      try {
        axios.defaults.headers.common['x-api-key'] = "5707ff43-c0b5-456f-864a-78a03c24ea46";

        const resp = await axios.get('https://api.thecatapi.com/v1/breeds');
        this.catArray = resp.data || [];
        this.catArray = this.catArray.map(cat => {
          return {
            ...cat,
            child_friendly: cat.child_friendly || 0,
            reference_image_id: cat.reference_image_id || (cat.image && cat.image.id ? cat.image.id : null)
          };
        });
      } catch (err) {
        console.error('Error loading cat data:', err);
      }
    },

    imageUrl(cat) {
      if (cat.image && cat.image.url) {
        return cat.image.url;
      }

      if (cat.reference_image_id) {
        return this.catIMGurl + cat.reference_image_id + this.catURLExtension;
      }
      
      return '';
    }
  }
});

