じゃんけんで遊べます。

# 開発

## 命名規則

- `.vue` ファイル名の先頭は大文字 例: SampleName.vue
- 変数名は単語を繋げる場合は、大文字 例: const sampleName = 0;

## ディレクトリの構成

- ページの `.vue` ファイルは src/views に配置
- 画面の部品は src/components に配置

## src/scripts に配置するものは？

- ここには全体で使う ts のコードを配置する
- 例えば じゃんけんのロジックは配置しない。(それはsrc/views/Game に配置するべき)
- 具体的には、型定義とかbackendへのリクエストするコードとかを配置する

## Git & Github

Git: 手元でコードを管理するもの
Github: 複数人でコードを管理/共有するやつ

### git コマンド

#### `git add` 

任意のファイルをステージングするコマンド。
ステージング: ステージングされたファイルは `git commit` コマンドでコミットされる。

```shell
git add <追加したいファイル>
```

#### `git commit`

ステージングされたものをcommitするコマンド。一緒にコメントも残そう。
コメントはわかりやすいように書く。例) "じゃんけんのロジックを追加"

```shell
git commit -m"<わかりやすいコメントを書く>"
```

#### `git push origin <ブランチ>`

`git add` & `git commit`した後でも、ローカルでしかなく、複数人での共有はできない。
<ブランチ> はpushしたいブランチ

例えば `dev` ブランチにpushするなら↓

```shell
git push origin dev
```