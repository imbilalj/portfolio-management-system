import { v4 as uuidv4 } from "uuid";
import { AuditUserLogin } from "../models/auditUserLogin.js";

export const auditLoginUser = async (user_id, login_status) => {
  try {
    const auditLoginUser = new AuditUserLogin({
      id_user_login_detail: user_id,
      session_id: uuidv4(),
      login_status: login_status,
    });

    await auditLoginUser.save();
  } catch (err) {
    console.error("=================", err);
  }
};
