import type { Friend } from "./types/config";

/**
 * 友链分类配置
 * 每个分类包含标题、图标和友链列表
 */
export interface FriendCategory {
	title: string;
	icon: string;
	friends: Friend[];
}

/**
 * 友链配置
 */
export const friendCategories: FriendCategory[] = [
	{
		title: "dalao们",
		icon: "🥂",
		friends: [
			{
				name: "二叉树树",
				url: "https://blog.acofork.com/",
				avatar: "https://q2.qlogo.cn/headimg_dl?dst_uin=2726730791&spec=0",
				bio: "Protect What You Love.",
			},
			{
				name: "EveSunMaple",
				url: "https://www.saroprock.com/",
				avatar: "https://www.saroprock.com/favicon.ico",
				bio: "サン猫の時間漂流 - 高三学生，热爱技术",
			},
			{
				name: "Async Area",
				url: "https://async-area.com/",
				avatar: "https://async-area.com/head.png",
				bio: "Async Area",
			},
		],
	},
	{
		title: "框架 & 工具",
		icon: "🛠️",
		friends: [
			{
				name: "Fuwari",
				url: "https://github.com/saicaca/fuwari",
				avatar: "https://avatars.githubusercontent.com/u/25301741?v=4",
				bio: "优雅的 Astro 博客主题",
			},
			{
				name: "Astro",
				url: "https://astro.build/",
				avatar: "https://astro.build/favicon.svg",
				bio: "The web framework for content-driven sites",
			},
		],
	},
];

/**
 * 获取所有友链（扁平化）
 */
export const getAllFriends = (): Friend[] => {
	return friendCategories.flatMap((category) => category.friends);
};





