import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/swiper.min.css'

export default {
  data () {
    return {
      modules: [Autoplay, Pagination]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
