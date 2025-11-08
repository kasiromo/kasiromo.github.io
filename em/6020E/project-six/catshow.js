Vue.component('cat-slideshow', {
  props: ['whichcat'],
  template: `
    <div class="card">
      <h2>{{ breedName || "Loading..." }}</h2>

      <div class="image-container">
        <img :src="image.url" alt="Cat image" v-if="image && image.url">
        <p v-else class="muted">Loading image…</p>
      </div>

      <button @click="slideshow">Next Image</button>

      <div class="info">
        <p><strong>Description:</strong> {{ breedDescription }}</p>
        <p><strong>Temperament:</strong> {{ breedTemperament }}</p>
        <p><strong>Origin:</strong> {{ breedOrigin }}</p>

        <div class="score-row">
          <span class="score-label">Dog Friendly:</span>
          <div class="score-bar">
            <div class="score-fill" :style="{ width: (dogFriendly * 20) + '%' }"></div>
          </div>
        </div>

        <div class="score-row">
          <span class="score-label">Child Friendly:</span>
          <div class="score-bar">
            <div class="score-fill" :style="{ width: (childFriendly * 20) + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  `,

  data() {
    return {
      image: { url: '' },
      breedName: '',
      breedDescription: '',
      breedTemperament: '',
      breedOrigin: '',
      dogFriendly: 0,
      childFriendly: 0,
      allofit: [],
      i: 0
    };
  },

  watch: {
    whichcat(newBreed) {
      this.loadNextImage(newBreed);
    }
  },

  created() {
    this.loadNextImage(this.whichcat);
  },

  // I was able to get this "methods" section started on my own using previous module 3 exercises as a guide, but kept running into issues. I did end up using AI assistance to help me troubleshoot and finalize this section of my code. //
  methods: {
    async loadNextImage(breedID) {
      try {
        axios.defaults.headers.common['x-api-key'] = 'YOUR_API_KEY_HERE';

        const response = await axios.get(
          'https://api.thecatapi.com/v1/images/search?breed_ids=' + breedID,
          { params: { limit: 10, size: 'full' } }
        );

        const theid = response.data[0].id;
        const response2 = await axios.get('https://api.thecatapi.com/v1/images/' + theid);

        const b = response2.data.breeds && response2.data.breeds[0];
        this.breedName = b ? b.name : '';
        this.breedDescription = b ? b.description : '';
        this.breedTemperament = b ? b.temperament : '';
        this.breedOrigin = b ? b.origin : '';
        this.dogFriendly = b ? b.dog_friendly : 0;
        this.childFriendly = b ? b.child_friendly : 0;

        this.allofit = response.data;
        this.slideshow();
      } catch (err) {
        console.log(err);
      }
    },

    slideshow() {
      if (!this.allofit || this.allofit.length === 0) return;
      if (this.i >= this.allofit.length) this.i = 0;
      this.image = this.allofit[this.i];
      this.i++;
    }
  }
});

new Vue({
  el: '#app',
  data: {
    breeds: [
      { id: 'abob', name: 'American Bobtail' },
      { id: 'abys', name: 'Abyssinian' },
      { id: 'manx', name: 'Manx' },
      { id: 'beng', name: 'Bengal' },
      { id: 'sphy', name: 'Sphynx' }
    ],
    currentBreed: 'abob'
  }
});
