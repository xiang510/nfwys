import store from '../stores'
/* 
    本地数据操作封装
*/
const addData = function(key, val) {
    var strVal = JSON.stringify(val);
    sessionStorage.setItem(key, strVal);
  };
  
const getData = function(key) {
    var jsonData = sessionStorage.getItem(key);
  
    if (jsonData) {
      return JSON.parse(jsonData);
    } else {
      return undefined;
    }
};

const removeData = function(key) {
    sessionStorage.removeItem(key);
};

const isBankInfoCheck = function(bankno) {
  //Description:  银行卡号Luhm校验
  //Luhm校验规则：16位银行卡号（19位通用）:
  //1.将未带校验位的 15（或18）位卡号从右依次编号 1 到 15（18），位于奇数位号上的数字乘以 2。
  //2.将奇位乘积的个十位全部相加，再加上所有偶数位上的数字。
  //3.将加法和加上校验位能被 10 整除。
  //方法步骤很清晰，易理解，需要在页面引用Jquery.js
  //bankno为银行卡号 banknoInfo为显示提示信息的DIV或其他控件
  var lastNum = bankno.substr(bankno.length - 1, 1); //取出最后一位（与luhm进行比较）
  var first15Num = bankno.substr(0, bankno.length - 1); //前15或18位
  var newArr = new Array();
  for (var i = first15Num.length - 1; i > -1; i--) {
    //前15或18位倒序存进数组
    newArr.push(first15Num.substr(i, 1));
  }
  var arrJiShu = new Array(); //奇数位*2的积 <9
  var arrJiShu2 = new Array(); //奇数位*2的积 >9
  var arrOuShu = new Array(); //偶数位数组
  for (var j = 0; j < newArr.length; j++) {
    if ((j + 1) % 2 == 1) {
      //奇数位
      if (parseInt(newArr[j]) * 2 < 9) arrJiShu.push(parseInt(newArr[j]) * 2);
      else arrJiShu2.push(parseInt(newArr[j]) * 2);
    } //偶数位
    else arrOuShu.push(newArr[j]);
  }

  var jishu_child1 = new Array(); //奇数位*2 >9 的分割之后的数组个位数
  var jishu_child2 = new Array(); //奇数位*2 >9 的分割之后的数组十位数
  for (var h = 0; h < arrJiShu2.length; h++) {
    jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
    jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
  }

  var sumJiShu = 0; //奇数位*2 < 9 的数组之和
  var sumOuShu = 0; //偶数位数组之和
  var sumJiShuChild1 = 0; //奇数位*2 >9 的分割之后的数组个位数之和
  var sumJiShuChild2 = 0; //奇数位*2 >9 的分割之后的数组十位数之和
  var sumTotal = 0;
  for (var m = 0; m < arrJiShu.length; m++) {
    sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
  }

  for (var n = 0; n < arrOuShu.length; n++) {
    sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
  }

  for (var p = 0; p < jishu_child1.length; p++) {
    sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
    sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
  }
  //计算总和
  sumTotal =
    parseInt(sumJiShu) +
    parseInt(sumOuShu) +
    parseInt(sumJiShuChild1) +
    parseInt(sumJiShuChild2);

  //计算Luhm值
  var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
  var luhm = 10 - k;
  if (lastNum == luhm) {
    return true;
  } else {
    return false;
  }
};

const getStoreState = function() {
    let state = store.getState();
    return state;
}

const manualDispatch =   function(type, payload) {
  store.dispatch({
    type,
    payload,
  })
  
  return state;
}
export default {
    addData,
    getData,
    removeData,
    isBankInfoCheck,
    getStoreState,
    manualDispatch
}