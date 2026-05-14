// API 基础地址
// 开发环境通过 Vite proxy 转发到后端
// 生产环境使用 VITE_API_URL 环境变量指向 Render 后端
export const API_BASE = import.meta.env.VITE_API_URL || '';
