function calcTypeChanged() {
    if (document.all.selCalcType.value == "") {
        location = location.href; return;
    }
    location = document.all.selCalcType.value;
    document.all.selCalcType.value = "";
}

function getRadioCheckedValue(radioName) {
    var value;
    var temp = document.getElementsByName(radioName);
    for (var i = 0; i < temp.length; i++) {
        if (temp[i].checked) {
            value = temp[i].value;
        }
    }
    return value;
}

function elementDisplay(elementById, style) {
    document.getElementById(elementById).style.display = style;
}
//组合贷款专用
function loanYearsChangedBrif(selYearsID, txtMonthsID) {
    var years = getValueById(selYearsID);
    var months = years * 12;
    if (years == 0)
        setValueById(txtMonthsID, "");
    else
        setValueById(txtMonthsID, months);
}
function loanYearsChanged(loanType, selYearsID, txtMonthsID, txtYearRateID) {
    var years = getValueById(selYearsID);
    var months = years * 12;
    setValueById(txtMonthsID, months);
    if (years == 0) {
        setValueById(txtMonthsID, "");
        return;
    }

    if (loanType == "biz") {
        //商业贷款
        if (months <= 12) {
            setValueById(txtYearRateID, "4.35");
        }
        else if (months <= 60) {
            setValueById(txtYearRateID, "4.75");
        }
        else {
            setValueById(txtYearRateID, "4.90");
        }
    } else {
        //公积金贷款
        if (months <= 60) {
            setValueById(txtYearRateID, "2.75");
        }
        else {
            setValueById(txtYearRateID, "3.25");
        }
    }
}

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
//绘制饼图  
function drawCirclePie(canvasId, captical, interest) {
    var data_arr = [captical, interest];
    var color_arr = ["dodgerblue", 'RED'];
    var c = document.getElementById(canvasId);
    var ctx = c.getContext("2d");

    var radius = c.height / 2; //半径  
    var ox = radius, oy = radius; //圆心  

    var startAngle = 0; //起始弧度  
    var endAngle = 0;   //结束弧度  
    for (var i = 0; i < data_arr.length; i++) {
        //绘制饼图  
        endAngle = endAngle + data_arr[i] * Math.PI * 2; //结束弧度  
        ctx.fillStyle = color_arr[i];
        ctx.beginPath();
        ctx.moveTo(ox, oy); //移动到到圆心  
        ctx.arc(ox, oy, radius, startAngle, endAngle, false);
        ctx.closePath();
        ctx.fill();
        startAngle = endAngle; //设置起始弧度  
    }
}

function getValueById(elementId) {
    return document.getElementById(elementId).value;
}

function setValueById(elementId, value) {
    document.getElementById(elementId).value = value;
}

function FormatRate(rate) {
    rate = rate * 100;
    var str = rate.toFixed(4);
    str = (str.substring(str.length - 1) == '0') ? str.substring(0, str.length - 1) : str
    str = (str.substring(str.length - 1) == '0') ? str.substring(0, str.length - 1) : str
    str = (str.substring(str.length - 1) == '0') ? str.substring(0, str.length - 1) : str
    str = (str.substring(str.length - 1) == '0') ? str.substring(0, str.length - 1) : str
    str = (str.substring(str.length - 1) == '.') ? str.substring(0, str.length - 1) : str
    return str;
}
