export const productProfile = {
  "repository": "subtitle-telop-multilingual-width-check",
  "title": "字幕・テロップ・多言語表示幅チェック",
  "domain": "WindowsApp",
  "hostApp": null,
  "rank": 26,
  "ideaNo": 13,
  "overview": "字幕、焼き込みテロップ、OCRテキスト、多言語翻訳、文字数、表示幅、改行、読み上げ速度を確認する。",
  "problem": "字幕やテロップは誤字、表示ズレ、翻訳後の幅崩れが書き出し後に見つかりやすい。",
  "differentiation": "翻訳候補と表示プレビューを同じタイムコード上で検品する。",
  "publish": "GitHub Release / BOOTH",
  "surface": "Windows-first CLI + local preview UI",
  "entity": "subtitle segment",
  "requiredFields": [
    "id",
    "title",
    "source",
    "timecode",
    "text",
    "maxWidth",
    "owner",
    "acceptance"
  ],
  "warningField": "readingSpeed",
  "benchmarkRepos": [
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/git-release-publish-assistant",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
