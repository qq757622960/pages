/** 
 * @Author: YISHI 
 * @Date: 2019-05-24 15:12:19 
 * @Desc: 进度条颜色 
 */

const table = {
    weight: '体重',
    bmi: 'BMI',
    bodyfatrate: '体脂率',
    baselmetabolicrate: '基础代谢率',
    vaim: '内脏脂肪指数',
    meatratebase: '肌肉率',
    boneweight: '骨重',
    watercontent: '水含量',
    proteinrate: '蛋白率',
}

const BLUE = '#3d86ff'
const GREEN = '#87d838'
const YELLOW = '#ebd137'
const ORANGE = '#ff8d26'
const RED = '#ff3e6e'
const D_RED = '#ac0100'


const progressTable = {
    // 基础代谢率
    baselmetabolicrate: {
        type: 'baselmetabolicrate',
        max: 7000,
        min: 0
    },
    // 体脂率
    bodyfatrate: {
        type: 'bodyfatrate',
        max: 100,
        min: 0,
        list: [{
            '30': [{
                color: BLUE,
                text: '偏低',
                min: 0,
                max: 16
            }, {
                color: GREEN,
                text: '标准',
                min: 16.1,
                max: 24
            }, {
                color: YELLOW,
                text: '偏高',
                min: 24.1,
                max: 30
            }, {
                color: ORANGE,
                text: '高',
                min: 30.1,
                max: 100
            }],
            '100': [{
                color: BLUE,
                text: '偏低',
                min: 0,
                max: 19
            }, {
                color: GREEN,
                text: '标准',
                min: 19.1,
                max: 27
            }, {
                color: YELLOW,
                text: '偏高',
                min: 27.1,
                max: 30
            }, {
                color: ORANGE,
                text: '高',
                min: 30.1,
                max: 100
            }],
        }, {
            '30': [{
                color: BLUE,
                text: '偏低',
                min: 0,
                max: 10
            }, {
                color: GREEN,
                text: '标准',
                min: 10.1,
                max: 21
            }, {
                color: YELLOW,
                text: '偏高',
                min: 21.1,
                max: 26
            }, {
                color: ORANGE,
                text: '高',
                min: 26.1,
                max: 100
            }],
            '100': [{
                color: BLUE,
                text: '偏低',
                min: 0,
                max: 11
            }, {
                color: GREEN,
                text: '标准',
                min: 11.1,
                max: 22
            }, {
                color: YELLOW,
                text: '偏高',
                min: 22.1,
                max: 27
            }, {
                color: ORANGE,
                text: '高',
                min: 27.1,
                max: 100
            }]
        }]
    },
    // 骨重
    boneweight: {
        type: 'boneweight',
        max: 100,
        min: 0,
        list: [{
            '45': [{
                color: BLUE,
                text: '偏低',
                min: 0,
                max: 1.7
            }, {
                color: GREEN,
                text: '标准',
                min: 1.71,
                max: 1.9
            }, {
                color: YELLOW,
                text: '偏高',
                min: 1.91,
                max: 100
            }],
            '60': [{
                color: BLUE,
                text: '偏低',
                min: 0,
                max: 2.1
            }, {
                color: GREEN,
                text: '标准',
                min: 2.11,
                max: 2.3
            }, {
                color: YELLOW,
                text: '偏高',
                min: 2.31,
                max: 100
            }],
            '100': [{
                color: BLUE,
                text: '偏低',
                min: 0,
                max: 2.4
            }, {
                color: GREEN,
                text: '标准',
                min: 2.41,
                max: 2.6
            }, {
                color: YELLOW,
                text: '偏高',
                min: 2.61,
                max: 100
            }],
        }, {
            '60': [{
                color: BLUE,
                text: '偏低',
                min: 0,
                max: 2.4
            }, {
                color: GREEN,
                text: '标准',
                min: 2.41,
                max: 2.6
            }, {
                color: YELLOW,
                text: '偏高',
                min: 2.61,
                max: 100
            }],
            '75': [{
                color: BLUE,
                text: '偏低',
                min: 0,
                max: 2.8
            }, {
                color: GREEN,
                text: '标准',
                min: 2.81,
                max: 3.0
            }, {
                color: YELLOW,
                text: '偏高',
                min: 3.01,
                max: 100
            }],
            '100': [{
                color: BLUE,
                text: '偏低',
                min: 0,
                max: 3.1
            }, {
                color: GREEN,
                text: '标准',
                min: 3.11,
                max: 3.3
            }, {
                color: YELLOW,
                text: '偏高',
                min: 3.31,
                max: 100
            }]
        }]
    },
    // 蛋白率
    proteinrate: {
        type: 'proteinrate',
        max: 100,
        min: 0,
        list: [[
            {
                color: BLUE,
                text: '偏低',
                min: 0,
                max: 14
            }, {
                color: GREEN,
                text: '标准',
                min: 14.1,
                max: 16.1
            }, {
                color: YELLOW,
                text: '偏高',
                min: 16.2,
                max: 100
            }
        ], [
            {
                color: BLUE,
                text: '偏低',
                min: 0,
                max: 16
            }, {
                color: GREEN,
                text: '标准',
                min: 16.1,
                max: 18.1
            }, {
                color: YELLOW,
                text: '偏高',
                min: 18.2,
                max: 100
            }
        ]]
    },
    // 水含量
    watercontent: {
        type: 'watercontent',
        max: 100,
        min: 0,
        list: [[
            {
                color: BLUE,
                text: '偏低',
                min: 0,
                max: 45
            }, {
                color: GREEN,
                text: '标准',
                min: 45.1,
                max: 60
            }, {
                color: YELLOW,
                text: '偏高',
                min: 60.1,
                max: 100
            }
        ], [
            {
                color: BLUE,
                text: '偏低',
                min: 0,
                max: 55
            }, {
                color: GREEN,
                text: '标准',
                min: 55.1,
                max: 65
            }, {
                color: YELLOW,
                text: '偏高',
                min: 65.1,
                max: 100
            }
        ]]
    },
    // 肌肉率
    meatratebase: {
        type: 'meatratebase',
        max: 100,
        min: 0,
        list: [[
            {
                color: BLUE,
                text: '偏低',
                min: 0,
                max: 30
            }, {
                color: GREEN,
                text: '标准',
                min: 30.1,
                max: 50
            }, {
                color: YELLOW,
                text: '偏高',
                min: 50.1,
                max: 100
            }
        ], [
            {
                color: BLUE,
                text: '偏低',
                min: 0,
                max: 40
            }, {
                color: GREEN,
                text: '标准',
                min: 40.1,
                max: 60
            }, {
                color: YELLOW,
                text: '偏高',
                min: 60.1,
                max: 100
            }
        ]]
    },
    // 内脏脂肪数
    vaim: {
        type: 'vaim',
        max: 100,
        min: 0,
        list: [{
            color: BLUE,
            text: '标准',
            min: 0,
            max: 9
        }, {
            color: GREEN,
            text: '偏高',
            min: 9.1,
            max: 14
        }, {
            color: YELLOW,
            text: '高',
            min: 14.1,
            max: 100
        }]
    },
    // 体重
    weight: {
        type: 'weight',
        max: 70,
        min: 0,
        list: [{
            color: BLUE,
            text: '偏瘦',
            min: 0,
            max: 18.5
        }, {
            color: GREEN,
            text: '正常',
            min: 18.5,
            max: 23.9
        }, {
            color: YELLOW,
            text: '超重',
            min: 24,
            max: 27.9
        }, {
            color: ORANGE,
            text: '一级肥胖',
            min: 28,
            max: 29.9
        }, {
            color: RED,
            text: '二级肥胖',
            min: 30,
            max: 40
        }, {
            color: D_RED,
            text: '三级肥胖',
            min: 40.1,
            max: 60
        }]
    },
    // 慢性病
    slow: {
        type: 'slow',
        max: 70,
        min: 0,
        list: [{
            color: BLUE,
            text: '高',
            min: 0,
            max: 18.5
        }, {
            color: GREEN,
            text: '平均水平',
            min: 18.6,
            max: 23.9
        }, {
            color: YELLOW,
            text: '增加',
            min: 24.0,
            max: 28
        }, {
            color: ORANGE,
            text: '中等',
            min: 28.1,
            max: 29.9
        }, {
            color: RED,
            text: '严重',
            min: 30,
            max: 39.9
        }, {
            color: D_RED,
            text: '极为严重',
            min: 40,
            max: 50
        }]
    },
    // BMI
    bmi: {
        type: 'bmi',
        max: 70,
        min: 0,
        list: [{
            color: BLUE,
            text: '偏瘦',
            min: 0,
            max: 18.5
        }, {
            color: GREEN,
            text: '正常',
            min: 18.5,
            max: 23.9
        }, {
            color: YELLOW,
            text: '超重',
            min: 24,
            max: 27.9
        }, {
            color: ORANGE,
            text: '一级肥胖',
            min: 28,
            max: 29.9
        }, {
            color: RED,
            text: '二级肥胖',
            min: 30,
            max: 40
        }, {
            color: D_RED,
            text: '三级肥胖',
            min: 40.1,
            max: 60
        }]
    }
}