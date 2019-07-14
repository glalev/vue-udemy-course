<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="color='Blue'">Load Blue Template</button>
                <button class="btn btn-success" @click="color='Green'">Load Green Template</button>
                <button class="btn btn-danger" @click="color='Red'">Load Red Template</button>
                <hr>
<!--                <app-blue><p>This is a Blue div</p></app-blue>-->
<!--                <app-green><p>This is a Green div</p></app-green>-->
<!--                <app-red><p>This is a Red div</p></app-red>-->
                <component :is="`app${color}`">
                    <p>This is a {{ color }} div</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data() {
          return {
            color: 'Red'
          }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
