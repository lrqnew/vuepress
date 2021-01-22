---
title: 建立超链接
date: 
categories:
 - 前端
tags:
- 超链接
showSponsor: true
---
<Boxx/>
超链接非常重要 ——它们使互联网成为一个互联的网络。本文介绍了创建链接所需的语法，并且讨论了链接的最佳实现方法。

::: tip 目的
学习如何实现一个有效地把多个文件链接在一起的超文本链接。	
:::

## 什么是超链接
超链接是互联网提供的最令人兴奋的创新之一，它们从一开始就一直是互联网的一个特性，使互联网成为互联的网络。超链接使我们能够将我们的文档链接到任何其他文档（或其他资源），也可以链接到文档的指定部分，我们可以在一个简单的网址上提供应用程序（与必须先安装的本地应用程序或其他东西相比）。几乎任何网络内容都可以转换为链接，点击（或激活）超链接将使网络浏览器转到另一个网址（URL）。

::: warning 注意
URL可以指向HTML文件、文本文件、图像、文本文档、视频和音频文件以及可以在网络上保存的任何其他内容。 如果浏览器不知道如何显示或处理文件，它会询问您是否要打开文件（需要选择合适的本地应用来打开或处理文件）或下载文件（以后处理它）。
:::

以 百度 的主页为例，里面就包含了非常多的连结，各自连到不同新闻、网站的其它地方（导览功能），或者登入/注册页面等等。

![imgbed.cn图床](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-imgbed/3bd28d94-5d01-47a3-9e4e-dd28faffe172.jpg)

## 链接的解析
通过将文本（或其他内容，见块级链接)转换为<`a`>元素内的链接来创建基本链接， 给它一个href属性（也称为目标），它将包含您希望链接指向的网址。

``` html
<p>我创建了一个指向
<a href="https://www.mozilla.org/zh-CN/">Mozilla 主页</a>
的超链接。
</p>
```
结果如下所示：

我创建了一个指向 <a href="https://www.mozilla.org/zh-CN/">Mozilla 主页</a> 的超链接。

### 使用title属性添加支持信息

您可能要添加到您的链接的另一个属性是标题；这旨在包含关于链接的补充有用信息，例如页面包含什么样的信息或需要注意的事情。 例如：
``` html
<p>我创建了一个指向
<a href="https://www.mozilla.org/zh-CN/"
   title="了解 Mozilla 使命以及如何参与贡献的最佳站点。">Mozilla 主页</a>
的超链接。
</p>
```
结果如下（当鼠标指针悬停在链接上时，标题将作为提示信息出现）：
我创建了一个指向 <a href="https://www.mozilla.org/zh-CN/"  title="了解 Mozilla 使命以及如何参与贡献的最佳站点。">Mozilla 主页</a> 的超链接。

::: warning 注意
链接的标题仅当鼠标悬停在其上时才会显示，这意味着使用键盘来导航网页的人很难获取到标题信息。如果标题信息对于页面非常重要，你应该使用所有用户能都方便获取的方式来呈现，例如放在常规文本中。
:::
### 块级链接
如上所述，你可以将一些内容转换为链接，甚至是块级元素。例如你想要将一个图像转换为链接，你只需把图像元素放到<`a`><`/a`>标签中间。

``` html
<a href="https://www.mozilla.org/zh-CN/">
  <img src="mozilla-image.png" alt="链接至 Mozilla 主页的 Mozilla 标志">
</a>
```

## 统一资源定位符(URL)与路径(path)快速入门
要全面地了解链接目标，你需要了解统一资源定位符和文件路径。本小节将介绍相关的信息。

统一资源定位符（英文：Uniform Resource Locator，简写：URL）是一个定义了在网络上的位置的一个文本字符串。例如 Mozilla 的中文主页定位在 https://www.mozilla.org/zh-CN/.

