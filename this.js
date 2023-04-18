// this 代名詞
// 1 .誰呼叫誰就是this

const hero = {
  hi : function(){
    console.log(this);
  }
}

hero.hi()