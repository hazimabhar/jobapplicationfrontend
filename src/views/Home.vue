<template>
    <p class="text-center">
        Email Sender
    </p>
    <router-view/>
</template>
<script>
export default {
  mounted(){
    this.$router.push({ name: 'Agreement' });
  },
};
</script>