URL使用路径查找文件。路径指定文件系统中您感兴趣的文件所在的位置。看一下一个简单的目录结构的例子
![imgbed.cn图床](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b1ebbd3c-ca49-405b-957b-effe60782276/b55d441d-134e-4980-b38b-e1c81ebcce3e.png)
此目录结构的根目录称为<code>creating-hyperlinks</code>。当在网站上工作时， 你会有一个包含整个网站的目录。在根目录，我们有一个<code>index.html</code>和一个<code>contacts.html</code>文件。在真实的网站上，<code>index.html</code> 将会成为我们的主页或登录页面。
我们的根目录还有两个目录—— <code>pdfs</code> 和<code>projects</code>，它们分别包含一个 PDF (<code>project-brief.pdf</code>) 文件和一个<code>index.html</code> 文件。请注意你可以有两个<code>index.html</code>文件，前提是他们在不同的目录下，许多网站就是如此。第二个<code>index.html</code>或许是项目相关信息的主登录界面。
- **指向当前目录：** 如果`index.html`（目录顶层的`index.html`）想要包含一个超链接指向`contacts.html`，你只需要指定想要链接的文件名，因为它与当前文件是在同一个目录的. 所以你应该使用的URL是`contacts.html`:
```html
<p>要联系某位工作人员，请访问我们的 <a href="contacts.html">联系人页面</a>。</p>
```

- **指向子目录：** 如果`index.html` （目录顶层`index.html`）想要包含一个超链接指向 `projects/index.html`，您需要先进入`projects/`项目目录，然后指明要链接到的文件`index.html`。 通过指定目录的名称，然后是正斜杠，然后是文件的名称。因此您要使用的URL是`projects/index.html`：
```html
<p>请访问 <a href="projects/index.html">项目页面</a>。</p>
```

- **指向上级目录：** 如果你想在`projects/index.html`中包含一个指向`pdfs/project-brief.pdf`的超链接，你必须先返回上级目录，然后再回到`pdf`目录。“返回上一个目录级”使用两个英文点号表示 — `..` — 所以你应该使用的URL是 `../pdfs/project-brief.pdf`：

```html
<p>点击打开 <a href="../pdfs/project-brief.pdf">项目简介</a>。</p>
```
:::  warning 注意
注意：如果需要的话，你可以将这些功能的多个例子和复杂的url结合起来。例如：`../../../complex/path/to/my/file.html`.
::: 

###  文档片段

超链接除了可以链接到文档外，也可以链接到HTML文档的特定部分（被称为文档片段）。要做到这一点，你必须首先给要链接到的元素分配一个`id`属性。例如，如果你想链接到一个特定的标题，可以这样做:

``` html
<h2 id="Mailing_address">邮寄地址</h2>
```
然后链接到那个特定的`id`，您可以在URL的结尾使用一个井号指向它，例如：
``` html
<p>要提供意见和建议，请将信件邮寄至 <a href="contacts.html#Mailing_address">我们的地址</a>。</p>
```
你甚至可以在同一份文档下，通过链接文档片段，来链接到同一份文档的另一部分：
```html
<p>本页面底部可以找到 <a href="#Mailing_address">公司邮寄地址</a>。</p>
```
### 绝对URL和相对URL
你可能会在网络上遇到两个术语，**绝对UR**L和**相对URL**（或者称为，**绝对链接**和**相对链接**）： 

**绝对URL：** 指向由其在Web上的绝对位置定义的位置，包括 `protocol（协议）` 和 `domain name（域名）`。像下面的例子，如果`index.html`页面上传到`projects`这一个目录。并且`projects`目录位于web服务站点的根目录，web站点的域名为`http://www.example.com`，那么这个页面就可以通过`http://www.example.com/projects/index.html`访问（或者通过`http://www.example.com/projects/`来访问，因为在没有指定特定的URL的情况下，大多数web服务会默认访问加载`index.html`这类页面）

不管绝对URL在哪里使用，它总是指向确定的相同位置。

