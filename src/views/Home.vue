<template>
  <div class="text-center w-50 m-auto">
    <p class="fw-bold fs-1">
        Email Sender
    </p>
    <div class="d-flex justify-content-evenly ">
      <div class="">
        <div class="rounded-pill border border-dark px-4 py-3 text-white bg-black">
          <i class="fa-solid fa-1 fs-5"></i>
        </div>
      </div>
      <div class="">
        <div v-if="isCurrentRoute(['EmailInfo', 'ReceiverInfo', 'EmailDetails'])"  class="rounded-pill border border-dark px-4 py-3 text-white bg-black">
          <i class="fa-solid fa-2 fs-5 "></i>
        </div>
        <div v-else class="rounded-pill border border-dark px-4 py-3">
          <i class="fa-solid fa-lock fs-5 "></i>
        </div>
      </div>
      <div class="">
        <div v-if="isCurrentRoute(['ReceiverInfo', 'EmailDetails'])" class="rounded-pill border border-dark px-4 py-3 text-white bg-black">
          <i class="fa-solid fa-3 fs-5 "></i>
        </div>
        <div v-else class="rounded-pill border border-dark px-4 py-3 ">
          <i class="fa-solid fa-lock fs-5 "></i>
        </div>
      </div>
      <div class="">
        <div v-if="isCurrentRoute('EmailDetails')" class="rounded-pill border border-dark px-4 py-3 text-white bg-black">
          <i class="fa-solid fa-4 fs-5 "></i>
        </div>
        <div v-else class="rounded-pill border border-dark px-4 py-3 ">
          <i class="fa-solid fa-lock fs-5 "></i>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-evenly pt-2 ps-2">
      <div class="">
        <div class="">
          <p>Agreement</p>
        </div>
      </div>
      <div class="">
        <div class="">
          <p>Email Info</p>
        </div>
      </div>
      <div class="">
        <div class="">
          <p>Receiver Info</p>
        </div>
      </div>
      <div class="">
        <div class="">
          <p>Email Details</p>
        </div>
      </div>
    </div>
    <div>
      <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" :style="{width: progressBar, 'background-color': 'black'}">
        {{ progressBar }}
        </div>
      </div>
    </div>
    <div class="pt-5">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    progressBar() {
      switch (this.$route.name) {
        case 'EmailInfo':
          return '50%'
        case 'ReceiverInfo':
          return '75%'
        case 'EmailDetails':
          return '100%'
        default:
          return '25%'
      }
    },
  },
  mounted(){
    this.$router.push({ name: 'Agreement' });
  },
  methods:{
    isCurrentRoute(routeNames) {
      return routeNames.includes(this.$route.name);
    },
  }
};
</script>
<style>
</style>