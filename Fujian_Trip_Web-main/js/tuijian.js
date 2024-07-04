// script.js

// 等待文档加载完成后执行
document.addEventListener("DOMContentLoaded", function() {
    // 获取搜索按钮和输入框
    const searchButton = document.querySelector(".form-button img");
    const searchInput = document.querySelector(".form-input input");

    // 为搜索按钮添加点击事件处理函数
    searchButton.addEventListener("click", function(event) {
        event.preventDefault(); // 阻止默认的表单提交行为
        performSearch();
    });

    // 为搜索输入框添加键盘按键事件处理函数
    searchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") { // 检查是否按下回车键
            event.preventDefault(); // 阻止默认的表单提交行为
            performSearch();
        }
    });

    // 搜索功能
    function performSearch() {
        const query = searchInput.value.trim(); // 获取输入框的值并去除空格

        if (query) {
            // 模拟搜索功能，可以根据需要替换为实际的搜索逻辑
            alert("搜索关键词: " + query);
            // 在这里添加实际的搜索逻辑，例如跳转到搜索结果页面
            // window.location.href = "search.html?query=" + encodeURIComponent(query);
        } else {
            alert("请输入搜索关键词");
        }
    }

    // 示例：为每个景点条目添加点击事件
    const sceneryItems = document.querySelectorAll(".scenerylist li a");
    sceneryItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            event.preventDefault(); // 阻止默认的链接跳转行为
            const sceneryName = this.querySelector("h3").textContent;
            alert("点击了景点: " + sceneryName);
            // 在这里添加实际的跳转逻辑，例如跳转到景点详情页面
            // window.location.href = "scenery_detail.html?name=" + encodeURIComponent(sceneryName);
        });
    });

    // 分类功能
    const categoryLinks = document.querySelectorAll(".sceneryclass a");
    categoryLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // 阻止默认的链接跳转行为
            const category = this.textContent;
            alert("选择的分类: " + category);
            // 在这里添加实际的分类过滤逻辑，例如显示相应的景点列表
            filterScenery(category);
        });
    });

    function filterScenery(category) {
        const allItems = document.querySelectorAll(".scenerylist li");

        allItems.forEach(function(item) {
            const itemCategory = item.querySelector("h3").textContent;

            if (category === "所有" || itemCategory.includes(category)) {
                item.style.display = "block"; // 显示匹配的景点
            } else {
                item.style.display = "none"; // 隐藏不匹配的景点
            }
        });
    }
});
