"use strict";
const ResError = require("./ResError");
class Error extends ResError{}

// Base
Error.CODE_OK                    = 0x00000000;
Error.CODE_ERR_FIELD_NULL        = 0x00000001;
Error.CODE_ERR_EXECUTE_DB        = 0x00000002;
Error.CODE_ERR_EXEC_DB_EXIST     = 0x00000003;
Error.CODE_ERR_EXEC_DB_NOT_EXIST = 0x00000004;
Error.CODE_ERR_API_AUTH_USER     = 0x00000005;
Error.CODE_ERR_UNKNOWN           = 0xffffffff;
Error.OK 	                = (res)     => { return ResError.from(Error.CODE_OK, res, "Thành công")};
Error.ERR_FIELD_NULL        = (msg)     => { return ResError.from(Error.CODE_ERR_FIELD_NULL, null, "Lỗi field [{0}] không có dữ liệu", msg)};
Error.ERR_EXECUTE_DB        = (msg)     => { return ResError.from(Error.CODE_ERR_EXECUTE_DB, null, "Lỗi field [{0}] không thêm dữ liêu", msg)};
Error.ERR_EXEC_DB_EXIST     = (msg)     => { return ResError.from(Error.CODE_ERR_EXEC_DB_EXIST, null, "Lỗi [{0}] đã tồn tại", msg)};
Error.ERR_EXEC_DB_NOT_EXIST = (msg)     => { return ResError.from(Error.CODE_ERR_EXEC_DB_NOT_EXIST, null, "Lỗi [{0}] không tồn tại", msg)};
Error.ERR_API_AUTH_USER     = (msg)     => { return ResError.from(Error.CODE_ERR_API_AUTH_USER, null, "Lỗi không có session", msg)};
Error.ERR_UNKNOWN           = (msg)     => { return ResError.from(Error.CODE_ERR_UNKNOWN, null, "Lỗi #FFFFFFFF", msg)};

module.exports = Error;
