<template>
  <div class="ui container">
    <grid-table></grid-table>
    <new-person-form></new-person-form>
  </div>
</template>

<script>

import GridTable from 'components/GridTable'
import NewPersonForm from 'components/NewPersonForm'

export default {
  components: {
    GridTable,
    NewPersonForm
  }
}
</script>
