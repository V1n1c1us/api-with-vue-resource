<template>
<div class="users">
    <h2>{{ title }}</h2>
    <ui-button color="green" raised size="normal" @click.stop.prevent="getUsers">Get Users</ui-button>

  <ui-alert v-if="errorResponse.status == 'error'" type="error" @dismiss="closeError = false" v-show="closeError">
    {{ errorResponse.msg }}
  </ui-alert>
  <div v-if="loading.users">
    <ui-progress-linear color="primary" v-show="loading.users"></ui-progress-linear>
  </div>
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
        users: [],
        closeError: true,
        loading: {
	        users: false
        },
        errorResponse: {
	        msg: 'Ops.. Página não encontrada',
          status: ''
        }

      }
    },
    methods: {
      getUsers () {
        this.loading.users = true

        var url = 'https://jsonplaceholder.typicode.com/users'

        this.$http.get(url).then(function (response) {
          this.users = response.body
        }, function (error) {
          this.errorResponse.status = 'error'
        })
          .finally(function () {
            this.loading.users = false
          })
      }
    }

}
</script>

<style scoped>

</style>
