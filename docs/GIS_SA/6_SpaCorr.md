???+ abstract
    这一章介绍了传统的相关分析方法，包括皮尔逊相关系数、斯皮尔曼等级相关系数、偏相关系数和多重相关系数，进而介绍了空间自相关分析的相关概念以及全局与局部自相关的评价指标。

    需要重点掌握莫兰指数的计算原理，需要知道空间自相关分析有哪些方法。

## 1 传统的相关分析方法

### 1.1 皮尔逊相关系数
!!! note inline end
    Person's 相关系数就是我们高中所学的`相关系数`，又称积差相关系数。

地理相关类型:

* 完全相关  
* 不相关
* 统计相关

皮尔逊相关系数：
$$
    r = \frac{\sum_{i=1}^{n}(x_i-\bar x)(y_i-\bar y)}{\sqrt{\sum_{i=1}^{n}(x_i-\bar x)^2} \sqrt{\sum_{i=1}^{n}(x_i-\bar x)^2}} 
$$
$$
\bar x = \frac{1}{n}\sum_{i=1}^{n}x_i,   \bar y = \frac{1}{n} \sum_{i=1}^{n}y_i
$$

协方差:
$$
Cov[X, Y] = E[(X-\mu_X)(Y-\mu_Y)] = E[XY] - E[X]E[Y]
$$
样本协方差:
$$
Cov[X, Y] = \frac{1}{n-1}\sum_{i=1}^n(x_i-\bar x)(y_i-\bar y)
$$
协方差的大小与测量单位有关，协方差标准化的结果就是皮尔逊相关系数：
$$
\rho = \frac{E(X-\mu_X)(Y-\mu_Y)}{\sigma_X \sigma_Y}
$$
样本相关系数:
$$
r = \frac{\sum_{i=1}^{n} (x_i - \bar x)(y_i - \bar y)}{(n-1)S_X S_Y}
$$
用z分数表示样本皮尔逊相关系数:
$$
r = \frac{\sum_{i=1}^{n}z_X z_Y}{n-1}
$$
相关系数r的t检验：如果零假设(r=0)成立，下式符合t分布，自由度为n-2。
$$
t = \frac{r\sqrt{n-2}}{\sqrt{1-r^2}}
$$

!!! tip "皮尔逊相关系数的分析"

    皮尔逊相关系数衡量了两个变量之间的线性相关强度。两变量相关系数为0时，并不意味着二者没有关系，它们可能存在着强烈的非线性关系。
    
    两变量之间存在强线性相关性，并不意味着两者具有因果关系。

    相关系数受样本量的影响，大样本量更容易拒绝 $\rho = 0$ 的假设。

### 1.2 斯皮尔曼等级相关系数

!!! note inline end "理解等级相关系数"
    斯皮尔曼等级相关系数是皮尔逊相关系数的一种特殊情况，其被定义成**等级**变量之间的皮尔逊相关系数。由于没有具体的变量值，我们只知道变量之间的等级次序，因此我们把变量的排序次序当作其变量值，进而带入皮尔逊相关系数进行计算。

