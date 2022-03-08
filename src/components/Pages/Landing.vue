<template>
  <div>
    <div class="sections">
      <Section filepath="Landing" />
      <Section filepath="Benefits" />
      <Section filepath="Faq" />
      <Section filepath="Membership" />
    </div>
  </div>
</template>

<script>
import Section from '@/components/Global/Section'

export default {
  name: "Layout",
  components: {
    Section
  }
}
</script>

<style lang="scss" scoped>

</style>