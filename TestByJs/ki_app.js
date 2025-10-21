const kiInput = document.getElementById('ki-input');
const searchButton = document.getElementById('search-button');


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
    }
}

// 「検索」ボタンにイベントリスナーを設定
searchButton.addEventListener('click', handleSearchClick);
