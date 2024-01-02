<template>
  <div class="text-center">
    <p>
        Email Sender
    </p>
    <div>
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  mounted(){
    this.$router.push({ name: 'Agreement' });
  },
};
</script>