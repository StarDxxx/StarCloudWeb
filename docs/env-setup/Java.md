---
sidebar_position: 2
---

> 在本次实验中，我们将会一步一步安装Java的开发环境，我们安装的版本是:  
JDK 1.8  
开发工具 IDEA  

无论安装的是那个版本，大概的步骤都是如下几步（若安装其他版本，则只需要选择对应版本下载即可）
1. 下载JDK
2. 安装JDK
3. 配置环境变量
4. 测试
5. 卸载

## 下载JDK

Java已经被Oracle收购，进入Oracle官网下载。

[官网地址](https://www.oracle.com/cn/index.html)

### 从我准备的网盘下载
https://pan.baidu.com/s/1Kqg-O0r7H7KpXAXT3xvXww  
密码:dqh4


### 从官网下载
![image](./images/java1.png) 
![image](./images/java2.png) 
![image](./images/java3.png) 
![image](./images/java4.png) 
![image](./images/java5.png) 


## 安装JDK

JDK的安装是无脑安装，就是一路下一步下一步。。直到完成。默认安装在C盘下的Program Files目录下，傻瓜式下一步下一步直到完成即可。但是如果想更改安装目录，那么请你小心按照以下操作进行安装。



:::danger
采坑：在jdk的安装过程中，包含了jre的安装，如果不想装在默认目录下，那么在安装jre的时候，要注意安装路径，不要覆盖刚刚安装好的jdk。
:::

1. 找到下载后的jdk的安装包，双击进行安装
![image](./images/java6.png) 

2. 首先安装jdk。在安装过程中，默认会安装到C盘的Program Files目录下，如果想改变安装目录，可以点击更改按钮。当然，你也可以安装到默认目录下。
![image](./images/java7.png) 

3. 直接手动的修改安装目录，将C盘改为你要安装的盘符即可。
![image](./images/java8.png) 

4. 修改好jdk的安装路径后，点击下一步。
![image](./images/javadd.png) 

5. 一路下一步就安装好了jdk，然后就到了jre的安装。如果不想安装到默认的C盘，点击更改按钮。一般建议将jre和jdk安装到一个目录下。
![image](./images/java9.png) 

6. 此处会弹出浏览框，我们点击D盘后，再点击Java。jre的安装需要我们自己手动创建一个安装的文件夹。
![image](./images/java10.png) 

7. 安装jre的文件夹名，我们手动输入：jre后面跟着版本号。jre1.8.0_77。
![image](./images/java11.png) 

8. 点击确定后，就可以继续安装了。
![image](./images/java12.png) 

9. 到此jdk和jre安装完成。
![image](./images/java13.png) 

10. 然后查看一下安装目录，打开D盘，Program Files目录，多了一个Java文件夹，点进去后有两个文件夹，一个是jdk的安装目录，一个是jre的安装目录。
![image](./images/java14.png) 

> 很多新同学在安装的时候，不注意安装目录，在安装jre的时候，会不小心覆盖掉刚刚安装好的jdk。所以一定要注意。

11. 打开jdk文件夹
![image](./images/java15.png) 


:::tip
- bin目录：JDK开发工具的可执行文件。javac.exe和java.exe等命令就在此目录下。
- db：包含Java DB，Java DB是一个机遇Java编程语言的SQL关系数据库管理系统。
- include：包含C语言头文件，支持Java本地接口与Java虚拟机调试程序接口的本地编程技术。
- jre：Java运行时环境的根目录，包含Java虚拟机，运行时的类包和Java应用启动器。但不包含开发环境中的开发工具。
- lib目录：开发工具使用的归档包文件。
- src.zip：Java源码压缩包
:::



## 配置环境变量

此电脑上右键选择属性，然后点击高级系统设置，就会打开系统属性窗口。

然后点击高级，点击下面的环境变量，就会打开环境变量的设置窗口。

![image](./images/java16.png) 

1. 在系统变量里，点击新建，配置JAVA_HOME变量。变量值就是刚刚jdk的安装路径。

![image](./images/java17.png) 

2. 配置CLASSPATH路径：

![image](./images/java18.png) 

3. 修改path路径：

在我们的windows系统中，path变量是内置好的，我们需要将jdk下的bin目录配置到path里。所以此处选择编辑：


![image](./images/java19.png) 

然后两次新建，将jdk下的bin目录和jdk下jre里的bin目录配置进去。

![image](./images/java20.png) 

> 我的电脑 --> 页面空白处，鼠标右键 --> 属性 --> 左侧边栏 高级系统设置 --> 环境变量  
`新建`：  
变量名:JAVA_HOME  
变量值:D:\Program Files\Java\jdk1.8.0_77  
就是jdk的安装目录  
`新建`:  
变量名:CLASSPATH  
变量值:.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar  
`修改`:  
变量名:path  
添加内容:%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;  

![image](./images/java21.png) 

![image](./images/java22.png) 

![image](./images/java23.png) 

4. 配置后一定要点击确定，这些配置才会生效

![image](./images/java24.png) 


:::danger
踩坑1：配置环境变量后，要点击确认按钮，配置才会生效。

踩坑2：配置环境变量后，要重启dos黑窗口，命令才可以使用
:::


## 测试是否安装成功

打开终端：

方法一：开始|Windows系统|命令提示符

方法二：搜索框里直接搜索：命令提示符或者cmd

方法三：快捷键：win+R键，然后输入cmd

注意：如果你在配置环境变量前已经打开了dos窗口，那么配置环境变量后，需要重新打开dos窗口。

测试：

![image](./images/java25.png) 


## 卸载

如果安装错了路径，或者想换个安装路径，那么你要选择卸载jdk，然后重新安装。切记不要直接剪切安装包。

如果你有360或者腾讯管家等软件可以操作他们来卸载jdk。否则可以按照以下操作卸载：

1. 打开控制面板，点击应用程序，选择卸载：

![image](./images/java26.png) 

2. 点击Java8 Update，选择卸载，然后下面的Java SE Development Kit 8 Update也要卸载。

![image](./images/java27.png) 

3. 然后查看以下刚刚的安装目录，正常情况下，该目录会随着卸载jdk而删除，但是如果没有删除，你可以手动删除它，然后再重新安装jdk。

![image](./images/java28.png) 

