---
title: 由均值不等式到幂平均函数的性质研究
published: 2022-07-31
description: 远古时期(高二暑假)写得语雀笔记，被我翻出来了hhhh
tags:
  - 高考数学邪修
category: 高考
draft: false
---

下面是我们高中学习**均值不等式**时常见的不等式链：
$$\frac{2}{\frac{1}{a} + \frac{1}{b}} \le \sqrt{ab} \le \frac{a+b}{2} \le \sqrt{\frac{a^2 + b^2}{2}}$$

$H \le G \le A \le Q$

# 仔细观察，不难发现。除$\sqrt{ab}$外，它们都符合这样一个通式：
$$f(x) = \left(\frac{a^x + b^x}{2}\right)^{\frac{1}{x}}$$
这就是我们说的**幂平均函数**。

$\sqrt{ab}$没有其他的那么显而易见，它是用x趋近于0时候的极限值来代替x＝0时的值，就是所谓的**可去间断点Removable Discontinuity**后面用**Geogebra**绘制的图象我们还会见到它。

于是上述不等式链可简化为：**f(-1)≦f(0)≦f(1)≦f(2)**

当且仅当a=b时等号成立。由此我们可以猜得当a≠b时，f(x)单调递增。那不妨令a=2，b=3画图来看看！

![](https://cdn.nlark.com/yuque/0/2022/png/29762915/1659247591303-40cbde5d-4b1e-4b73-aaed-fa23b750f25d.png)![](https://cdn.nlark.com/yuque/0/2022/png/29762915/1659247774016-7f932e23-58ec-492f-9e0a-039709008e67.png)

上文介绍过该图像的**可去间断点f(0)= $\sqrt{ab}$

由图象可直接观察出f(x)单增，因此上述不等式链可无限细分与延长！

如：···<f(-3)<f(-2)<f(-1.76543657)<f(0)<f(3)<f(23456787)<···

再举一例：

![](https://cdn.nlark.com/yuque/0/2022/png/29762915/1659248086633-8d3d5c36-8307-47fa-a1f1-950a47cac2a7.png)![](https://cdn.nlark.com/yuque/0/2022/png/29762915/1659248154668-384935cc-07d4-46be-81e4-e52625989773.png)

若a=b时，很显然f(x)恒=a=b，无单调性。上述不等式链全部取等，不妨令a=b=2画图来看一下！

![](https://cdn.nlark.com/yuque/0/2022/png/29762915/1659248423748-fd31746a-fe8c-451e-a234-dc590336839b.png)![](https://cdn.nlark.com/yuque/0/2022/png/29762915/1659248391819-7e4cddc4-bcc8-4e39-947b-0517cd1dac94.png)
延拓到n元，我们也学过下面的不等式链：

$$H_n \le G_n \le A_n \le Q_n$$

---

**1. Harmonic Mean ($H_n$)**

$$H_n = \frac{n}{\sum_{i=1}^n \frac{1}{x_i}} = \frac{n}{\frac{1}{x_1} + \frac{1}{x_2} + \cdots + \frac{1}{x_n}}$$

**2. Arithmetic Mean ($A_n$)**

$$A_n = \frac{\sum_{i=1}^n x_i}{n} = \frac{x_1 + x_2 + \cdots + x_n}{n}$$

**3. Geometric Mean ($G_n$)**

$$G_n = \sqrt[n]{\prod_{i=1}^n x_i} = \sqrt[n]{x_1 x_2 \cdots x_n}$$

**4. Quadratic Mean ($Q_n$)**

$$Q_n = \sqrt{\frac{\sum_{i=1}^n x_i^2}{n}} = \sqrt{\frac{x_1^2 + x_2^2 + \cdots + x_n^2}{n}}$$

---

也可**用幂平均函数进行延拓**，得到下面的**加权幂平均不等式**！

**加权幂平均不等式($M_\alpha \ge M_\beta$):**

设 $x_i > 0, p_i > 0\ (i=1, 2, \ldots, n)$, $\alpha > \beta$

则：
$$\left(\frac{\sum_{i=1}^n p_i x_i^\alpha}{\sum_{i=1}^n p_i}\right)^{\frac{1}{\alpha}} \ge \left(\frac{\sum_{i=1}^n p_i x_i^\beta}{\sum_{i=1}^n p_i}\right)^{\frac{1}{\beta}}$$

其中等号当且仅当 $x_1 = x_2 = \cdots = x_n$ 时成立。

---
