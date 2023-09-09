# github-repo

これはGithubでMaven repoを運営しようというプロジェクトです。
apiから情報を取得して404.htmlで結果を表示します。

mavenのrepositroyを定義してからdependencyを追加していきます。

```
<repositories>
  <repository>
    <id>github-repo</id>
    <name>github repository</name>
    <url>https://raw.github.com/suzumiya-3/github-repo/main</url>
  </repository>
</repositories>
```

```
<dependency>
  <groupId>com.ao-net</groupId>
  <artifactId>Lens</artifactId>
  <version>1.0.0</version>
</dependency>
```

うっちぃ氏のmvn-repoを参考にして作りました。
この場で謝辞を申し上げます。
