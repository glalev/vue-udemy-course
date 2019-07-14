<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selected='app-quote'">Quote</button>
                <button @click="selected='app-author'">Author</button>
                <button @click="selected='app-new'">New</button>
                <hr>
                <p>{{ selected }}</p>
                <keep-alive>
                    <component :is="selected">
                        <p>Default content</p>
                    </component>
                </keep-alive>
<!--                <app-quote>-->
<!--                   <h2 slot="title">{{ quote.title }}</h2>-->
<!--                   <p>What a wonderful quote!</p>-->
<!--                </app-quote>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        data () {
          return {
            quote: {
              title: 'The Quote'
            },
            selected: 'app-quote',
          }
        },
        components: {
          'app-quote': Quote,
          'app-author': Author,
          'app-new': New,
        }
    }
</script>

<style>
</style>
