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
        <button class="ui button" type="button" v-on:click="addToTable()"><i class="add user icon"></i>Add person</button>
    </form>
</template>
<script>
import Person from '../classes/Person'

export default {
    data () {
        return {
           formData: new Person()
        }
    },
    methods: {    
        addToTable() {
            let person = this.formData;                                   
            this.$store.commit('ADD_PERSON', person)
            this.formData = new Person();           
        }
    }
}
</script>
<style></style>