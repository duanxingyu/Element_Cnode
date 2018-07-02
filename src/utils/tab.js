export default {
    //普通帖
    getTab(str) {
        let result = ''

        if(str === 'ask') {
            result = '问答'
        } else if(str === 'share') {
            result = '分享'
        }
    
        return result
    },
    //精华帖
    getGood(good){
      let res=''
       if(good === true) {
            res = '精华'
        }
       return res
    },
    //置顶帖
    getTop(top){
        let rs=''
        
        if(top=== true){
            rs='置顶'
        }
        return rs
    }

}