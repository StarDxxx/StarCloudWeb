---
sidebar_position: 1
---

## M文件
### 函数文件
下面是matlab定义函数的一个例子:编写函数文件 `stat.m` 求向量x的均值和方差
```matlab
function [mean, stdev]=stat(x)                       %函数定义行
%求向量的平均值和标准差H1行
%函数帮助文本
%输入参数：x 要求均值和方差的向量
%输出参数：mean  向量的均值
% stddev 向量的标准差
%求向量的长度
nL = length(x);
%求取变量中所有元素的和
s1 = sum(x);
%求取变量中所有元素平方和
s2 = sum(x.^2);
%求取均值
mean1 = s1/nL;
%求取标准差
stdev=sqrt(s2/nL-mean.^2);                     %函数体
```
:::danger
请一定要注意，写好函数文件之后，保存的时候，文件名一定要和 **函数的名字** 相同  
并且当我们调用的时候，应当在同一目录下  
:::

以下是一个调用函数的小例子
```matlab
% 产生随机变量
% 调用函数求均值和方差
[mean stdev] = stat(x)
disp(mean)
disp(stdev)
```

## 程序控制输出
### 数据的输出
我们在输出数据的时候，有disp()和fprintf()两个函数  
下面展示两种方法的输出方法  
```matlab
%复数
x=2*(1-2*i)^3;
%连接成字符串
str=['disp: x = ' num2str(x)];
%显示字符串
disp(str);
fprintf('fprintf: x = %8.4f\n',x);
```
### 选择结构
1. 条件语句 if else end
2. 情况切换语句 switch
3. 循环结构 for 和 while
