



### 环境要求

* Jekyll 支持: Mac 、Windows、ubuntu 、Linux 操作系统                     
* Jekyll 需要依赖: Ruby、bundler

### 使用手册






#### 安装Jekyll

[Jekyll中文官方文档](http://jekyll.bootcss.com/) ， 如果你已经安装过了 Jekyll，可以忽略此处。

> $ gem install jekyll

#### 获取博客模板

> $ git clone https://github.com/leopardpan/leopardpan.github.io.git

或者直接[下载博客](https://github.com/leopardpan/leopardpan.github.io/archive/master.zip)   

进leopardpan.github.io/ 目录下， 开启本地服务 

> $ jekyll server

在浏览器输入 [127.0.0.1:4000](127.0.0.1:4000) ， 就可以看到博客效果了。


### 提示

>* 如果你想使用我的模板，请把 _posts/ 目录下的文章都去掉。
>* 修改 _config.yml 文件里面的内容为你自己的个人信息。

如果在部署博客的时候发现问题，可以直接在[Issues](https://github.com/leopardpan/leopardpan.github.io/issues)里面提问。        


### 把这个博客变成你自己的博客

根据上面【提示】修改过后，在你的github里创建一个username.github.io的仓库，username指的值你的github的用户名。      
创建完成后，把我的这个模板使用git push到你的username.github.io仓库下就行了。
搭建博客如果遇到问题可以看看我教程[Jekyll搭建个人博客](http://leopardpan.cn/2016/10/jekyll_tutorials1/)。




### 效果预览

#### 头像效果

![](http://ttttstc.github.io/images/readme/icon.gif)

如果你只想要我博客里的头像效果，你只需要拿 ttttstc.github.io/_includes/side-panel.html 文件里面 `头像效果` 和 ttttstc.github.io/css/main.css 里面最后面 `头像效果` 部分就行了。


***

#### 博客首页   

![](http://ttttstc.github.io//images/readme/img4.png)   

***  


#### 文章详情   

![](http://ttttstc.github.io/images/readme/img1.png)


#### 文章支持标签分类 

![](http://ttttstc.github.io/images/readme/img2.png)

#### 手机端效果

<img width="300" src="http://leopardpan.github.io/images/readme/img5.png" alt="wechat">

#### 感谢   

本博客在[Vno Jekyll](https://github.com/onevcat/vno-jekyll)基础上修改的。  
