window.onload = function () {
    //ボタンのクリックイベント登録
    document.querySelector('#primitive').addEventListener('click', showDataType, false);
    document.querySelector('#object').addEventListener('click', showDataType, false);
    document.querySelector('#double').addEventListener('click', showEquality, false);
    document.querySelector('#triple').addEventListener('click', showEquality, false);
    document.querySelector('#execute').addEventListener('click', showResult, false);
    document.querySelector('#propety').addEventListener('click', showProperties, false);
}

function showDataType (event) {
    var result = document.getElementById('result1');
    var id = event.target.id;
    var str1 = 'FLM';
    var str2 = new String('LPI');
    if (id == 'primitive') {
        result.innerHTML = typeof str1;
    }
    else if (id == 'object') {
        result.innerHTML = typeof str2;
    }
}

function showEquality (event) {
    var result = document.getElementById('result2');
    var id = event.target.id;
    var num1 = 10;
    var num2 = '10';
    if (id == 'double') {
        result.innerHTML = (num1 == num2);
    }
    else if (id == 'triple') {
        result.innerHTML = (num1 === num2);
    }
}

function showResult () {
    var result = document.getElementById('result3');
    var val = 'A';
    var tag;

    function print(){
        console.log(val);
        var val = 'B';
        return val;
    }
    
    console.log(print());
    console.log(val);

}

function showProperties () {
    var result = document.getElementById('result4');
    result.innerHTML = '';
    
    function Employee() {
        this.name = "foge";
        this.dept = "Development";
        this.work = function() {
            console.log("do test");
        }
    }
    Employee.prototype.manage = function() {
        console.log("manage");
    }
    var e = new Employee();

    Object.getOwnPropertyNames(e).forEach(
        function (val, idx, array) {
            var tag = document.createElement('tr');
            tag.innerHTML = '<td>' + val + '</td><td>' + e[val] + '</td>';
            result.appendChild(tag);
        }
    );
}