---
slug: RaspberryPi
title: 人脸识别
description: 树莓派人脸识别代码下载
authors: [starcloud]
tags: [Raspberry Pi, 人脸识别]
keywords: [Raspberry Pi, 树莓派, 人脸识别, OpenCV, 代码, 下载]
---




## 项目介绍

本项目基于OpenCV使用Haar级联分类器实现人脸检测，与dlib库进行实时跟踪，应用LBPH算法开发了一个功能相对完整的人脸识别系统。系统采用MySQL进行数据存储，能够进行学生上课考勤人脸点名的功能，并拥有基于PyQt5设计的GUI实现。

<!--truncate-->


## 系统架构

![树莓派人脸识别架构](./人脸识别.png)

### 核心部分 core.py

![树莓派人脸识别核心](./core.PNG)

### 人脸采集

![树莓派人脸采集](./DataRecordUI.png)

### 数据管理

![树莓派人脸识别 数据管理](./DataManageUI.png)

## 树莓派

### 硬件


树莓派3b+, 32G tf 卡, 谷客外接摄像头

### 照片

![树莓派人脸识别拍摄1](./respberry(1).jpg)
![树莓派人脸识别拍摄2](./respberry(2).jpg)
![树莓派人脸识别拍摄3](./respberry(4).jpg)
![树莓派人脸识别拍摄4](./respberry(5).jpg)


