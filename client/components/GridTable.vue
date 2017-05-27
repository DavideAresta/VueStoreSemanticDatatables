<template>
    <table class="ui celled table">       
    </table>
</template>
<script>
import $ from 'jquery'
import datatables from 'datatables.net'
import datatablesse from 'datatables.net-se'
import { mapGetters } from 'vuex'

import Person from '../classes/Person'
import PersonService from '../services/PersonService'


export default {
    watch: {
        '$store.getters.persons': function(oldVal, newVal) {     
            this.DataTable.row.add(newVal[newVal.length - 1])                          
            this.DataTable.rows().invalidate().draw()            
        }
    },
    mounted() {
         PersonService.getAll().then((response) => {
                var persons = response.data     
                this.persons = []        
                persons.forEach(function(element) {
                    this.persons.push(new Person(element.firstName, element.lastName, element.age))   
                }, this);                 

                this.DataTable = $(this.$el).DataTable({
                        data: this.persons,
                        columns: [
                            { 
                                title: "First Name",
                                data: 'firstName' 
                            },
                            { 
                                title: "Last Name",
                                data: 'lastName' 
                            },
                            { 
                                title: "Age",
                                data: 'age' 
                            },
                            {
                                title: "Description",
                                data: 'description'
                            }
                        
                        ]                        
                    })     
                })   
    },
    methods: {    
       
    }
}
</script>
<style></style>