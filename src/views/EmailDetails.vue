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
        <label for="Email">Email Information</label>
        <label for="subject">Email Subject</label>
        <!-- <input type="text" v-model="form.subject"> -->
        <input type="text">
        <label for="message">Email Message</label>
        <!-- <input type="text" v-model="form.message"> -->
        <input type="text">
        <button type="submit">Submit</button>
        <label for="attachment">Resume/Any attachment</label>
        <input type="file" @change="submit" multiple>
        <router-link 
        :to="{ name: 'ReceiverInfo'}"
        type="button"
        >
        Back
    </router-link>
</template>
<script>
</script>