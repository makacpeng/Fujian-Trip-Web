/*
 size为每页显示的个数
 page是显示的总页数 向上取整(一个也会占一页)
 pagerCount为要显示的数字按钮的个数 */
const scenery = [
	{ imgSrc: 'img/f1.png', title: '厦门鼓浪屿',
		region: "厦门", description: '素有“海上花园”之誉，岛上气候宜人，无车马喧， 处处鸟语花香' },
	{ imgSrc: 'img/f2.png', title: '武夷山',
		region: "福州", description: '中国著名的风景旅游区和避暑胜地，素有“碧水丹山”“奇秀甲东南”之美誉' },
	{ imgSrc: 'img/f3.png', title: '太姥山',
		region: "宁德", description: '世界地质公园、 国家级风景名胜区、 国家自然遗产，有“海上仙都”之称' },
	{ imgSrc: 'img/f4.png', title: '永定土楼',
		region: "龙岩", description: '素有“土楼之王”“国之瑰宝”之美誉，规模宏大、设计科学、 布局合理' },
	{ imgSrc: 'img/f5.png', title: '白水洋',
		region: "宁德", description: '融溪、峰、岩、瀑、洞、湖等景观为一体，群峰竞秀、百瀑争流、万木葱茏' },
	{ imgSrc: 'img/f6.png', title: '湄洲岛',
		region: "莆田", description: '由妈祖祖庙、祖庙山、湄屿潮音、牛头尾沙滩等重要自然景观和人文景观组成' },
	{ imgSrc: 'img/f7.png', title: '冠豸山',
		region: "龙岩", description: '平地拔起，外直中虚、山清水秀，与武夷山并称为“北夷南豸山，丹霞双绝' },
	{ imgSrc: 'img/f8.png', title: '泰宁风景名胜区',
		region: "三明", description: '以水上丹霞、峡谷群落、洞穴奇观、原始生态为主要景观特点' },
	{ imgSrc: 'img/f9.png', title: '古田旅游区',
		region: "龙岩", description: '古田民俗文化异彩纷呈，红军戏台、星火燎原蜡像馆、客家乡村' },
	{ imgSrc: 'img/f10.png', title: '泰宁大金湖',
		region: "三明", description: '具有幽、秀、奇、绝的独特风格和山青、水秀、石美、洞奇、峰怪特点' },
	{ imgSrc: 'img/f11.png', title: '清源山',
		region: "泉州", description: '泉州最值得爬的山，老子的雕塑，雕刻的栩栩如生，且有千的历史' },
	{ imgSrc: 'img/f12.png', title: '海坛岛',
		region: "福州", description: '东海仙境、石牌洋、海坛天神、南寨石林、三十六脚湖、仙人井' },
	{ imgSrc: 'img/f13.png', title: '三坊七巷',
		region: "福州", description: '白墙黛瓦的建筑，幽静古朴的街巷，感受岁月沧桑' },
	{ imgSrc: 'img/f14.png', title: '平潭岛',
		region: "福州", description: '平潭岛，是中国最美海岛，海水湛蓝，海风微醺' },
	{ imgSrc: 'img/f15.png', title: '福州国家森林公园',
		region: "福州", description: '绝美的森林自然风光，植被繁茂苍翠，空气清新' },
	{ imgSrc: 'img/f16.png', title: '福州西湖公园',
		region: "福州", description: '西湖栈道走一走，环境清幽舒适，感受古典园林的雅致，惬意悠闲' },
	{ imgSrc: 'img/f16.png', title: '福州西湖公园',
		region: "福州", description: '西湖栈道走一走，环境清幽舒适，感受古典园林的雅致，惬意悠闲' },
	{ imgSrc: 'img/f16.png', title: '福州西湖公园',
		region: "福州", description: '西湖栈道走一走，环境清幽舒适，感受古典园林的雅致，惬意悠闲' },
	{ imgSrc: 'img/f16.png', title: '福州西湖公园',
		region: "福州", description: '西湖栈道走一走，环境清幽舒适，感受古典园林的雅致，惬意悠闲' },
	{ imgSrc: 'img/f16.png', title: '福州西湖公园',
		region: "福州", description: '西湖栈道走一走，环境清幽舒适，感受古典园林的雅致，惬意悠闲' },
	{ imgSrc: 'img/f16.png', title: '福州西湖公园',
		region: "福州", description: '西湖栈道走一走，环境清幽舒适，感受古典园林的雅致，惬意悠闲' },
	{ imgSrc: 'img/f16.png', title: '福州西湖公园',
		region: "福州", description: '西湖栈道走一走，环境清幽舒适，感受古典园林的雅致，惬意悠闲' },
	{ imgSrc: 'img/f16.png', title: '福州西湖公园',
		region: "福州", description: '西湖栈道走一走，环境清幽舒适，感受古典园林的雅致，惬意悠闲' },
	{ imgSrc: 'img/f16.png', title: '福州西湖公园',
		region: "福州", description: '西湖栈道走一走，环境清幽舒适，感受古典园林的雅致，惬意悠闲' },
	{ imgSrc: 'img/f16.png', title: '福州西湖公园',
		region: "福州", description: '西湖栈道走一走，环境清幽舒适，感受古典园林的雅致，惬意悠闲' },
	{ imgSrc: 'img/f16.png', title: '福州西湖公园',
		region: "福州", description: '西湖栈道走一走，环境清幽舒适，感受古典园林的雅致，惬意悠闲' },

	],
	size = 6,
	page = Math.ceil(scenery.length / size), //向上取整进行显示
	pagerCount = 7;


