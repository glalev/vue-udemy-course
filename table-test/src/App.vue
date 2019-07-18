<template>
    <v-flex xs12 py-5 px-5>
      <data-table :headers="headers" :data="items">
        <template v-slot:nameHeader="{ data }">
          <h1>{{ data.text }}</h1>
        </template>
        <template v-slot:name="{ data }">
          <a href="https://google.com">{{ data.name }}</a>
        </template>
        <template v-slot:icon="{ data }">
          <v-icon color="red">{{ data.icon }}</v-icon>
        </template>
      </data-table>
    </v-flex>
</template>

<script>
  import DataTable from './components/DataTable.vue';

  export default {
    name: 'App',
    components: {
      'data-table': DataTable,
    },
    data() {
      return {
        headers: [
          { text: 'Name', value: 'name'},
          { text: 'Age', value: 'age'},
          { text: 'Sex', value: 'sex' },
          { text: 'City', value: 'city'},
          { text: 'Country', value: 'country' },
          { text: 'Icon', value: 'icon' },
        ],
        items: [
          { name: 'Georgi Lalev', age: 32, sex: 'male', city: 'Sofia', country: 'Bulgaria', icon: 'face', class: 'custom-class' },
          { name: 'Philip Boune', age: 24, sex: 'male', city: 'Paris', country: 'France', icon: 'atm' },
          { name: 'Anna Muller', age: 39, sex: 'female', city: 'Munich', country: 'Germany', icon: 'timer' },
          { name: 'Natalia Petrova', age: 25, sex: 'female', city: 'Moskow', country: 'Russia', icon: 'category' },
          { name: 'George Petrescu', age: 55, sex: 'male', city: 'Timisoara', country: 'Romania', icon: 'timer' },
        ]
      }
    }
  }
</script>
