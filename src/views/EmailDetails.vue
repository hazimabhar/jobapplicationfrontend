<template>
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