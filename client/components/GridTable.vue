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
import SupportService from '../services/SupportService'

var mounted

export default {
  watch: {
    '$store.getters.persons': function (oldVal, newVal) {
      if (newVal.length !== 0) {
        this.DataTable.row.add(newVal[newVal.length - 1])
        this.DataTable.rows().invalidate().draw()
      }
    }
  },
  mounted () {
    var that = this
    that.persons = []
     SupportService.checkServer().then( () => {
      PersonService.getAll().then( (response) => {
          that.persons = response.data !== undefined ? response.data : response
          that.$store.commit('ADD_ALL_PERSONS', that.persons)
          this.DataTable = $(this.$el).DataTable({
                data: that.persons,
                columns: [
                  {
                    title: 'First Name',
                    data: 'firstName'
                  },
                  {
                    title: 'Last Name',
                    data: 'lastName'
                  },
                  {
                    title: 'Age',
                    data: 'age'
                  },
                  {
                    title: 'Description',
                    render: (data, type, full) => {
                      return full.firstName + ' ' + full.lastName
                    }
                  }

                ]
              })
          })
     })
    
   
    
  }
}
</script>
<style></style>
