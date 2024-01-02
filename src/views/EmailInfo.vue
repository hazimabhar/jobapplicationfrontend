<template>
    <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
      <ol class="breadcrumb justify-content-center">
        <li class="breadcrumb-item"> <router-link 
        :to="{ name: 'Agreement'}"
        type="button"
        >
        Home
        </router-link></li>
        <li class="breadcrumb-item active" aria-current="page">Email Info</li>
      </ol>
    </nav>
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