(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{368:function(s,t,a){"use strict";a.r(t);var e=a(42),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"foundation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#foundation"}},[s._v("#")]),s._v(" Foundation")]),s._v(" "),a("h2",{attrs:{id:"_1-nil、nil、nsnull-有什么区别？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-nil、nil、nsnull-有什么区别？"}},[s._v("#")]),s._v(" 1.nil、NIL、NSNULL 有什么区别？")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("nil、NIL 可以说是等价的，都代表内存中一块空地址。")])]),s._v(" "),a("li",[a("p",[s._v("NSNULL 代表一个指向 nil 的对象。")])])]),s._v(" "),a("h2",{attrs:{id:"_2-如何实现一个线程安全的-nsmutablearray"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何实现一个线程安全的-nsmutablearray"}},[s._v("#")]),s._v(" 2.如何实现一个线程安全的 NSMutableArray?")]),s._v(" "),a("p",[s._v("NSMutableArray是线程不安全的，当有多个线程同时对数组进行操作的时候可能导致崩溃或数据错误")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("线程锁：使用线程锁对数组读写时进行加锁")])]),s._v(" "),a("li",[a("p",[s._v("派发队列：在《Effective Objective-C 2.0..》书中第41条：多用派发队列，少用同步锁中指出：使用“串行同步队列”（serial synchronization queue），将读取操作及写入操作都安排在同一个队列里，即可保证数据同步。而通过并发队列，结合GCD的栅栏块（barrier）来不仅实现数据同步线程安全，还比串行同步队列方式更高效。")])])]),s._v(" "),a("h2",{attrs:{id:"_3-atomic-修饰的属性是绝对安全的吗？为什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-atomic-修饰的属性是绝对安全的吗？为什么？"}},[s._v("#")]),s._v(" 3.atomic 修饰的属性是绝对安全的吗？为什么？")]),s._v(" "),a("p",[s._v("不是，所谓的安全只是局限于 Setter、Getter 的访问器方法而言的，你对它做 Release 的操作是不会受影响的。这个时候就容易崩溃了。")]),s._v(" "),a("h2",{attrs:{id:"_4-实现-isequal-和-hash-方法时要注意什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-实现-isequal-和-hash-方法时要注意什么？"}},[s._v("#")]),s._v(" 4.实现 isEqual 和 hash 方法时要注意什么？")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("hash")]),s._v(" "),a("p",[s._v("对关键属性的hash值进行位或运算作为hash值")])]),s._v(" "),a("li",[a("p",[s._v("isEqual")]),s._v(" "),a("p",[s._v("==运算符判断是否是同一对象, 因为同一对象必然完全相同")]),s._v(" "),a("p",[s._v("判断是否是同一类型, 这样不仅可以提高判等的效率, 还可以避免隐式类型转换带来的潜在风险")]),s._v(" "),a("p",[s._v("判断对象是否是nil, 做参数有效性检查")]),s._v(" "),a("p",[s._v("各个属性分别使用默认判等方法进行判断")]),s._v(" "),a("p",[s._v("返回所有属性判等的与结果")])])]),s._v(" "),a("h2",{attrs:{id:"_5-id-和-instancetype-有什么区别？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-id-和-instancetype-有什么区别？"}},[s._v("#")]),s._v(" 5.id 和 instanceType 有什么区别？")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("相同点")]),s._v(" "),a("p",[s._v("instancetype 和 id 都是万能指针，指向对象。")])]),s._v(" "),a("li",[a("p",[s._v("不同点：")]),s._v(" "),a("p",[s._v("1.id 在编译的时候不能判断对象的真实类型，instancetype 在编译的时候可以判断对象的真实类型。")]),s._v(" "),a("p",[s._v("2.id 可以用来定义变量，可以作为返回值类型，可以作为形参类型；instancetype 只能作为返回值类型。")])])]),s._v(" "),a("h2",{attrs:{id:"_6-self和super的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-self和super的区别"}},[s._v("#")]),s._v(" 6.self和super的区别")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("self调用自己方法，super调用父类方法")])]),s._v(" "),a("li",[a("p",[s._v("self是类，super是预编译指令")])]),s._v(" "),a("li",[a("p",[s._v("[self class] 和 [super class] 输出是一样的")])]),s._v(" "),a("li",[a("p",[s._v("self和super底层实现原理")]),s._v(" "),a("p",[s._v("1.当使用 self 调用方法时，会从当前类的方法列表中开始找，如果没有，就从父类中再找；")]),s._v(" "),a("p",[s._v("而当使用 super 时，则从父类的方法列表中开始找，然后调用父类的这个方法")]),s._v(" "),a("p",[s._v("2.当使用 self 调用时，会使用 objc_msgSend 函数：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[s._v("id "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("objc_msgSend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id theReceiver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SEL theSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("第一个参数是消息接收者，第二个参数是调用的具体类方法的 selector，后面是 selector 方法的可变参数。以 [self setName:] 为例，编译器会替换成调用 objc_msgSend 的函数调用，其中 theReceiver 是 self，theSelector 是 @selector(setName:)，这个 selector 是从当前 self 的 class 的方法列表开始找的 setName，当找到后把对应的 selector 传递过去。")]),s._v(" "),a("p",[s._v("3.当使用 super 调用时，会使用 objc_msgSendSuper 函数：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[s._v("id "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("objc_msgSendSuper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("objc_super")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("super"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SEL op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("第一个参数是个objc_super的结构体，第二个参数还是类似上面的类方法的selector")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("objc_super")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tid receiver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\tClass superClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"_7-synthesize和-dynamic分别有什么作用？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-synthesize和-dynamic分别有什么作用？"}},[s._v("#")]),s._v(" 7.@synthesize和@dynamic分别有什么作用？")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("@property有两个对应的词，一个是 @synthesize，一个是 @dynamic。如果 @synthesize和 @dynamic都没写，那么默认的就是@syntheszie var = _var;")])]),s._v(" "),a("li",[a("p",[s._v("@synthesize 的语义是如果你没有手动实现 setter 方法和 getter 方法，那么编译器会自动为你加上这两个方法。")])]),s._v(" "),a("li",[a("p",[s._v("@dynamic 告诉编译器：属性的 setter 与 getter 方法由用户自己实现，不自动生成。（当然对于 readonly 的属性只需提供 getter 即可）。假如一个属性被声明为 @dynamic var，然后你没有提供 @setter方法和 @getter 方法，编译的时候没问题，但是当程序运行到 instance.var = someVar，由于缺 setter 方法会导致程序崩溃；或者当运行到 someVar = var 时，由于缺 getter 方法同样会导致崩溃。编译时没问题，运行时才执行相应的方法，这就是所谓的动态绑定。")])])]),s._v(" "),a("h2",{attrs:{id:"_8-typeof-和-typeof，typeof-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-typeof-和-typeof，typeof-的区别"}},[s._v("#")]),s._v(" 8.typeof 和 __typeof，"),a("strong",[s._v("typeof")]),s._v(" 的区别?")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("__typeof __() 和 __typeof() 是 C语言 的编译器特定扩展，因为标准 C 不包含这样的运算符。 标准 C 要求编译器用双下划线前缀语言扩展（这也是为什么你不应该为自己的函数，变量等做这些）")])]),s._v(" "),a("li",[a("p",[s._v("typeof() 与前两者完全相同的，只不过去掉了下划线，同时现代的编译器也可以理解。")])])]),s._v(" "),a("p",[s._v("所以这三个意思是相同的，但没有一个是标准C，不同的编译器会按需选择符合标准的写法。")]),s._v(" "),a("h2",{attrs:{id:"_9-类族"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-类族"}},[s._v("#")]),s._v(" 9.类族")]),s._v(" "),a("p",[s._v("系统框架中有许多类簇，大部分collection类都是类族。例如NSArray与其可变版本NSMutableArray。这样看来实际上有两个抽象基类，一个用于不可变数组，一个用于可变数组。尽管具备公共接口的类有两个，但任然可以合起来算一个类族。不可变的类定义了对所有数组都通用的方法，而可变类则定义了那些只适用于可变数组的方法。两个类共同属于同一个类族，这意味着二者在实现各自类型的数组时可以共用实现代码，此外还能把可变数组复制成不可变数组，反之亦然。")]),s._v(" "),a("h2",{attrs:{id:"_10-struct和class的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-struct和class的区别"}},[s._v("#")]),s._v(" 10.struct和class的区别")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("类： 引用类型（位于栈上面的指针（引用）和位于堆上的实体对象）")])]),s._v(" "),a("li",[a("p",[s._v("结构：值类型（实例直接位于栈中）")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);