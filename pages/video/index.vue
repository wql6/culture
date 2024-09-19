<template>

  <div class="content">
    <h2>Markdown 转 HTML 在线转换器简介</h2>
    <p>Markdown 转 HTML 在线转换器, 是在线实时 Markdown 转 HTML 的在线免费工具，旨在将Markdown（超文本标记语言）内容转换为HTML格式并且实时查看预览效果。HTML是用于创建和设计网页的标准语言，具有多种标签来格式化文本、创建链接、插入图像等。而Markdown是一种轻量级标记语言，使用纯文本格式化语法，旨在易于阅读且易于转换为HTML，但更易于编写和阅读。</p>
    <h2>如何使用 Markdown 转 HTML 工具？</h2>
    <ol>
      <li>先复制好你的 Markdown 文本到剪切板</li>
      <li>粘贴到Markdown转HTML工具左边编辑区</li>
      <li>右边区域就会马上展示解析成功的 HTML 页面，您可以复制或者下载 HTML 源码</li>
    </ol>

  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const content = await $content('./content/articles/example.md').fetch();
    return { content };
  }
};
</script>

<style>
.content{
  width: 1220px;
  margin: 0 auto;
}
</style>