**相对URL：** 指向与您链接的文件相关的位置，更像我们在前面一节中所看到的位置。例如，如果我们想从示例文件链接`http://www.example.com/projects/index.html`转到相同目录下的一个PDF文件，URL就是文件名URL——例如`project-brief.pdf`——没有其他的信息要求。如果PDF文件能够在`projects`的子目录`pdfs`中访问到，相对路径就是`pdfs/project-brief.pdf`（对应的绝对URL是`http://www.example.com/projects/pdfs/project-brief.pdf`）

一个相对URL将指向不同的位置，这取决于它所在的文件所在的位置——例如，如果我们把`index.html`文件从`projects`目录移动到Web站点的根目录（最高级别，而不是任何目录中），里面的`pdfs/project-brief.pdf`相对URL将会指向`http://www.example.com/pdfs/project-brief.pdf`，而不是`http://www.example.com/projects/pdfs/project-brief.pdf`

当然，`project-brief.pdf`文件和`pdfs`文件夹的位置不会因为您移动了`index.html`文件而突然发生变化——这将使您的链接指向错误的位置，因此如果单击它，它将无法工作。你得小心点!

## 链接最佳实践
下面是一些在编写链接元素时可以遵循的最佳实践。
## 使用清晰的链接措辞
把链接放在你的页面上很容易。这还不够。我们需要让所有的读者都可以使用链接，不管他们当前的环境和哪些工具。例如：

- 使用屏幕阅读器的用户喜欢从页面上的一个链接跳到另一个链接，并且脱离上下文来阅读链接。
- 搜索引擎使用链接文本来索引目标文件，所以在链接文本中包含关键词是一个很好的主意，以有效地描述与之相关的信息。
- 读者往往会浏览页面而不是阅读每一个字，他们的眼睛会被页面的特征所吸引，比如链接。他们会找到描述性的链接。
下面是一个具体的例子：
**好的链接文本:** <a href="https://firefox.com/">
  下载Firefox
</a>
```html
<p><a href="https://firefox.com/">
  下载Firefox
</a></p>
```
不好的链接文本:<a href="https://firefox.com/">
  点击这里
</a>
下载Firefox
```html
<p><a href="https://firefox.com/">
  点击这里
</a>
下载Firefox</p>
```
::: tip 提示
- 不要重复URL作为链接文本的一部分 ——URL看起来很丑，当屏幕朗读器一个字母一个字母的读出来的时候听起来就更丑了。
- 不要在链接文本中说“链接”或“链接到”——它只是噪音。屏幕阅读器告诉人们有一个链接。可视化用户也会知道有一个链接，因为链接通常是用不同的颜色设计-的，并且存在下划线（这个惯例一般不应该被打破，因为用户习惯了它。）
- 保持你的链接标签尽可能短——长链接尤其惹恼屏幕阅读器用户，他们必须听到整件事读出来。
:::

