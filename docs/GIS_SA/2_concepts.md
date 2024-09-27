???+ Abstract

    介绍了空间分析中的基本概念、地理学定律、空间关系、空间推理等内容。
    
    地理学第一定律，地理学第二定律，空间异质性，9-IM和DE-9IM，空间推理方法。

## 1. 基本概念

!!! Note inline end

    1884年的[国际子午线会议](https://baike.baidu.com/item/%E6%9C%AC%E5%88%9D%E5%AD%90%E5%8D%88%E7%BA%BF/248147#5:~:text=1884%E5%B9%B4%E5%9C%A8%E5%8D%8E%E7%9B%9B%E9%A1%BF%E4%B8%BE%E8%A1%8C%E7%9A%84%E5%9B%BD%E9%99%85%E5%AD%90%E5%8D%88%E7%BA%BF%E4%BC%9A%E8%AE%AE%E5%86%B3%E5%AE%9A%EF%BC%8C%E9%87%87%E7%94%A8%E9%80%9A%E8%BF%87%E8%8B%B1%E5%9B%BD%E4%BC%A6%E6%95%A6%E6%A0%BC%E6%9E%97%E5%B0%BC%E6%B2%BB%EF%BC%88%E6%A0%BC%E6%9E%97%E5%A8%81%E6%B2%BB%EF%BC%89%E7%9A%87%E5%AE%B6%E5%A4%A9%E6%96%87%E5%8F%B0%EF%BC%88%E6%97%A7%E5%9D%80%EF%BC%89%E5%9F%83%E9%87%8C%E4%B8%AD%E6%98%9F%E4%BB%AA%E7%9A%84%E5%AD%90%E5%8D%88%E7%BA%BF%E4%BD%9C%E4%B8%BA%E6%97%B6%E9%97%B4%E5%92%8C%E7%BB%8F%E5%BA%A6%E8%AE%A1%E9%87%8F%E7%9A%84%E6%A0%87%E5%87%86%E5%8F%82%E8%80%83%E5%AD%90%E5%8D%88%E7%BA%BF%EF%BC%8C%E7%A7%B0%E4%B8%BA%E6%9C%AC%E5%88%9D%E5%AD%90%E5%8D%88%E7%BA%BF%E3%80%82)确定了本初子午线(格林威治天文台)。
    
    现在的[WGS84坐标系统](https://baike.baidu.com/item/WGS-84%E5%9D%90%E6%A0%87%E7%B3%BB/730443)提供了地表的高精度坐标。
    
    
    中国目前最新的国家大地坐标系是[CGCS2000](https://baike.baidu.com/item/2000%E5%9B%BD%E5%AE%B6%E5%A4%A7%E5%9C%B0%E5%9D%90%E6%A0%87%E7%B3%BB/7262512)。

### 1.1 Places (地点)

一切空间分析的中心落脚于`地点(place)`的概念；

* `地点`通常都有名字，人们通过名字来区分地点；

* `地点`有坐标；

### 1.2 Attributes (属性)

一个地点的特征或性质可以称为`属性(attribute)`。

- 在GIS中，属性通常指`矢量数据中的单个要素`或`栅格数据的单个网格`在数据表中的记录(Record)。

- 属性可分为**定性(Qualitative)** 的和 **定量(Quantitative)** 的
  
    * 定性的：norminal(标称、定类)、ordinal(定序)
  
    * 定量的：iterval(定距)、ratio(定比)、Cyclic(周期性的)

!!! tip "对norminal, ordinal, interval, ratio四种属性的理解"

    * 定类变量值只是分类, 如性别变量的男女；
    * 定序变量值可以排序, 但不能加减, 如有点同意、基本同意、完全同意；
    * 定距变量值是数字型变量, 变量的值之间可以比较大小, 两个值的差有实际意义, 如摄氏温度；
    * 定比变量有绝对0点，如质量，高度，开尔文温度。
    
    > 区分定距和定比：定距变量取值为“0”时，不表示“没有”，仅仅是取值为0。定比变量取值为“0”时，则表示“没有”。
    
    参考：[Nominal, ordinal, interval & ratio data](https://www.psy.gla.ac.uk/~steve/best/ordinal.html)

### 1.3 Objects (对象)

点(Point), 线(Line), 面(Areas), 体(Volumes)是`属性`的空间支持，也是GIS研究对象(的抽象)。

### 1.4 Maps (地图)

`地图(map)`是存储和交流空间数据的主要手段。

地图可分为`真实地图`和`虚拟/数字地图`。

### 1.5 Multiple properties of places (地点的多重属性)

一个地点可能不止一个对象，即对象可能重叠。比如一条河流可以穿过森林，一条道路可以穿过河流。

### 1.6 Fields(场)

!!! tip inline end "空间数据模型的概念及类型"

    在GIS中与空间信息有关的信息模型有三个，即基于对象（Object）的模型、场（Field）模型以及网络（Network）模型。
    
    * 基于对象（要素）的模型强调了离散对象，根据它们的边界线以及组成它们或者与它们相关的其它对象，可以详细地描述离散对象。
    * 场模型表示了在二维或者三维空间中被看作是连续变化的数据。 有很多类型的数据，有时被看作场，有时被看作对象。
    * 网络模型表示了特殊对象之间的交互，如水或者交通流。
    
    参考: [空间数据模型的概念及类型](https://www.osgeo.cn/post/3231g#)

* 离散对象模型(Discrete-object view) - 矢量数据模型
  
    采用离散对象来表示地球表面的空间要素。

* 连续场模型(Continuous-field view) - 栅格数据模型
  
    对于模拟具有一定空间内连续分布特点的现象来说，基于场的观点是合适的。例如，空气中污染物的集中程度、地表的温度、土壤的湿度水平以及空气与水的流动速度和方向。根据应用的不同，场可以表现为二维或三维。一些现象，诸如空气污染物在空间中本质上讲是三维的，但是许多情况下可以由一个二维场来表示。

### 1.7 Networks (网络)

线(lines)经常组成空间数据的对象，包括街道、道路、铁路、高速公路；河流、管道；社会学家所研究的更加抽象的人际关系。

> **网络(networks)** 是嵌入在二维或三维结构中的一维结构。

### 1.8 Density (密度)

`密度(density)`提供了离散对象和连续场概念之间的有效联系，因为密度表示每单位面积上离散对象的数量，并且本身是一个连续场。  

数学上，某种物体的密度是通过计算一个区域内这种物体的数量，然后除以该区域的面积大小来计算的。

### 1.9 Detail, resolution, and scale (细节、分辨率和比例尺)

行星表面几乎是无限复杂的，不可能建立一个包含所有`细节(detail)`的模型，因此需要决定哪些细节可以被包含进来。

空间`分辨率(resolution)`是可详细区分最小单元的大小或尺寸。低于该尺寸的细节被认为是研究不需要的或者研究不相关的。

地图`比例尺(scale)`表示了地图上的距离与真实世界中对应距离的比值。

!!! note "制图综合(Map Generalization)"

    1. 简化(simplification)：减少对象中的顶点数。
    2. 预选(Preselection)：选择要包括在地图上的对象。
    3. 平滑(Smooth)：减少锐角，使曲线更平滑。
    4. 聚合(Aggregation)：将聚集在一起的小对象聚合成一个大的复合对象。
    5. 消除(Elimination)：删除不必要的小的对象。
    6. 降维(Collapse)：将详细的对象缩小为点符号，维度降低。
    7. 代表(Typification)：用占据大致相当位置的少量对象替代原本的大量对象。
    8. 夸张(Exaggeration)：放大原本可能被删除的对象。
    9. 增强(Refinement)：添加在视觉上能够使对象更清晰的细节。
    10. 分类与符号化(Classification and symbolization): 将相似的特征组合在一起，并使用不同的符号来表示新的排列
    11. 位移(Conflict resolution/displacement): 解决标注重叠、对象叠置等现象（为了清晰起见）。
    
    参考: [制图综合](https://www.osgeo.cn/tutorial/k2045), [Automation of Map Generalization](https://downloads.esri.com/SUPPORT/WHITEPAPERS/AO_/MAPGEN.PDF)

### 1.10 Topology (拓扑)

在数学上，经过空间的拉伸、缩放、扭曲后保持不变的性质称为`拓扑(Topology)`。

在地理上，拓扑指根据拓扑几何性质组织向量空间数据的方式，包括点、线、面三种要素的空间关系。

* 拓扑维度: 点(0), 线(1), 面(2), 体(3)

* 领接性

* 连通性

* 包含

???+ quote "Reference"

    [Conceptual Frameworks for Spatial Analysis-Basic Primitives](https://www.spatialanalysisonline.com/HTML/place.htm)

## 2. 地理学定律

!!! Note inline end

    地理学第一定律非常重要! 后面学习到的许多方法都体现出这一思想。

### 2.1 地理学第一定律 (空间相关性定律)

任何事物都是空间相关的，距离近的事物比距离远的事物的空间相关性更大。简单点说，就是“**越近越相关**”。

!!! info "Cite"

    Everything is related to everything else but near things are more related than distant things.  
    由WaldoTobler提出，又称为Tobler's First Law of Geography(TFL)。

李小文院士针对TFL的局限性，提出了`时空邻近度`的概念，即“**时空上越近的越相关**”。

### 2.2 地理学第二定律 (空间异质性定律)

**空间的隔离，造成了地物之间的差异**，即异质性(Spatial Heterogeneity)。  

> 空间异质性分为空间局域异质性和空间分层异质性，前者是指该点属性值与周围不同，例如热点或冷点；后者是指多个区域之间互相不同，例如分类和生态分区。

### 2.3 地理学第三定律

地理环境越相似，地理特征越相近。

## 3. 空间关系

### 3.1 空间关系的内容

空间关系的基础是空间对象的位置和属性的表达以及空间对象复杂空间关系的表达。

* 空间关系可以由地理对象的几何特征造成，如拓扑关系、距离关系、方位关系等。

* 空间关系也可以由地理对象的几何特征和非几何特征造成，如空间分布现象的相关性、空间自相关、空间依赖性等。

### 3.2 距离关系

* 定量的：欧氏距离、曼哈顿距离、闵可夫斯基距离…… 
  
    可参考：[各种距离度量](https://www.cnblogs.com/AlvinSui/p/8931074.html)

* 定性的：近、远、较近、较远……

### 3.3 方向关系

方向: 东、东南、西……

度量方法: 四方向模型、八方向模型、最小包围盒模型……

### 3.4 拓扑关系

* 四交模型

* 九交模型
  
    将地理对象分为内部、边界、外部三部分(点只有内部和外部，没有边界)，通过判断两个对象的这三个区域之间是否有交点进而判断几何对象的拓扑关系。

* 维度扩展九交模型
  
    基于九交模型，不仅判断两对象的三个区域之间是否相交，还判断它们的交集类型是什么，包括空集(-1)，交集为点或多点(0)、线或多线(1)、面或多面(2)。
  
    根据DE-9IM，可以将空间关系描述为以下8种：相等、相交、相离、相接、穿越、包含、包含于、叠置。 (可参考: [OGC SFA Part 1](https://portal.ogc.org/files/?artifact_id=25355) P35-P40)

* ……

## 4. 空间推理

### 4.1 概念

**空间推理**是指利用空间理论和人工智能技术对地理对象进行建模、描述和表征，并据此对这些对象之间的空间关系进行定性或定量的分析和处理。

### 4.2 空间推理方法

* 空间关系推理
  
    在给定关系模型的基础上，可以根据空间对象的位置推理空间对象的关系。  
    ???+ example
  
        给定: 山西在北京的西边, 青海在山西的西边。  
        推理: 青海在北京的西边。 

* 概率推理

* 贝叶斯推理与空间推理
  
    一个应用是`最大似然估计`。

* 案例推理与空间推理
  
    基于常识的推理。

* 模糊推理与空间推理
  
    利用事件推理对空间对象进行模糊查询。

* 时空推理

* ……

## 5. 空间基础设施

* [ArcGIS Online](https://www.arcgis.com)

* [航天宏图PIE Engine](https://engine.piesat.cn/)

* [AI-GEOSTATA](https://wiki.52north.org/AI_GEOSTATS/WebHome)

* [STATSREF](http://www.statsref.com/)

* [Mathworld](https://mathworld.wolfram.com/)

* [Metadata](https://www.fgdc.gov/nsdi/nsdi.html)
