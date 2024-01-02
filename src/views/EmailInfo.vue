<template>
    <form @submit.prevent="submit">
        <label for="username">Email Address</label>
        <input type="text" v-model="form.username">
        <label for="password">Password</label>
        <input type="password" v-model="form.password">
        <button type="submit">Submit</button>
    </form>
    <router-link 
        :to="{ name: 'ReceiverInfo'}"
        type="button"
        >
        Next
    </router-link>
    <router-link 
        :to="{ name: 'Agreement'}"
        type="button"
        >
        Back
    </router-link>
</template>
<script>
export default{
    data(){
        return {
            form:{
                username: "",
                password: "",
            },
        }
    },
    methods:{
        submit(){
            if (!this.form.username || !this.form.password ) {
                console.log("Please Complete the form")
            }else{
                console.log(this.form)
            }
        },
    },
}
</script>