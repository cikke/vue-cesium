<script>
import { show, distanceDisplayCondition, width, material } from '../../../mixins/mixinProps'
import mixinGraphic from '../../../mixins/graphics/mixinGraphic'
export default {
  name: 'vc-graphics-path',
  mixins: [show, distanceDisplayCondition, width, material, mixinGraphic],
  props: {
    leadTime: [Number, Object, Function],
    trailTime: [Number, Object, Function],
    resolution: {
      type: [Number, Object, Function],
      default: 60
    }
  }
}
</script>
