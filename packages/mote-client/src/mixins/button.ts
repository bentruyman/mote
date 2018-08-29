export default {
  computed: {
    typeClass () {
      return `type-${this.type}`;
    }
  },
  props: {
    active: {
      default: false,
      type: Boolean
    },
    type: {
      default: '',
      type: String
    }
  }
};
