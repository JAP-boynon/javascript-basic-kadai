const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
//2秒（2000ミリ秒）の待つ時間を設定する
setTimeout(() => {
  text.textContent = 'ボタンをクリックしました';
}, 2000);
});