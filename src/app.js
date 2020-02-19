import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue ({
    el: '#app',
    data: {
      currencies: null,
      eurInput: 0,
      chosenCurrency: {}
      // chosenCurrency: {
      //   name: "",
      //   rateInEur: 0
      // },
      // chosenCurrencyName: ""
    },

    // In a nutshell, this is saying that our Vue instance runs a handful of specifically named methods throughout its existence, and affords us the opportunity to add our code to them. Lifecycle hooks you may see documented include created, updated, and destroyed, but the one we’re going to look at for the time being is mounted. mounted is a method that runs once our DOM is ready and available to be manipulated, so we’re using it here much in the same way that we’ve been using DOMContentLoaded. Let’s see if we can hook into it just now:

    mounted() {
    this.fetchCurrencies();
    },
    computed: {

      // A computed property is pretty much what it says on the tin - a property that is derived from the result of some form of computation. The rule of thumb is to use them whenever you want a property that would require some complex logic to display. To get the total of all these bank accounts, we’re going to have to call reduce on this.accounts, and while there’s nothing stopping us putting this function call straight into our template, it would make our template harder to read, and harder to maintain. The good news is that implementing a computed property isn’t too different from any other thing we’ve added to our Vue instance’s this week. Firstly, let’s add a property of computed to our Vue instance which will, to begin with, point to an empty object.

    },
    methods: {
      fetchCurrencies: function () {
        const request = fetch('https://api.exchangeratesapi.io/latest');

        const response = request.then(response => response.json());

        const currencies_obj = response.then(data => this.currencies = data);
      },


      calculateConversion: function () {
        if (this.eurInput > 0 && this.chosenCurrency > 0) {
          return (this.eurInput / this.chosenCurrency).toFixed(2);
        }
      }
    }
  });


});

// fetchCountries: function() {
//   const request = fetch('https://restcountries.eu/rest/v2/all');
//
//   const response = request.then(response => response.json());
//
//   const countriesArray = response.then(data => this.countries = data);
// },

// https://api.exchangeratesapi.io/latest
