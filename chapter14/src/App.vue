<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <transition :name="alertAnimation">
                    <div v-if="show" class="alert alert-info">There is some info</div>
                </transition>
                <transition name="slide" type="animation">
                    <div v-if="show" class="alert alert-info">There is some info</div>
                </transition>
                <transition
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
                    appear
                >
                    <div v-if="show" class="alert alert-info">There is some info</div>
                </transition>
                <transition :name="alertAnimation" mode="out-in">
                    <div v-if="show" class="alert alert-info" key="info">There is some info</div>
                    <div v-else class="alert alert-warning" key="warning">There is some warning</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load / Remove</button>
                <br><br>
                <transition
                    name="fade"
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                >
                    <div v-if="load" style="width: 100px; height: 100px; background-color: lightgreen"></div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                load: true,
                alertAnimation: 'fade'
            }
        },
        methods: {
            beforeEnter (el) {
                console.log('beforeEnter');
            },
            enter (el, done) {
                console.log('enter');
                done();
            },
            afterEnter (el) {
                console.log('after enter');
            },
            enterCancelled () {
                console.log('enterCancelled');
            },
            beforeLeave() {
                console.log('beforeLeave');
            },
            leave(el, done) {
                console.log('leave');
                done();
            },
            afterLeave() {
                console.log('afterLeave');
            },
            leaveCancelled() {
                console.log('leaveCancelled');
            }
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave {

    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        /* transform: translateY(20px); */
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity 1s;
    }

    .slide-leave {
        opacity: 0;
    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
