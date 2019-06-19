
Vue.component('v-progress', {
    props: {
        /**
         * 用户可以自定义传递游标的值, 优先加载该值, 次要 是 value 值
         */
        valueText: {
            type: [Number, String]
        },
        /**
         * 计算游标的位置的值
         */
        value: {
            type: [Number, String],
            required: true
        },
        /**
         * 等级列表数组
         */
        levelList: {
            type: Array,
            required: true
        },
        /**
         * 该区间最小值
         */
        min: {
            type: [Number, String],
            default: 0
        },
        /**
         * 该区间最大值
         */
        max: {
            type: [Number, String],
            default: 0
        },
        /**
         * 需要计算的指标类型
         */
        type: {
            type: String,
            required: true
        },
    },
    data: function () {
        return {
            count: 0
        }
    },
    methods: {
        /**
         * 获取当前 value 所在区间的下标
         */
        getValueIndex() {

            let index = 0

            for (let i = 0; i < this.levelList.length; i++) {
                let item = this.levelList[i]

                if (this.value < item.max) {
                    index = i
                    break
                }
            }

            return index
        },
        /**
         * 设置游标位置
         */
        setVernierPosition() {

            // 此处计算进度条不是特别准确, 后面要把 百分比 换成 px(translate)
            if (this.value < this.min) {
                return
            }

            if (this.value > this.max) {
                return this.$refs.vernier.style.left = `98%`
            }

            let index = this.getValueIndex()
            let currentItem = this.levelList[index]
            // 公式: (单个进度条占比 x 当前的区间下标) + ((当前值 - 当前区间的最小值) / (当前区间的最大值 - 当前区间的最小值) * 单个进度条占比) * 100
            let position = (this.singleProgressPropor * index) * 100
            let sonPosition = ((+this.value - currentItem['min']) / (currentItem['max'] - currentItem['min']) * this.singleProgressPropor) * 100
            let sumPosition = position + sonPosition

            // 此处计算进度条不是特别准确, 后面要把 百分比 换成 px(translate)  -2就是为了准确
            this.$refs.vernier.style.left = `${sumPosition - 1}%`

            this.$emit('progress', currentItem, this.type)
        }
    },
    components: {},
    created() {
        console.log(this.levelList);
        this.singleProgressPropor = (1 / (this.levelList || []).length)
        this.progressWidth = this.singleProgressPropor * 100 + '%'

        setTimeout(() => {
            this.setVernierPosition()
        }, 20);
    },
    mounted() {},
    template: `<div class="ys-progress">
                    <!-- 此处 div 用于解决 :last-child 无法选中最后一个 bar -->
                    <div class="wrapper">
                        <div
                            v-for="item in levelList" 
                            :key="item.text"
                            :style="{ width: progressWidth, backgroundColor: item.color }"
                            class="ys-progress-bar">
                            <span class="ys-progress-text">{{ item.text }}</span>
                        </div> 
                    </div>
                    <div 
                        class="ys-progress-vernier"
                        ref="vernier">
                            <span>{{ valueText || value }}</span>
                    </div>
                </div>`
});