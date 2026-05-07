# subtitle-telop-multilingual-width-check

字幕・テロップ・多言語表示幅チェック は、字幕、焼き込みテロップ、OCRテキスト、多言語翻訳、文字数、表示幅、改行、読み上げ速度を確認する。

## 何を解決するか

字幕やテロップは誤字、表示ズレ、翻訳後の幅崩れが書き出し後に見つかりやすい。

## 差別化

翻訳候補と表示プレビューを同じタイムコード上で検品する。

## 公開先

- GitHub Release / BOOTH

## 現在の到達点

- core / validators / report / review-model / CLI に責務を分割済み
- Windows-first CLI + local preview UI の最小実装または配布用骨格を同梱済み
- 代表シナリオ `samples/representative-suite.json` で正常系、必須項目不足、warning、混在バッチを自動検証済み
- 厳格 QCDS は Quality、Cost、Delivery、Satisfaction の全観点 S+ で評価済み
- docs ZIP は `dist/subtitle-telop-multilingual-width-check-docs.zip`

## 主要コマンド

```powershell
npm test
npm start
```

## 重要ドキュメント

- [要件定義](docs/requirements.md)
- [仕様](docs/specification.md)
- [設計](docs/design.md)
- [手動テスト](docs/manual-test.md)
- [厳格手動テスト追補](docs/strict-manual-test-addendum.md)
- [QCDS評価](docs/qcds-evaluation.md)
- [厳格QCDS metrics](docs/qcds-strict-metrics.json)
- [トレーサビリティ](docs/traceability-matrix.md)

## 参照したアイデアパック

- created_idea: `D:\AI\WindowsApp\created_idea_013_subtitle-telop-multilingual-width-check`
- idea ZIP: `D:\AI\WindowsApp\created_idea_013_subtitle-telop-multilingual-width-check\idea_013_subtitle-telop-multilingual-width-check.zip`
- PICKUP rank: 26
- Domain: WindowsApp
