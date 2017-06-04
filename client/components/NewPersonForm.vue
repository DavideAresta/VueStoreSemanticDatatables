<template>
	<form class="ui form">
		<div class="field">
			<label>First Name</label>
			<input type="text" name="first-name" placeholder="First Name" v-model="formData.firstName">
		</div>
		<div class="field">
			<label>Last Name</label>
			<input type="text" name="last-name" placeholder="Last Name" v-model="formData.lastName">
		</div>
		<div class="field">
			<label>Age</label>
			<input type="number" name="age" placeholder="Age" v-model="formData.age">
		</div>
		<button class="ui button" type="button" v-on:click="addToTable()">
			<i class="add user icon"></i>Add person</button>
     <button  class="ui button"  type="button" @click="syncWithServer()">Sync with server</button>

	</form>
</template>
<script>

import Person from '../classes/Person'
import SupportService from '../services/SupportService'
import PersonService from '../services/PersonService'

export default {
	data () {
		return {
			formData: new Person()			
		}
	},
	methods: {
		addToTable () {
			let person = this.formData;
			this.$store.commit('ADD_PERSON', person)
			var id = this.$store.getters.persons.length
			person.id = id++;
			PersonService.save(person)
			this.formData = new Person()
		},
		syncWithServer () {
			SupportService.syncWithServer()
		}
	}
}
</script>
<style>

</style>
