<template>
  <section class="section">
    Qsoft Company
  </section>
</template>

<script>
export default {
  name: "Qsoft",
  created() {
    console.log('Qsoft')
  }
}
</script>

<style scoped>
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 500;
  color: red;
  min-height: 100vh;
}
</style>