

<!--

 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-11-30 15:08:59
 * @FilePath: /admin-website-vue2/src/views/blog/standard/gitStandard.md
-->
## 生成密钥

ssh-keygen -t rsa -C "you@mail.com"

#### 生成后会在用户目录下生成一个 .ssh 目录

- id_rsa      密钥
- id_rsa.pub  公钥

#### 配制个人信息

git config --global user.name "userName"
git config --global user.email "user@domain"

使用 git config --list 查看配制信息

## 分支
● develop 主干分支，用户开发
● feature  功能分支
● release  发布分支
● hofix     bug修复分支

## 开发流程
基于 develop 分支创建一个 feature 分支，用于项目功能开发, 尽可能将功能拆细，不用担心分支过多，当功能开发完毕时使用 merge request (mr) 来合并代码

## MR
所有代码都应经过 mr 才能合并到 develop 分支
每一次 mr 只包含一个功能
每一次 mr 的文件不能过多
每一次 mr 的描述尽可能详细

## 分支管理

master   不能人为维护，通过 mr 维护
develop  由负责人维护
feat/xxx 由开发者维护，新功能开发完后提 mr, 然后视情况可以删除
fix         对已有功能进行 bug 修复

Commit

| key  | 描述   |
| ---- | ------ |
| feat | 新功能 |
| fix     | 问题修复        |
| docs     | 文档修改        |
| format     | 修改代码格式，不影响业务逻辑        |
| clean     | 清理代码，比如删除测试，冗余代码        |
| refactor     | 重构现有代码        |
| perf     | 优化代码逻辑        |
| test     | 添加测试逻辑        |
| chore     | 修改工具相关        |
| deps​     | 依赖更新        |
	
```js
git commit -m "feat:描述"
git commit -m "fix:修复 xxx"

git commit -am "fix:修复 xxx"  用于提交跟踪过的文件
```