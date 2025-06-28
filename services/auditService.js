import { AuditAction } from '../models/auditAction';

export const auditUserAction = async (req, userId, startDateTime) => {
  const log = new AuditAction({
    id_user_login_detail: userId,
    user_action: `${req.method}: ${req.originalUrl}`,
    start_date_time: startDateTime,
    end_date_time: new Date(),
  });

  await log.save();
};
