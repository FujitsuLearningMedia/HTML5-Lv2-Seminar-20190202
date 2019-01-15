var db;
window.onload = function () {
    //ボタンのクリックイベントの登録
    document.querySelector("#saveBtn").addEventListener("click", save, false);
    document.querySelector("#keyPathBtn").addEventListener("click", searchByKeyPath, false);
    document.querySelector("#indexBtn").addEventListener("click", searchByIndex, false);

    //Employee Indexed Databaseとの接続を開く
    var request = indexedDB.open("Employees", 1);
    //Employee Indexed Databaseが存在しない場合や、バージョンが1より古い場合は、
    //upgradeneededイベントが発生する
    request.onupgradeneeded = function (e) {
        if (e.oldVersion < 1) {
            //初回アクセスのため、オブジェクトストアを新規作成するためにIndexed Databaseを取得する
            db = request.result;
            //Employeeオブジェクトストアを生成する。keyPathにはIDを指定する
            store = db.createObjectStore("Employee", { keyPath: "ID" });
            //Nameをkeyにしてインデックスを生成する
            store.createIndex("by_Name", "Name");
        }
    }
    request.onsuccess = function () {
        //接続したIndexed Databaseの取得
        db = request.result;
    }
}
function save() {
    //Employeeオブジェクトストアでトランザクションを開始する
    var tran = db.transaction("Employee", "readwrite");
    // Employeeオブジェクトストアを取得する
    var store = tran.objectStore("Employee");

    //テキストボックスの入力値を取得する
    var id = document.querySelector("#id").value;
    var name = document.querySelector("#name").value;
    var dept = document.querySelector("#dept").value;

    //従業員データの追加
    store.put({ ID: id, Name: name, Dept: dept });
}
function searchByKeyPath() {
    //Employeeオブジェクトストアでトランザクションを開始する
    var tran = db.transaction("Employee", "readwrite");
    // Employeeオブジェクトストアを取得する
    var store = tran.objectStore("Employee");

    //テキストボックスの入力値を取得する
    var id = document.querySelector("#search").value;
    //getメソッドの実行（引数idと一致するkeyをもつ値へのアクセス）		
    var request = store.get(id);
    request.onsuccess = function (e) {
        var tag = "";
        var tBody = document.querySelector("#dataTable");
        tBody.innerHTML = "";
        //結果を取得する
        var result = e.target.result;
        //結果が空でない場合にのみ、データを表示する
        if (result !== undefined) {
            //検索結果を取得する
            tag = "<tr><td>" + result.ID + "</td><td>" + result.ID +
						"," + result.Name + "," + result.Dept + "</td></tr>";
        }
        tBody.innerHTML = tag;
    }
}
function searchByIndex() {
    var tran = db.transaction("Employee", "readwrite");
    var store = tran.objectStore("Employee");

    //by_nameインデックスを取得する
    var index = store.index("by_Name");
    //テキストボックスの入力値を取得する
    var data = document.querySelector("#search").value;
    //インデックス列の値がsuzukiに一致するデータを取得する
    var request = index.openCursor(IDBKeyRange.only(data));

    var tBody = document.querySelector("#dataTable");
    tBody.innerHTML = "";
    request.onsuccess = function (e) {
        var tags = "";

        //IDBCursorオブジェクトを取得する
        var cursor = e.target.result;
        if (cursor) {
            tags = "<tr><td>" + cursor.value.ID + "</td><td>" +
							cursor.value.ID + "," + cursor.value.Name +
							"," + cursor.value.Dept + "</td></tr>";
            tBody.innerHTML += tags;
            cursor.continue(); //処理を繰り返す
        }
    }
}