﻿
function isDate(s) {
    var bits = s.split('-');
    var y = bits[0],
        m = bits[1],
        d = bits[2];
    // Assume not leap year by default (note zero index for Jan)
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // If evenly divisible by 4 and not evenly divisible by 100,
    // or is evenly divisible by 400, then a leap year
    if ((!(y % 4) && y % 100) || !(y % 400)) {
        daysInMonth[1] = 29;
    }
    return !(/\D/.test(String(d))) && d > 0 && d <= daysInMonth[--m]
}

function isNumber(val) {
    var reg = /^[0-9]*$/;
    return reg.test(val);
}

function isNumber_dot(val) {
    var reg = /^[0-9]+(\.[0-9]{1,10})?$/;   //允許小數點
    return reg.test(val);
}

function isCoordinate(Type, val) { //Type=TWD97X、TWD97Y、WGS84X、WGS84Y
    if (Type == "TWD97X") {
        var reg = /^\d{6}(\.\d{0,10})?$/;
    } else if (Type == "TWD97Y") {
        var reg = /^\d{7}(\.\d{0,10})?$/;
    } else if (Type == "WGS84X") {
        var reg = /^\d{3}(\.\d{0,10})?$/;
    } else if (Type == "WGS84Y") {
        var reg = /^\d{2}(\.\d{0,10})?$/;
    }
    return reg.test(val);
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function isCellPhone(phone) {
    var regex = /^[0][9][0-9]{8}$/;
    return regex.test(phone);
}







//onchange="replace_chk(this);" onkeyup="replace_chk(this);" 
function replace_number(obj) {
    obj.value = obj.value.replace(/[^\d]/g, "");
}

function replace_number_dot(obj) {
    obj.value = obj.value.replace(/\.{2,}/g, "."); //只保留第一個. 清除多餘的   
    obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");

}
function replace_number_dot_2(obj) {
    obj.value = obj.value.replace(/\.{2,}/g, "."); //只保留第一個. 清除多餘的   
    obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');//只能輸入兩個小數   
}
function replace_number_dot_3(obj) {
    obj.value = obj.value.replace(/\.{2,}/g, "."); //只保留第一個. 清除多餘的   
    obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d\d).*$/, '$1$2.$3');//只能輸入兩個小數   
}
function replace_number_dot_4(obj) {
    obj.value = obj.value.replace(/\.{2,}/g, "."); //只保留第一個. 清除多餘的   
    obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3');//只能輸入兩個小數   
}
function replace_number_dot_5(obj) {
    obj.value = obj.value.replace(/\.{2,}/g, "."); //只保留第一個. 清除多餘的   
    obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d\d\d\d).*$/, '$1$2.$3');//只能輸入兩個小數   
}



//function test_replace() {
//    obj = "12...546.1546";
//    obj = obj.replace(/^[0][9][0-9]{8}$/g, "."); 
//    console.log(obj)
//}