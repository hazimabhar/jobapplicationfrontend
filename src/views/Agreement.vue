<template>
  <div>

  </div>
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