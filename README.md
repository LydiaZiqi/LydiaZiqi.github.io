# 如何使用项目

网站展示地址为：[https://lydiaziqi.github.io/](https://lydiaziqi.github.io/)

## 初始化项目

```shell
# 在终端中输入以下命令：
git clone https://github.com/LydiaZiqi/LydiaZiqi.github.io.git
# 克隆完毕后，进入 LydiaZiqi.github.io 文件夹中，然后输入以下命令：
npm install
```

## 一般的工作流程

```shell
# 代码编写与平时的流程一致
# 在终端中输入以下命令用于查看本地效果：
npm start
# 当效果满意时，输入以下命令发布网页：
npm run build # 生成静态文件
npm run deploy # 部署到 GitHub Pages
# 若需要同步源代码到 GitHub 仓库，输入以下命令：
git add .
git commit -m "这里写你的提交信息"
git push
```
