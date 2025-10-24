const kiInput = document.getElementById('ki-input');
const kiStartDt = document.getElementById("start_dt")
const kiEndDt = document.getElementById("end_dt")
const searchButton = document.getElementById('search-button');
const BASE_URL = 'http://127.0.0.1:8000';

// ボタンクリック時の関数
function handleSearchClick() {
    // 入力値を取得
    const kiNumberStr = kiInput.value.trim();

    // コンソール表示
    console.log("検索ボタンがクリックされたよ")
    console.log(kiNumberStr)

    // 値の確認
    if (kiNumberStr === "") {
        console.log(">> 注意: 値が入力されていません。");
    } else if (isNaN(parseInt(kiNumberStr))) {
        console.log(">> 注意: 数値を入力してください。");
    } 
    else {
        // 数値に変換できるか試します (次のステップで役立ちます)
        const kiNumber = parseInt(kiNumberStr, 10);
        console.log("入力された期番号 (数値):", kiNumber);
        // APIを叩く
        fetch(BASE_URL+ '/ki/' + kiNumber)
            // レスポンスを取得しJSONを抽出
            .then(response => {
                if (!response.ok) {
                    // レスホンスがokじゃない場合はエラーを投げる
                    throw new Error("データを取得できませんでした (ステータス: ${response.status})")
                }
                return response.json()
            })
            .then(data => {
                console.log(data)
                // 取得したデータを出力
                kiStartDt.textContent = "開始日：" + data.start_date
                kiEndDt.textContent = "終了日：" + data.end_date
            })
            .catch(error => {
                console.error("API処理中にエラーが発生しました：", error.message);
                kiStartDt.textContent = "エラーが発生しました: データなし";
                kiEndDt.textContent = "";
            })
    }
}

// 「検索」ボタンにイベントリスナーを設定
searchButton.addEventListener('click', handleSearchClick);
