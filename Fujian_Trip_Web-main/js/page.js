/*
 size为每页显示的个数
 page是显示的总页数 向上取整(一个也会占一页)
 pagerCount为要显示的数字按钮的个数 */
const scenery = [
	{ imgSrc: 'img/f1.png', title: '厦门鼓浪屿', description: '素有“海上花园”之誉，岛上气候宜人，无车马喧， 处处鸟语花香' },
	{ imgSrc: 'img/f2.png', title: '武夷山', description: '中国著名的风景旅游区和避暑胜地，素有“碧水丹山”“奇秀甲东南”之美誉' },
	{ imgSrc: 'img/f3.png', title: '太姥山', description: '世界地质公园、 国家级风景名胜区、 国家自然遗产，有“海上仙都”之称' },
	{ imgSrc: 'img/f4.png', title: '永定土楼', description: '素有“土楼之王”“国之瑰宝”之美誉，规模宏大、设计科学、 布局合理' },
	{ imgSrc: 'img/f5.png', title: '白水洋', description: '融溪、峰、岩、瀑、洞、湖等景观为一体，群峰竞秀、百瀑争流、万木葱茏' },
	{ imgSrc: 'img/f6.png', title: '湄洲岛', description: '由妈祖祖庙、祖庙山、湄屿潮音、牛头尾沙滩等重要自然景观和人文景观组成' },
	{ imgSrc: 'img/f7.png', title: '冠豸山', description: '平地拔起，外直中虚、山清水秀，与武夷山并称为“北夷南豸山，丹霞双绝' },
	{ imgSrc: 'img/f8.png', title: '泰宁风景名胜区', description: '以水上丹霞、峡谷群落、洞穴奇观、原始生态为主要景观特点' },
	{ imgSrc: 'img/f9.png', title: '古田旅游区', description: '古田民俗文化异彩纷呈，红军戏台、星火燎原蜡像馆、客家乡村' },
	{ imgSrc: 'img/f10.png', title: '泰宁大金湖', description: '具有幽、秀、奇、绝的独特风格和山青、水秀、石美、洞奇、峰怪特点' },
	{ imgSrc: 'img/f11.png', title: '清源山', description: '泉州最值得爬的山，老子的雕塑，雕刻的栩栩如生，且有千的历史' },
	{ imgSrc: 'img/f12.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f13.png', title: '三坊七巷', description: '白墙黛瓦的建筑，幽静古朴的街巷，感受岁月沧桑' },
	{ imgSrc: 'img/f14.png', title: '平潭岛', description: '平潭岛，是中国最美海岛，海水湛蓝，海风微醺' },
	{ imgSrc: 'img/f15.png', title: '福州国家森林公园', description: '绝美的森林自然风光，植被繁茂苍翠，空气清新' },
	{ imgSrc: 'img/f16.png', title: '福州西湖公园', description: '西湖栈道走一走，环境清幽舒适，感受古典园林的雅致，惬意悠闲' },
	{ imgSrc: 'img/f17.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f18.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f19.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f20.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f21.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f22.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f23.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f24.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f25.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f26.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f27.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f28.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f29.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f30.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f31.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f32.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f33.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f34.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f35.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f36.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f37.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f38.png', title: '海坛岛', description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	],
	size = 6,
	page = Math.ceil(scenery.length / size), //向上取整进行显示
	pagerCount = 5;

// 当前选中的页数
let current = 1;

// 显示内容列表
const _content = document.querySelector(".scenerylist");
const showContent = () => {
	// 每次遍历新内容首先清空
	_content.innerHTML = "";
	scenery.forEach((item, index) => {
		// 遍历计算方法 当前为第1页 一页6个 第一页的数据就是 0 - 6(不包含) 第二页为  6- 12(不包含) 以此类推
		if (index >= (current - 1) * size && index < current * size) {
			// 每遍历一个创建一个li元素
			const li = document.createElement("li");
			// li元素添加内容
			li.innerHTML = `
				<a href="#">
					<img src="${item.imgSrc}" alt="${item.title}">
					<div>
						<h3>${item.title}</h3>
						<p>${item.description}</p>
					</div>
				</a>`;
			// 添加到列表元素中
			_content.appendChild(li);
		}
	});

};

// 创建分页列表
const _pagination = document.querySelector(".pagination");
const createPagination = () => {
	showContent();

	// 刚开始就要有左按钮
	// 当前页数不为1就为可点击态
	let lis = `
	<li class="material-icons page-btn page-btn-prev ${
		current !== 1 ? "isClick" : "disabled"
	}">
	  keyboard_arrow_left
  </li>`;

	if (current < 1 || current > page) {
		throw `current 参数最小值为1 最大值为${page}`;
		// 当当前页数小于1或者大于总页数了就抛出错误
	} else if (pagerCount < 5) {
		throw "pagerCount 参数最小值为5";
		// 小于5 分页无意义
	} else if (page <= pagerCount) {
		// 如果总页数小于了要显示的数字按钮个数 就直接遍历了 不需要显示省略按钮
		for (let i = 1; i <= page; i++) {
			lis += `<li class="page-number ${
				i === current ? "active" : ""
			}">${i}</li>`;
		}
	} else {
		// 定义两个参数
		// 用来保存当前选中分页前后的显示数字按钮(不包括省略前后的和选中的) 刚好是以下计算方法
		// 有问题 pagerCount 为偶数 显示小数点 将beforeNumber向下取整就可以了
		let beforeNumber = Math.floor(current - (pagerCount - 3) / 2),
			afterNumber = current + (pagerCount - 3) / 2;
		// 显示左省略按钮
		if (current >= pagerCount - 1) {
			lis += `<li class="page-number">1</li>
			<li class="material-icons page-dot page-dot-prev"></li>`;
		}
		// 当页数为1 将beforeNumber改为1 afterNumber为除去省略号后面的一个按钮
		// 解决current == page
		// 点击前三个应该不分页 到 4(针对pagerCount参数来说) 了该分页 求得current == page
		if (current >= 1 && current < pagerCount - 1) {
			beforeNumber = 1;
			afterNumber = pagerCount - 1;
		} else if (current <= page && current > page - (pagerCount - 2)) {
			beforeNumber = page - (pagerCount - 2);
			afterNumber = page;
		}

		for (let i = beforeNumber; i <= afterNumber; i++) {
			lis += `<li class="page-number ${
				i === current ? "active" : ""
			}">${i}</li>`;
		}
	}
	// 显示右省略按钮
	if (current <= page - (pagerCount - 2)) {
		lis += `
		<li class="material-icons page-dot page-dot-next"></li>
		<li class="page-number">${page}</li>`;
	}

	// 最后拼接右按钮
	// 当前页数不是总页数就为可点击态
	lis += `
	<li class="material-icons page-btn page-btn-next ${
		current !== page ? "isClick" : "disabled"
	}">
	  keyboard_arrow_right
  </li>`;
	_pagination.innerHTML = lis;

	// 点击数字按钮
	const _pageNumbers = document.querySelectorAll(".page-number");
	_pageNumbers.forEach((item) => {
		item.addEventListener("click", () => {
			// item.innerHTML为字符串 需要转为数字
			current = parseInt(item.innerHTML);
			createPagination();
		});
	});

	// 下一页
	const _pageBtnNext = document.querySelector(".page-btn-next");
	_pageBtnNext.addEventListener("click", () => {
		if (current !== page) {
			current++;
			createPagination();
		}
	});

	// 上一页
	const _pageBtnPrev = document.querySelector(".page-btn-prev");
	_pageBtnPrev.addEventListener("click", () => {
		if (current !== 1) {
			current--;
			createPagination();
		}
	});

	// 前进 pagerCount - 2 格
	const _pageDotNext = document.querySelector(".page-dot-next");
	// 因为省略按钮会时隐时现 直接绑定会报找不到元素错误
	// ?. 就可以了 只有元素存在再去绑定后面的事件
	_pageDotNext?.addEventListener("click", () => {
		current += pagerCount - 2;
		createPagination();
	});

	// 后退 pagerCount - 2 格
	const _pageDotPrev = document.querySelector(".page-dot-prev");
	_pageDotPrev?.addEventListener("click", () => {
		current -= pagerCount - 2;
		createPagination();
	});
};
createPagination();