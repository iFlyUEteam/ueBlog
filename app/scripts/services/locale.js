// 富文本编辑器文字信息
BlogServices.service('locale', function() {
	this.editorMsg = {
		font_styles: {
			normal: "正文",
			h1: "标题 1",
			h2: "标题 2",
			h3: "标题 3",
			h4: "标题 4"
		},
		emphasis: {
			bold: "粗体",
			italic: "斜体",
			underline: "下划线"
		},
		lists: {
			unordered: "项目符号",
			ordered: "编号",
			outdent: "减少缩进",
			indent: "增加缩进"
		},
		link: {
			insert: "插入链接",
			cancel: "取消"
		},
		image: {
			insert: "插入图片",
			cancel: "取消"
		},
		html: {
			edit: "HTML代码"
		},
		colours: {
			black: "黑色",
			silver: "银色",
			gray: "灰色",
			maroon: "赤红色",
			red: "红色",
			purple: "紫色",
			green: "绿色",
			olive: "橄榄色",
			navy: "深蓝色",
			blue: "蓝色",
			orange: "橙色"
		}
	}
})