
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
Vue.component('chat-message', require('./components/ChatMessage.vue'));
Vue.component('chat-log', require('./components/ChatLog.vue'));
Vue.component('chat-composer', require('./components/ChatComposer.vue'));

const app = new Vue({
    el: '#app',
    data:{
        messages: [
            // {message: 'Some text message goes here', user: 'Jon Doe'},
            // {message: 'Some text message goes here', user: 'Jon Doby'},
            // {message: 'Some text message goes here', user: 'Jon Doe'},
            // {message: 'Some text message goes here', user: 'Jon Doby'}
        ]
    },
    methods:{
        messageAdd: function (message) {
            this.messages.push(message);
            axios.post('/Chat/public/messages/'+message.message, {})
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    // created: function() {
    //     axios.get('/Chat/public/messages')
    //         .then(function (response) {
    //             this.messages = response.data;
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // },
    created: function() {
        axios.get('/Chat/public/messages')
            .then(response => {
            this.messages = response.data;
    }).catch(function (error) {
            console.log(error);
        });
    }
});