在只有排序数据可用(变量的具体指未知)或零假设所需的正态性条件不满足的情况下，可以使用**斯皮尔曼等级相关系数** (Spearman's rank correlation coefficient)。

等级相关系数反映的是两个随机变量的的变化趋势方向和强度之间的关联，是将两个随机变量的样本值按数据的大小顺序排列位次，以各要素样本值的位次代替实际数据而求得的一种统计量。

不难得知，斯皮尔曼相关系数的适用范围更加广泛，但精度比皮尔逊相关系数低。一般在变量具体值已知的情况下，应当使用皮尔逊相关系数。而当数据呈现明显的非正态分布(如线性分布)，或者至少一方数据为非数值类型(ordinal类型)，或者数据值有明显的异常值(等级相关系数对异常值不敏感)时，可以考虑使用斯皮尔曼等级相关系数。

斯皮尔曼等级相关系数公式:
$$
r_s = 1 - \frac{6\sum_{i=1}^{n}d_i^2}{n^3-n}
$$
其中 $d_i$ 表示对应变量的次序值的差值。

!!! tip "斯皮尔曼等级相关系数的分析"
    考虑两个随机变量X和Y:

    * 如果秩相关系数为正，则Y 随着X的增加而增加；  
    * 如果秩相关系数为负，则Y随着X的增加而减小；  
    * 如果秩相关系数为0，则表示随着Y的增减变化跟X的增减变化无关；  
    * 当Y和X越来越接近严格单调的函数关系时，秩相关系数在数值上就越来越大。当秩相关系数为1或者-1时，就表明Y随着X的增加而严格单调增加或单调减小。

需要注意的是，对变量进行排序时，当两个(或更多变量)相同时，它们的次序值是通过对它们位置进行平均而得到的。比如，一组变量为 1, 3, 3, 4, 7, 将它们从小到大进行排序，3对应的次序应该是(2+3)/2 = 2.5;

大样本量下的斯皮尔曼相关系数统计量的假设检验: $r_s\sqrt{n-1} \sim N(0, 1)$

!!! note "空间分析中的显著性检验具有特殊性"

    事实上，空间依赖性对相关系系数的显著性检验是(包括前面的皮尔逊相关系数)有影响的。  

    我们在进行显著性检验时，需要观测数据之间是相互独立的，但是这对于空间数据来说几乎是不可能成立的，因为在空间上，越近的数据往往表现出更强的相关性(TFL)，即获得的数据之间往往是相关的。

    因此，我们在进行空间分析的过程中，需要注意空间依赖性对统计结果的影响。

???+ quote "Reference"
    [斯皮尔曼相关(Spearman correlation)系数概述及其计算例](https://blog.csdn.net/chenxy_bwave/article/details/121427036)

### 1.3 偏相关系数

!!! note inline end 
    当想知道两个变量之间是否或在多大程度上存在数值关系，但存在另一个变量这两个变量相关时，使用皮尔逊相关系数将给出误导性的结果。偏相关系数就是控制其他变量后的结果。

在**多要素**所构成的系统中，当研究某一个要素对另一个要素的影响或相关程度时，把其他要素的影响视作常数（保持不变），即暂时不考虑其他要素影响，单独研究两个要素之间的相互关系的密切程度，所得数值结果为**偏相关系数**，即偏相关系数是用来衡量去除其他混淆变量影响后的两个随机变量的相关度。因此，偏相关系数才是真正反映两个变量相关关系的统计量。

在多元相关分析中，简单相关系数可能不能够真实的反映出变量X和Y之间的相关性，因为变量之间的关系很复杂，它们可能受到不止一个变量的影响。这个时候偏相关系数是一个更好的选择。

**偏相关系数的计算**:

* 一阶偏相关系数。在3个变量中，任意两个变量的偏相关系数是在排除其余一个变量影响后计算得到的，称为一阶偏相关系数，公式为:
$$
r_{ij·h} = \frac {r_{ij} - r_{ih} r_{jh}}{\sqrt{(1-r_{ih}^2)(1-r_{jh}^2)}} 
$$
其中，$r_{ij·h}$ 表示变量$x_i$ 与 $x_j$ 的偏相关系数， $r_{ij}$ 是变量 $x_i$ 与 $x_j$ 的皮尔逊相关系数，$r_{ih}$ 是变量 $x_i$ 与 $x_h$ 的皮尔逊相关系数，$r_{jh}$ 是变量 $x_j$ 与 $x_h$ 的皮尔逊相关系数。

* 二阶偏相关系数。在4个变量中，任意两个变量的偏相关系数是在排除其他两个变量影响后计算得到的，称为二阶偏相关系数。二阶偏相关系数由一阶偏相关系数求得，公式为:
$$
r_{ij·hm} = \frac {r_{ij·h} - r_{im·h} r_{jm·h}}{\sqrt{(1-r_{im·h}^2)(1-r_{jm·h}^2)}} 
$$
其中，i、j、m、h分别取1、2、3、4的组合。

* 高阶偏相关系数。一般地，假设有k(k>2)个变量 $x_1, x_2, …, x_k$，则任意两个变量 $x_i$ 和 $x_j$的g(g $\leq$ k-2)阶样本偏相关系数公式为：
$$
r_{ij·l_1l_2…l_g} = \frac {r_{ij·l_1l_2…l_{g-1}} - r_{il_g·l_1l_2…l_{g-1}} r_{jl_g·l_1l_2…l_{g-1}}}{\sqrt{(1-r_{il_g·l_1l_2…l_{g-1}}^2)(1-r_{jl_g·l_1l_2…l_{g-1}}^2)}} 
$$
显然，g阶偏相关系数由g-1阶偏相关系数求得。

**偏相关系数的t检验**:
$$
t = \frac{r_{12·34…k}}{\sqrt{1-r_{12·34…k}^2}} \sqrt{n-k} = \frac{r_{12·34…k}}{\sqrt{1-r_{12·34…k}^2}} \sqrt{n-g-2}
$$
其中，n为观测样本数，k为总变量个数，r为对应的偏相关系数，g为偏相关系数的阶数(g=k-2)。这里的零假设是: 两变量的偏相关系数为0。

???+ quote "Reference"
    [偏相关系数-百度百科](https://baike.baidu.com/item/%E5%81%8F%E7%9B%B8%E5%85%B3%E7%B3%BB%E6%95%B0/709144)  
    [偏相关系数计算及假设检验](https://blog.csdn.net/zhaozhn5/article/details/78390971)  
    [Partial correlation coefficient - Encyclopedia of Mathematics](https://encyclopediaofmath.org/index.php?title=Partial_correlation_coefficient)

### 1.4 多重相关系数

多重相关系数，亦称复相关系数，指一个随机变量与某一组随机变量间线性相依性的度量，反映一的是个因变量与一组自变量(两个或两个以上)之间相关程度。

计算公式为:
$$
R_{y·12…k} = \sqrt{1-(1-r_{y1}^2)(1-r_{y2·1}^2)…(1-r_{yk·12...(k-1)}^2)}
$$

!!! note inline end
    R-square的修正方法有很多种，这里介绍的是Mordecai Ezekiel提出的调整方法。

理论上自变量X越多，残差平方和只会越小，可以新增的一个X变量，即使对解释目标毫无贡献，就使其系数变成0即可，因此残差平方和最差就是打平，不会有反增的情况，在残差平方和越小的情况，当然只会使R-square变得越高。因此R平方不是一个客观的指标，在此把自变量的数量也考虑进来，调整R平方可视为R-square的无偏估计。
$$
R_{adj} = 1 - \frac{RSS/df_{res}}{TSS/df_{tot}} = 1 - \frac{(1-R^2)*(n-1)}{n-k-1}
$$
其中，$df_{res}$ 表示残差自由度，$df_{tot}$表示样本自由度，n是样本个数，k是变量个数。

!!! tip "回归模型中几个平方和的含义"
    TSS(Total Sum of Squares)是执行回归分析前，响应变量固有的方差，即实际值与平均值之差的平方和：
    $$
    TSS = \sum_{i=1}^n (y_i - \bar y)^2
    $$

    RSS(Residual Sum of Squares)是残差平方和，这是回归模型**不可解释**的误差：
    $$
    RSS = \sum_{i=1}^n (y_i - \hat y_i)^2
    $$

    SSR(Sum of Squares about Regression)回归平方和，这是回归模型**可解释**的误差：
    $$
    SSR = \sum_{i=1}^n (\hat y_i - \bar y)^2
    $$

    三个变量之间有关系: TSS = SSR + RSS，有：
    $$
    R^2 = SSR/TSS = \frac{TSS-RSS}{TSS} = 1 - \frac{RSS}{TSS}
    $$

模型显著性水平的F检验:
$$
F = \frac{SSR/(k-1)}{RSS/(n-k-1)}
$$
其中，k表示回归模型变量个数，n表示样本数。F 值越大，模型整体显著性水平越高，它是所估计回归的总显著性的一个度量，也是调整R-square的一个显著性检验。

## 2 空间自相关分析

### 2.1 空间自相关的概念

!!! note inline end
    地理学第一定律("越近越相关")是空间依赖性和空间自相关概念的基础。

**空间自相关**是利用空间统计方法进行的空间要素与其周围要素的相关性研究，进而分析这些空间单元的分布特征。
> 空间相关分析是指利用应用相关分析的方法对空间分布的数据进行研究。

* 空间自相关程度高，说明相似的空间要素聚集在一起；
* 空间自相关程度低，说明相似的空间要素比较分散。

### 2.2 空间权重矩阵

**空间权重矩阵**是数据集中要素之间空间关系的表示，是对数据集中空间要素之间关系的一种量化(数学表示)。

空间权重矩阵的构造常常基于两个特征：连续性(continuity)和距离(distance); 也可以通过面积和可达性等特征构造。在ArcGIS Pro中，空间权重矩阵可以通过不同的空间关系概念化方法构造。

**空间关系概念化**(Conceptualization of Spatial Relationships)是由Esri提出的一个概念，可以理解为：空间关系的形象化描述信息。通俗的说，就是在进行分析之前，需要对你的空间关系，进一个定义。比如，我们约定在某要素10公里内的要素视为其邻近要素，这种约定就是**概念化**。  
> 空间关系概念化类型包括：  

> * 距离：反距离、反距离平方、固定距离、距离阈值；  
> * 面邻接：邻接边拐角、邻接边、邻近角；  
> * 其它：k邻近要素、时空窗等。

???+ quote "Reference"
    [空间关系概念化综述-虾神说D](https://mp.weixin.qq.com/s?__biz=MzA4ODk4NzgyNA==&mid=2649736770&idx=1&sn=e54a4267f01cae39befec3c5edc0191f&chksm=883aa79dbf4d2e8b4fcff3d8823de4b25161983edf116b2575944c2ca563b68f8e08b3772246&scene=178&cur_album_id=1349424235982290944#rd)

### 2.3 全局自相关指数

* (全局)莫兰指数 (Global Moran's I)  

    虽然莫兰提出莫兰指数的时候，还没人提出地理学第一定律，但是莫兰开创性地在空间相关性的研究中，加入了空间相邻的参数，莫兰指数的原理就是：属性(变量值)与空间关系(空间权重矩阵定义)的乘积，得到最终的空间上的相关性。公式如下：
    $$
    I = \frac{n}{\sum_{i=1}^{n}\sum_{j=1}^{n}w_{ij}} × \frac{\sum_{i=1}^{n}\sum_{j=1}^{n}w_{ij}(x_i-\bar x)(x_j - \bar x)}{\sum_{i=1}^{n}(x_i-\bar x)^2}
    $$
    其中，$x_i$ 和 $x_j$分别是位置i和j(空间数据)对应变量的属性值，$w_{ij}$ 是位置i和j的空间权重，n为总样本数。
    
    !!! tip "莫兰指数分析"  
        从这个算法可以看到，两个值同时大于或者小于均值，就能得到正值，而被均值正好切开的两个值，就会得到负值——与参与计算的数值与均值偏离越大，得到的结果的绝对值就越大，所以空间上有关系的，而且有彼此接近的数值，表达成了聚集分布，而反之亦然。
        
        高值周边聚集高值或者低值周边聚集低值，都计算为正——表示为聚集，而高低值相互交错，那么就会计算为负，表示为离散。如果有正有负，相互抵消为0，那么就表达为随机。
        
        公式中的分子部分，是通过方差进行归一化，因此最终该指数的值将落在 -1.0 到 +1.0 的区间内。

    **莫兰指数的显著性检验**(零假设为空间要素服从正态分布(随机分布))：
    $$
    Z(I) = \frac{I - E[I]}{\sqrt{Var[I]}}
    $$
    其中
    $$
    E[I] = \frac{-1}{n-1} 
    $$

    $$
    Var[I] = E[I^2] - E[I]^2 = \frac{n^2(n-1)S_1 - n(n-1)S_2 + 2(n-2)S_0^2}{(n+1)(n-1)^2S_0}
    $$
    其中
    $$
    S_0 = \sum_i^n\sum_{j\neq i}^n w_{ij}
    $$
    $$
    S_1 = 0.5 \sum_i^n\sum_{j\neq i}^n (w_{ij} + w_{ji})^2
    $$
    $$
    S_2 = \sum_k^n(\sum_{j}^n w_{kj} + \sum_i^n w_{ik})^2
    $$
    
    ???+ quote "Reference"
        [空间自相关 (Global Moran's I) 的工作原理-ArcGIS Pro](https://pro.arcgis.com/zh-cn/pro-app/latest/tool-reference/spatial-statistics/h-how-spatial-autocorrelation-moran-s-i-spatial-st.htm)  
        [莫兰指数之计算详解-虾神说D](https://mp.weixin.qq.com/s?__biz=MzA4ODk4NzgyNA==&mid=2649736471&idx=1&sn=a215a5d480080fb4c44dfd80ba5dcb17&    chksm=883aa4c8bf4d2ddea5128b5289ded18eb7d895f591ec80e94b6312a5d20509230cbdf453363c&cur_album_id=1349424235982290944&scene=189#wechat_redirect)  
        [全局莫兰指数的理解与计算](https://blog.csdn.net/shine4869/article/details/106149299)
* General G

    莫兰指数只关心是不是聚集，而不关系到底是什么聚类，如果想知道到底是哪一类数据发生了聚集，需要进行“高/低值聚类”分析。General G算法关注的是高低值之间的聚集关系，它的公式很简单：
    $$
    G = \frac{\sum_{i=1}^n \sum_{j=1, j\neq i}^n w_{ij}x_i x_j}{\sum_{i=1}^n \sum_{j=1, j\neq i}^n x_i x_j}
    $$
    计算z值:
    $$
    z_G = \frac{G - E[G]}{\sqrt{V[G]}}
    $$
    其中
    $$
    E[G] = \frac{\sum_{i=1}^n \sum_{j=1, j\neq i}^n w_{ij}}{n(n-1)}
    $$
    $$
    Var[G] = E[G^2] - E[G]^2
    $$

    !!! tip "General G指数的分析"

        如果G > E[G], z值为正数，当z值显著时，存在高高聚类；  
        如果G < E[G], z值为负数，当z值显著时，存在低低聚类；   
        如果G 和 E[G]接近(z值不显著)，随机分布。
        ---
        需要注意的是，General G方法，对平均数非常敏感，很有可能出现其计算出来的平均数与整份数据基本上没有关系。General G方法是推论统计，主要用于通过局部数据对整体数据的特征进行推理；但如果用于计算的数据遍布各种极值，计算出来的平均数就完全不能代表真实的数据情况。所以，在利用General G的时候，最好先进行直方图探索，数据分布越接近正态分布，那么使用General G的效果就越好，极值越多，效果就越不明显。

    当存在完全均匀分布的值并且要查找高值的异常空间峰值时，首选**高/低聚类 (Getis-Ord General G)** 工具。但是，当高值和低值同时聚类时，它们倾向于彼此相互抵消。如果在高值和低值同时聚类时测量空间聚类，则使用**空间自相关**工具。

    ???+ quote "Reference"
        [高/低聚类(Getis-Ord General G) 的工作原理-ArcGIS Pro](https://pro.arcgis.com/zh-cn/pro-app/latest/tool-reference/spatial-statistics/h-how-high-low-clustering-getis-ord-general-g-spat.htm)  
        [高低值聚类：Getis-Ord General G（上）-虾神说D](https://mp.weixin.qq.com/s?__biz=MzA4ODk4NzgyNA==&mid=2649743228&idx=1&sn=d8c9967c40257750644983573ff1cded&chksm=883abea3bf4d37b5e4a272842817fedb95d0feb025e0f131229d8c0946d268c023373b876c1d&cur_album_id=1349424235982290944&scene=189#wechat_redirect)  
        [高低值聚类：Getis-Ord General G（下）-虾神说D](https://mp.weixin.qq.com/s?__biz=MzA4ODk4NzgyNA==&mid=2649743815&idx=1&sn=6d590cb9c96776ffeb10ffe0ba92560e&chksm=883a8018bf4d090e06a96d9d71f437ba0ec5f5baa010c6568a37279f2c3d82926e12d704ac09&scene=178&cur_album_id=1349424235982290944#rd)

### 2.4 空间关联的局部指标(LISA)
* 局部莫兰指数(Local Moran's I)

    给定一组加权要素，局部莫兰指数用于识别具有统计显著性的热点、冷点和空间异常值。聚类和异常值分析会对每个要素进行如下计算：
    $$
    I_i = \frac{x_i - \bar x}{S_i^2} \sum_{j=1, j\neq i}^n w_{ij}(x_j-\bar x)
    $$
    其中，$x_i$ 是要素i的属性，$\bar x$ 是对应属性的平均值，$w_{ij}$是要素i和j之间的空间权重，且：
    $$
    S_i^2 = \frac{\sum_{j=1, j\neq i}^n(x_i-\bar x)^2}{n-1}
    $$
    其中，n等于总要素数目。

    计算 $z_{I_i}$ 得分的计算方法是:
    $$
    z_{I_i} = \frac{I_i - E[I_i]}{\sqrt{V[I_i]}}
    $$
    其中
    $$
    E[I_i] = -\frac{\sum_{j=1, j\neq i}^n w_{ij}}{n-1}
    $$
    $$
    V[I_i] = E[I_i^2] - E[I_i]^2
    $$

    !!! tip "局部莫兰指数的分析"

        在p值足够小的情况下： 

        * I(这里以及下面所说的I表示的是某个要素的计算结果$I_i$)为正值时，表示要素具有包含同样高或同样低的属性值的邻近要素，该要素是聚类(HH聚类或LL聚类)的一部分。  
        * I为负值时，表示要素具有包含不同值的邻近要素，该要素是异常值(由低值围绕的高值(HL)或者由高值围绕的低值(LH))。

    ???+ quote "Reference"
        [聚类和异常值分析 (Anselin Local Moran's I)的工作原理-ArcGIS Pro](https://pro.arcgis.com/zh-cn/pro-app/latest/tool-reference/spatial-statistics/h-how-cluster-and-outlier-analysis-anselin-local-m.htm)  

* Local  $G_i$ 和 $G_i^*$

    $$
    G_i = \frac{\sum_{j=1, j\neq i}^n w_{ij}x_j}{\sum_{j=1}^n x_j}
    $$
    $$
    G_{i}^{\*} = \frac{\sum_{j=1}^n w_{ij}x_j}{\sum_{j=1}^n x_j}
    $$
    其中
    $$
    E[G_i] = \frac{\sum_{j=1, j\neq i}^n w_{ij}}{n-1}
    $$
    $$
    E[G_i^\*] = \frac{\sum_{j=1}^n w_{ij}}{n-1}
    $$
    计算z值：
    $$
    z(G_i) = \frac{G_i - E[G_i]} {\sqrt{Var(G_i)}}
    $$
    $$
    z(G_i^\*) = \frac{G_{i}^{\*} - E(G_i^*)}{\sqrt{Var(G_i^\*)}}
    $$
    !!! tip "Local  $G_i$ 和 $G_i^*$的分析"
        对于$z(G_i)$或者$z(G_i^\*)$:

        * 大于0，高高聚类；  
        * 小于0， 低低聚类；  
        * 约为0，随机分布。

* 热点分析(Getis Ord $G_i^*$)

    Getis和Ord对 $G_i^*$ 进行了改进，Getis Ord 局部统计可以表示为：
    $$
    Getis \ Ord \ G_i^\* = \frac{\sum_{j=1}^n w_{ij}x_j - \bar x \sum_{j=1}^n w_{ij}}{S\sqrt{\frac{n\sum_{j=1}^nw_{ij}^2 - (\sum_{j=1}^n w_{ij}^2)}{n-1}}}
    $$
    其中
    $$
    \bar x = \frac{\sum_{j=1}^n x_j}{n}
    $$
    $$
    S = \sqrt{\frac{\sum_{j=1}^n x_j^2}{n} - (\bar x)^2}
    $$

    $Getis \ Ord \ G_i^*$ 就是z得分，无需做进一步的计算。
    !!! tip "$Getis \ Ord \ G_i^*$ 的分析"
        当z得分($Getis \ Ord \ G_i^*$)具有显著统计学意义时:
        
        * z为正时，得分越高，高值（热点）的聚类就越紧密。
        * z为负时，得分越低，低值（冷点）的聚类就越紧密。

    ???+ quote "Reference"
        [热点分析 (Getis-Ord Gi*) 的工作原理-ArcGIS Pro](https://pro.arcgis.com/zh-cn/pro-app/latest/tool-reference/spatial-statistics/h-how-hot-spot-analysis-getis-ord-gi-spatial-stati.htm)