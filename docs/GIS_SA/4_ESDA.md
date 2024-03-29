???+ Abstract
    
    主要介绍了ESDA的概念，传统的可视化分析方法，一些ESDA方法；

    需要知道有哪些ESDA方法。

## 1. 基本思想与概念

Exploratory Spatial Data Analysis, ESDA, 探索性空间数据分析。

### 1.1 基本思想:

- “**让数据说话**”

- **不限制方法的标准，不拘泥于数据的测量准确性**。

### 1.2 ESDA的基本内容:

- 检查数据的错误

- 获取空间数据的分布特征

- 初步考察空间数据模式

### 1.3 ESDA的概念：

- ESDA是一个从空间工具开始的循序渐进的过程，利用如分层设色图和箱型图显示出变量的分布，识别出异常值。

- ESDA是探索性数据分析的扩展，因为它明确关注特定的地理数据特征。

- ESDA是一种日益流行的基于GIS的技术，它允许用户对空间分布进行描述和可视化，识别非典型位置或空间异常值，发现空间关联模式、集群或热点，并发现空间模式或其他空间异质性形式。

- ESDA的优势依赖于其“数据挖掘”能力，其提出了广泛的图形化方法而非正式建模来探索数据集的属性，从而吸引了许多对模型构建的方法不感兴趣的GIS用户。

## 2. 传统的视觉探索方法

- 直方图(Historams)

- 饼图(Pie Chart)

- 折线图(Line Graph)
  
    变量随时间的变化。

- 散点图(Scatter Plot)
  
    寻找两个变量之间的关联，用于数值数据。

- 箱型图(Box Plot)

    !!! Note "箱型图的六大因数"
    
        1. **下四分位数Q1**  
        等于该样本中所有数值由小到大排列后第25%的数字。  
        `Qi所在位置=i(n+1)/4`，其中i=1、2、3, n表示序列中包含的项数。
        > 假设一组数有14项, 则  
        > Q1所在的位置为: `1*(14+1)/4=3.75`;  
        > `Q1=0.25×第三项+0.75×第四项`。
        2. **中位数（第二个四分位数）Q2**  
        中位数，等于该样本中所有数值由小到大排列后第50%的数字。
        3. **上四分位数Q3**   
        等于该样本中所有数值由小到大排列后第75%的数字。  
        4. **上限**  
        上限是非异常范围内的最大值。计算上限需要先计算四分位距。  
        四分位距（interquartile range, IQR），又称四分差。  
        四分位距`IQR=Q3-Q1`，那么`上限=Q3+1.5IQR`。
        5. **下限**  
        下限是非异常范围内的最小值。 
        `下限=Q1-1.5IQR`。
        6. **异常值**   
        在内限(上限与下限)与外限(`Q3+3IQR`和`Q1-3IQR`)之间的异常值为温和异常值（mild outliers）。  
        在外限以外的为极端异常值（extreme outliers）。

- 茎叶图(Stem-and-Leaf)

- 平行坐标图(Parallel coordinate plot)
  
    对于具有多个属性问题的一种可视化方法。**数据集的一行数据在平行坐标图中用一条折线表示**，**纵向是属性值，横向是属性类别（用索引表示）**。
  
    平行坐标图主要帮助我们观察**目标与哪些属性相关**，尤其适用在属性超过三个以上的问题中。若在某个属性上相同颜色折线较为集中，不同颜色有一定的间距，则说明该属性对于预测标签类别有较大的帮助；若某个属性上线条混乱，颜色混杂，则较大可能该属性对于标签类别判定没有价值。

## 3. ESDA方法

- 专题地图

- 分层设色图

- 半方差图
  
    半方差云可用于探索空间相关性或寻找全局/局部和局部异常值

- 泰森多边形
  
    [泰森多边形](https://baike.baidu.com/item/%E6%B3%B0%E6%A3%AE%E5%A4%9A%E8%BE%B9%E5%BD%A2/3428661)是对空间平面的一种剖分，其特点是多边形内的任何位置离该多边形的样点（如居民点）的距离最近，离相邻多边形内样点的距离远，且每个多边形内含且仅包含一个样点。泰森多边形可用于解决许多空间分析问题，如邻接、接近度和可达性分析等。

- 映射箱型图

- 趋势分析

- 地图交互

- 其它方法：
  
    自相关分析、热点分析、探索性时空数据分析……

???+ Quote "Reference"

    [Exploratory Spatial Data Analysis](https://spatialanalysisonline.com/HTML/exploratory_spatial_data_analy.htm)
