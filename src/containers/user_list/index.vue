<template>
  <LayoutView :collection="collection" :fetching="fetching"/>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Users' // title is now "RCOS - Users"
  },
  computed: mapGetters({
    fetching: 'user/fetching',
    collection: 'user/filteredCollection'
  }),
  created () {
    return this.$store.dispatch('user/fetchCollection')
  }
}
</script>
