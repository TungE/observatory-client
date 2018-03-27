import _ from 'lodash'
import { COLLECTION_GETTERS, MODEL_GETTERS, FILTER_GETTERS } from '../lib/mixins'

// User Module Getters
const getters = {
  ...COLLECTION_GETTERS,
  ...MODEL_GETTERS,
  ...FILTER_GETTERS,
  filteredCollection: state => {
    // TASK - filter users by `tech` tags
    // https://github.com/rcos/observatory-client/issues/31
    return _.chain(state.collection)
    .filter(u => {
      return u.name.toLowerCase().indexOf(state.filter.toLowerCase()) !== -1
    })
    .orderBy(['name'], [state.orderBy])
    // .drop(state.start)
    // .take(state.pageSize)
    .value()
  }
}

export default getters
