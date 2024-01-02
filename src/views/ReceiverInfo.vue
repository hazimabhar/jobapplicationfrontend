<template>
    <form action="" @submit.prevent="insertRecipientsList">
            <label for="recipinetsName">Recipients Name</label>
            <input type="text" v-model="recipientName">
            <label for="recipinetsName">Recipients Email</label>
            <input type="text" v-model="recipientEmail">
            <input class="btn btn-primary" type="submit" value="Insert">
        </form>
        <div class="">
            <table class="table table-striped table-sm caption-top table-responsive ">
                <caption>List of Receiver</caption>
                <thead class="table-primary ">
                  <tr>
                    <th class="text-center"  >#</th>
                    <th >Receiver Name</th>
                    <th >Receiver Email</th>
                    <th class="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="(company, index) in recipientList" :key="index">
                        <td class="text-center fw-bold" >{{ index + 1 }}</td>
                        <td>{{ company.receiverName }}</td>
                        <td>{{ company.receiverEmail }}</td>
                        <td class="col-lg-1 col-md-2 text-center">
                            <button class="btn btn-outline-none">
                                <i class="fa-solid fa-pen-to-square text-primary"></i>
                            </button>
                            <button class="btn btn-outline-none">
                                <i class="fa-solid fa-trash text-danger"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    <router-link 
        :to="{ name: 'EmailDetails'}"
        type="button"
        class="option-background"
        >
        Next
    </router-link>
    <router-link 
        :to="{ name: 'EmailInfo'}"
        type="button"
        >
        Back
    </router-link>
</template>
<script>
    export default{
        data(){
            return {
                recipientName: "",
                recipientEmail: "",
                recipientList:[],
            }
        },
        methods:{
            insertRecipientsList(){
                this.recipientList.push({
                    receiverName: this.recipientName,
                    receiverEmail: this.recipientEmail
                })
            }
        },
    }
</script>