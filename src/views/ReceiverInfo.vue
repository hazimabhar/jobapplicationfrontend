<template>
    <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
      <ol class="breadcrumb justify-content-center">
        <li class="breadcrumb-item"> <router-link 
        :to="{ name: 'Agreement'}"
        type="button"
        >
        Home
        </router-link></li>
        <li class="breadcrumb-item"> <router-link 
        :to="{ name: 'EmailInfo'}"
        type="button"
        >
        Email Info
        </router-link></li>
        <li class="breadcrumb-item"> <router-link 
        :to="{ name: 'ReceiverInfo'}"
        type="button"
        >
        Receiver Info
        </router-link></li>
        <li class="breadcrumb-item active" aria-current="page">Email Details</li>
      </ol>
    </nav>
    <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%">75%</div>
    </div>
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