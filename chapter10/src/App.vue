<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid @quoteDeleted="deleteQuote" :quotes="quotes"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a quote to delete it!</div>
            </div>
        </div>
    </div>
</template>

<script>
  import QuoteGrid from './components/QuoteGrid.vue';
  import NewQuote from './components/NewQuote.vue';
  import Header from './components/Header.vue';

  export default {
    data() {
      return {
        quotes: ['Just a Quote to see something'],
        maxQuotes: 5,
      }
    },
    components: {
      'app-quote-grid': QuoteGrid,
      'app-new-quote': NewQuote,
      'app-header': Header,
    },
    methods: {
      newQuote(quote) {
        if (this.quotes.length >= this.maxQuotes) {
            return alert('Please delete quotes first!')
        } else {
          this.quotes.push(quote);
        }
      },
      deleteQuote(index) {
        this.quotes = this.quotes.filter((_, i) => i !== index);
      }
    }
  }
</script>

<style>
</style>
