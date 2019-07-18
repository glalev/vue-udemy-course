<template>
    <v-data-table
            :headers="headers"
            :items="data"
            item-key="name"
    >
        <template slot="headerCell" slot-scope="{ header }">
            <slot :name="`${header.value}Header`" v-bind:data="header">
                <span>{{ header.text }}</span>
            </slot>
        </template>

        <template v-slot:items="{ item }">
            <tr :class="item.class">
               <td v-for="(header, i) in headers" :key="i">
                   <slot :name="header.value" v-bind:data="item">
                       <span>{{ item[header.value] }}</span>
                   </slot>
               </td>
            </tr>
        </template>
    </v-data-table>
</template>

<script>
  export default {
    name: "DataTable",
    props: ['headers', 'data']
  }
</script>

<style scoped>
    .custom-class {
        color: blue;
    }
</style>