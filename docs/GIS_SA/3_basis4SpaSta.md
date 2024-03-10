???+ Abstract

    描述性统计和正态分布，大部分是高中数学的内容。


## 1. 描述性统计

!!! Note inline end

    需要进行统计分析的数据的一个关键特点是，它经常被视为是来自大容量总体的样本。

**描述性统计**(描述性统计分析)是指使用一些特定的方法来描述或总结样本特征；而**推理性统计**是指从样本推总体的方法。

> 描述性统计属于探索性技术范畴，而推理统计属于验证性技术范畴。

### 1.1 描述性统计量

* 平均值(Mean)

* 中位数(Median)

* 众数(Mode)

* 极差(Range)

* 四分位距(Interquartile Range)
  
    第25百分位数与第75百分位数之间的差。

* 方差$\sigma ^2$与标准差$\sigma$ (Varience & Standard Variance)
  
    除以`n`

* 样本方差$S^2$与样本标准差$S$ (Sample Varience & Sample Standard Variance)
  
    除以`n-1`

* z分数(z-score)
  
    对可能来自不同方差和平均值的样本进行归一化。公式如下：

$$
z = \frac{X_i-\bar X}{S}
$$

* 偏度(Skewness)
  
    用来度量随机变量概率分布的不对称性, 定义上是样本的三阶标准化矩, 公式如下：
    $$
    Skewness = \frac{1}{n} \sum_{i=1}^{n}{\frac{(X_i-\mu)^3}{S^3}}
    $$

    !!! tip "偏度分析"
          Skewness>0，为正偏(右偏)，分布的尾部延伸到正方向，即分布的右侧尾部比左侧更长。
    
          Skewness=0，表示数据相对均匀的分布在平均值两侧，不一定是绝对的对称分布。
    
          Skewness<0，为负偏(左偏)，表示分布的尾部延伸到负方向，即分布的左侧尾部比右侧更长。

- 峰度(Kurtosis)
  
    表征概率密度分布曲线在平均值处峰值高低的特征数。直观看来，峰度反映了峰部的尖度(概率分布的陡峭程度)。峰度的计算公式如下：
    $$
    kurtosis = \frac{\sum_{i=1}^{n}(X_i-\bar X)^4}{nS^4} - 3
    $$
    !!! tip "峰度分析"
    
        完全服从正态分布的数据的峰度值为0。  
        峰度值越大，概率分布图越高尖，峰度值越小，越矮胖。
    
???+ quote "Reference"

    [Statistical measures and related formulas](https://www.spatialanalysisonline.com/HTML/statistical_measures_and_relat.htm)

## 2. 正态分布

### 2.1 三个性质

* 均值、中位数、众数相等；

* 关于均值完全对称；

* 尾部渐进（靠近水平轴但不接触）

### 2.2 3$\sigma$原则

标准正态分布下:

* -1 ~ 1, 68.26%

* -2 ~ 2, 95.44%

* -3 ~ 3, 99.74%
