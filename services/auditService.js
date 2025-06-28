import { AuditAction } from '../models/auditAction.js';
import { v4 as uuidv4 } from 'uuid';
import { AuditUserLogin } from '../models/auditUserLogin.js';
import { logger } from '../utils/logger.js';

export const auditLoginUser = async (user_id, login_status) => {
  try {
    const auditLoginUser = new AuditUserLogin({
      id_user_login_detail: user_id,
      session_id: uuidv4(),
      login_status: login_status,
    });

    await auditLoginUser.save();
  } catch (err) {
    logger.error('Error while recording user login audit', err);
  }
};

export const auditUserAction = async (req, userId, startDateTime) => {
  try {
    const log = new AuditAction({
      id_user_login_detail: userId,
      user_action: `${req.method}: ${req.originalUrl}`,
      start_date_time: startDateTime,
      end_date_time: new Date(),
    });

    await log.save();
  } catch (err) {
    logger.error('Error while recording user action audit', err);
  }
};
