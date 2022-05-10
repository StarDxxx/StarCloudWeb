---
slug: RaspberryPi
title: 人脸识别
authors: [starcloud]
tags: [Raspberry Pi, 人脸识别]
---




## 项目介绍

本项目基于OpenCV使用Haar级联分类器实现人脸检测，与dlib库进行实时跟踪，应用LBPH算法开发了一个功能相对完整的人脸识别系统。系统采用MySQL进行数据存储，能够进行学生上课考勤人脸点名的功能，并拥有基于PyQt5设计的GUI实现。


## 系统架构

![image](./人脸识别.png)

### 核心部分 core.py

![core](./core.PNG)

### 人脸采集

![recore](./DataRecordUI.png)

### 数据管理

![manage](./DataManageUI.png)

## 树莓派

### 硬件


树莓派3b+, 32G tf 卡, 谷客外接摄像头

### 照片

![image](./respberry(1).jpg)
![image](./respberry(2).jpg)
![image](./respberry(4).jpg)
![image](./respberry(5).jpg)


