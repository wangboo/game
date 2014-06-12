var util = require('util')

module.exports = Attack

var Attack = function (opt) {
    this.atker = opt.atker;
    this.recver = opt.recver;
    this.types = []
    if(!opt.type) {
        this.types.add(Attack.PHYSIC)
    } else if( util.isArray(opt.type) ){
        for(var i=0;i<type.length;i++) {
            this.types.add(opt.type[i])
        }
    } else if(util.isString(opt.type)) {
        this.type.add(opt.type)
    } else {
        throw new Error('type不正确')
    }

}

var pro = Attack.prototype

/**
 * 增加一个攻击类型
 * @param type 攻击类型
 * @returns {*} Attack自身
 */
pro.addType = function(type) {
    if(type && !this.types.contains(type)) {
        this.types.add(type)
    }
    return this;
}

/**
 * 是否包含指定类型
 * @param type 攻击类型
 * @returns {boolean}
 */
pro.hasType = function(type) {
    return this.types.indexOf(type) > -1
}

Attack.PHYSIC = 'physic'
Attack.MAGIC = 'magic'
Attack.ATTR = 'attr'


