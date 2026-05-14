import express from 'express';
import cors from 'cors';
import { apiRouter } from './routes/api.js';
import { adminRouter } from './routes/admin.js';
import { trackVisit } from './middleware/visitTracker.js';

const app = express();
const PORT = process.env.PORT || 3001;

// 允许来自任意来源（生产环境下可限定具体域名）
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST']
}));
app.use(express.json());

// 访问追踪
app.use('/api', trackVisit);

// 路由
app.use('/api', apiRouter);
app.use('/api/admin', adminRouter);

app.listen(PORT, () => {
  console.log(`🔥 TL Guide API 已启动: http://localhost:${PORT}`);
});
