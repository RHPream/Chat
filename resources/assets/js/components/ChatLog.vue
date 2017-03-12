<template>
    <div class="chat-log">
        <!--<chat-message v-for="message in messages" :message='message'></chat-message>-->
        <button @click="showOnConsole">Show on console</button>
        <p>{{ messages }}</p>
    </div>
</template>

<script>
    export default {
     props: ['messages'],
     methods: {
        showOnConsole()
        {
            console.log(messages);
        }
     }

    }
</script>

<style lang="css">

</style>
