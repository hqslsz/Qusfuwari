/**
 * 朋友圈/说说数据
 * 在这里添加你的动态内容
 */

export interface Moment {
	id: string;
	content: string;
	published: Date;
	images?: string[];
	tags?: string[];
	location?: string;
	mood?: string;
}

/**
 * 动态数据列表
 * 按时间倒序添加新动态（最新的放在最前面）
 *
 * 字段说明：
 * - id: 唯一标识符，建议使用日期+序号格式，如 "20250122-1"
 * - content: 动态内容，支持换行
 * - published: 发布时间
 * - images: 图片链接数组（可选）
 * - tags: 标签数组（可选）
 * - location: 位置信息（可选）
 * - mood: 心情表情（可选）
 */
/**
 * 图片链接说明：
 * 将图片上传到 Cloudflare R2 后，替换下方的图片链接
 * R2 链接格式通常为: https://your-bucket.r2.dev/path/to/image.jpg
 * 或自定义域名: https://images.yourdomain.com/path/to/image.jpg
 */

export const momentsData: Moment[] = [
	{
		id: "20260122-2",
		content: "测试喵~",
		published: new Date("2025-01-22"),
		images: [
			// 替换为你的 R2 图片链接
			"https://picsum.photos/seed/m1/400/400",
			"https://picsum.photos/seed/m2/400/400",
			"https://picsum.photos/seed/m3/400/400",
			"https://picsum.photos/seed/m4/400/400",
			"https://picsum.photos/seed/m5/400/400",
			"https://picsum.photos/seed/m6/400/400",
			"https://picsum.photos/seed/m7/400/400",
			"https://picsum.photos/seed/m8/400/400",
			"https://picsum.photos/seed/m9/400/400",
		],
		location: "未知",
		tags: ["测试", "九宫格"],
	},
];
