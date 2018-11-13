
>**声明**： 这份文档派生(fork)于[繁体中文版]()，在此基础上进行了繁体转简体工作，并进行了适当的润色。此文档用 Markdown 语法编写，你可以到这里查看它的[源文件]()。「繁体中文版的原始文件可以查看这里」--By @riku / 本项目托管于 GitCafe
注： 本项目同时也托管于 Github上，请通过 fork＋pull request 方式来帮忙改进本项目
------------------------------------
>Markdown: Basics （快速入门） / [(点击查看完整语法说明)]()
-------------------------
>**Getting the Gist of Markdown's Formatting Syntax**
此页提供了 Markdown 的简单概念， [语法说明]() 页提供了完整详细的文档，说明了每项功能。但是 Markdown 其实很简单就可以上手，此页文档提供了一些范例，并且每个范例都会提供输出的 HTML 结果。
其实直接试试看也是一个很不错的方法， [Dingus]() 是一个网页应用程序，你可以把自已编写的 Markdown 文档转成 XHTML。
-------------------------------
>**段落、标题、区块代码**
一个段落是由一个以上的连接的行句组成，而一个以上的空行则会划分出不同的段落（空行的定义是显示上看起来像是空行，就被视为空行，例如有一行只有空白和 tab，那该行也会被视为空行），一般的段落不需要用空白或换行缩进。
Markdown 支持两种标题的语法，Setext 和 atx 形式。Setext 形式是用底线的形式，利用 = （最高阶标题）和 - （第二阶标题），Atx 形式在行首插入 1 到 6 个 # ，对应到标题 1 到 6 阶。
区块引用则使用 email 形式的 '>' 角括号。
Markdown 语法:
---------------------------
`````
A First Level Header
====================
A Second Level Header
---------------------

Now is the time for all good men to come to
the aid of their country. This is just a
regular paragraph.

The quick brown fox jumped over the lazy
dog's back.
### Header 3

> This is a blockquote.
> 
> This is the second paragraph in the blockquote.
>
> ## This is an H2 in a blockquote
```````




```
@requires_authorization
class SomeClass:
    pass

if __name__ == '__main__':
    # A comment
    print 'hello world'

```