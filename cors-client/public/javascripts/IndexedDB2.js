var db;
var video;

window.onload = async function () {
    video = document.getElementById("video");

    //イベントの登録
    video.addEventListener("pause", writeVideoStatus, false);
    video.addEventListener("volumechange", writeVideoStatus, false);

    //VideoSetting Indexed Databaseとの接続を開く
    var request = indexedDB.open("VideoStatus", 1);
    //VideoSetting Indexed Databaseが存在しない場合や、バージョンが1より古い場合は、
    //upgradeneededイベントが発生する
    request.onupgradeneeded = function (e) {
        if (e.oldVersion < 1) {
            //初回アクセスのため、オブジェクトストアを新規作成するためにIndexed Databaseを取得する
            db = request.result;
            //VideoStatusオブジェクトストアを生成する。
            db.createObjectStore("VideoStatus", { keyPath: "type" });
        }
    }
    request.onsuccess = function (e) {
        //接続したIndexed Databaseの取得
        db = e.target.result;
        // VideoStatusオブジェクトストアでトランザクションを開始する
        var tran = db.transaction("VideoStatus", "readwrite");
        // VideoStatusオブジェクトストアを取得する
        var store = tran.objectStore("VideoStatus");
        // 再生位置の取得
        var request1 = store.get("currentTime");
        // ボリュームの取得
        var request2 = store.get("volume");
        request1.onsuccess = onsuccess;
        request2.onsuccess = onsuccess;

        function onsuccess(e) {
            //結果を取得する
            var result = e.target.result;
            //結果が空でない場合は、再生位置を設定する
            if (result.currentTime !== undefined) {
                video.currentTime = result.currentTime;
            }
            if (result.volume !== undefined) {
                video.volume = result.volume;
            }
        }
    }

    try {
        //再生
        await video.play();
    } catch (error) {
        console.log(error)
    }

}

function writeVideoStatus(event) {
    //VideoStatusオブジェクトストアでトランザクションを開始する
    var tran = db.transaction("VideoStatus", "readwrite");
    // VideoStatusオブジェクトストアを取得する
    var store = tran.objectStore("VideoStatus");

    if (event.type === "pause") {
        //再生位置の書き込み
        store.put({ type: "currentTime", currentTime: video.currentTime });
    } else if (event.type === "volumechange") {
        //ボリュームの書き込み
        store.put({ type: "volume", volume: video.volume });
    }

}

