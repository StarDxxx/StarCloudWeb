---
sidebar_position: 1
description: Python环境配置，anaconda下载安装，pycharm破解版下载，激活码
authors: [starcloud]
tags: [Python, 环境配置]
keywords: [Python, pycharm破解, Python3.8, Python3.7, anaconda, 下载, 最新, 激活码, 2022]
---

> 对于python开发，我建议直接安装Anaconda，而不是按照网上的安装python3.7或者2.7什么的
> 1. python的开发中，我们需要很多的开发环境不断切换，我们最好的是建立好几个单独的环境
> 2. Anaconda可以快速部署一个开发环境，只需要 **三分钟** 就可以，而且可以根据需求切换
> 3. 使用Anaconda搭建好当前项目的开发环境之后，我们可以选择 `Pycharm` `Jupyter` `VScode` `spyder`等等作为我们的IDE


## 安装Anaconda

### 下载Anaconda 
我们不在官网下载，速度太慢，前往[清华镜像站](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/?C=M&O=D)下载 
![Anaconda 清华镜像站下载](./images/s1.png)

### 配置Anaconda
![Anaconda安装步骤1](./images/s2.jpg) 
![Anaconda安装步骤2](./images/s3.jpg) 
![Anaconda安装步骤3](./images/s4.jpg) 
![Anaconda安装步骤4](./images/s5.jpg) 
![Anaconda安装步骤5](./images/s6.png) 
![Anaconda安装步骤6](./images/s7.jpg) 
![Anaconda安装步骤7](./images/s8.jpg)

### 配置环境变量

> E:\Anaconda（Python需要）  
> E:\Anaconda\Scripts（conda自带脚本）  
> E:\Anaconda\Library\mingw-w64\bin（使用C with python的时候）   
> E:\Anaconda\Library\usr\bin  
> E:\Anaconda\Library\bin（jupyter notebook动态库）  

![python环境变量设置](./images/t1.png)

### 校验

打开cmd校验上一步是否成功配置完成
1. 输入python  
![python环境变量设置](./images/t2.png)
2. 输入conda  
![python环境变量设置](./images/t3.png)

### 为anaconda增加中国镜像（解决下载速度慢的问题）  
在 `Anaconda prompt` 中操作：  
> conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/  
> conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/  
> conda config --set show_channel_urls yes  

![anaconda启动](./images/u1.png)


### 恭喜，至此环境已经全部安装完成

## 选择合适自己的IDE  
1. 使用原生的anaconda + jupyter + Spyder
打开 anaconda，安装jupyter和spyder  
![anaconda jupyter notebook](./images/u2.png)  
点击launch登录  
![anaconda jupyter notebook](./images/u3.png)  
新建notebook  
![anaconda jupyter notebook](./images/v1.png)
开始编写代码  
![anaconda jupyter notebook](./images/v2.png)  



