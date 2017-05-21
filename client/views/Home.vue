<template>
  <div class="ui container">
    <grid-table persons="persons"></grid-table>
    <new-person-form persons="persons"></new-person-form>
  </div>
</template>

<script>
//import Counter from 'components/Counter'
import GridTable from 'components/GridTable'
import NewPersonForm from 'components/NewPersonForm'

export default {
  components: {
    GridTable,
    NewPersonForm
  }
}
</script>
