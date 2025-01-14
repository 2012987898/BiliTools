import { offFunctions } from '../config/configOffFun';
import { apiDelay, logger, Logger } from '../utils';
import { sendMessage } from '@/utils/sendNotify';
import bili, { loginTask } from './index';

export async function dailyTasks<T = unknown>(
  cb?: (...arg: T[]) => Promise<unknown>,
  ...cbArg: T[]
) {
  Logger.pushValue = '';
  try {
    await loginTask();
  } catch (error) {
    logger.error(`登录失败: ${error}`);
    await sendMessage('登录失败', Logger.pushValue);
    return '未完成';
  }

  const biliArr = offFunctions([...Object.values(bili)]);

  for (const asyncFun of biliArr) {
    try {
      await asyncFun();
    } catch (error) {
      logger.error(`${asyncFun.name}失败: ${error}`);
    } finally {
      await apiDelay();
    }
  }

  cb && (await cb(...cbArg));

  await sendMessage('每日完成', Logger.pushValue);
  return '完成';
}
