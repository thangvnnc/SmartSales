"use strict";
const BaseError = require("./BaseError");
class Error extends BaseError{}

// Users
Error.CODE_ERR_COF_PASSWORD      = 0x00100006;
Error.CODE_ERR_SEND_MAIL         = 0x00100007;
Error.ERR_COF_PASSWORD      = (msg)     => { return ResError.from(Error.CODE_ERR_COF_PASSWORD, null, "Lỗi xác nhận mật khẩu", msg)};
Error.ERR_SEND_MAIL         = (msg)     => { return ResError.from(Error.CODE_ERR_SEND_MAIL, null, "Lỗi gửi mail", msg)};

module.exports = Error;
