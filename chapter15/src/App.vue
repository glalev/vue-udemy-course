<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label for="userName">Username</label>
                    <input type="text" name="userName" value="" class="form-control" v-model="user.userName">
                </div>
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input type="text" name="email" value="" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <input type="text" class="form-control" v-model="node">
                <br>
                <button class="btn btn-primary" @click="fetchData">Fetch Data</button>
                <hr>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">{{ u.userName }} - {{ u.email}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                user: {
                    userName: '',
                    email: ''
                },
                users: [],
                node: 'data',
                resource: {}
            }
        },
        methods: {
            submit () {
                // this.$http.post('data.json', this.user)
                //     .then(res => {
                //         console.log(res)
                //     })
                //     .catch(error => console.log('error', error))
                // this.resource.save({}, this.user)
                this.resource.saveAlt({}, this.user)
            },
            fetchData () {
                // this.$http.get('data.json')
                //     .then(res => res.json())
                //     .then(data => {
                //         this.users = Object.values(data)
                //     })
                //     .catch(error => console.log('error', error))
                this.resource.getData({ node: this.node })
                    .then(res => res.json())
                    .then(data => this.users = Object.values(data))
                    .catch(error => console.log('error', error))
            }
        },
        created () {
            const customActions = {
                saveAlt: { method: 'POST', url: 'alternative.json'},
                getData: { method: 'GET' }
            }
            this.resource = this.$resource('{node}.json', {}, customActions)
        }
    }
</script>

<style>
</style>
