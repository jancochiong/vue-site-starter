<template>
  <div id="app">
    <Header />
    <Landing />
    <Footer />
  </div>
</template>

<script>
import Landing from '@/components/Pages/Landing'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

export default {
  name: 'app',
  components: {
    Landing,
    Header,
    Footer
  }
}
</script>

<style>

</style>
