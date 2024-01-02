<template>
    <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Home</li>
      </ol>
    </nav>
<form @submit.prevent="confirmationAgreement">
      <p>HEHEHEHEHE</p>
      <input type="radio" id="Yes" name="fav_language" value="Yes" v-model="confirmation">
      <label for="html">Yes</label><br>
      <input type="radio" id="No" name="fav_language" value="No" v-model="confirmation">
      <label for="css">No</label><br>
      <input type="submit" value="Proceed">
    </form>
</template>
<script>
export default {
  data() {
    return {
      confirmation: '',
      displayNextPage: false
    };
  },
  methods: {
    confirmationAgreement(){
      if(this.confirmation =="Yes"){
        this.displayNextPage=true
        this.$router.push({ name: 'EmailInfo' });
      }
      else{
        this.displayNextPage=false
      }
    },
  },
};
</script>