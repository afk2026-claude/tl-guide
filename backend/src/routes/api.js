import { Router } from 'express';
import {
  analyzeBD,
  scoreBD
} from '../engine/bdEngine.js';

export const apiRouter = Router();

// 健康检查
apiRouter.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

// BD 分析
apiRouter.post('/analyze', (req, res) => {
  try {
    const input = req.body;
    const suggestions = analyzeBD(input);
    const score = scoreBD(input);
    res.json({ suggestions, score });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
