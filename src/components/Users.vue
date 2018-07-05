<template>
<div class="users">
    <h2>{{ title }}</h2>
    <ui-button color="green" raised size="normal" @click.stop.prevent="getUsers">Get Users</ui-button>
  <ul>
    <li v-for="user in users"> {{ user.name }}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "Users",
    data () {
	    return {
	      title: "Get Users API",
        users: []

      }
    },
    methods: {
      getUsers () {
        var url = 'https://jsonplaceholder.typicode.com/users'
        this.$http.get(url).then(function (response) {
          this.users = response.body
          console.log(response.body)
        })
      }
    }

}
</script>

<style scoped>

</style>
