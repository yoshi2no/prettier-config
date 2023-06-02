/** @type {import('prettier').Config} */
module.exports = {
  // 改行コードのスタイルを指定します。"lf"はUnix形式の改行を表します。
  endOfLine: "lf",
  // すべての文末にセミコロンを付けるかどうかを指定します。falseが指定されている場合、文末にセミコロンは付けられません。
  semi: false,
  // シングルクォート('')を使用するか、ダブルクォート("")を使用するかを指定します。falseが指定されている場合、ダブルクォートが使用されます。
  singleQuote: false,
  // インデントの幅を指定します。ここでは2スペースが指定されています。
  tabWidth: 2,
  // オブジェクトや配列の最後の要素後にカンマを付けるかどうかを指定します。"es5"はES5でサポートされる場所にカンマを付けることを示します。
  trailingComma: "es5",
  // インポートの順序を指定します。配列内のパターンに一致する順に並べられます。
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/env(.*)$",
    "^@/types/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^@/styles/(.*)$",
    "^@/app/(.*)$",
    "",
    "^[./]",
  ],
  // インポートのグループ間に空行を挿入するかどうかを指定します。falseが指定されている場合、空行は挿入されません。
  importOrderSeparation: false,
  // インポート文内の指定子をソートするかどうかを指定します。trueが指定されている場合、指定子はソートされます。
  importOrderSortSpecifiers: true,
  // 組み込みモジュールのインポートを他のインポートよりも上に配置するかどうかを指定します。trueが指定されている場合、組み込みモジュールのインポートは上に配置されます。
  importOrderBuiltinModulesToTop: true,
  // インポートの順序を解析するために使用するパーサプラグインを指定します
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  // 重複するインポートをマージするかどうかを指定します。trueが指定されている場合、重複するインポートはマージされます。
  importOrderMergeDuplicateImports: true,
  // TypeScriptで型と値のインポートを結合するかどうかを指定します。trueが指定されている場合、型と値のインポートは結合されます。
  importOrderCombineTypeAndValueImports: true,
  // Prettierに追加するプラグインを指定します。ここでは"@ianvs/prettier-plugin-sort-imports"が指定されています。
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
}

// ref: https://github.com/IanVS/prettier-plugin-sort-imports
