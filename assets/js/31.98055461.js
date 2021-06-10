(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{537:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"libsvm库的使用-svm分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#libsvm库的使用-svm分类"}},[t._v("#")]),t._v(" libsvm库的使用-SVM分类")]),t._v(" "),s("h3",{attrs:{id:"_1-作业说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-作业说明"}},[t._v("#")]),t._v(" 1 作业说明")]),t._v(" "),s("p",[t._v("使用LIBSVM，在西瓜数据集3.0α 上分别用高斯核和拉普拉斯核训练一个SVM，并比较其支持向量的差别。")]),t._v(" "),s("h3",{attrs:{id:"_2-libsvm库介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-libsvm库介绍"}},[t._v("#")]),t._v(" 2 LIBSVM库介绍")]),t._v(" "),s("h4",{attrs:{id:"_2-1-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-介绍"}},[t._v("#")]),t._v(" 2.1 介绍")]),t._v(" "),s("p",[t._v("LIBSVM是支持向量分类（C-SVC，nu-SVC）、回归（epsilon-SVR，nu-SVR）和分布估计（单类SVM）的集成软件库。")]),t._v(" "),s("h4",{attrs:{id:"_2-2-参数介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-参数介绍"}},[t._v("#")]),t._v(" 2.2 参数介绍")]),t._v(" "),s("p",[t._v("options： 训练的一些参数设置，主要有以下的一些设置")]),t._v(" "),s("p",[t._v("-s  SVM的类型(svm_type)")]),t._v(" "),s("p",[t._v("0 -- C-SVC(默认)    使用惩罚因子(Cost)的处理噪声的多分类器")]),t._v(" "),s("p",[t._v("1 -- nu-SVC(多分类器)   按照错误样本比例处理噪声的多分类器")]),t._v(" "),s("p",[t._v('2 -- one-class SVM    一类支持向量机，可参见"SVDD"的相关内容')]),t._v(" "),s("p",[t._v("3 -- epsilon-SVR(回归)  epsilon支持向量回归 （也就是使用 E-不敏感损失函数进行回归）")]),t._v(" "),s("p",[t._v("4 -- nu-SVR(回归)")]),t._v(" "),s("p",[t._v("-t  核函数类型(kernel_type)")]),t._v(" "),s("p",[t._v("0 -- linear(线性核):       u'*v")]),t._v(" "),s("p",[t._v("1 -- polynomial(多项式核):  (gamma*u'*v + coef0)^degree")]),t._v(" "),s("p",[t._v("2 -- radial basis function(RBF,径向基核/高斯核):   exp(-gamma*|u-v|^2)")]),t._v(" "),s("p",[t._v("3 -- sigmoid(S型核):  tanh(gamma*u'*v + coef0)")]),t._v(" "),s("p",[t._v("4 -- precomputed kernel(预计算核)：  核矩阵存储在training_set_file中")]),t._v(" "),s("p",[t._v("下面是调整SVM或核函数中参数的选项：")]),t._v(" "),s("p",[t._v("-d      调整核函数的degree参数，默认为3")]),t._v(" "),s("p",[t._v("-g      调整核函数的gamma参数，默认为1/num_features")]),t._v(" "),s("p",[t._v("-r      调整核函数的coef0参数，默认为0")]),t._v(" "),s("p",[t._v("-c      调整C-SVC, epsilon-SVR 和 nu-SVR中的Cost参数，默认为1（就是优化问题中的那个C）")]),t._v(" "),s("p",[t._v("-n      调整nu-SVC, one-class SVM 和 nu-SVR中的错误率nu参数，默认为0.5")]),t._v(" "),s("p",[t._v("-p      调整epsilon-SVR的loss function中的epsilon参数，默认0.1")]),t._v(" "),s("p",[t._v("-m      调整内缓冲区大小,以MB为单位，默认100")]),t._v(" "),s("p",[t._v("-e      调整终止判据，默认0.001")]),t._v(" "),s("p",[t._v("-wi  调整C-SVC中第i个特征的Cost参数")]),t._v(" "),s("p",[t._v("调整算法功能的选项：")]),t._v(" "),s("p",[t._v("-b      是否估算正确概率,取值0 - 1，默认为0")]),t._v(" "),s("p",[t._v("-h      是否使用收缩启发式算法(shrinking heuristics),取值0 - 1，默认为0")]),t._v(" "),s("p",[t._v("-v      交叉校验")]),t._v(" "),s("p",[t._v("q      静默模式")]),t._v(" "),s("h4",{attrs:{id:"_2-3-输入格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-输入格式"}},[t._v("#")]),t._v(" 2.3 输入格式")]),t._v(" "),s("p",[t._v("Libsvm严格定义输入数据的格式。")]),t._v(" "),s("p",[t._v("如果从txt文件中读取数据，数据必须按照以下格式")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("…\n\n<label> 1:x1 2:x2 …\n\n…\n")])])]),s("p",[t._v("而在python中获取的数据格式为列表嵌套字典。每一个向量组成一个字典，不同向量是一个列表中的元素，即")]),t._v(" "),s("p",[t._v("[{1:x1,2:x2…},…]")]),t._v(" "),s("h4",{attrs:{id:"_2-4-自定核函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-自定核函数"}},[t._v("#")]),t._v(" 2.4 自定核函数")]),t._v(" "),s("p",[t._v("从上面参数设置中可以看出，libsvm库中核函数仅有线性核、多项式核、高斯核和sigmoid核，而要求使用的拉普拉斯核函数没有。但是，libsvm库也允许设置参数”-t 4”来使用自定核函数。")]),t._v(" "),s("p",[t._v("在libsvm的说明文档中找到自定核函数部分，如下")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('Precomputed Kernels\n\n===================\n\nUsers may precompute kernel values and input them as training and\n\ntesting files. Then libsvm does not need the original\n\ntraining/testing sets.\n\nAssume there are L training instances x1, ..., xL and.\n\nLet K(x, y) be the kernel\n\nvalue of two instances x and y. The input formats\n\nare:\n\nNew training instance for xi:\n\n<label> 0:i 1:K(xi,x1) ... L:K(xi,xL)\n\nNew testing instance for any x:\n\n<label> 0:? 1:K(x,x1) ... L:K(x,xL)\n\nThat is, in the training file the first column must be the "ID" of\n\nxi. In testing, ? can be any value.\n\nAll kernel values including ZEROs must be explicitly provided. Any\n\npermutation or random subsets of the training/testing files are also\n\nvalid (see examples below).\n')])])]),s("p",[t._v("说明，在使用自定核函数时，系统默认输入值为核函数计算结果，而不需要原始数据，因此，自定核函数即为预先计算核函数，再使用计算结果进行svm分类。")]),t._v(" "),s("p",[t._v("需要注意的是，在使用自定核函数时，要在每一项中加上序号，以此判断是哪个向量。")]),t._v(" "),s("h3",{attrs:{id:"_3-代码说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-代码说明"}},[t._v("#")]),t._v(" 3 代码说明")]),t._v(" "),s("h4",{attrs:{id:"_3-1-高斯核"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-高斯核"}},[t._v("#")]),t._v(" 3.1 高斯核")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" libsvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("svmutil "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n\n\ntrain_label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" train_data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" svm_read_problem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data.txt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 读入训练数据")]),t._v("\noptions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-t 2'")]),t._v("\n\nmodel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" svm_train"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("train_label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" train_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 训练")]),t._v("\nsvm_save_model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rbm_model'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保存训练的模型")]),t._v("\n\n")])])]),s("p",[t._v("如图，从txt文件中读取训练数据，参数设置选择“-t 2”，使用高斯核函数。")]),t._v(" "),s("p",[t._v("默认gamma参数为1/k，即为0.5。")]),t._v(" "),s("h4",{attrs:{id:"_3-2-拉普拉斯核"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-拉普拉斯核"}},[t._v("#")]),t._v(" 3.2 拉普拉斯核")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" libsvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("svmutil "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n")])])]),s("p",[t._v("导入numpy库来进行矩阵运算。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("train_label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" train_data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" svm_read_problem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data.txt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 读入训练数据")]),t._v("\n\ndata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" item "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" train_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("values"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnew_data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("把从文件中读取到的数据进行格式转换，转换到ndarray格式。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    item "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kernel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    new_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("分别计算核函数的结果。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kernel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    k "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linalg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("norm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("核函数定义，gamma选择和高斯核函数一样的0.5。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("nums "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ntrain_data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    dic "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("zip")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" new_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    train_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("将运算结果核矩阵再转换为libsvm要求的输入格式，前面加上序号。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-t 4'")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 参数")]),t._v("\nmodel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" svm_train"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("train_label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" train_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 训练")]),t._v("\n\nsvm_save_model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'laplace_model'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保存训练的模型")]),t._v("\n")])])]),s("p",[t._v("选择参数“-t 4”，使用预先计算核函数。")]),t._v(" "),s("h3",{attrs:{id:"_4-结果说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-结果说明"}},[t._v("#")]),t._v(" 4 结果说明")]),t._v(" "),s("h4",{attrs:{id:"_4-1-高斯核"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-高斯核"}},[t._v("#")]),t._v(" 4.1 高斯核")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("svm_type c_svc\nkernel_type rbf\ngamma 0.5\nnr_class 2\ntotal_sv 16\nrho 0.85658702254295349\nlabel 1 -1\nnr_sv 8 8\nSV\n1 1:0.697 2:0.46 \n1 1:0.774 2:0.376 \n1 1:0.634 2:0.264 \n1 1:0.608 2:0.318 \n1 1:0.556 2:0.215 \n1 1:0.403 2:0.237 \n1 1:0.481 2:0.149 \n1 1:0.437 2:0.211 \n-1 1:0.666 2:0.091 \n-1 1:0.243 2:0.267 \n-1 1:0.343 2:0.099 \n-1 1:0.639 2:0.161 \n-1 1:0.657 2:0.198 \n-1 1:0.36 2:0.37 \n-1 1:0.593 2:0.042 \n-1 1:0.719 2:0.103 \n")])])]),s("p",[t._v("可以看出，支持向量数达16个，仅有第11个向量，即")]),t._v(" "),s("p",[t._v("-1  1:.245  2:.057")]),t._v(" "),s("p",[t._v("不是支持向量。")]),t._v(" "),s("h4",{attrs:{id:"_4-2-拉普拉斯核"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-拉普拉斯核"}},[t._v("#")]),t._v(" 4.2 拉普拉斯核")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("svm_type c_svc\nkernel_type precomputed\nnr_class 2\ntotal_sv 17\nrho 0.78027394413948059\nlabel 1 -1\nnr_sv 8 9\nSV\n1 0:1 \n1 0:2 \n1 0:3 \n1 0:4 \n1 0:5 \n1 0:6 \n1 0:7 \n1 0:8 \n-1 0:9 \n-1 0:10 \n-0.21451952547143532 0:11 \n-1 0:12 \n-1 0:13 \n-1 0:14 \n-1 0:15 \n-0.78548047452856462 0:16 \n-1 0:17 \n\n")])])]),s("p",[t._v("可以看出，使用拉普拉斯核函数可以令所有训练数据为支持向量。")]),t._v(" "),s("h3",{attrs:{id:"_5-感想"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-感想"}},[t._v("#")]),t._v(" 5 感想")]),t._v(" "),s("p",[t._v("这次作业完成的比较顺利，只需调用库函数，省去了很多时间。在学习库函数的使用时，发现网上教程质量参差不齐，增加了很多的学习难度。于是考虑上官方网站获取官方教程，发现官方英文教程非常仔细详细，也有许多的例程来进行说明，浅显易懂。这也给我一个启发，在使用库函数的时候一定要仔细看官方文档，比网上乱七八糟的教程有用多了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);