let current = 1;// 当前选中的页数
let currentRegion = "所有";// 当前筛选


document.querySelectorAll('.sceneryclass li').forEach(item => {
	item.addEventListener('click', function() {
		currentRegion = this.querySelector('a').textContent;
		current = 1; // 重置当前页数为1
		document.querySelectorAll('.sceneryclass li a').forEach(li => {
			li.classList.remove('selected');
		});
		this.querySelector('a').classList.add('selected');
		createPagination();
	});
});

// 等待文档加载完成后执行
document.addEventListener("DOMContentLoaded", function() {
	// 获取搜索按钮和输入框
	const searchButton = document.querySelector(".form-button img");
	const searchInput = document.querySelector(".form-input input");

	// 为搜索按钮添加点击事件处理函数
	searchButton.addEventListener("click", function (event) {
		event.preventDefault(); // 阻止默认的表单提交行为
		performSearch();
	});

	// 为搜索输入框添加键盘按键事件处理函数
	searchInput.addEventListener("keypress", function (event) {
		if (event.key === "Enter") { // 检查是否按下回车键
			event.preventDefault(); // 阻止默认的表单提交行为
			performSearch();
		}
	});

	// 搜索功能
	function performSearch() {
		const query = searchInput.value.trim(); // 获取输入框的值并去除空格

		if (query) {
			current = 1; // 重置当前页数为1
			currentRegion = "所有"; // 重置当前筛选为“所有”
			_pagination.style.display = 'none';
			document.querySelectorAll('.sceneryclass li a').forEach(li => {
				li.classList.remove('selected');
			});
			filteredSearch =
				scenery.filter(item => item.title.toLowerCase().includes(query)); // 筛选标题包含搜索词的项目
			// 每次遍历新内容首先清空
			_content.innerHTML = "";
			const totalItems = filteredSearch.length;
			const totalPages = Math.ceil(totalItems / size);
			if (totalItems === 0) {
				// 如果筛选结果为空，显示无结果矢量图
				const noResults = document.createElement("div");
				noResults.className = "no-results";
				noResults.innerHTML = `<img src="img/f0.png" alt="无结果" style="max-width: 100%; height: auto;">`;
				_content.appendChild(noResults);
				return totalPages;
			}
			// 遍历计算方法 当前为第1页 一页6个 第一页的数据就是 0 - 6(不包含) 第二页为  6- 12(不包含) 以此类推
			filteredSearch.slice((current - 1) * size, current * size).forEach(item => {
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
			});
		} else {
			alert("请输入搜索关键词");
		}
	}
})


// 显示内容列表
const _content = document.querySelector(".scenerylist");
const showContent = () => {
	// 每次遍历新内容首先清空
	_pagination.style.display = 'flex';
	_content.innerHTML = "";
	let filteredScenery = scenery;
	if (currentRegion !== "所有") {
		filteredScenery = scenery.filter(item => item.region === currentRegion);
	}
	const totalItems = filteredScenery.length;
	const totalPages = Math.ceil(totalItems / size);

	if (totalItems === 0) {
		// 如果筛选结果为空，显示无结果矢量图
		const noResults = document.createElement("div");
		noResults.className = "no-results";
		noResults.innerHTML = `<img src="img/f0.png" alt="无结果" style="max-width: 100%; height: auto;">`;
		_content.appendChild(noResults);
		return totalPages;
	}


	// 遍历计算方法 当前为第1页 一页6个 第一页的数据就是 0 - 6(不包含) 第二页为  6- 12(不包含) 以此类推
	filteredScenery.slice((current - 1) * size, current * size).forEach(item => {
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
	});

	return totalPages;
};

// 创建分页列表
const _pagination = document.querySelector(".pagination");
const createPagination = () => {

	const totalPages = showContent();

	// 刚开始就要有左按钮
	// 当前页数不为1就为可点击态
	let lis = `
	<li class="material-icons page-btn page-btn-prev ${
		current !== 1 ? "isClick" : "disabled"
	}">
	  keyboard_arrow_left
  </li>`;

	if (current < 1 || current > totalPages) {
		throw `current 参数最小值为1 最大值为${totalPages}`;
		// 当当前页数小于1或者大于总页数了就抛出错误
	} else if (pagerCount < 5) {
		throw "pagerCount 参数最小值为5";
		// 小于5 分页无意义
	} else if (totalPages <= pagerCount) {
		// 如果总页数小于了要显示的数字按钮个数 就直接遍历了 不需要显示省略按钮
		for (let i = 1; i <= totalPages; i++) {
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
		} else if (current <= totalPages && current > totalPages - (pagerCount - 2)) {
			beforeNumber = totalPages - (pagerCount - 2);
			afterNumber = totalPages;
		}

		for (let i = beforeNumber; i <= afterNumber; i++) {
			lis += `<li class="page-number ${
				i === current ? "active" : ""
			}">${i}</li>`;
		}
	}
	// 显示右省略按钮
	if (current <= totalPages - (pagerCount - 2)) {
		lis += `<li class="material-icons page-dot page-dot-next"></li>
                <li class="page-number ${current === totalPages ? "active" : ""}">${totalPages}</li>`;
	}

	// 最后拼接右按钮
	// 当前页数不是总页数就为可点击态
	lis += `
	<li class="material-icons page-btn page-btn-next ${
		current !== totalPages ? "isClick" : "disabled"
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