## 尽可能使用相对链接
从上面的描述中，您可能认为始终使用绝对链接是一个好主意；毕竟，当页面像相对链接那样移动时，它们不会中断。但是，当链接到同一网站的其他位置时，你应该使用相对链接（当链接到另一个网站时，你需要使用绝对链接）：
- 首先，检查代码要容易得多——相对URL通常比绝对URL短得多，这使得阅读代码更容易。
- 其次，在可能的情况下使用相对URL更有效。当使用绝对URL时，浏览器首先通过DNS（见万维网是如何工作的）查找服务器的真实位置，然后再转到该服务器并查找所请求的文件。另一方面，相对URL，浏览器只在同一服务器上查找被请求的文件。因此，如果你使用绝对URL而不是相对URL，你就会不断地让你的浏览器做额外的工作，这意味着它的效率会降低。
## 链接到非HTML资源 ——留下清晰的指示
当链接到一个需要下载的资源（如PDF或Word文档）或流媒体（如视频或音频）或有另一个潜在的意想不到的效果（打开一个弹出窗口，或加载Flash电影），你应该添加明确的措辞，以减少任何混乱。如下的例子会让人反感：
- 如果你是在低带宽连接，点击一个链接，然后就开始下载大文件。
- 如果你没有安装Flash播放器，点击一个链接，然后突然被带到一个需要Flash的页面。
让我们看看一些例子，看看在这里可以使用什么样的文本：
``` html
<p><a href="http://www.example.com/large-report.pdf">
  下载销售报告（PDF, 10MB）
</a></p>

<p><a href="http://www.example.com/video-stream/">
  观看视频（将在新标签页中播放, HD画质）
</a></p>

<p><a href="http://www.example.com/car-game">
  进入汽车游戏（需要Flash插件）
</a></p>
```
## 在下载链接时使用 download 属性
当您链接到要下载的资源而不是在浏览器中打开时，您可以使用 download 属性来提供一个默认的保存文件名（译注：此属性仅适用于同源URL）。下面是一个下载链接到Firefox 的 Windows最新版本的示例：
```html
<a href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=zh-CN"
   download="firefox-latest-64bit-installer.exe">
  下载最新的 Firefox 中文版 - Windows（64位）
</a>
```
## 主动学习：创建一个导航菜单
在这个练习中，我们希望你把一些页面和导航菜单链接起来，创建一个多页面的网站。这是创建网站的一种常见方式——每一页都使用相同的页面结构，包括相同的导航菜单，所以当链接被点击时，它给人的印象是你停留在同一个地方，不同的内容正在被提出来。

您需要将以下四页的本地副本放在同一目录中。
你应该:

在一个页面上的指定位置添加一个无序列表，其中包含要链接到的页面的名称。导航菜单通常只是一个链接列表，因此这在语义上是确定的。
将每个页面名称转换为该页的链接。
将导航菜单复制到每个页面。
在每一页上，只删除同一页的链接——一个页面包含自己的链接是令人困惑和毫无意义的，而缺少链接会对你当前的页面起到很好的视觉提示作用。
最终的例子应该是这样的：
![imgbed.cn图床](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b1ebbd3c-ca49-405b-957b-effe60782276/1a3f7c65-e43c-4d48-a66b-eb05af1d80d1.png)
## 电子邮件链接
当点击一个链接或按钮时，打开一个新的电子邮件发送信息而不是连接到一个资源或页面，这种情况是可能做到的。这样做是使用<`a`>元素和`mailto`：URL的方案。
其最基本和最常用的使用形式为一个`mailto`:link （链接），链接简单说明收件人的电子邮件地址。例如:
``` html
<a href="mailto:nowhere@mozilla.org">向 nowhere 发邮件</a>
```
这会创建一个链接，看起来像这样： <a href="mailto:nowhere@mozilla.org">向 nowhere 发邮件</a> 发邮件。
实际上，邮件地址甚至是可选的。如果你忘记了（也就是说，你的`href`仅仅只是简单的"`mailto:`"），一个新的发送电子邮件的窗口也会被用户的邮件客户端打开，只是没有收件人的地址信息，这通常在“分享”链接是很有用的，用户可以发送给他们选择的地址邮件

## 具体细节
除了电子邮件地址，您还可以提供其他信息。事实上，任何标准的邮件头字段可以被添加到你提供的邮件URL。 其中最常用的是主题(subject)、抄送(cc)和主体(body) (这不是一个真正的头字段，但允许您为新邮件指定一个短内容消息)。 每个字段及其值被指定为查询项。
下面是一个包含cc、bcc、主题和主体的示例：
```html
<a href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

:::  warning 注意
 每个字段的值必须是URL编码的。 也就是说，不能有非打印字符（不可见字符比如制表符、换行符、分页符）和空格 percent-escaped. 同时注意使用问号（`?`）来分隔主URL与参数值，以及使用`&`符来分隔`mailto:`中的各个参数。 这是标准的URL查询标记方法。
::: 
## 小结
这就是链接！当您开始查看样式时，您将在稍后的课程中返回链接。接下来是HTML，我们将返回文本语义，并查看一些更高级/不寻常的功能，您会发现有用的-高级文本格式是您的下一站。

