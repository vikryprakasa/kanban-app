<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
      <a class="navbar-brand" href="#">Logo</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
          <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
          <a class="nav-link" href="#">Pricing</a>
          <a
            class="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            >Disabled</a
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
    name: 'Navbar',
    components:{
    },
    methods:{
        logout(){
            localStorage.clear()
            this.$emit('logOut','Loginpage')
        }

    }
}
</script>

<style>

</style>