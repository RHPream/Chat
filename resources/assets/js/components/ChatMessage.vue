<template>
    <div class="chat-message">
        <p>{{ message.message}}</p>
        <small>{{message.user}}</small>
    </div>
</template>

<script>
    export default {
        props:['message']
    }
</script>

<style lang="css">
    .chat-message
    {
        padding: 5px;
    }
    .chat-message p
    {
        font-size: 14px;
    }
    .chat-message small
    {
        color: #3D6345;
        font-weight: bold;
    }
</style>
